import React, { useState } from 'react';
import { IHandleAddRoom } from './Main';

interface Props extends IHandleAddRoom {
    show:boolean,
    toggleShow: () => void,
    handleAdd: (a:any) => void
}

const AddRoom: React.FC<Props>  = (props:Props) =>{
    const [name, setName] = useState("");
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data = 
            {
            name:name,
            isOn:false,
            devices:[]
        }
        props.toggleShow();
        props.handleAdd(data);
    }
    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        setName(event.currentTarget.value);
    }
    return(
        <div className="second-navbar">
            <div className="addRoomTitle"><h2>Add room</h2></div>
            <form  onSubmit={handleSubmit}>
                
                
                <label>
                    <input placeholder="Name" type="text" name="name" onChange={handleChange} />
                </label>
                <button type="submit" value="Send">&#x2714;</button>
            </form>
            
            </div>
        
    );
      

}

export default AddRoom;