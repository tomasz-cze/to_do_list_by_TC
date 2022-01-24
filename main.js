// var data teken from html

const taskInput = document.querySelector('.task-input')
const alert1 = document.querySelector('.alert1')
const addBtn = document.querySelector('.addBtn')
const tasksList = document.querySelector('ul')
const editBtnAccept = document.querySelector('.edit-btn accept')
const editBtnCancel = document.querySelector('.edit-btn cancel')

// global variables 

let currentTask 
let tasksList = []


//functions


const master = () => {
    PrepDOMEvents()
    PrepDOMElements()
}

// function downloading data from elements
const PrepDOMElements = () => {
    
}
// function listetning for events
const PrepDOMEvents = () => {
    
}


const addTask = () => {
    currentTask = taskInput.value
  return currentTask
}


// listeners
console.log(currentTask);
addBtn.addEventListener('click', addTask)