import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading..</div>;

    return (
        <main className="bg-blue-100 min-h-screen border-8">
            <div className="p-10 lg:pt-28 container mx-auto relative">
                <section className="bg-blue-500 ronded-lg shadow-2xl lg:flex p-16">
                    <img src={urlFor(author.authorImage).url()} 
                         className="rounded w-18 h-18 lg:w-44 lg:h-44 mr-8" 
                         alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="mytext text-2xl text-white mb-10">
                            Hi, I am{" "}
                            <span className="text-blue-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="4r4yxplo" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
