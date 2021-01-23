import React from 'react';
import { IHandles, IRoom } from './Main';
import RoomBlock from './RoomBlock';


// export interface Room {
//       name: string,
//       isOn:boolean
//   }

  interface RoomProps extends IHandles {
      rooms:IRoom[]
  }

const RoomBlocks: React.FC<RoomProps> = (props:RoomProps ) =>{
        return(
    <ul>
        {props.rooms.map((item, index) => (
        <RoomBlock key={index} id={index} name={item.name} isOn={item.isOn} handleDelete={props.handleDelete} handleToggle={props.handleToggle}/>
        ))}
  </ul>)
}

export default RoomBlocks;