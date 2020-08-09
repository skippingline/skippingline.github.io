import React from 'react';

const data = [
    {
        image: "https://images1.miaminewtimes.com/imager/u/745xauto/10410941/spot-babershop.jpeg",
        title: "Barber Shop",
        link: ""
    },
    {
        image: "https://www.traderjoes.com/Brandify/images/770-pinecrest-storefront.jpg",
        title: "Trader Joe's",
        link: ""
    },
    {
        image: "https://images1.miaminewtimes.com/imager/u/745xauto/11242002/shops_best_thrift_store-dragonfly_thrift_boutique-_courtesy.jpg",
        title: "Dragonfly Thrift Shop",
        link: ""
    },
    {
        image: "https://media.bizj.us/view/img/5691321/storefrontpublixmillerroad*1200xx4500-2531-0-535.jpg",
        title: "Publix",
        link: ""
    },
    {
        image: "https://images1.miaminewtimes.com/imager/u/original/11642705/bars_bestcocktail_barnancy.jpg",
        title: "Barnancy Cocktails",
        link: ""
    },
    {
        image: "https://www.miamiherald.com/latest-news/2727h5/picture209530074/alternates/LANDSCAPE_1140/BIZ%20TARGET-RACE-LAWSUIT%20MS.JPG",
        title: "Target ⭕️",
        link: ""
    },
    {
        image: "https://ik.imagekit.io/grgdihc3l/getmedia/133ac6c6-9585-42da-a036-3c2d57bd410b/carillon-spa-1440x900.jpg.aspx?width=1440&height=900&ext=.jpg",
        title: "Carillon Spa",
        link: ""
    },
    {
        image: "https://www.pamm.org/sites/default/files/styles/og_image/public/outside_eastportico_withpeople_web.png?itok=KXGTSI67",
        title: "East Portico Sports",
        link: ""
    }
]

const Home = () => {
    return (
        <div className="container">
            <div className="row center-xs">
                <input type="text" className="col-xs-10 col-md-6 searchBar" placeholder="Search to Skip" />
                <button type="button" className="HomeSearchButton" >
                            <svg className="HomeSearchIcon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
                </button>
            </div>

            <div className="backgroundhome">
                <div className="row col-xs-4 LabelSlide">
                    <label>Top Places to Skip</label>
                </div>
                <section className="horizontal-scroll">
                    {data.map(place => (
                        <div className="item" key={place.title}>
                            <div style={{ "backgroundImage": `url('${place.image}')`, "width": "100%", "height": "100%", "backgroundSize": "cover" }} height="150px" width="175px">
                                <div style={{ "backgroundColor": "rgba(0,0,0,.4)", "width": "100%", "height": "100%" }}>
                                    <h1 style={{ "margin": "0", "color": "white" }}>
                                        {place.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <div className="row col-xs-4 LabelSlide">
                    <label>Available Right Now</label>
                </div>
            </div>
        </div>
    )
};
export default Home;