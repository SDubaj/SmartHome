import React, {  useState } from 'react';
import Switch from "react-switch";
import RangeSlider from 'react-bootstrap-range-slider';
import { IHandles } from './Main';


interface Props extends IHandles {
    id:number
    name: string,
    isOn: boolean,
    type:string,
    value:number,
    // handleToggle: (id:number, a:boolean) => void,
    handleSetValue: (id:number,value:number) => void,
     
}


const DeviceBlock: React.FC<Props> = (props:Props ) =>{
    const [toggleSwitch, setToggleSwitch] = useState(props.isOn);
    const [ value, setValue ] = useState(props.value); 
    
      const handleSwitch = () =>{
        setToggleSwitch(!toggleSwitch);
        props.handleToggle(props.id,!toggleSwitch);
      }
      const handleSlider = (event: React.ChangeEvent<HTMLInputElement>,value: number) =>{
        setValue(value);
        props.handleSetValue(props.id, value);
      }
      const handleDelete = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if (window.confirm('Are you sure you wish to delete this room?')){
        props.handleDelete(props.id);
        }
    }


     return  (
        
         <div className="deviceBlock">
             <div className="text-left">
                 <h3>{props.name}</h3>
                 <h5>{props.type}: {value}</h5>
            </div>
            
            <span className="slider">
                <Switch onColor='#f57843'
                    offColor="#f9a886" 
                    onChange={handleSwitch}
                    checked={toggleSwitch} 
                  />
                  
                  {/* <div className="closeDevice" ><img src="./../x.png" height="30px" width="30px"/></div> */}
            </span>
            <div className="addButton" onClick={handleDelete}>
                <img src="./../x.png" height="30px" width="30px" alt="closeIcon"/>
            </div>
            
                <RangeSlider
                    value={value}
                    onChange={handleSlider}
                    variant="warning"
                    tooltip="off"
                />
            
         </div>
     )
    }


export default DeviceBlock;