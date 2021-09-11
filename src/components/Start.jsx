import React,{useRef} from 'react'
import logo from '../assests/kbc2.png'
const Start = ({setUsername}) => {
    const inputRef = useRef();

    const handleClick = () => {
      inputRef.current.value && setUsername(inputRef.current.value);
    };
  
    return (
      <div className="start">
        <img src={logo} alt="logo" className="logo"/>
        <input
          className="startInput"
          placeholder="Enter your name"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
      </div>
    );
}

export default Start
