export default function saveTasks(taskManager) {
  let saved = {
    "taskCount": taskManager.taskCount,
    "projectCount": taskManager.projectCount,
    "projects": taskManager.getProjects()
  }
  localStorage.setItem("savedTasks", JSON.stringify(saved));
}