import React, { useEffect, useState } from 'react';
import AddRoom from './AddRoom';
import RoomBlocks from './RoomBlocks';

// interface roomsType{
//     name:string,
//     isOn:boolean
// }
//device interface
export interface Devices{
  device:string,
  isOn:boolean,
  type:string,
  value:number
}

//room interface
export interface IRoom{
  name:string,
  isOn:boolean,
  devices: [Devices]
}
//interface with room handlers - delete / toggle
export interface IHandles{
  handleDelete: (a:any) => void,
  handleToggle: (id:number, a:boolean) => void, 
}
// interface with room handlers - addRoom , showForm
export interface IHandleAddRoom{
  toggleShow: () => void,
  handleAdd: (a:any) => void
}


const Main = () =>{

    //declare states
    const [rooms, setRooms] = useState<IRoom[]>([]);
    const [show, setShow] = useState(false);
  //get rooms from localstorage
    useEffect(() => {
        setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
      },[]);

    //set data to localstorage when rooms state changes
    useEffect(() => {
      localStorage.setItem('Rooms', JSON.stringify(rooms));
    },[rooms]);
  
    //toggle form show
  const toggleShow = () =>{
      setShow(!show);
  }
  //add new room to room state
  const handleAdd = (a:any) => {
      setRooms(rooms => [...rooms,  a ]);
  }
  //Switch ON/OFF room with id
  const handleToggle = (id:number, a:boolean) => {
    setRooms(
    rooms.map((item,i)  => 
      i === id 
      ? {...item, isOn : !item.isOn} 
      : item ))
      
      
      rooms.map((item)=>
      item.devices.map((item)=>
        item.isOn = a
      )
    )
  }

  //Delete room and update localstorage
  const handleDelete= (a:any) => {
    setRooms(rooms.splice(a,1))
    localStorage.setItem('Rooms', JSON.stringify(rooms));
    setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'))
}

    return(
      <div>
        
          <div className="navbar navbar-light">
             <img src="user.png" height="50px" width="50px" alt="userIcon"></img>
             <h1>Hi user!</h1>
             <h3>Welcome to home ! </h3> 
           <button className="addButton" onClick={toggleShow }>+</button>
        
          </div>

        <div>
           {/* if show is true show form */}
           {show ? <AddRoom show={show} toggleShow={toggleShow} handleAdd={handleAdd}/> : ""} 
        </div>
            
        
            {/* display rooms */}
            <RoomBlocks rooms={rooms} handleDelete={handleDelete} handleToggle={handleToggle} />
          
          
      </div>
        
    );
      

}

export default Main;