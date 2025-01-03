import MeetupList from "@/meetups/MeetupList";
import { MongoClient } from "mongodb"; // mongoClient가 서버쪽에서만 사용되면 서버측 번들에만 포함됨, 클라쪽에는 포함 X -> 번들 사이즈 & 보안에 좋음
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

//getStaticProps ->빌드 프로세스에서 사전 렌더링
export async function getStaticProps() {
  //never execute on the client-side, 클라이언트에서 실행되지 않음
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vvwxfmp.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
