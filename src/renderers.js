import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';


function isEven (number) {
  return number % 2 === 0;
}

class Player extends Component {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;

    let Offset = 4;
    if(isEven(x)){
     Offset = 3; 
    }

    return (
      <div  style={{ position: "absolute", width: size, height: size, backgroundColor: "blue", left: x, top: y }}>

      <Stack direction="vertical">
        <Stack direction="horizontal" gap={Offset}>
            <Spinner size="lg" animation="grow" variant="danger"  />
            <Spinner size="lg" animation="grow" variant="danger" />
        </Stack>

        <Spinner animation="border" variant="primary" style={{marginLeft: "20px", marginTop: "22px"}} />
      </Stack>

      </div>
     
    );
  }
}


class Box extends Component{
  render(){

    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return( <span style={{ position: "absolute", width:50, height:50, backgroundColor: "purple",
     left: x, top: y }} ></span>);
  }

}


class Hole extends Component{
  render(){
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return( <span style={{ position: "absolute", width:200, height:200, backgroundColor: "black", left: x, top: y,   borderRadius:"50%" }} className="dot"></span>);
  }

}

export { Player, Hole, Box };