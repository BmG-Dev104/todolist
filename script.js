//selections for tabs
const tabAll = document.querySelector(".tab1")
const tabActive = document.querySelector(".tab2")
const tabCompleted = document.querySelector(".tab3")
//selections for tab buttons
const tabBtn1 = document.querySelector(".tabBtn1")
const tabBtn2 = document.querySelector(".tabBtn2")
const tabBtn3 = document.querySelector(".tabBtn3")
//selections for input element and add button
const inputEl = document.querySelector(".inputEl")
const addBTN = document.querySelector(".addBTN")



//show the  first tab on initial load
tabAll.classList.add("showTab")


tabBtn1.addEventListener("click", function () {
    tabAll.classList.add("showTab")
    tabActive.classList.remove("showTab")
    tabCompleted.classList.remove("showTab")

})

tabBtn2.addEventListener("click", function () {
    tabAll.classList.remove("showTab")
    tabActive.classList.add("showTab")
    tabCompleted.classList.remove("showTab")


})
tabBtn3.addEventListener("click", function () {
    tabAll.classList.remove("showTab")
    tabActive.classList.remove("showTab")
    tabCompleted.classList.add("showTab")

});
function renderTasks(userinput) {
    //Creating task left side
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    let pElement = document.createElement("p")
    pElement.textContent = userinput
    let taskElement = document.createElement("div")
    taskElement.classList.add("taskleftside")

    taskElement.appendChild(checkbox)
    taskElement.appendChild(pElement)

    console.log(taskElement)

    //creating taskrightside
    let writebTN = document.createElement("button")
    writebTN.classList.add("controlBTN")
    writebTN.classList.add("editbutton")
    writebTN.textContent = "✎"
    let deletebTN = document.createElement("button")
    deletebTN.classList.add("controlBTN")
    deletebTN.classList.add("editbutton")
    deletebTN.textContent = "🗑"

    let divtask = document.createElement("div")
    divtask.classList.add("taskRightside")
    divtask.appendChild(writebTN)
    divtask.append(deletebTN)
    console.log(divtask)
    //TAsk CHILD DIv
    let taskchidDIV = document.createElement("div")
    taskchidDIV.classList.add("taskchild")
    taskchidDIV.appendChild(taskElement)
    taskchidDIV.appendChild(divtask)
    tabAll.appendChild(taskchidDIV)


}

let taskArray = [ ]



function addTask() {
    let userinputvalue = inputEl.value;
    taskArray.push(userinputvalue);
    //clearin the input
    inputEl.value = "";
    console.log(taskArray);
//clearing exiting html
tabAll.innerHTML="";

    //
    for (let i=0;i<taskArray.length;i++){
renderTasks(taskArray[i])
    }

}
addBTN.addEventListener("click", function () {
    addTask();
});

inputEl.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();

    }
});

