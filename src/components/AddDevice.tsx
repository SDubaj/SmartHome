import React, { useState } from 'react';
// import { IHandleAddRoom } from './Main';

interface Props   {
    isShown:boolean,
    toggleShow: () => void,
    handleAdd: (a:any) => void
}
interface IDevice{
    device:string,
    isOn:boolean,
    type:string,
    value:number
}
const AddDevice: React.FC<Props> = (props:Props) => {
    const [device, setDevice] = useState("");
    // const [name, setName] = useState("");
    const [deviceType, setDeviceType] = useState("temperature");

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data = 
            {
            device:device,
            isOn:false,
            type:deviceType,
            value:0
        };
        props.toggleShow();
        props.handleAdd(data);
    }
    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        setDevice(event.currentTarget.value);
    }
    const handleType = (event : React.FormEvent<HTMLInputElement>) => {
        setDeviceType(event.currentTarget.value);
      }
    return(
        <div className="secondNavbarSettings">
            <form  onSubmit={handleSubmit}>
                <label>
                    
                    <input placeholder="Device" type="text" name="name" onChange={handleChange} />
                </label> <br/>
                <label >
                 <h4>Choose type of device's value:</h4> 
                  <input checked type="radio" value="Temperature" name="type" onChange={handleType}/> Temperature
                  <input type="radio" value="Brightness" name="type" onChange={handleType}/> Brightness
                  <input type="radio" value="Volume" name="type" onChange={handleType}/> Volume
                </label><br/>
                
                <button type="submit" value="Wyślij"> &#x2714;</button>
            </form>
            
        </div>
        
    );
      

}

export default AddDevice;