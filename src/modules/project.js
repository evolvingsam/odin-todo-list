export default class Project {

    todos = {};
    constructor(title) {
        this.title = title;   
    }

    addTodo(todo, todoId) {
        this.todos[todoId] = todo;
    }

    getTodo(id) {
        return this.todos[id];
    }

    removeTodo(todoId) {
        delete this.todos[todoId];
    }

    getTodos() {
        return this.todos;
    }
}
