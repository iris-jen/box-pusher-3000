import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GameEngine } from "react-game-engine";
import { Player, Hole, Box, Score } from "./renderers";
import { MovePlayer } from "./systems";
import { Stack } from "react-bootstrap";

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
          <Stack direction="horizontal" gap={10}>
            <Navbar.Brand href="#home">💥💥💥💥Box Pusher 3000💥💥💥💥</Navbar.Brand>
       
          </Stack>

        </Container>
      </Navbar>

      <GameEngine style={{ width: screenSize.width,
                            height: screenSize.height,
                            backgroundColor: "pink" }}
        systems={[MovePlayer]}
        entities={{
          score: {x: 900, y: 200, score:0, renderer: <Score/>},
          box: {x:400, y:400, renderer: <Box/>},
          player: { x: 100, y: 100, renderer: <Player /> },
          hole: {x: 600, y: 600, renderer: <Hole/>}}}/>
    </div>   
  );
}