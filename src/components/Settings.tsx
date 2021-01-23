import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { IRoom } from './Main';


type TParams = { id: string };
interface Props{
  id:number
}

function Settings({ match }: RouteComponentProps<TParams>,{id}:Props) {

  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [device, setDevice] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  var roomId = Number(match.params.id);

  useEffect(() => {
    axios.get('https://www.random.org/integers/?num=2&min=1&max=100&col=2&base=10&format=plain&rnd=new')
        .then(res => {
          setRandomNumber(res.data);
          var array = res.data.replace(/\s/g, ' ')
          console.log(array);
        })
        .catch(err => {
            console.log(err.message);
        })
}, []);
console.log(randomNumber);

  useEffect(() => {
    setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
 },[]);

  useEffect(() => {
    localStorage.setItem('Rooms', JSON.stringify(rooms));
    console.log("zmiana" ); 
  },[rooms]);

const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
  console.log(event.currentTarget.value);
  setDevice(event.currentTarget.value);
}
const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  let data = 
      {
      device:device,
      isOn:false
      
  }
  rooms[roomId].devices = [data];
  localStorage.setItem('Rooms', JSON.stringify(rooms));
};


console.log(rooms);
  return (
  <div>

     <h2>This is a page for product with ID: {match.params.id} </h2>  {randomNumber+1}
     { isShown ?
       <form  onSubmit={handleSubmit}>
                <label>
                    
                    <input type="text" name="name" onChange={handleChange} />
                </label> 
                
                <button type="submit" value="Wyślij"  >Wyslij</button>
      </form>
      :""
      }
  </div>
  );
}

export default Settings;


        