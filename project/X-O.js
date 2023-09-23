
title=document.querySelector('.tictoc');
let player='X';
let matrix=[9];
let new_bord=[9];
let start =0;
let X=0,O=0,E=0;

function end_game(NO1,NO2,NO3){
title.innerHTML=`${matrix[NO1]} is Winner`;
document.getElementById(NO1).style.background='#000';
document.getElementById(NO2).style.background='#000';
document.getElementById(NO3).style.background='#000';
setInterval(function(){title.innerHTML+='.'},1000);
setTimeout(function(){location.reload()},3000)
}



function Winner(){  
for(let i=1;i<10;i++){
matrix[i]=document.getElementById(i).innerHTML;
}
if(matrix[1]==matrix[2]&&matrix[2]==matrix[3]&&matrix[3]!=''){
    end_game(1,2,3);
 }
 else if(matrix[4]==matrix[5]&&matrix[5]==matrix[6]&&matrix[5]!=''){
    end_game(4,5,6);
 }
 else if(matrix[7]==matrix[8]&&matrix[8]==matrix[9]&&matrix[8]!=''){
    end_game(7,8,9);
 }
 else if(matrix[1]==matrix[4]&&matrix[7]==matrix[4]&&matrix[7]!=''){
    end_game(1,4,7);
 }
 else if(matrix[2]==matrix[5]&&matrix[2]==matrix[8]&&matrix[8]!=''){
    end_game(2,5,8);
 }

 else if(matrix[3]==matrix[6]&&matrix[6]==matrix[9]&&matrix[6]!=''){
    end_game(3,6,9);
 }
 else if(matrix[1]==matrix[5]&&matrix[5]==matrix[9]&&matrix[9]!=''){
    end_game(1,5,9);
 }
 else if(matrix[7]==matrix[5]&&matrix[5]==matrix[3]&&matrix[3]!=''){
    end_game(7,5,3);
 }
 Draw();
}

function Draw(){
   if(matrix[1]!=''&&matrix[2]!=''&&matrix[3]!=''&&matrix[4]!=''&&matrix[5]!=''&&matrix[6]!=''&&matrix[7]!=''&&matrix[8]!=''&&matrix[9]!=''){
      title.innerHTML='Game is Draw';
      setInterval(function(){title.innerHTML+='.'},1000);
     setTimeout(function(){location.reload()},3000)
    }
}

 function  calc_heuristic(gamer){
   let count=0;
   for(let i=0;i<10;i++){
      new_bord[i]=matrix[i];
   }
   for(let i=0;i<10;i++){
       if(new_bord[i]==''){
         new_bord[i]=gamer;
       }
   }

if(new_bord[1]==new_bord[2]&&new_bord[2]==new_bord[3]&&new_bord[3]!=''){
      count++;
 }
  if(new_bord[4]==new_bord[5]&&new_bord[5]==new_bord[6]&&new_bord[5]!=''){
   count++;
 }
  if(new_bord[7]==new_bord[8]&&new_bord[8]==new_bord[9]&&new_bord[8]!=''){
   count++;
 }
  if(new_bord[1]==new_bord[4]&&new_bord[7]==new_bord[4]&&new_bord[7]!=''){
   count++;
 }
  if(new_bord[2]==new_bord[5]&&new_bord[2]==new_bord[8]&&new_bord[8]!=''){
   count++;
 }
  if(new_bord[3]==new_bord[6]&&new_bord[6]==new_bord[9]&&new_bord[6]!=''){
   count++;
 }
  if(new_bord[1]==new_bord[5]&&new_bord[5]==new_bord[9]&&new_bord[9]!=''){
   count++;
 }
  if(new_bord[7]==new_bord[5]&&new_bord[5]==new_bord[3]&&new_bord[3]!=''){
    count++;
 }
   return count;
}

function send_player(){
if(start>=2){
    X=calc_heuristic('X');
  O=calc_heuristic('O');
E=X-O;
window.document.form1.txt2.value=X;
window.document.form1.txt3.value=O;
window.document.form1.txt4.value=E;
}

}

function game(id){
let element=document.getElementById(id);
if(player=='X'&& element.innerHTML==''){
   start++;
element.innerHTML='X';
player='O';

title.innerHTML='Now O Play';
}
else if(player=='O'&& element.innerHTML==''){
   start++;
  element.innerHTML='O';
   player='X';
   title.innerHTML='Now X Play';
    }
 Winner();  
}