import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import AddDevice from './AddDevice';
import DeviceBlock from './DeviceBlock';
import { IRoom } from './Main';


type TParams = { id: string };
interface Props{
  id:number
}


function Settings({ match }: RouteComponentProps<TParams>,{id}:Props) {
  //declare states
  const [rooms, setRooms] = useState<IRoom[]>([]);
  // const [devices,setDevices] = useState<IDevice[]>([]);
  // const [deviceType, setDeviceType] = useState("temperature");
  const [isShown, setIsShown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState<number[]>([0,0]);
  var roomId = Number(match.params.id);

  useEffect(() => {
    setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'));
    setLoading(false);
 },[]);
 
  //get two random numbers from API
  useEffect(() => {
    axios.get('https://www.random.org/integers/?num=2&min=0&max=50&col=2&base=10&format=plain&rnd=new')
        .then(res => { 
          var random1= Number(res.data.slice(0,2));
          var random2 = Number(res.data.slice(3,5));
           setRandomNumber(randomNumber => [random1 ]);
           setRandomNumber(randomNumber => [...randomNumber,  random2 ]);
          console.log(res.data);
        })
        .catch(err => {
            console.log(err.message);
        })
}, []);
//get rooms from localstorage
  
//update rooms in localstorage when rooms state changed
  useEffect(() => {
    localStorage.setItem('Rooms', JSON.stringify(rooms));
  },[rooms]);
//handle form - device name

//toggle form 
const toggleShow = () =>{
  setIsShown(!isShown);
}
const handleSetValue = (id:number,a:number) => {
  console.log(rooms[roomId].devices[id].value);
  rooms[roomId].devices[id].value = a;
  localStorage.setItem('Rooms', JSON.stringify(rooms)); 
}
const handleAdd = (a:any) => {
  var b=rooms[roomId].devices;
  b.push(a);
  rooms[roomId].devices = b;
  localStorage.setItem('Rooms', JSON.stringify(rooms)); 
}

const handleDelete= (a:any) => {
  rooms[roomId].devices.splice(a,1)
  localStorage.setItem('Rooms', JSON.stringify(rooms));
  setRooms(JSON.parse(localStorage.getItem('Rooms') || '[]'))
}

const handleToggle = (id:number, a:boolean) => {
    rooms[roomId].devices[id].isOn = a;
    localStorage.setItem('Rooms', JSON.stringify(rooms));
}
  return (
  <div className="settings">
    <div className="  navbar-settings">

      <Link className="goBackLink" to='/SmartHome/'><img src="./../leftArrow.png" height="40px" width="40px" alt="GoBack"/></Link>

      <div className="navbar-info">
        <h1>{loading ? "" : rooms[roomId].name }</h1>

          <div className="navbar-temp">
              <img src="./../temp.png" height="50px" width="50px"/>
              <h3>{randomNumber[0]} &#x2103;</h3>
              <h4>Temp</h4>
          </div>

            <div className="navbar-humidity">
              <img src="./../water.png" height="50px" width="50px"/>
              <h3>{randomNumber[1]}% </h3>
              <h4>Humidity</h4>
            </div>

            <div className="addDeviceButton" onClick={toggleShow }><h1>+</h1></div>
      </div>
    </div>

    {/* Show form to add new device */}
     { isShown ?
       <AddDevice isShown={isShown} toggleShow={toggleShow} handleAdd={handleAdd} />
      :"" }
      
      {/* Display all devices */}
      <div className="devices">
        {loading ? "wait" : rooms[roomId].devices.map((item, index) => (
          <DeviceBlock 
          key={index} 
          id={index}
          name={item.device}
          isOn={item.isOn} 
          type={item.type} 
          value={item.value} 
          handleToggle={handleToggle}
          handleSetValue={handleSetValue}
          handleDelete={handleDelete} />
        ))}
      </div>
        
  </div>
  );
}

export default Settings;


        