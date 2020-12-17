const judgeCircle = function(moves) {
   let coords = {vert: 0, hori: 0};
   for (let i = 0; i < moves.length; i++) {
       let move = moves[i];
       switch (move) {
           case 'U':
               coords.vert++;
               break;
           case 'D':
               coords.vert--;
               break;
           case 'L':
               coords.hori--;
               break;
           case 'R':
               coords.hori++;
               break;
       }
   }
   return coords.vert === 0 && coords.hori === 0
};
