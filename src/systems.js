
const MovePlayer = (entities, { input }) => {
    const { payload } = input.find(x => x.name === "onKeyDown") || {};

    if (payload) {
      const player = entities["player"];
      const box = entities["box"];
      const hole = entities["hole"];

      var playerX = player.x;
      var playerY = player.y;

      if(payload.keyCode == 87){
        playerY-=5;
      }
      if(payload.keyCode == 83){
        playerY+=5;
      }
      if(payload.keyCode == 65){
        playerX-=5;
      }
      if(payload.keyCode == 68){
        playerX+=5;
      }

      var playerBottom = playerY+100;
      var playerTop = playerY;
      var playerLeft = playerX
      var playerRight = playerX+100;

      var boxY = box.y;
      var boxX = box.x;

      var boxBottom = boxY+50;
      var boxTop = boxY;
      var boxLeft = boxX
      var boxRight = boxX+50;


      var inLineWithBoxTop =  playerLeft - 50 <= boxLeft && playerRight + 50 >= boxRight ;
      var inLineWithBoxSide = playerTop  <= boxTop && playerBottom >= boxBottom;

      if(playerBottom >= boxTop && playerTop < boxBottom && inLineWithBoxTop){
        boxY+=20;
      }

      if(playerTop <= boxBottom && playerBottom > boxBottom && inLineWithBoxTop){
        boxY -=20;
      }

      if(playerRight >= boxLeft &&  playerLeft < boxRight && inLineWithBoxSide)
      {
        boxX+=20;
      }

      if(playerLeft <= boxRight && playerRight > boxLeft &&inLineWithBoxSide){
        boxX-=20;
      }

      box.x = boxX;
      box.y = boxY;

      player.x = playerX;
      player.y = playerY;


      var holeY = hole.y;
      var holeX = hole.x;

      var holeBottom = holeY+50;
      var holeTop = holeY;
      var holeLeft = holeX
      var holeRight = holeX+50;

      var inLineWithHoleTop = boxLeft - 100 <= holeLeft && boxRight + 100 >= holeRight ;
      var inLineWithHoleSide = boxTop  - 100 <= holeTop && boxBottom  + 100 >= holeBottom;

      if(boxBottom >= holeTop && boxTop < holeBottom && inLineWithHoleTop){
       holeY+=100;
       console.log("box in hole from top");

       box.x = 300;
       box.y = 300;
 
       player.x = 100;
       player.y = 100;

       alert("Wow good work pushing that box into that hole! \r\n" +
       "As your reward here is a brand new heavier box to push towards a further hole :) \r\n")
      }
      else if(boxTop <= holeBottom && boxBottom > holeBottom && inLineWithHoleTop){
        holeY-=100;
        console.log("box in hole from bottom");


        alert("Wow good work pushing that box into that hole! \r\n" +
        "As your reward here is a brand new heavier box to push towards a further hole :) \r\n")
      
      }
      else if(boxRight >= holeLeft &&  boxLeft < holeRight && inLineWithHoleSide)
      {
        holeX+=100;
        console.log("box in hole from left");


        box.x = 300;
        box.y = 300;
  
        player.x = 100;
        player.y = 100;

        alert("Wow good work pushing that box into that hole! \r\n" +
        "As your reward here is a brand new heavier box to push towards a further hole :) \r\n")
      }
      else if(boxLeft <= holeRight && boxRight > holeLeft &&inLineWithHoleSide){
        holeY+=100;
        console.log("box in hole from right");

        box.x = 300;
        box.y = 300;
  
        player.x = 100;
        player.y = 100;

  
        alert("Wow good work pushing that box into that hole! \r\n" +
        "As your reward here is a brand new heavier box to push towards a further hole :) \r\n")
      }

      hole.y = holeY;
      hole.x = holeX;
    }
    return entities;
  };



export { MovePlayer };