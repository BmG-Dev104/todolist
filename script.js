//second try
const tasktap1 = document.querySelector(".tab1")
const tasktap2 = document.querySelector(".tab2")
const tasktap3 = document.querySelector(".tab3")
const Btn1 = document.querySelector(".tabBtn1")
const Btn2 = document.querySelector(".tabBtn2")
const Btn3 = document.querySelector(".tabBtn3")
const inputEl = document.querySelector(".inputEl")
const addBTN = document.querySelector(".addBTN")
const lightDark = document.querySelector(".lightDark")
const ClearBTN = document.querySelector(".ClearBTN")
const exportBTN = document.querySelector(".exportBTN")
const importBTN = document.querySelector(".importBTN")


//making the first tab to  show
tasktap1.classList.add("showTab");

//able different tabs to show while on the page
Btn1.addEventListener("click", function () {
    tasktap1.classList.add("showTab")
    tasktap2.classList.remove("showTab")
    tasktap3.classList.remove("showTab")
})
Btn2.addEventListener("click", function () {
    tasktap1.classList.remove("showTab")
    tasktap2.classList.add("showTab")
    tasktap3.classList.remove("showTab")

})
Btn3.addEventListener("click", function () {
    tasktap1.classList.remove("showTab")
    tasktap2.classList.remove("showTab")
    tasktap3.classList.add("showTab")

})

function renderTasks(userinput, id) {
    console.log(userinput)
    if(userinput. length<1){
        return
    }
    let inputbox = document.createElement("input")
    inputbox.type = "checkbox"
    let pElement = document.createElement("p")
    pElement.textContent = userinput
    let divbox1 = document.createElement("div")
    divbox1.classList.add("taskleftside")
    divbox1.appendChild(inputbox)
    divbox1.appendChild(pElement)

    let buttonbox1 = document.createElement("button")
    buttonbox1.classList.add("controlBTN")
    buttonbox1.classList.add("editbutton");
    buttonbox1.textContent = "✎"
    buttonbox1.onclick = edittask
    let buttonbox2 = document.createElement("button")
    buttonbox2.classList.add("controlBTN")
    buttonbox2.classList.add("deletebutton")
    buttonbox2.textContent = "🗑"
    buttonbox2.onclick = deletetask

    let divbox2 = document.createElement("div")
    divbox2.classList.add("taskRightside")
    divbox2.appendChild(buttonbox1)
    divbox2.appendChild(buttonbox2)

    let genDIV = document.createElement("div")
    genDIV.classList.add("taskchild")
    genDIV.id = id
    genDIV.appendChild(divbox1)
    genDIV.appendChild(divbox2)

    tasktap1.appendChild(genDIV)


}
//empty arry that will hold all tasks text
let tasksarry = [];

function addtask() {
    //Get the text that the user typed in the input
    let userinputvalue = inputEl.value;
    //Add this new task to our  tasksarry
    console.log(tasksarry)
    tasksarry.push(userinputvalue);
    console.log(tasksarry)
    //clear the input box  so it`s empty and ready for the next task
    inputEl.value = "";
    //log the array to  see all tasks(for debugging)
    //clearing all existing tasks from  the "All Tasks"tab
    //(we`re going to redraw everything from scratch)
    tasktap1.innerHTML = "";
    //Loop through every task in the array
    for (let i = 0; i < tasksarry.length; i++) {
        //for each task, call renderTask()to create and display it
        renderTasks(tasksarry[i], i);
    }
}

//when the "Add Task"button is clicked ,run the addtask function
addBTN.addEventListener("click", function () {
    addtask();
});

//when a key is pressed while the input box is focused 
inputEl.addEventListener("keypress", function (e) {
    //if the key pressed was "Enter"
    if (e.key === "Enter") {
        addtask();//Run the addTask function
    }
})


function edittask(e) {
    // alert("Edit Task Functionality coming soon")
    let editbutton = e.target
    let taskRightside = editbutton.parentElement
    let taskchild = taskRightside.parentElement
}


function deletetask(e) {
    //alert("Delete Task Functionality coming soon!")
    let deletebutton = e.target
    let taskRightside = deletebutton.parentElement
    let taskchild = taskRightside.parentElement
    //DELETE 
    let id = taskchild.id
    tasksarry.splice(id, 1)
    addtask()
}












function imposters() {
    alert("make sure you arent doing anything against time")
}
ClearBTN.addEventListener("click",function(){
    tasksarry=[]
    addtask()

    
})