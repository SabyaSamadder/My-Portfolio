import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    return (
        <main className="bg-blue-100 min-h-screen p-8">
            <section className="container mx-auto">
                <h1 className="text-4xl flex mytext">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex mb-8">Some of the Projects are to learn new Technologies</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projectData && projectData.map((project, index) => (
                    <article>
                        <Link to={"/project/" + project.slug.current} key={project.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400" key={index}>
                                <img
                                    src={project.mainImage.asset.url}
                                    alt={project.mainImage.alt}
                                    className="w-full h-full rounded-r object-cover absolute"/>
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-gray-800 text-lg font-bold px-2 py-4 bg-blue-500 text-blue-100 bg-opacity-75 rounded">
                                        {project.title}
                                    </h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}