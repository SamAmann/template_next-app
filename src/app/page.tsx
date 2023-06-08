/** @format */

import { DatabaseSelector } from "./components/DatabaseSelector";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";

type PageProps = {
    isConnected: boolean;
    dbNames: string[];
};

// Server side pages (like this one) are cached by default. This means that any async data
// will only be fetched once, and then the page will be served from the cache on subsequent
// requests. This is great for performance, but it can be problematic if you need to fetch
// new data on every request.
// To disable caching, you can set the `revalidate` property to `0`:
export const revalidate = 0;

// Or you can set the cache strategy and next revalidation for each fetch INSIDE the page:
// export async function Page() {
//     const response = await fetch("https://api.github.com/repos/vercel/next.js",
//         {
//             cache: "no-cache"/"no-store"/"reload"/"force-cache"/"only-if-cached",
//             next: 0,
//         }
//     );
//     ...rest of code...

export default async function Home() {
    const client = await clientPromise;
    const dbs = client.db().admin().listDatabases();
    const dbNames = (await dbs).databases.map((db) => db.name);
    const isConnected = client ? true : false;
    return (
        <div className="flex flex-col p-8 gap-8">
            {isConnected ? (
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-success">Congratulations!</h1>
                        <p>You are now connected to the MongoDB database.</p>
                    </div>
                    <DatabaseSelector dbNames={dbNames} />
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <h1 className="text-error">Sorry!</h1>
                    <p>It seems there are some connection problems...</p>
                    <p>Check your .env file.</p>
                    <Button asChild className="hover:bg-slate-500">
                        <Link href="/">Try again</Link>
                    </Button>
                </div>
            )}
            <Link href="/search">Search</Link>
        </div>
    );
}
