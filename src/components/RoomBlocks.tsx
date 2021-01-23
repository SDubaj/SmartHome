import React from 'react';
import { IHandles, IRoom } from './Main';
import RoomBlock from './RoomBlock';

  interface RoomProps extends IHandles {
      rooms:IRoom[]
  }

  //displaying blocks of rooms in main view
const RoomBlocks: React.FC<RoomProps> = (props:RoomProps ) =>{
        return(
      
          <div className="flex-wrap" >
              {props.rooms.map((item, index) => (
              <RoomBlock key={index} id={index} name={item.name} device={item.devices} isOn={item.isOn} handleDelete={props.handleDelete} handleToggle={props.handleToggle} />
              ))}
          </div>
     
  )

}

export default RoomBlocks;