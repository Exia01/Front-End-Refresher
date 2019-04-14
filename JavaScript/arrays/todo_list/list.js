window.setTimeout(function() {
  let count = 0;
  let todos = [];
  let input = prompt('What would you like to do?');
  while (input !== 'quit') {
    //handles input
    if (input == 'list') {
      listTodos(todos);
    } else if (input === 'new') {
      addTodo(todos);
    } else if (input === 'delete') {
        deleteTodo(todos)
    }
    input = prompt('What would you like to do? \n');
  }
}, 4000);

function listTodos(todos) {
  todos.forEach((todo, idx) => {
    console.log(`${idx}: ${todo}`);
  });
}

function addTodo(todos) {
  let newTodo = prompt('Enter new todo');
  todos.push(newTodo);
  console.log('List updated \n');
}

function deleteTodo(todos) {
  // asks for an index of todo, then deletes it
  let index = prompt('Enter index of Todo to delete');
  //delete todo
  //using splice
  todos.splice(index, 1); //index followed by how many items
  console.log('List updated \n');
}
