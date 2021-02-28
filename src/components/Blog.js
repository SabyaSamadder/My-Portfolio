import React, { useEffect, useState} from "react";
import sanityClient from "../client";

export default function Blog() {

    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "blog"]{
            title,
            date,
            description,
            link,
            tags
        }`).then((data) => setBlogData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-8">
        <section className="container mx-auto">
            <h1 className="text-4xl flex mytext">My Technical Blogs</h1>
            <h2 className="text-lg text-gray-600 flex mb-8">
                This Blogs are published on www.geeksforgeeks.org
            </h2>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogData && blogData.map((blog, index) =>(
                <article className="relative rounded-lg shadow-xl bg-white p-16">
                    <h3 className="text-gray-800 text-2xl font-bold mb-2 hover:text-blue-600" key={index}>
                        <a href={blog.link}
                            alt={blog.title}
                            target="_blank"
                            rel="noopener noreferrer">
                                {blog.title}
                            </a>
                    </h3>
                    <div className="text-gray-500 text-xs">
                        <span>
                            <strong className="font-bold"> Written on</strong>:{" "}
                            {new Date(blog.date).toLocaleDateString()}
                        </span>
                        <span> 
                            <strong className="font-bold"> Tags</strong>:{" "}
                            {blog.tags}
                        </span>
                        <p className="my-2 text-lg text-gray-700 leading-relaxed">
                            {blog.description}
                        </p>
                        <a href={blog.link} rel="noopener noreferrer" 
                           target="_blank" 
                           className="text-blue-500 font-bold hover:underline hover:text-blue-300">
                            Preview Blog{" "}
                        </a>
                    </div>
                </article>
             ))}
            </section>
        </section>
    </main>
  );
}