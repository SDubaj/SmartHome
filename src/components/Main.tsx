import React, { useEffect, useState } from 'react';
import AddRoom from './AddRoom';
import RoomBlocks from './RoomBlocks';

// interface roomsType{
//     name:string,
//     isOn:boolean
// }
export interface Devices{
  device:string,
  isOn:boolean,
  temp?:number,
  brightness?:number
}

export interface IRoom{
  name:string,
  isOn:boolean,
  devices: [Devices]
}

export interface IHandles{
  handleDelete: (a:any) => void,
  handleToggle: (id:number, a:boolean) => void,
      
    
}
export interface IHandleAddRoom{
  toggleShow: () => void,
  handleAdd: (a:any) => void
}


const Main = () =>{
    // const handleDelete = (event: React.MouseEvent<HTMLDivElement>) =>{
    //     if (window.confirm('Are you sure you wish to delete this room?')){
    //     var retrievedObject: roomsType[];
    //     retrievedObject = JSON.parse(localStorage.getItem('Rooms') || '[]');
        
    //     retrievedObject.splice(id,1);

    //     localStorage.setItem('Rooms', JSON.stringify(retrievedObject));
    // }
    // }



    window.addEventListener('storage',e => console.log())
    //  const object  = JSON.parse(localStorage.getItem('Rooms') || '[]');
    const [rooms, setRooms] = useState<IRoom[]>([]);
    const [show, setShow] = useState(false)
     //setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));

    useEffect(() => {
         setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
      },[]);

      useEffect(() => {
        // window.addEventListener('storage', () => {
        //     // When local storage changes, dump the list to
        //     // the console.
        //     console.log("ss");
        //     setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
        //   });
        //  setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
        localStorage.setItem('Rooms', JSON.stringify(rooms));
        console.log(rooms);
      },[rooms]);
      
    

    const toggleShow = () =>{
        setShow(!show);
        // if(show===true){
        //   setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
        // }
    }
    const handleAdd = (a:any) => {
      setRooms(rooms => [...rooms,  a ]);
      
      //setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'))
      
  }
  const handleToggle = (id:number, a:boolean) => {
    // setRooms(rooms => [...rooms,  a ]);
    // console.log('toggle' + id);
    //setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'))
    setRooms(
    rooms.map((item,i)  => 
      i === id 
      ? {...item, isOn : !item.isOn} 
      : item ))
    
}
  const handleDelete= (a:any) => {
    setRooms(rooms.splice(a,1))
    localStorage.setItem('Rooms', JSON.stringify(rooms));
    setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'))
    console.log(a);
}

    return(
        <div>
            {/* <div onClick={e=> setShow(!show) }>+</div> */}
            <div className="blocks" onClick={toggleShow }><h1>+</h1></div>
            {show ? <AddRoom show={show} toggleShow={toggleShow} handleAdd={handleAdd}/> : ""}
            <RoomBlocks rooms={rooms} handleDelete={handleDelete} handleToggle={handleToggle}  />
            
            </div>
        
    );
      

}

export default Main;