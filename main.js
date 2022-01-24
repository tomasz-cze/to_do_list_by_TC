// data taken from html

const editBtnAccept = document.querySelector('.edit-btn accept')
const editBtnCancel = document.querySelector('.edit-btn cancel')

// global variables

let taskInput
let alert1
let addBtn
let tasksList
let newTask

//functions

const master = () => {
	PrepDOMElements()
	PrepDOMEvents()
}
const addTask = () => {
	if (taskInput.value !== '') {
		alert1.style.color = 'var(--dark)'
        alert1.textContent = ''
        newTask = document.createElement('li')
        newTask.textContent = taskInput.value
      tasksList.append(newTask)
      console.log(tasksList);
        
	} else {
        alert1.style.color = "red"
		alert1.textContent = 'Wpisz treść zadania!'
	}
    taskInput.value = ''
}

// function downloading data from elements
const PrepDOMElements = () => {
	taskInput = document.querySelector('.task-input')
	alert1 = document.querySelector('.alert1')
	addBtn = document.querySelector('.addBtn')
	tasksList = document.querySelector('ul')
  
}
// function listetning for events
const PrepDOMEvents = () => {
    addBtn.addEventListener('click', addTask)
}

// listeners
 


document.addEventListener('DOMContentLoaded', master)
