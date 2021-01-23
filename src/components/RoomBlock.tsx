import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import { IHandles } from './Main';

interface Props extends IHandles  {
    name: string,
    isOn: boolean,
    id:number
}


const RoomBlock: React.FC<Props> = (props:Props ) =>{
    // let shows:boolean;
    // shows=true;
    // const show = (e : React.MouseEvent<HTMLElement>) =>{
    //     e.preventDefault();
    //     console.log("show");
    // }

    const [toggleSwitch, setToggleSwitch] = useState(props.isOn);
    const handleChange = (checked: boolean, event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>) => {
        //  setToggleSwitch((prevState) => !prevState);  
        // var retrievedObject: roomsType[];
        // retrievedObject = JSON.parse(localStorage.getItem('Rooms') || '[]');
        // retrievedObject[id].isOn = !toggleSwitch;
        // localStorage.setItem('Rooms', JSON.stringify(retrievedObject));
        setToggleSwitch(!toggleSwitch);
        props.handleToggle(props.id,!toggleSwitch);
    }

    const handleDelete = (event: React.MouseEvent<HTMLDivElement>) =>{
        if (window.confirm('Are you sure you wish to delete this room?')){
        // var retrievedObject: roomsType[];
        // retrievedObject = JSON.parse(localStorage.getItem('Rooms') || '[]');
        
        // retrievedObject.splice(id,1);

        // localStorage.setItem('Rooms', JSON.stringify(retrievedObject));
        props.handleDelete(props.id);
    }
    }

     return  (
        
         <div className="roomBlock">
            <h3>{props.name}</h3>    
            <div onClick={handleDelete}>X</div>
             <label>
             <span>ON/OFF</span>
             <Switch  onChange={handleChange} checked={toggleSwitch} />
             </label>
             <Link to={`/settings/${props.id}`} >Settings</Link>
             <Link to={{pathname: `settings/${props.id}`, query: { id:props.id }}}></Link>
         </div>
     )
    }


export default RoomBlock;