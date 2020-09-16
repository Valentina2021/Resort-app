
import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

export default function RoomsFilter() {
    const context = useContext(RoomContext);
    const {
        handlerChange, type, capacity, price, minPrice, maxPrice, minSize,
        maxSize, breakfast, pets
    } = context;
    return (
        <section className="filter-container">
            <Title title="Search Rooms"></Title>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handlerChange}
                    />
                    </div>
                {/*End of selection section*/}
            </form>
        </section>
    )
}
