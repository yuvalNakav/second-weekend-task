const tasks = [
   {
    startedAt: 'Started At' ,
    finishedAt: 'Finished At' ,
    totalTime: 'Total Time Spent' ,
    tasksGiven: 'Tasks Given' ,
    tasksFinished: 'Tasks Finished' ,
    tasksFinishedPercent: 'Tasks finished%' , 
    topic: 'Topic', 
   }
   {
    startedAt: (date1 = new Date(2021, 1, 10, 16)),
    finishedAt: (date2 = new Date(2021, 1, 10, 20)),
    totalTime: ,
    tasksGiven: 10,
    tasksFinished: 8,
    tasksFinishedPercent:,
    topic: "JavaScript",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 11, 13)),
    finishedAt: (date2 = new Date(2021, 1, 11, 19)),
    totalTime: ,
    tasksGiven: 8,
    tasksFinished: 4,
    tasksFinishedPercent:,
    topic: "HTML",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 12, 14)),
    finishedAt: (date2 = new Date(2021, 1, 12, 15)),
    totalTime:,
    tasksGiven: 10,
    tasksFinished: 7,
    tasksFinishedPercent:,
    topic: "HTML",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 13, 13)),
    finishedAt: (date2 = new Date(2021, 1, 13, 15)),
    totalTime:,
    tasksGiven: 20,
    tasksFinished: 18,
    tasksFinishedPercent:,
    topic: "CSS",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 14, 14)),
    finishedAt: (date2 = new Date(2021, 1, 14, 18)),
    totalTime:,
    tasksGiven: 10,
    tasksFinished: 10,
    tasksFinishedPercent:,
    topic: "JavaScript",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 15, 15)),
    finishedAt: (date2 = new Date(2021, 1, 15, 19)),
    totalTime:,
    tasksGiven: 8,
    tasksFinished: 8,
    tasksFinishedPercent:,
    topic: "CSS",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 16, 16)),
    finishedAt: (date2 = new Date(2021, 1, 16, 18)),
    totalTime:,
    tasksGiven: 15,
    tasksFinished: 12,
    tasksFinishedPercent:,
    topic: "HTML",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 17, 13)),
    finishedAt: (date2 = new Date(2021, 1, 17, 20)),
    totalTime:,
    tasksGiven: 25,
    tasksFinished: 22,
    tasksFinishedPercent:,
    topic: "JavaScript",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 18, 13)),
    finishedAt: (date2 = new Date(2021, 1, 18, 16)),
    totalTime:,
    tasksGiven: 10,
    tasksFinished: 8,
    tasksFinishedPercent:,
    topic: "JavaScript",
  },
  {
    startedAt: (date1 = new Date(2021, 1, 19, 12)),
    finishedAt: (date2 = new Date(2021, 1, 19, 16)),
    totalTime:,
    tasksGiven: 24,
    tasksFinished: 18,
    tasksFinishedPercent:,
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
    (task.tasksFinished / task.tasksGiven) * 100
  );
}
const table = document.createElement('table');
for (let i in tasks) {
    const tableRow = document.createElement('tr');
    for (let j = 0; j < 7; j++){
        const tableCell = document.createElement('td');
        tableCell.classList.add('j');
        tableRow.appendChild(tableCell);
    }

    table.appendChild(tableRow)
//   if (tasks[i].totalTime < 2) {
//     document.write(
//       "<style>" +
//         "#total" +
//         i +
//         "{" +
//         "background-color: green;" +
//         "}" +
//         "</style>"
//     );
//   } else if (tasks[i].totalTime > 2 && tasks[i].totalTime > 4) {
//     document.write(
//       "<style>" +
//         "#total" +
//         i +
//         "{" +
//         "background-color: orange;" +
//         "}" +
//         "</style>"
//     );
//   } else {
//     document.write(
//       "<style>" +
//         "#total" +
//         i +
//         "{" +
//         "background-color: red;" +
//         "}" +
//         "</style>"
//     );
//   }
//   if (tasks[i].tasksFinishedPercent <= 50) {
//     document.write(
//       "<style>" +
//         "#percent" +
//         i +
//         "{" +
//         "background-color: lightblue;" +
//         "}" +
//         "</style>"
//     );
//   } else if (
//     tasks[i].tasksFinishedPercent > 50 &&
//     tasks[i].tasksFinishedPercent < 75
//   ) {
//     document.write(
//       "<style>" +
//         "#percent" +
//         i +
//         "{" +
//         "background-color: blue;" +
//         "}" +
//         "</style>"
//     );
//   } else {
//     document.write(
//       "<style>" +
//         "#percent" +
//         i +
//         "{" +
//         "background-color: darkblue;" +
//         "}" +
//         "</style>"
//     );
//   }
//   document.write(
//     '<tr class ="content">' +
//       "<td>" +
//       tasks[i].startedAt.toLocaleTimeString("it-IT", {
//         hour: "2-digit",
//         minute: "2-digit",
//       }) +
//       "</td>" +
//       "<td>" +
//       tasks[i].finishedAt.toLocaleTimeString("it-IT", {
//         hour: "2-digit",
//         minute: "2-digit",
//       }) +
//       "</td>" +
//       '<td id ="total' +
//       i +
//       '">' +
//       tasks[i].totalTime +
//       "</td>" +
//       "<td>" +
//       tasks[i].tasksGiven +
//       "</td>" +
//       "<td>" +
//       tasks[i].tasksFinished +
//       "</td>" +
//       '<td id ="percent' +
//       i +
//       '">' +
//       tasks[i].tasksFinishedPercent +
//       "%" +
//       "</td>" +
//       "<td>" +
//       tasks[i].topic +
//       "</td>" +
//       "</tr>"
//   );
// }
// document.write("</table>");
