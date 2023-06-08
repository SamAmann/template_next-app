/** @format */

import "../../styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Template Next/MongoDB",
    description: "A template for Sam's Apps",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} min-h-screen flex flex-col justify-between`}
            >
                <Header />
                <div className="flex-grow flex items-center">{children}</div>
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
