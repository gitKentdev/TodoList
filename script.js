const inputValue = document.getElementById('inputValue');
const addButton = document.getElementById('addButton');
const eventList = document.getElementById('list'); 
const clearList = document.getElementById('clearList');


addButton.addEventListener('click', ()=>{
	if (inputValue.value.length == 0){
		return 
	} else {
		const newEvent = document.createElement('div');
		newEvent.setAttribute('class', 'eventList')
		const id = Math.random();
		newEvent.innerHTML = `
			<h4 id="${id}">${inputValue.value}</h4>
			<button type="button" id="${id}" onclick="eventDelete(id)">X</button>
			<button type="button" id="${id}" onclick="eventDone(id)">Done</button>
				`
		inputValue.value = '';
		eventList.appendChild(newEvent);
	};
		
});

clearlist.addEventListener('click', ()=>{
	eventList.innerHTML = '';
	inputValue.value = '';
});

function eventDelete(id){
	const event = document.getElementById(id);
	eventList.removeChild(event.parentElement);
};

function eventDone(id){
	const event = document.getElementById(id);
	event.parentElement.firstElementChild.style.color = '#5c5'
};