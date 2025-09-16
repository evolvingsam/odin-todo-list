import Project from "./project";
import Task from "./task";
import TaskManager from "./task-manager";

export default function loadTaskManager() {
    const rawSaveFile = localStorage.getItem("savedTasks");
    if (!rawSaveFile) return null;

    const saveFile = JSON.parse(rawSaveFile);

    const taskManager = new TaskManager();
    taskManager.taskCount = saveFile.taskCount;
    taskManager.projectCount = saveFile.projectCount;

    taskManager.projectList = Object.fromEntries(
        Object.entries(saveFile.projectList).map(([projectId, { title, taskList }]) => {
            const newProject = new Project(title);

            Object.entries(taskList).forEach(([taskId, { title, description, dueDate, priority, isComplete }]) => {
                const newTask = new Task(title);
                newTask.description = description;
                newTask.dueDate = dueDate ? new Date(dueDate) : null;
                newTask.priority = priority;
                newTask.isComplete = isComplete;

                newProject.addTask(newTask, taskId);
            });

            return [projectId, newProject];
        })
    );

    return taskManager;
}
