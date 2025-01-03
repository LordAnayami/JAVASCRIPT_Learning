import MeetupItem from "@/meetups/MeetupItem";

function MeetupList({ meetups }) {
  return (
    <ul>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          imageUrl={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
