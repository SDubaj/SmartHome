import React from 'react';
import RoomBlock from './RoomBlock';


export interface Room {
        id:number,
      name: string,
      isOn:boolean
  }

  interface RoomProps {
      rooms:Room[]
  }

const RoomBlocks: React.FC<RoomProps> = ({rooms}:RoomProps ) =>{
        return(
    <ul>
        {rooms.map((item, index) => (
        <RoomBlock key={index} id={index} name={item.name} isOn={item.isOn} />
        ))}
  </ul>)
}

export default RoomBlocks;