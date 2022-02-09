// date taken from html

const editBtnAccept = document.querySelector('.edit-btn accept')
const editBtnCancel = document.querySelector('.edit-btn cancel')

// global variables

let taskInput
let alert1
let addBtn
let tasksList
let showAddBtn
let todoList
let goalDay
let goalMonth
let goalYear
let newTask
let newTools
let newTimeLeftTool
let newTimeLeft
let newGoalDay
let newGoalMonth
let newGoalYear
let datepickerValue
let datepickerInput
let goalTimeTool
let goalTimeDate
let goalWeekDay
let goalTime
let dayName
let setGoalDay
let setGoalMonth
let setGoalYear
let editWindow
let editInput
let editInputDate
let editAlert
let editBody
let editedTask
let liList
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
	datepickerInput = document.querySelector('.datePicker')
	datepickerValue = datepickerInput.value

	// all tools created
	newTools = document.createElement('div')
	newTools.classList.add('tools')
	newTask.append(newTools)
	// new goalTime tools created
	newGoalTimeTool = document.createElement('div')
	newGoalTimeTool.classList.add('goalTimeTool')
	newTools.append(newGoalTimeTool)
	// new
	newGoalDate = document.createElement('div')
	newGoalDate.classList.add('goaldate')
	newGoalDate.textContent = datepickerValue
	


	newGoalWeekDay = document.createElement('div')
	newGoalWeekDay.classList.add('goalWeekDay')
	newGoalWeekDay.textContent = dayName

	//new Goal time tools added
	newGoalTimeTool.append(newGoalDate, newGoalWeekDay)

	// new timeLeft tool created
	newTimeLeftTool = document.createElement('div')
	newTimeLeftTool.classList.add('timeLeftTool')
	newTools.append(newTimeLeftTool)
	newTimeLeft = document.createElement('div')
	newTimeLeft.classList.add('timeLeft')
	newTimeLeftTool.append(newTimeLeft)

	newTimeLeftNameCardD = document.createElement('div')
	newTimeLeftNameCardD.classList.add('dName')
	newTimeLeftNameCardD.textContent = 'Dni:'
	newTimeLeftNameCardD.classList.add('timeLeftNameCard')
	newDivD = document.createElement('div')
	newDivD.classList.add('d')
	newDivD.classList.add('timeSmallCard')

	newTimeLeftNameCardH = document.createElement('div')
	newTimeLeftNameCardH.classList.add('hName')
	newTimeLeftNameCardH.textContent = 'Godzin:'
	newTimeLeftNameCardH.classList.add('timeLeftNameCard')
	newDivH = document.createElement('div')
	newDivH.classList.add('h')
	newDivH.classList.add('timeSmallCard')

	newTimeLeftNameCardM = document.createElement('div')
	newTimeLeftNameCardM.classList.add('mName')
	newTimeLeftNameCardM.textContent = 'Minut:'
	newTimeLeftNameCardM.classList.add('timeLeftNameCard')
	newDivM = document.createElement('div')
	newDivM.classList.add('m')
	newDivM.classList.add('timeSmallCard')

	newTimeLeftNameCardS = document.createElement('div')
	newTimeLeftNameCardS.classList.add('sName')
	newTimeLeftNameCardS.textContent = 'Sekund:'
	newTimeLeftNameCardS.classList.add('timeLeftNameCard')
	newDivS = document.createElement('div')
	newDivS.classList.add('s')
	newDivS.classList.add('timeSmallCard')

	newTimeLeft.append(
		newTimeLeftNameCardD,
		newDivD,
		newTimeLeftNameCardH,
		newDivH,
		newTimeLeftNameCardM,
		newDivM,
		newTimeLeftNameCardS,
		newDivS
	)

	newComplet = document.createElement('button')
	newComplet.innerHTML = '<i class="far fa-check-circle"></i>'
	newComplet.classList.add('complete')
	newTools.append(newComplet)
	newEdit = document.createElement('button')
	newEdit.innerHTML = `<i class="fas fa-edit"></i`
	newTools.append(newEdit)
	newEdit.classList.add('edit')
	newDelete = document.createElement('button')
	newDelete.innerHTML = '<i class="fas fa-times"></i>'
	newTools.append(newDelete)
	newDelete.classList.add('delete')

	// shorter way of writing above
	// newTools.append(newGoalTimeTool, newTimeLeftTool, newComplet, newEdit, newDelete)
}

// function adding new task
const addTask = () => {
	if (taskInput.value !== '') {
		alert1.style.color = 'var(--dark)'
		alert1.textContent = ''
		newTask = document.createElement('li')
		newTask.textContent = taskInput.value
		tasksList.append(newTask)
		datepickerInput = document.querySelector('.datePicker')
		datepickerValue = datepickerInput.value
		getWeekDay(datepickerValue)
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
		// e.target.closest('li').remove()
		confirmDelete(e)
	}
}

