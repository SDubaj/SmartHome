import React, { useState } from 'react';
import { IHandleAddRoom } from './Main';
// type handleAdd = (a: any) => any;
// interface MyClassProps {
//     onChange: MyFunctionType;
//     niceProp: string;
// }

interface Props extends IHandleAddRoom {
    show:boolean,
    toggleShow: () => void,
    handleAdd: (a:any) => void
}
const AddRoom = (props:Props) =>{
    const [name, setName] = useState("");
    //var isOn = false;
    // var shows:boolean;
    // const [show, setShow] = useState(props.show)

    // const toggleShow = (e : React.MouseEvent<HTMLElement>) =>{
    //     e.preventDefault();
    //     setShow(!show);
    //     console.log(show);
    // }
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data = 
            {
            name:name,
            isOn:false
        }
    ;
        
    // var retrievedObject = [{}, {}, {}];
    //    retrievedObject = JSON.parse(localStorage.getItem('Rooms') || '[]');
    //    console.log(retrievedObject);
        //  if(retrievedObject != null ){
            
        //  retrievedObject.push(data);
        // }
        // localStorage.setItem('Rooms', JSON.stringify(retrievedObject));
        props.toggleShow();
        props.handleAdd(data);
    }
    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        setName(event.currentTarget.value);


    }
//     var form = <div>
//     <form onSubmit={handleSubmit} >
//   <label>
//     Imię:
//     <input type="text" name="name" onChange={handleChange}/>
//   </label>
//   <button type="submit" value="Wyślij"  onClick={props.toggle}>Wyslij</button>
// </form>
//     </div>
    return(
        <div>

            {/* <div onClick={e=> setShow(!show) }>+</div> */}

            {/* <div onClick={toggleShow }>+</div> */}
            {/* {show ? "" : form} */}
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