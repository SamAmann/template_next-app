/** @format */

"use client";

import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Page() {
    return (
        <footer className="flex items-center justify-center p-4 border-t gap-4">
            <Link
                href="https://github.com/SamAmann"
                target="_blank"
                className="flex items-center justify-center gap-4 hover:font-bold hover:bg-slate-100 p-4 rounded-md border-slate-100 border-2"
            >
                <Icons.gitHub className="h-8 w-8 hover:animate-spin" />
                Sam&apos;s Work
            </Link>
        </footer>
    );
}
