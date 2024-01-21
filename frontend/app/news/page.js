"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar_n";

const Blog = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/news").then((a) => {
            return a.json()
        }).then((parsed) => {
            setBlogs(parsed)
        })
    }, [])
    return (
        <div className="bg-[url('https://cdn.pixabay.com/photo/2016/06/17/17/06/saturn-1463606_960_720.jpg')] bg-cover">
            <Navbar />
            <main className="flex flex-col text-black bg-transparent p-2 text-semibold">
                <h1 className="text-5xl flex items-center justify-center p-10">Articles</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-fit">
                    {Blogs.map((article) => {
                        return (
                            <div key={article.id} className="border-solid border-2 border-white rounded-lg border-spacing-4 p-5">
                                <Link href={`${article.url}`}>
                                    <h2 className="font-bold">{article.title}</h2>
                                    <p className="max-w-4xl">{article.summary}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </main >
        </div >
    );
};

export default Blog;
