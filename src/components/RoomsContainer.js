
import React from 'react'
import RoomsFitler from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({ context }) { 
    const { loading, sortedRooms, rooms } = context;
    if (loading) { 
        return <Loading />;
    }
    return (
        //dont create a function here..
        <div>
           
            
            <RoomsFitler rooms={rooms}></RoomsFitler>
            <RoomsList rooms={sortedRooms}></RoomsList>
        </div>
    );
}
export default withRoomConsumer(RoomContainer)
//import React from 'react'
//import RoomsFitler from './RoomsFilter'
//import RoomsList from './RoomsList'
//import { RoomConsumer } from '../context'
//import Loading from './Loading'

/*export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                //Render props, create a function called value
                (value) => { 
                    const {loading, sortedRooms, rooms} = value
                    if (loading) { 
                        return <Loading />;

                    }
                    return (
                        //dont create a function here..
                        <div>
                            Hello from rooms container
                            <RoomsFitler rooms={rooms}></RoomsFitler>
                            <RoomsList rooms={sortedRooms}></RoomsList>
                        </div>
                    );
                }
            }
        </RoomConsumer>
        
    )
}*/

