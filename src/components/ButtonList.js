import React from 'react'
import Button from './Button'

const buttonList = ["All","Gaming","Songs", "Live","Shorts","Computer Science" ,"Dp","Tree", "Cricket","Foody","Oggy & Cockroaches"];
const ButtonList = () => {
  return (
    <div className='flex justify-center'>{
      buttonList.map((buttonName) => (
        <Button name = {buttonName}  key= {buttonName}/>
        
    ))
      }
    </div> 
    
  );
}

export default ButtonList;