

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import React, { useEffect, useState } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBox } from "./systems";

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
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">💥💥💥💥Box Pusher 30000000💥💥💥💥</Navbar.Brand>
            </Container>
          </Navbar>

          <GameEngine
            style={{
              width: screenSize.width,
              height: screenSize.height,
              backgroundColor: "pink",
            }}
            systems={[MoveBox]}
            entities={{
              box1: { x: 200, y: 200, renderer: <Box /> },
            }}
          />
    </div>
    
  );
}