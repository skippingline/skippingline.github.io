import React from 'react';
import { Link } from 'react-router-dom';


let categoryInfo = [
        { title: "Restaurant", url: "/restaurant", logo: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" > <path id="addIcon" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" /></svg>), color: "#DE1A1A" },
        { title: "Shopping", url: "/", logo: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M10,10c0,0.55-0.45,1-1,1s-1-0.45-1-1V8h2V10z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M16,10c0,0.55-0.45,1-1,1 s-1-0.45-1-1V8h2V10z" /></svg>), color: "#0081A7" },
        { title: "Grocery", url: "/", logo: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>), color: "#32E875" },
        { title: "Entertainment", url: "/", logo: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" /></svg>), color: "#FA7921" },
        { title: "Recreational", url: "/", logo: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" /></svg>), color: "#3D3B8E" },
        { title: "Beauty", url: "/", logo: (<svg height="95" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path d="m144 48v-16h-8.8a40 40 0 0 0 -78.39 0h-8.81v16h8v96h-8v16h8.805a40 40 0 0 0 78.39 0h8.805v-16h-8v-96zm-24 56.686-39.314 39.314h-8.686v-8.686l48-48zm0 22.628v16.686h-16.686zm0-62.628-48 48v-17.372l47.314-47.314h.686zm-48 8v-24.686h24.686zm24-56.686a24.042 24.042 0 0 1 22.629 16h-45.258a24.042 24.042 0 0 1 22.629-16zm0 160a24.041 24.041 0 0 1 -22.629-16h45.258a24.041 24.041 0 0 1 -22.629 16z" /></svg>), color: "#F74A78" },
        { title: "Medical", url: "/", logo: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path id="addIcon" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>), color: "#0ACDFF" },
        { title: "Office", url: "/", logo: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z" /></svg>), color: "#FABC2A" }
];

const Categories = () => {
        return (
                <div className="container">
                        <div className="row categories">
                                {categoryInfo.map((category) => (
                                        <div key={category.title} className="col-xs-12 col-sm-6 col-md-6 col-lg-4" >
                                                <Link to={category.url} style={{ backgroundColor: category.color }}>
                                                        <h3>{category.title}</h3>
                                                        <div>{category.logo}</div>
                                                </Link>
                                        </div>
                                ))}

                        </div>
                </div>
        );
}


export default Categories;