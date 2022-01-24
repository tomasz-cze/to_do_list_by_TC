// data taken from html

const editBtnAccept = document.querySelector('.edit-btn accept')
const editBtnCancel = document.querySelector('.edit-btn cancel')

// global variables

let taskInput
let alert1
let addBtn
let tasksList
let newTask
let newTools

//functions

const master = () => {
	PrepDOMElements()
	PrepDOMEvents()
}

// function adding  div with tools to new task

const addTools = () => {
	newTools = document.createElement('div')
	newTask.append(newTools)
	newTools.classList.add('tools')
	newComplet = document.createElement('button')
	newTools.append(newComplet)
	newComplet.innerHTML = '<i class="far fa-check-circle"></i>'
	newComplet.classList.add('complete')
	newEdit = document.createElement('button')
	newEdit.textContent = 'EDYTUJ'
	newTools.append(newEdit)
	newEdit.classList.add('edit')
	newDelete = document.createElement('button')
	newDelete.innerHTML = '<i class="fas fa-times"></i>'
	newTools.append(newDelete)
	newDelete.classList.add('delete')
}

// function adding new task
const addTask = () => {
	if (taskInput.value !== '') {
		alert1.style.color = 'var(--dark)'
		alert1.textContent = ''
		newTask = document.createElement('li')
		newTask.textContent = taskInput.value
		tasksList.append(newTask)
		addTools()
	} else {
		alert1.style.color = 'red'
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
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addTask()
    }
})
