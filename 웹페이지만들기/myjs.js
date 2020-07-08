let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
let index = 0;
let max = colors.length;

function changeColor(){
     if( index != max){
	console.log( index);
	document.body.style.backgroundColor = colors[ index];
	index++;
     }
     else{
	alert("배경 변경하기 완료");
     }
}