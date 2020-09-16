import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: 'Discover the best ever mocktail recipes for every occasion.'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'There is no established parking along the road, pull off as best you can.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: 'Includes a variety of paratransit services that use small buses or vans to provide public mobility.'
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: 'Do not hesistate in trying some of the strogest beers from different countries.'
            }
        ]
    }
    
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => { 
                        return <article key={index} className="service">
                    <h6>{item.icon}</h6>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    })}
              
              
            </div>
            </section>
           
        )
    }
}
