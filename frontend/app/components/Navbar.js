import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex flex-col items-center justify-between pt-10">
            <ul className="flex">
                <Link href="/">
                    <li className="mr-4 mb-8 p-5 pt-3 text-base">Home</li>
                </Link>
                <Link href="/space_weather">
                    <li className="mr-4 mb-8 p-5 pt-3 text-base">Space Weather</li>
                </Link>
                <Link href="/about">
                    <li className="mr-4 mb-8 p-5 pt-3 text-base">About</li>
                </Link>
                <Link href="/blog">
                    <li className="mr-4 mb-8 p-5 pt-3 text-base">News</li>
                </Link>
                <Link href="/contact">
                    <li className="mr-4 mb-8 p-5 pt-3 text-base">Chat</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
