import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    if (
      title.length === 0 ||
      image.length === 0 ||
      address.length === 0 ||
      description.length === 0
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMeetings = {
      title,
      image,
      address,
      description,
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bg1k4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("meetings").insertOne(newMeetings);
      newMeetings.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing meeting failed!" });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored meeting!",
      data: newMeetings,
    });
  }
}

export default handler;
