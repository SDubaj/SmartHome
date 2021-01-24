import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import { IHandles } from './Main';

interface Props extends IHandles  {
    name: string,
    isOn: boolean,
    id:number,
    device?:any
}


const RoomBlock: React.FC<Props> = (props:Props ) =>{
    const [toggleSwitch, setToggleSwitch] = useState(props.isOn);
    // const [devicesAmount, setDevicesAmount] = useState(0);
    // Switching room  - ON or OFF
    const handleChange = (checked: boolean, event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>) => {
        setToggleSwitch(!toggleSwitch);
        props.handleToggle(props.id,!toggleSwitch);
    }
    // Deleting rooms 
    const handleDelete = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if (window.confirm('Are you sure you wish to delete this room?')){
        props.handleDelete(props.id);
        }
    }
     return  (
         <div className="roomBlock">       
                <h2>{props.name}</h2> 
                <h4 className="devicesAmount">Devices:{props.device.length}</h4>      
                {/* <span> ON/OFF</span> */}

            <div className="roomOptions">
                <Switch onColor='#f57843' offColor="#f9a886" onChange={handleChange} checked={toggleSwitch} />
                <Link to={`/SmartHome/settings/${props.id}`} >
                    <img src="settings.png" height="30px" width="30px" alt="settingsIcon"/>
                </Link>
                <div className="close" onClick={handleDelete}>
                    <img src="x.png" height="30px" width="30px" alt="closeIcon"/>
                </div> 
            </div>
         </div>
     )
    }


export default RoomBlock;