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
}
