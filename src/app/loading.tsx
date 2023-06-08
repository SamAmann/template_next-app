/** @format */

import { Icons } from "@/components/icons";

export default async function Page() {
    return (
        <div className="flex flex-col items-center justify-between p-12 gap-8">
            <h1>Connecting to database...</h1>
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        </div>
    );
}
