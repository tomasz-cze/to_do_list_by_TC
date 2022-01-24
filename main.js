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
	newTools.classList.add('tools')
	newTask.append(newTools)
	newComplet = document.createElement('button')
	newComplet.innerHTML = '<i class="far fa-check-circle"></i>'
	newComplet.classList.add('complete')
	newTools.append(newComplet)
	newEdit = document.createElement('button')
	newEdit.textContent = 'EDYTUJ'
	newTools.append(newEdit)
	newEdit.classList.add('edit')
	newDelete = document.createElement('button')
	newDelete.innerHTML = '<i class="fas fa-times"></i>'
	newTools.append(newDelete)
	newDelete.classList.add('delete')

	// shorter way of writing above
	newTools.append(newComplet, newEdit, newDelete)
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

//FUNCTION CHECKING WHICH BUTTON IS CLICKED

const checkTools = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
	} else if (e.target.matches('.delete')) {
	}
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
	tasksList.addEventListener('click', checkTools)
}

// listeners

document.addEventListener('DOMContentLoaded', master)
document.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		addTask()
	}
})
