/** @format */

"use client";

import { SearchInput } from "./SearchInput";

export function SearchPage() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get("query");
        console.log(query);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SearchInput />
            </form>
        </div>
    );
}
