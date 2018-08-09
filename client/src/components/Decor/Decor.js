import React, { Component } from "react";
import API from "../../utils/API/DecorAPI";
import DB from "../../utils/DB/DecorDB"
import DecorDetail from "./DecorDetail";

class Decor extends Component {

    state = {
        results: [],
        
    };

    getDecor = () => {
        API.search()
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getDecor()
    }
    saveDecor = (title, url, photo, price, currency, shop, shopSite) => {
        alert("decor saved")
        const savedDecor = {
            title: title,
            url:url,
            photo:photo,
            price:price,
            currency_code:currency,
            shop: shop,
            shopSite: shopSite
        }
        DB.save(savedDecor)
    }

    render() {
        return (
            
                <div className="ui three cards">
                
                {this.state.results.map(res =>
                <DecorDetail
                key={res.title}
                    title={res.title}
                    url= {res.url}
                    photo={res.Images[0].url_170x135}
                    price={res.price}
                    currency={res.currency_code}
                    shop={res.Shop.shop_name}
                    shopSite={res.Shop.url}
                    saveDecor={this.saveDecor}
                />
                )}
            </div>
            
        )
    }

}

export default Decor;