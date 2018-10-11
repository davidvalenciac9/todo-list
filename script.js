var todos = [];
var input = 'new';
window.setTimeout(function() {

	while (input != 'quit') {
		input = prompt('Que quieres hacer?');
		if (input === 'new') {
			newTodo();
		} else if (input === 'list') {
			listTodo();
		} else if (input === 'delete') {
			deleteTodo();
		}
	}
	console.log('You have quit');

function newTodo(){
	todos.push(prompt('add a todo'));
	console.log('Todo Added')
}

function listTodo(){
	console.log('**********');
	todos.forEach(function(todo, index){
	console.log(index + ': ' + todo);
	})
	console.log('**********');
}

function deleteTodo(){
	var del = prompt('Que todo quieres borrar index');
	todos.splice(del, 1);
	console.log('Todo eliminado');
}

}, 500);