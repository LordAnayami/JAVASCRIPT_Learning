import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bg1k4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  let client = await MongoClient.connect(connectionString);

  const db = client.db();
  const meetupCollection = db.collection("meetings");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bg1k4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  let client = await MongoClient.connect(connectionString);

  const db = client.db();
  const meetupCollection = db.collection("meetings");
  const meetups = await meetupCollection.find().toArray();
  const id = new ObjectId(meetupId);
  const selectedMeetup = await meetupCollection.findOne({
    _id: id,
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
