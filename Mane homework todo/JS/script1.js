const form = document.forms[0];
const root = document.getElementById('root');

form.addEventListener('submit', event => {
	event.preventDefault();

	const inputValue = form[0].value.trim();
	if (inputValue === '') {
		alert("to do list can't be empty");
		inputValue.reset();
	}
	root.prepend(createToDoList(inputValue));

	form.reset();
});

function createToDoList(inputValue) {
	const listItem = document.createElement('div');
	listItem.classList.add('toDoItem');
	const p = document.createElement('p');
	p.innerText = inputValue;

	const checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	checkBox.classList.add('checked');

	const delIcon = document.createElement('span');
	delIcon.classList.add('delBtn');
	delIcon.innerText = 'X';

	listItem.append(p, checkBox, delIcon);
	return listItem;
}

root.addEventListener('click', event => {
	if (event.target.classList.contains('delBtn')) {
		event.target.parentElement.remove();
	}

	if (event.target.localName === 'input') {
		const p = event.target.previousElementSibling;
		if (event.target.checked) {
			p.style.textDecoration = 'line-through';
			p.style.color = 'green';
		} else {
			p.style.textDecoration = 'none';
		}
	}
});
