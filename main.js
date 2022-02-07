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
let newTimeLeftTool
let newTimeLeft
let newGoalDay
let newGoalMonth
let newGoalYear
let goalTimeTool
let goalTimeData
let goalWeekDay
let goalTime
let dayName
let setGoalDay
let setGoalMonth
let setGoalYear
let editWindow
let editInput
let editAlert
let editBody
let editedTask
let s = 3
let m = 4
let h = 5
//functions

const master = () => {
	PrepDOMElements()
	PrepDOMEvents()
}

// function adding  div with tools to new task

const addTools = () => {



// all tools created
	newTools = document.createElement('div')
	newTools.classList.add('tools')
	newTask.append(newTools)

	// new goalTime tools created
	newGoalTimeTool = document.createElement('div')
	newGoalTimeTool.classList.add('goalTimeTool')
	newGoalTimeTool.textContent = 'Termin wykonania zadania'
	// new

	newGoalData = document.createElement('div')
	newGoalData.classList.add('goalData')
	//
	newGoalDay = document.createElement('span')
	newGoalDay.classList.add('goalDay')
	newGoalDay.textContent = setGoalDay.value + "-"
	newGoalMonth = document.createElement('span')
	newGoalMonth.classList.add('goalMonth')
	newGoalMonth.textContent = setGoalMonth.value + "-"
	newGoalYear = document.createElement('span')
	newGoalYear.classList.add('goalYear')
	newGoalYear.textContent = setGoalYear.value 

	newGoalData.append(newGoalDay, newGoalMonth, newGoalYear)

	newGoalWeekDay = document.createElement('div')
	newGoalWeekDay.classList.add('goalWeekDay')
	newGoalWeekDay.textContent = dayName

	newGoalTime = document.createElement('div')
	newGoalTime.classList.add('goalTime')

	//new Goal time tools added
	newGoalTimeTool.append(newGoalData, newGoalWeekDay, newGoalTime)

	// new timeLeft tool created
	newTimeLeftTool = document.createElement('div')
	newTimeLeftTool.classList.add('timeLeftTool')
	newTimeLeftTool.textContent = 'Pozostało czasu:'
	newTimeLeft = document.createElement('div')
	newTimeLeft.classList.add('timeLeft')
	newTimeLeftTool.append(newTimeLeft)
	newTimeLeft.textContent = `${h}h ${m}m ${s}s`

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
	newTools.append(newGoalTimeTool,newTimeLeftTool, newComplet, newEdit, newDelete)
}

// function adding new task
const addTask = () => {
	if (taskInput.value !== '') {
		alert1.style.color = 'var(--dark)'
		alert1.textContent = ''
		newTask = document.createElement('li')
		newTask.textContent = taskInput.value
		tasksList.append(newTask)
		getWeekDay(setGoalYear.value, setGoalMonth.value, setGoalDay.value)
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
		e.target.closest('li').classList.toggle('complete')
	} else if (e.target.matches('.edit')) {
		showEdit(e)
	} else if (e.target.matches('.delete')) {
		e.target.closest('li').remove()
	}
}

//function checking which day of week is in task goal time

const getWeekDay = (y,m,d) => {
	let setDate = new Date(`${y}- ${m}- ${d}`)	
	let weekDay = setDate.getDay()
	switch (weekDay) {
		case 0:
		dayName = "Niedziela";
		break;
	  case 1:
		dayName = "Poniedziałek";
		break;
	  case 2:
		dayName = "Wtorek";
		break;
	  case 3:
		dayName = "Środa";
		break;
	  case 4:
		dayName = "Czwartek";
		break;
	  case 5:
		dayName = "Piątek";
		break;
	  case 6:
		dayName = "Sobota";
			break;
	
		default:
			break;
	}
	}

// function showing editWindow
const showEdit = e => {
	editedTask = e.target.closest('li')
	editInput.value = editedTask.firstChild.textContent
	editWindow.style.display = 'flex'
}

// function closing editWindow

const closeEdit = () => {
	editWindow.style.display = 'none'
}
// function changing Task by editWindow

const editTask = e => {
	editedTask.firstChild.textContent = editInput.value
	// editedTask.firstChild.textContent =
}
//FUNCTION CHECKING WHICH BUTTON IS CLICKED in edit Window

const checkEdit = e => {
	if (e.target.matches('.accept') && editInput.value !== '') {
		editTask()
		closeEdit()
	} else if (e.target.matches('.cancel')) {
		closeEdit()
	}
}

// function downloading data from elements
const PrepDOMElements = () => {
	taskInput = document.querySelector('.task-input')
	alert1 = document.querySelector('.alert1')
	addBtn = document.querySelector('.addBtn')
	tasksList = document.querySelector('ul')
	editBody = document.querySelector('.editBody')
	editWindow = document.querySelector('.editWindow')
	editInput = document.querySelector('.editInput')
	setGoalDay = document.querySelector('#eventDay')
	setGoalMonth = document.querySelector('#eventMonth')
	setGoalYear = document.querySelector('#eventYear')
	
	
}
// function listetning for events
const PrepDOMEvents = () => {
	addBtn.addEventListener('click', addTask)
	tasksList.addEventListener('click', checkTools)
	editBody.addEventListener('click', checkEdit)
}

// listeners

document.addEventListener('DOMContentLoaded', master)
document.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		addTask()
	}
})

// -------------------------------------------------------------------
//
// code for left side with weather and time
//
// -------------------------------------------------------------------

const input = document.querySelector('input')
const btn = document.querySelector('button')
const weatherImg = document.querySelector('.weatherImg img')
const cityName = document.querySelector('.cityName')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temp')
const humid = document.querySelector('.humidity')
const pres = document.querySelector('.pressure')
const wind = document.querySelector('.wind')
const currentTime = document.querySelector('.currentTime')

// Api most important information needed to fetch
const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=5b61511832775aa861c9d464a8fef32f'
const API_UNITS = '&units=metric'

// main function with checking weather in OpenWeather API
const getWeather = () => {
	const city = input.value || 'Poznań'
	const URL = API_LINK + city + API_KEY + API_UNITS

	//used axios do get API data
	axios.get(URL).then(res => {
		const weat = res.data.weather[0].description
		const hum = res.data.main.humidity
		const temp = res.data.main.temp
		const icon = res.data.weather[0].icon
		const pressure = res.data.main.pressure
		const windSpeed = res.data.wind.speed

		pres.textContent = pressure + ' hPa'
		wind.textContent = windSpeed + ' m/s'
		weatherImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
		humid.textContent = hum + '%'
		weather.textContent = weat
		temperature.textContent = Math.floor(temp) + '°C'
		cityName.textContent = res.data.name
	})
}
// function on enter keydown
const enterKey = e => {
	if (e.key === 'Enter') {
		getWeather()
	}
}
getWeather()

// listeners
btn.addEventListener('click', getWeather)
input.addEventListener('keyup', enterKey)

//
//
// time showing
let time
const actualyTime = document.querySelector('.currentTime')

const showTime = () => {
	const date = new Date()
	let m = date.getMinutes()
	let h = date.getHours()
	let s = date.getSeconds()
	let time

	m = m < 10 ? '0' + m : m
	h = h < 10 ? '0' + h : h
	s = s < 10 ? '0' + s : s

	time = h + ':' + m + ':' + s
	actualyTime.innerHTML = time
}
showTime()
setInterval(showTime, 1000)
