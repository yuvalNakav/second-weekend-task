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
function timeColor(totalTime) {
  if (totalTime < 2) {
    return 'green';
  } else if (totalTime > 5) {
    return 'red';
  } else {
    return 'orange';
  }
}

  function percentColor(tasksFinishedPercent) { 
    if (tasksFinishedPercent < 60) {
     return 'dark blue';
    } else if (tasksFinishedPercent > 80) {
      return 'light blue';
    } else {
      return 'blue';
    }
  
}


let body = document.getElementsByTagName("body")[0];
let table = document.createElement('table');
let tr = document.createElement('tr');
table.append(tr);
body.append(table);

let headers = ['startedAt', 'finishedAt', 'totalTime', 'tasksGiven', 'tasksFinished', 'tasksFinishedPercent', 'topic'];

for (let header of headers) {
  let th = document.createElement('th');
  th.innerText = header;
  tr.append(th);
}
for (let task of tasks) {
  tr = document.createElement('tr');
  table.append(tr)
  for (let i in task) {
    let td = document.createElement('td');
    td.innerText = task[i];
    tr.append(td);
    if (task[i] === 'tasksFinishedPercent') {
      let x = task[i].tasksFinishedPercent;
      td.className = percentColor(x);
    } else if (task[i] === 'totalTime') {
      let x = task[i].totalTime;
      td.className = timeColor(x);  
    }
  }
}
