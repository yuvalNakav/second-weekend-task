const tasks = [
  {
  startedAt: (date1 = new Date(2021, 1, 10, 16)),
  finishedAt: (date2 = new Date(2021, 1, 10, 20)),
  totalTime: '' ,
  tasksGiven: 10,
  tasksFinished: 8,
  tasksFinishedPercent: '',
  topic: "JavaScript",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 11, 13)),
  finishedAt: (date2 = new Date(2021, 1, 11, 19)),
  totalTime:  '',
  tasksGiven: 8,
  tasksFinished: 4,
  tasksFinishedPercent: '',
  topic: "HTML",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 12, 14)),
  finishedAt: (date2 = new Date(2021, 1, 12, 15)),
  totalTime: '',
  tasksGiven: 10,
  tasksFinished: 7,
  tasksFinishedPercent: '',
  topic: "HTML",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 13, 13)),
  finishedAt: (date2 = new Date(2021, 1, 13, 15)),
  totalTime: '',
  tasksGiven: 20,
  tasksFinished: 18,
  tasksFinishedPercent: '',
  topic: "CSS",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 14, 14)),
  finishedAt: (date2 = new Date(2021, 1, 14, 18)),
  totalTime: '',
  tasksGiven: 10,
  tasksFinished: 10,
  tasksFinishedPercent: '',
  topic: "JavaScript",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 15, 15)),
  finishedAt: (date2 = new Date(2021, 1, 15, 19)),
  totalTime: '',
  tasksGiven: 8,
  tasksFinished: 8,
  tasksFinishedPercent: '',
  topic: "CSS",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 16, 16)),
  finishedAt: (date2 = new Date(2021, 1, 16, 18)),
  totalTime: '',
  tasksGiven: 15,
  tasksFinished: 12,
  tasksFinishedPercent: '',
  topic: "HTML",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 17, 13)),
  finishedAt: (date2 = new Date(2021, 1, 17, 20)),
  totalTime: '',
  tasksGiven: 25,
  tasksFinished: 22,
  tasksFinishedPercent: '',
  topic: "JavaScript",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 18, 13)),
  finishedAt: (date2 = new Date(2021, 1, 18, 16)),
  totalTime: '',
  tasksGiven: 10,
  tasksFinished: 8,
  tasksFinishedPercent: '',
  topic: "JavaScript",
  },
  {
  startedAt: (date1 = new Date(2021, 1, 19, 12)),
  finishedAt: (date2 = new Date(2021, 1, 19, 16)),
  totalTime: '',
  tasksGiven: 24,
  tasksFinished: 18,
  tasksFinishedPercent: '', 
  topic: "HTML",
},
];
function totalTime(startedAt, finishedAt) {
return startedAt.getHours() - finishedAt.getHours();
}
function tasksFinishedPercent(tasksGiven, tasksFinished) {
return (tasksGiven / tasksFinished) * 100;
}
for (let task of tasks) {
  
  task["totalTime"] = Math.abs(task.startedAt - task.finishedAt) / 3600000;
  task["tasksFinishedPercent"] = Math.floor(
  (task.tasksFinished / task.tasksGiven) * 100)
}

let body = document.getElementsByTagName("body")[0];
let table = document.createElement('table');
let tr = document.createElement('tr');
table.append(tr);
body.append(table);

let headers = ['Started At', 'Finished At', 'Total Time', 'Tasks Given', 'Tasks Finished', 'Tasks Finished Percent', 'Topic'];

for (let header of headers) {
  let th = document.createElement('th');
  th.innerText = header;
  tr.append(th);
}
for (let task of tasks) {
  tr = document.createElement('tr');
  table.append(tr)

  
  let tdStartedAt = document.createElement('td');
  tdStartedAt.innerText = task.startedAt.toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  });
  tr.append(tdStartedAt);

  let tdFinishedAt = document.createElement('td');
  tdFinishedAt.innerText = task.finishedAt.toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  });
  tr.append(tdFinishedAt);

  let tdTotalTime = document.createElement('td');
  tdTotalTime.innerText = task.totalTime;
  tr.append(tdTotalTime);
  if (task.totalTime <= 2) {
    tdTotalTime.className = "green";
  } else if (task.totalTime > 2 && task.totalTime <= 5) {
    tdTotalTime.className = "orange";
  } else if (task.totalTime > 5) {
    tdTotalTime.className = "red";
  }
  let tdTasksGiven = document.createElement('td');
  tdTasksGiven.innerText = task.tasksGiven;
  tr.append(tdTasksGiven);
  
  let tdTasksFinished = document.createElement('td');
  tdTasksFinished.innerText = task.tasksFinished;
  tr.append(tdTasksFinished);

  let tdTasksFinishedPercent = document.createElement('td');
  tdTasksFinishedPercent.innerText = task.tasksFinishedPercent;
  tr.append(tdTasksFinishedPercent);
  if (task.tasksFinishedPercent < 70) {
    tdTasksFinishedPercent.classList.add("darkblue");
  } else if (task.tasksFinishedPercent >= 70 && task.tasksFinishedPercent < 85) {
    tdTasksFinishedPercent.classList.add("blue");
  } else if (task.tasksFinishedPercent >= 85) {
    tdTasksFinishedPercent.classList.add("lightblue");
  }
  let tdTopic = document.createElement('td');
  tdTopic.innerText = task.topic;
  tr.append(tdTopic);

}
// function timeColor(totalTime) {
//   if (totalTime < 2) {
//     return 'green';
//   } else if (totalTime > 5) {
//     return 'red';
//   } else {
//     return 'orange';
//   }
// }

// function percentColor(tasksFinishedPercent) {
//   if (tasksFinishedPercent < 60) {
//     return 'dark blue';
//   } else if (tasksFinishedPercent > 80) {
//     return 'light blue';
//   } else {
//     return 'blue';
//   }
// }
// 
// for (let i in task) {
//   let td = document.createElement('td');
//   td.innerText = task[i];
//   tr.append(td);
//   if (task.tasksFinishedPercent < 70) {
//     td.classList.add("darkblue");
//   } else if (task.tasksFinishedPercent >= 70 && task.tasksFinishedPercent < 85) {
//     td.classList.add("blue");
//   } else if (task.tasksFinishedPercent >= 85) {
//     td.classList.add("lightblue");
//     } else if (task.totalTime <= 2) {
//       td.classlist.add("green");
//     } else if (task.totalTime > 2 && task.totalTime <= 5) {
//       td.classList.add("orange");
//     } else if (task.totalTime > 5) {
//       td.classList.add("red")
//     }  
//   }