import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBox } from "./systems"

export default class SimpleGame extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 1920, height: 1080, backgroundColor: "#03e3fc" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 200,  y: 200, renderer: <Box />},
          box2: { x: 250,  y: 250, renderer: <Box />},
          box3: { x: 250,  y: 250, renderer: <Box />}
        }}>

      </GameEngine>
    );
  }
}