//function checking which day of week is in task goal time

const getWeekDay = (a) => {
	let setDate = new Date(`${a}`)
	let weekDay = setDate.getDay()
	switch (weekDay) {
		case 0:
			dayName = 'Niedziela'
			break
		case 1:
			dayName = 'Poniedziałek'
			break
		case 2:
			dayName = 'Wtorek'
			break
		case 3:
			dayName = 'Środa'
			break
		case 4:
			dayName = 'Czwartek'
			break
		case 5:
			dayName = 'Piątek'
			break
		case 6:
			dayName = 'Sobota'
			break

		default:
			break
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
	const editedDay = editedTask.querySelector('.goalDay')
	const newEditDay = editInputDate.querySelector('.editEventDay')
	editedDay.textContent = newEditDay.value + '-'

	const editedMonth = editedTask.querySelector('.goalMonth')
	const newEditMonth = editInputDate.querySelector('.editEventMonth')
	editedMonth.textContent = newEditMonth.value + '-'

	const editedYear = editedTask.querySelector('.goalYear')
	const newEditYear = editInputDate.querySelector('.editEventYear')
	newEditYear.textContent = editedYear.value
	// console.log(newEditDay)
	// console.log(newEditMonth)
	// console.log(newEditYear)
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

//function showing adding task

const showAddTask = () => {
	todoList.classList.toggle('hideShowTodo')
}

// function downloading date from elements
const PrepDOMElements = () => {
	taskInput = document.querySelector('.task-input')
	alert1 = document.querySelector('.alert1')
	addBtn = document.querySelector('.addBtn')
	tasksList = document.querySelector('ul')
	editBody = document.querySelector('.editBody')
	editWindow = document.querySelector('.editWindow')
	editInput = document.querySelector('.editInput')
	editInputDate = document.querySelector('.editDate')
	setGoalDay = document.querySelector('#eventDay')
	setGoalMonth = document.querySelector('#eventMonth')
	setGoalYear = document.querySelector('#eventYear')
	todoList = document.querySelector('.todolist')
	showAddBtn = document.querySelector('.addTaskButtonShow')
}
// function listetning for events
const PrepDOMEvents = () => {
	addBtn.addEventListener('click', addTask)
	tasksList.addEventListener('click', checkTools)
	editBody.addEventListener('click', checkEdit)
	showAddBtn.addEventListener('click', showAddTask)
}


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
// const enterKey = e => {
// 	if (e.key === 'Enter') {
// 		getWeather()
// 	}
// }
getWeather()

// listeners
btn.addEventListener('click', getWeather)
// input.addEventListener('keyup', enterKey)

//-------------------------------------------------------
// function checikng time left

//funkcja sprawdzający pozostaly czas
let hourLeft = document.querySelector('.h')
let minutLeft = document.querySelector('.m')
let secondLeft = document.querySelector('.s')
let taskTime

const checkTime = e => {
	// 	let setDay = e.querySelector('.goalDay').innerHTML
	// 	let setMonth = e.querySelector('.goalMonth').innerHTML
	// 	let setYear = e.querySelector('.goalYear').innerHTML
	let setLeftDay = e.querySelector('.d')
	let setLeftHour = e.querySelector('.h')
	let setLeftMinute = e.querySelector('.m')
	let setLeftSecond = e.querySelector('.s')
	let setDate = e.querySelector('.goaldate')
	let timeToCheck = setDate.textContent
	taskTime = new Date(`${timeToCheck}`)
	const currentTimeSystem = new Date()
	let result = taskTime - currentTimeSystem
	const day = Math.floor(result / 1000 / 60 / 60 / 24)
	const hour = Math.floor(result / 1000 / 60 / 60) % 24
	const minute = Math.floor(result / 1000 / 60) % 60
	const second = Math.floor(result / 1000) % 60

	setLeftDay.textContent = day
	setLeftHour.textContent = hour
	setLeftMinute.textContent = minute
	setLeftSecond.textContent = second
}
const checkLi = () => {
	liList = document.querySelectorAll('li')
}
const setingTime = () => {
	liList = document.querySelectorAll('li')

	liList.forEach(el => {
		checkTime(el)
	})
	checkLi()
}

setInterval(setingTime, 1000)
clearInterval(setingTime)

const confirmDelete = e => {
	let textConfirm = 'Czy na pewno chcesz skasować zadanie?'
	if (confirm(textConfirm) == true) {
		e.target.closest('li').remove()
	}
}

//datapicker

//-------------------------------------------------
// main listeners

document.addEventListener('DOMContentLoaded', master)

document.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		addTask()
	}
})

// code to datepicker
const elem = document.querySelector('input[name="datepicker"]')
const datepicker = new Datepicker(elem, {
	autohide: true,
	format: `yyyy-mm-dd`,
})
//-------------------------------------------------
// main listeners

document.addEventListener('DOMContentLoaded', master)

document.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		addTask()
	}
})
