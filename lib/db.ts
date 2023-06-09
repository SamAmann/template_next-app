import { MongoClient, Db } from 'mongodb';
import clientPromise from '@/lib/mongodb';


export async function connectToDB(dbName?: string): Promise<Db | undefined> {
    try {
        const client = await clientPromise;
        const db = client.db(dbName);
        return db;
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

export async function getMongoClient() {
    try {
        const client = await clientPromise;
        return client;
    } catch (e) {
        console.error(e);
        return null;
    }
}

    

// Then you can execute queries against your database like so:
// db.find({}) or any of the MongoDB Node Driver commands

// export default async (req, res) => {
//    try {
//        const client = await clientPromise;
//        const db = client.db("sample_mflix");

//        const movies = await db
//            .collection("movies")
//            .find({})
//            .sort({ metacritic: -1 })
//            .limit(10)
//            .toArray();

//        res.json(movies);
//    } catch (e) {
//        console.error(e);
//    }
// };

