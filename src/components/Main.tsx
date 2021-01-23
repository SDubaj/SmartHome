import React, { useEffect, useState } from 'react';
import AddRoom from './AddRoom';
import RoomBlocks from './RoomBlocks';

interface roomsType{
    name:string,
    isOn:boolean
}


const Main = () =>{


     //const object  = JSON.parse(localStorage.getItem('Rooms') || '[]');
    const [rooms, setRooms] = useState([])
     //setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));

    useEffect(() => {
    
         setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
      },[]);
      
    const [show, setShow] = useState(false)

    const toggleShow = () =>{
        setShow(!show);
    }

    return(
        <div>
            {/* <div onClick={e=> setShow(!show) }>+</div> */}
            <div className="blocks" onClick={toggleShow }><h1>+</h1></div>
            {show ? <AddRoom show={show} toggleShow={toggleShow}  /> : ""}
            <RoomBlocks rooms={rooms}  />
            
            </div>
        
    );
      

}

export default Main;
