let allItems = [];
let selectMe =""
const workOut=()=> {
   if(selectMe ==  false){
    box1.style.background = "white"
    selectMe = true
    allItems.push(b1.innerText)
    console.log(allItems);
   }
   else if (selectMe == true){
    box1.style.background = "transparent"
    selectMe = false
    allItems.splice(b1.innerText)
   }
}
const eatFood =()=> {
   if(selectMe == false){
    box2.style.background = "white"
    selectMe = true
    allItems.push(b2.innerText)
    console.log(allItems);
   }else if(selectMe == true){
    box2.style.background = "transparent"
    selectMe = false
    allItems.splice(b2.innerText)
   }
}
const artDesign=()=> {
   if(selectMe == false){
    box3.style.background = "white"
    selectMe = true
    allItems.push(b3.innerText)
    console.log(allItems);
   }else if(selectMe == true){
    box3.style.background = "transparent"
    selectMe = false
    allItems.splice(b3.innerText)
   }
}
const readBook=()=> {
   if(selectMe == false){
    box4.style.background = "white"
    selectMe = true
    allItems.push(b4.innerText)
    console.log(allItems);
   }else if(selectMe == true){
    box4.style.background = "transparent"
    selectMe = false
    allItems.splice(b4.innerText)
   }
}
const traveling=()=> {
   if(selectMe == false){
    box5.style.background = "white"
    selectMe = true
    allItems.push(b5.innerText)
    console.log(allItems);
   }else if(selectMe == true){
    box5.style.background = "transparent"
    selectMe = false
    allItems.splice(b5.innerText)
   }
}
const gaming=()=> {
   if(selectMe == false){
    box6.style.background = "white"
    selectMe = true
    allItems.push(b6.innerText)
    console.log(allItems);
   }else if(selectMe == true){
    box6.style.background = "transparent"
    selectMe = false
    allItems.splice(b6.innerText)
   }
}
const houseChores=()=> {
   if(selectMe == false){
    box7.style.background = "white"
    selectMe = true
    allItems.push(b7.innerText)
    console.log(allItems);
   }else if(selectMe == true){
    box7.style.background = "transparent"
    selectMe = false
    allItems.splice(b7.innerText)
   }
}

const clock=()=>{
   if(selectMe == false){
    box8.style.background = "white"
    selectMe = true
    allItems.push(b8.innerText)
    
   }else if(selectMe == true){
    box8.style.background = "transparent"
    selectMe = false
    allItems.splice(b8.innerText)
   }
}

function createtask() {
   localStorage.setItem("todoStore", JSON.stringify(allItems))
    window.location = "todopage3.html"
  }

      //   let todo = localStorage.getItem()
   //   let form = document.getElementById("form")
      // let text = document.getElementById("textInput").value
