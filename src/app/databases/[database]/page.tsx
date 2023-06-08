/** @format */

import { connectToDB } from "@/lib/db";
import { DatabaseSelector } from "../../components/DatabaseSelector";
import clientPromise from "@/lib/mongodb";

interface PageProps {
    params: {
        database: string;
    };
    searchParams: {
        // [key: string]: string | string[] | undefined
    };
}

export function generateMetadata({ params: { database } }: PageProps) {
    return {
        title: `Database: ${database}`,
        description: `Database collections for: ${database}`,
    };
}

export default async function Page({ params: { database } }: PageProps) {
    // connect to the database and get all its collections
    const db = await connectToDB(database);
    const collections = await db.listCollections().toArray();

    const client = await clientPromise;
    const dbs = client.db().admin().listDatabases();
    const dbNames = (await dbs).databases.map((db) => db.name);
    return (
        <div className="flex flex-col justify-center items-center align-center ">
            <DatabaseSelector dbNames={dbNames} />
            <div className="flex flex-col items-center justify-between p-12 gap-8">
                <h1>Database: {database}</h1>
                <h2>Collections:</h2>
                <ul>
                    {collections.map((collection) => (
                        <li key={collection.name}>{collection.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
