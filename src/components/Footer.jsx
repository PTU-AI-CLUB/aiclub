import React from "react";
import logo from "../assets/img4.png";

const Footer = () => {
    return (
        <div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-black">
            <div>
                <p className="py-4 text-lg">Join us on this exhilarating journey into the world of AI. Whether you're a novice eager to explore or a seasoned AI enthusiast, the AI Club at Puducherry Technological University is your platform for learning, creating, and shaping the future. Together, we'll unlock the potential of AI and contribute to a brighter, more inclusive, and ethically sound tomorrow.</p>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between mt-6 mr-6">
                <div>
                    <h6 className="font-bold text-4xl text-white">Contact</h6>
                    <ul>
                        <li className="py-2 text-lg">Bibushan Sai Chennupati - bibushansai.chennupati@pec.edu</li>
                        <li className="py-2 text-lg">Sathya Krishnan TS - satyakrishnan.s@pec.edu</li>
                        <li className="py-2 text-lg">Shakthi S - shakthi.s@pec.edu</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
