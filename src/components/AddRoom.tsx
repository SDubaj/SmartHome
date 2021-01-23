import React, { useState } from 'react';
type Props = {
    show:boolean,
    toggleShow: () => void
}
const AddRoom = (props:Props) =>{
    const [name, setName] = useState("");
    const [isOn, setIsOn] = useState(false);
   
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        let data = 
            {
            name:name,
            isOn:isOn
        }
    ;
        
    var retrievedObject = [{}, {}, {}];
       retrievedObject = JSON.parse(localStorage.getItem('Rooms') || '[]');
       console.log(retrievedObject);
         if(retrievedObject != null ){
            
         retrievedObject.push(data);
        }
        localStorage.setItem('Rooms', JSON.stringify(retrievedObject));
        props.toggleShow();
    }
    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        setName(event.currentTarget.value);


    }

    return(
        <div>

           
            <form  onSubmit={handleSubmit}>
                <label>
                    Nazwa Pokoju:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                
                <button type="submit" value="Wyślij"  >Wyslij</button>
            </form>
            
            </div>
        
    );
      

}

export default AddRoom;
