import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";


interface Props {
    id:number
    name: string,
    isOn: boolean,
    type:string,
    value:number,
    handleToggle: (id:number, a:boolean) => void, 
}


const DeviceBlock: React.FC<Props> = (props:Props ) =>{
    const [toggleSwitch, setToggleSwitch] = useState(props.isOn)
    
      const handleSwitch = () =>{
        setToggleSwitch(!toggleSwitch);
        props.handleToggle(props.id,!toggleSwitch);
      }
     return  (
        
         <div className="deviceBlock">
             <div className="text-left">
                 <h3>{props.name}</h3>
                 <h5>{props.type}: {props.value}</h5>
            </div>
            
            <span className="slider">
                <Switch onColor='#f57843' offColor="#f9a886" onChange={handleSwitch} checked={toggleSwitch} />
            </span>
            
         </div>
     )
    }


export default DeviceBlock;