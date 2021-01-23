import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";

type Props = {
    name: string,
    isOn: boolean,
    id:number
    
}
interface roomsType{
    name:string,
    isOn:boolean
}



const RoomBlock: React.FC<Props> = ({name,isOn,id}:Props ) =>{
    

    const [toggleSwitch, setToggleSwitch] = useState(isOn);
    console.log(toggleSwitch);
    const handleChange = (checked: boolean, event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>) => {
        setToggleSwitch((prevState) => !prevState);  

   

        var retrievedObject: roomsType[];
        retrievedObject = JSON.parse(localStorage.getItem('Rooms') || '[]');
        retrievedObject[id].isOn = !toggleSwitch;
        localStorage.setItem('Rooms', JSON.stringify(retrievedObject));
    }
    const handleDelete = (event: React.MouseEvent<HTMLDivElement>) =>{
        if (window.confirm('Are you sure you wish to delete this room?')){
        var retrievedObject: roomsType[];
        retrievedObject = JSON.parse(localStorage.getItem('Rooms') || '[]');
        
        retrievedObject.splice(id,1);

        localStorage.setItem('Rooms', JSON.stringify(retrievedObject));
    }
    }

     return  (
        
         <div className="roomBlock">
            <h3>{name}</h3>    
            <div onClick={handleDelete}>X</div>
             <label>
             <span>ON/OFF</span>
             <Switch  onChange={handleChange} checked={toggleSwitch} />
             </label>
             <Link to={`/settings/${id}`} >Settings</Link>
         </div>
     )
    }


export default RoomBlock;
