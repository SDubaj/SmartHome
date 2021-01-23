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
    axios.get('https://www.random.org/integers/?num=2&min=1&max=100&col=2&base=10&format=plain&rnd=new')
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
    console.log("zmiana" ); 
  },[rooms]);
//handle form - device name
// const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
//   console.log(event.currentTarget.value);
//   setDevice(event.currentTarget.value);
// }
//handle form - device value type 
// const handleType = (event : React.FormEvent<HTMLInputElement>) => {
//   console.log(event.currentTarget.value);
//   setDeviceType(event.currentTarget.value);
// }
//handle form submit(add new device)
// const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   let data = 
//       {
//       device:device,
//       isOn:false,
//       type:deviceType,
//       value:0
//       // deviceDetails:[{type: deviceType},{value:0}]
//   }
//   rooms[roomId].devices = [data];
//   localStorage.setItem('Rooms', JSON.stringify(rooms));
//   toggleShow();
// };
//toggle form 
const toggleShow = () =>{
  setIsShown(!isShown);
}
const handleAdd = (a:any) => {
  //setRooms(rooms => [...rooms,  rooms.devices[a]);
  // setRooms(
  //   rooms.map((item,i)  => 
  //     i === id 
  //     ? {...item, devices: [a] } 
  //     : item ))
  var b=rooms[roomId].devices;
  b.push(a);
  rooms[roomId].devices = b;
  console.log(rooms[roomId].devices);
  
  // b.push(a);

  //   rooms[roomId].devices= (...b, a]);
  //  rooms[roomId].devices.push([a])
  // forceupdate()

   localStorage.setItem('Rooms', JSON.stringify(rooms)); 
  
  
}
const showDevices = () =>{

  rooms[roomId].devices.map((item, index) => (
    <div>{item.device} </div>
    ))
}

const handleToggle = (id:number, a:boolean) => {

    rooms[roomId].devices[id].isOn = a;
    localStorage.setItem('Rooms', JSON.stringify(rooms));
}
  return (
  <div className="settings">
        {/* <img src="./../x.png" height="30px" width="30px"/> */}
            {/* <div className="roomDetails">Temp:{randomNumber[0]} Humidity: {randomNumber[1]}</div> */}
     {/* <h2>This is a page for product with ID: {match.params.id} </h2>   */}
     {/* <img src={process.env.PUBLIC_URL + '/x.png'} alt="logo" /> */}

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
    
     
     

     { isShown ?
       <AddDevice isShown={isShown} toggleShow={toggleShow} handleAdd={handleAdd} />
      :"" }
      <div className="devices">
        {loading ? "wait" : rooms[roomId].devices.map((item, index) => (
          <DeviceBlock key={index} id={index} name={item.device} isOn={item.isOn} type={item.type} value={item.value} handleToggle={handleToggle} />
        ))}
      </div>
        
  </div>
  );
}

export default Settings;


        