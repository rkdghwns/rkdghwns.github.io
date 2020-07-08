// let bthobj = document.querySelector("button");
// bthobj.addEventListener("click",function(){
//     document.body.style.backgroundColor="aqua";
// });
// document.addEventListener("click",function(){
//     document.body.style.backgroundColor="green";
// });

// let dog={
//     //속성 : 속성값,
//     name : '바둑이',
//     color : '갈색',
//     age : 3,
//     //=프로퍼티
//     say : function say(){
//         console.log( "say");
//     }
//     //=메소드
// };

// // console.log( dog.color );
// dog.say();

// console.log( dog );

// console.log(document);

// let hTag = document.getElementById("head");
// let tag = document.querySelector("#head");
// console.log( hTag );
// console.log(tag);

let arrDate=[1,2,3,4,5];
// //  초기값,조건,증감 
// for( let i=0 ; i<arrDate.length ; i++ )
// {
//     console.log( "i="+i );
//     console.log( "배열값은="+arrDate[i]);
// }


// // for ~in of
// for( let key in arrDate){
//     console.log("key="+key)
//     console.log("배경값은="+arrDate[key]);
// }

//for 
for( let value of arrDate ){
    console.log("key="+value);
}


// console.log(arrDate);

// console.log ( arrDate[0] );
// console.log ( arrDate.length );

// let litag = document.querySelectorAll("li");
// console.log(litag[2]);


// let num=0;
// while(true)
// {
//     num++;
//     console.log("num"+num);
//     if(num > 20){
//         break;
//     }
//     console.log("num"+num);
// }


//성적처리

// let score=95;
// switch(score)
// {
//     case 100 :
//         console.log("A");
//         break;
//     case 90 :
//         console.log("B");
//         break;
//     case 80 :
//         console.log("C");
//         break;
//     default :
//         console.log("F");
//         break;
// } 
