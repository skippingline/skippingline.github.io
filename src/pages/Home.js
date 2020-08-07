import React from 'react';
 import { Link } from 'react-router-dom';

 const data = [
 {
         image: "https://images1.miaminewtimes.com/imager/u/745xauto/10410941/spot-babershop.jpeg",
     title: "Barber Shop",
     link: ""
 }
 ]

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
                 {/* <img className="frontpicimg1" src={} height="150px" width="175px" alt=""/> */}
                     <div style={{"backgroundImage": "url('https://images1.miaminewtimes.com/imager/u/745xauto/10410941/spot-babershop.jpeg')", "width": "100%", "height": "100%", "backgroundSize": "cover"}} height="150px" width="175px">
                         <div style={{"backgroundColor": "rgba(0,0,0,.2)", "width": "100%", "height": "100%"}}>
                             <h1>

                             </h1>
                         </div>
                     </div>
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
        </div>
    )
};
export default Home;