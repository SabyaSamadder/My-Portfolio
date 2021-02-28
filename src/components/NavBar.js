import { React } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar(){
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' exact 
                        activeClassName="text-white" 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 transform hover:text-white text-4xl font-bold mytext tracking-widest hover:underline">
                        SabyaSachi
                    </NavLink>
                    <NavLink to='/project' 
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-300 hover:text-gray-200 focus:ring-2 focus:ring-blue-500"
                        activeClassName="text-white bg-blue-600">
                        Projects
                    </NavLink>
                    <NavLink to='/blog' 
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-300 hover:text-gray-200 focus:ring-2 focus:ring-blue-500"
                        activeClassName="text-white bg-blue-600">
                        Blogs
                    </NavLink>
                    <NavLink to='/about' 
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-300 hover:text-gray-200 focus:ring-2 focus:ring-blue-500"
                        activeClassName="text-white bg-blue-600">
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-6 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/sabyasachi-samadder-103850143/" 
                                title="LinkedIn"
                                className="mr-4"  
                                target="_blank" 
                                fgColor="#fff" 
                                style={{ height: 35, width: 35 }}/>
                    <SocialIcon url="https://www.instagram.com/sabya_samadder/" 
                                title="Instagram"
                                className="mr-4" 
                                target="_blank" 
                                fgColor="#fff" 
                                style={{ height: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    )
}