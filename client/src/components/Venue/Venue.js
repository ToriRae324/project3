import React, { Component } from "react";
import "./Venue.css";
import API from "../../utils/API/VenueAPI"
import DB from "../../utils/DB/VenueDB"
import VenueResults from  "./VenueResults"
import VenueItems from "./VenueItems"
import { Card } from "semantic-ui-react"
import { Dimmer, Loader} from 'semantic-ui-react'


class Venue extends Component {
    state = {
        venues: [],
        isLoaded: false
    }
    getVenues() {
        API.getVenues("Churches", "Charlotte")
            .then(res =>
                this.setState({
                    venues: res.data.response.groups[0].items,
                    isLoaded: true
                }))
    }

    componentDidMount() {
        this.getVenues();
    }

    saveVenue = (name, phone, address, rating, photo) => {
        alert("venue saved")
        const savedVenue = {
            name: name,
            locale: address,
            photo: photo,
            rating: rating,
            phone: phone,
            occupancy: "Call for details",
        }
        DB.save(savedVenue)
    }

    render(){
        const isLoaded = this.state.isLoaded
        return (
                
                   

                <VenueResults> 
                    <Dimmer className={isLoaded ? '' : 'active'}>
                        <Loader>Loading Wedding Venues</Loader>
                    </Dimmer>
                    {
                this.state.venues.map(venue => {return(
                <VenueItems
                    id={Math.floor(Math.random() * 1000)}
                    name={venue.venue.name}
                    phone={venue.venue.contact.formattedPhone}
                    address={venue.venue.location.address}
                    rating={venue.venue.rating}
                    photo={venue.venue.photos.groups[0]}
                    onClick={this.saveVenue}
                />)})}
                </VenueResults>
        )
    }
}
export default Venue;

