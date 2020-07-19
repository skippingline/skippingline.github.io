import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container">
            <div className="row center-xs">
                <input type="text" className="col-xs-10 col-md-6 searchBar" placeholder="Search to Skip"/>
                    <button type="button" className="HomeSearchButton">
                    <Link to="/Booking/123">
                        <div style={{alignContent:"center", margin:"0 auto", textAlign:"center", fontFamily:"helvetica"}}>
                            <svg className="HomeSearchIcon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#Cb54F7"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
                        </div>
                    </Link>
                    </button>
            </div>

            <div className="row center-xs LabelSlide">
                <label>Top Places to Skip</label>
            </div>

            <section className="horizontal-scroll">
                
                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://images1.miaminewtimes.com/imager/u/745xauto/10410941/spot-babershop.jpeg"} height="150px" width="175px" alt=""/>
                </div>

                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://www.traderjoes.com/Brandify/images/770-pinecrest-storefront.jpg"} height="150px" width="175px" alt=""/>
                </div>

                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://images1.miaminewtimes.com/imager/u/745xauto/11242002/shops_best_thrift_store-dragonfly_thrift_boutique-_courtesy.jpg"} height="150px" width="175px" alt=""/>
                </div>

                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://media.bizj.us/view/img/5691321/storefrontpublixmillerroad*1200xx4500-2531-0-535.jpg"} height="150px" width="175px" alt=""/>
                </div>

                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://images1.miaminewtimes.com/imager/u/original/11642705/bars_bestcocktail_barnancy.jpg"} height="150px" width="175px" alt=""/>
                </div>
                
                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://www.miamiherald.com/latest-news/2727h5/picture209530074/alternates/LANDSCAPE_1140/BIZ%20TARGET-RACE-LAWSUIT%20MS.JPG"} height="150px" width="175px" alt=""/>
                </div>

                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://ik.imagekit.io/grgdihc3l/getmedia/133ac6c6-9585-42da-a036-3c2d57bd410b/carillon-spa-1440x900.jpg.aspx?width=1440&height=900&ext=.jpg"} height="150px" width="175px" alt=""/>
                </div>

                <div id="containerhome" className="item">
                    <img className="frontpicimg1" src={"https://www.pamm.org/sites/default/files/styles/og_image/public/outside_eastportico_withpeople_web.png?itok=KXGTSI67"} height="150px" width="175px" alt=""/>
                </div>
        
            </section>


            <div className="row between-xs magentaBoxes">
                <div className="col-xs-6
                                col-sm-4
                                col-md-4">
                    <Link to="/Restaurant">
                        <div>
                            <svg id="svg1" xmlns="http://www.w3.org/2000/svg" width="50px" height= "50px" viewBox="0 0 24 24" style={{fill:'#DE1A1A'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
                        </div>
                    </Link>
                </div>
                <div className="col-xs-6
                                col-sm-4
                                col-md-4">
                    <div>
                    <svg id="svg2" xmlns="http://www.w3.org/2000/svg" width="50px" height= "50px" viewBox="0 0 24 24" style={{fill:'#0081A7'}}><g><rect fill="none" height="12" width="12"/><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M10,10c0,0.55-0.45,1-1,1s-1-0.45-1-1V8h2V10z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M16,10c0,0.55-0.45,1-1,1 s-1-0.45-1-1V8h2V10z"/></g></svg>
                    </div>
                </div>
                <div className="col-xs-6
                                col-sm-4
                                col-md-4">
                    <div>
                    <svg id="svg3" xmlns="http://www.w3.org/2000/svg" width="50px" height= "50px" viewBox="0 0 24 24" style={{fill:'#32E875'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    </div>
                </div>
                <div className="col-xs-6
                                col-sm-4
                                col-md-4">
                    <div>
                    <svg id="svg4" xmlns="http://www.w3.org/2000/svg" width="50px" height= "50px" viewBox="0 0 24 24" style={{fill:'#FA7921'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>
                    </div>
                </div>
                <div className="col-xs-6
                                col-sm-4
                                col-md-4">
                    <div>
                    <svg id="svg5" xmlns="http://www.w3.org/2000/svg" width="50px" height= "50px" viewBox="0 0 24 24" style={{fill:'#3D3B8E'}} ><path d="M0 0h24v24H0z" fill="none"/><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></svg>
                    </div>
                </div>
                    <div className="col-xs-6
                                    col-sm-4
                                    col-md-4">
                     <Link to="/Categories">
                        <div>
                            <svg id="svg6" xmlns="http://www.w3.org/2000/svg" width="50px" height= "50px" viewBox="0 0 24 24" style={{fill:'#cccccc'}}><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        </div>
                     </Link>
                 </div>
            </div>
        </div>

    )
};


export default Home;