import Task from "./task";
import Project from "./project";

export default class TodoManager {
    #projects = {};
    #projectCount = 0;
    #taskCount = 0;

    set projectCount(count) {
        this.#projectCount = count;
    }
    set taskCount(count) {
        this.#taskCount = count;
    }
    get projectCount() {
        return this.#projectCount;
    }
    get taskCount() {
        return this.#taskCount;
    }

    set projects(list) {
        if (typeof list !== 'object' || list === null || Array.isArray(list)) {
            throw new Error('Invalid projects list');
        }
        this.#projects = list;
    }

    newTask(projectId, title, description, dueDate, priority) {
        const task = new Task(title);
        if (description !== null) task.description = description;
        if (dueDate !== null) task.dueDate = dueDate;
        if (priority !== null) task.priority = priority;
        this.#projects[projectId].addTask(task, this.#taskCount++);
        // return this.#taskCount - 1;
    
    }

    getTask(projectId, taskId) {
        let task = this.#projects[projectId].getTask(taskId);
        return { ...task };
    }
    editTask(projectId, taskId, title, description, dueDate, priority) {
        let task = this.#projects[projectId].getTask(taskId);
        if (title !== null) task.title = title;
        if (description !== null) task.description = description;
        if (dueDate !== null) task.dueDate = dueDate;
        if (priority !== null) task.priority = priority;

    }
    removeTask(projectId, taskId) {
        this.#projects[projectId].removeTask(taskId);
    }
    completeTask(projectId, taskId) {
        let task = this.#projects[projectId].getTask(taskId);
        task.completed = true;
    }
    uncompleteTask(projectId, taskId) {
        let task = this.#projects[projectId].getTask(taskId);
        task.completed = false;
    }

    newProject(title) {
        let project = new Project(title);
        this.#projects[this.#projectCount++] = project;
        return this.#projectCount - 1;
    }
    getProject(id) {
        let project = this.#projects[id];
        return { ...project };
    }
    editProject(id, title) {
        let project = this.#projects[id];
        if (title !== null) project.title = title;
    }
    removeProject(id) {
        delete this.#projects[id];
    }
    getProjects() {
        return this.#projects;
    }
}
