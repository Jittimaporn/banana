function Hello(){

  alert("สวัสดีชาวโลก")

}




function Tocalsius(fahrenhist){

   
    let value = (fahrenhist - 32) * 5/9
    return value.toFixed(2) + " °C"
  
}
// function display(elementID, value){
//  document.getElementById(elementID).innerHTML = value
// }


function Tofahrenhist(Celsius){

    // let Celsius = prompt("กรุณากรอกข้อมูล : Celsius")
       let value = (Celsius * 9) / 5 + 32
       return value.toFixed(2) + " °F"
   
   } 

function display2(elementID, value){
    document.getElementById(elementID).innerHTML = value
   }


   function TocalsiusProgram(value){
       alert(Tocalsius(value))
   }

   function fahrenhistProgram(value){
    alert(Tofahrenhist(value))
}











// function seyHello(userName, lastName){

//     return " Hello " + userName + " " + lastName

// }
// function Getage(){

//     return 25
// }
// let userInput = prompt("Input your name :")

// alert(seyHello(userInput , " Kinglek")) 




// function SayHello() {

//     alert("Hello")

// }
// SayHello()









// while(prompt("ถ้าจะออกพิมพ์ OK") != "OK"){
//     document.getElementById("result").innerHTML += " ไม้ได้กด OK " +"<br>"

// }







// หัวก้อย
// let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ")
// for(i= 1; i <=round; i++ ){
//     var answer= prompt("หัว หรือ ก้อย พิมพ์มาเลย")
//     var random_answer = ""
//     if((Math.floor)(Math.random() * 10) <= 4){

//         random_answer = "หัว"
        
//     }
//         // หัว
       
//         else{

//             random_answer = "ก้อย"

//         }
//         if(answer == random_answer){
//             alert("ตอบถูกยินดีด้วย !")

//         }
//         else{

//             alert("เสียใจด้วยคุณตอบผิด !")

           

//         }

//         console.log(random_answer +" : " + answer)

        

//         document.getElementById("game-list").innerHTML =  answer
//         document.getElementById("result").innerHTML =  "คำตอบที่ถูกต้อง: " + random_answer

// }






// ------------การคำนวนราคาสินค้า-------------

// let qrt = prompt("จำนวนสินค้า")
// let sum = 0

// for(var i = 1; i <= qrt; i ++ ){

    
//     let item_price = prompt("ราคาสินค้าชิ้นที่" + i )
//     sum = sum + parseInt(item_price) 
//     document.getElementById("price-list").innerHTML +=  "รายการสินค้าชิ้นที่ " +   i + ": "+ "&nbsp;" + item_price + " บาท" +"<br>"
//     document.getElementById("result").innerHTML =  "ราคารวม " + sum + " บาท"
    
//     console.log(sum)

// }



// -----------loop for-------------

// for(var count = 0; count <5; count ++){
  
//     console.log("count" + count)
// }





// -------------- คำนวนเกรด -------------------/*/

// let score = prompt("คะแนนของคุณ : ")
// if(score >= 80){
//     document.getElementById("result").innerHTML = "คุณได้เกรด A"

// }
// else if(score >= 70){
    
//     document.getElementById("result").innerHTML = "คุณได้เกรด B"
// }
// else if(score >= 60){
    
//     document.getElementById("result").innerHTML = "คุณได้เกรด C"
// }
// else if(score >= 50){
    
//     document.getElementById("result").innerHTML = "คุณได้เกรด D"
// }

// else{
//     document.getElementById("result").innerHTML = "คุณสอบไม่ผ่าน"
   
// }


// ---------------------------------------------------------------------




// ตรวจรางวัล ลอตเตอรี่

//  let number = prompt( "กรุณากรอกเลขของคุณ")
//  let lotto = 245
//  let rendom = Math.floor(Math.random() * 1000)
//  document.getElementById("lotto").innerHTML = lotto
//  document.getElementById("number").innerHTML = number
     

// if(number == lotto){
//     document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัล เลขท้าย 3 ตัว"

// }
// else{
//     document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"

// }