import {React} from "react";
import Image from "../image.jpg"

export default function Home(){
    return (
        <main>
            <img src={Image}
                 alt="BackgroundImage"
                 className="absolute object-cover w-full h-full rounded mt-2 opacity-80" />
            <section  className="relative flex justify-center min-h-screen pt-12 lg:pt-44 px-8 ">
                <h3 className="text-xs text-white mytext leading-none lg:leading-none font-bold home-name shadow-xl">
                <span className="text-blue-500 rounded">Hello</span>. I'm a Front-End Web Developer
                </h3>                
            </section>
        </main> 
    );
}