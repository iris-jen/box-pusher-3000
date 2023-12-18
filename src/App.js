import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

import React, { useEffect, useState } from "react";
import { GameEngine } from "react-game-engine";
import { Player, Hole, Box } from "./renderers";
import { MovePlayer } from "./systems";

const getCurrentDimension = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export default function SimpleGame() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []); 

  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">💥💥💥💥Box Pusher 30000000💥💥💥💥</Navbar.Brand>
              <Card/>
            </Container>
          </Navbar>

          <GameEngine
            style={{
              width: screenSize.width,
              height: screenSize.height,
              backgroundColor: "pink",
            }}
            systems={[MovePlayer]}
            entities={{
              box: {x:400, y:400, renderer: <Box/>},
              player: { x: 100, y: 100, renderer: <Player /> },
              hole: {x: 600, y: 600, renderer: <Hole/>}
            }}
          />
    </div>
    
  );
}