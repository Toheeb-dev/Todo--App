
let Input = []
    var editedMe = 0
    let allItems = []
     allItems = JSON.parse(localStorage.getItem("todoStore"))
     const displayTask =()=>{
      disp.innerHTML = ""
      Input.map((item, index,array)=>{
        disp.innerHTML += `<div >
        <div class="task2">
        <h3 class="fw-bold">${item.text}</h3>
       <h3 class="small text-secondary"> ${item.date}</h3>
        <h5>${item.textarea} <br></h5>
        <div class="d-flex">
        <p class="mx-2" onclick="editTask(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal1" id="edit"><i class="fa-solid fa-edit"></i></p>
        <p class="mx-2"><i onclick="deleteTask(${index})" id="delete" class="fa-solid fa-trash-alt"></i></p>
        </div>
      </div>
    </div> <br>` 
  
      })
     }

     if (localStorage.userInput){
      Input = JSON.parse(localStorage.getItem("userInput"))
      displayTask()
    }
     
     textInput.value = allItems
      
    function addTodo() {
      // Input = []
      var form = {
        text:textInput.value,
        date : dateInput.value,
        textarea : textarea.value,
      }
      
      console.log(Input)
      if (dateInput.value ==""||textarea.value =="") {
        invalidInputs.innerHTML = `<h5 class="text-danger">Please fill in the details</h5>`
      
      }
        else {
      
          Input.push(form)

        dateInput.value =""
        textarea.value =""
        displayTask()
        localStorage.setItem(("userInput"), JSON.stringify(Input))
       }
      
      
        }

        const deleteTask =(deleteIt)=>{
          Input.splice(deleteIt,1)
          displayTask()
          
         }
        const editTask =(editMe)=>{
          // e.parentElement.parentElement.parentElement.remove()
          editedMe = editMe
          editInp.value = Input[editMe].text
          editDate.value = Input[editMe].date
          editText.value = Input[editMe].textarea 
        }
        const updateMe = ()=>{
           Input[editedMe] = {
            text: editInp.value,
            date : editDate.value,
            textarea : editText.value,
          }
          // alert(editedMe)
          displayTask()
        }
        function select() {
          window.location="todopage.html"
        }
        //  = JSON.parse(localStorage.getItem("taskStore"))