/** @format */

"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 h-20 border-b">
            <Link href="/" className="font-bold">
                <h1 className="font-bold">Sam&apos;s App Template</h1>
            </Link>
        </header>
    );
}
