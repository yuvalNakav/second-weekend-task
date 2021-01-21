const tasks = [
    {
        startedAt: date1 =new Date (2021, 1, 10, 16)  ,
        finishedAt: date2 = new Date(2021, 1, 10, 20),
        tasksGiven: 10,
        tasksFinished: 8,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 11, 13) ,
        finishedAt: date2 = new Date (2021, 1, 11, 19) ,
        tasksGiven: 8,
        tasksFinished: 4,
        topic: 'HTML'
    },
    {
        startedAt: date1 = new Date (2021, 1, 12, 14),
        finishedAt: date2 = new Date (2021, 1, 12, 19),
        tasksGiven: 10,
        tasksFinished: 7,
        topic: 'HTML'
    },
    {
        startedAt: date1 = new Date (2021, 1, 13, 13) ,
        finishedAt: date2 = new Date (2021, 1, 13, 15) ,
        tasksGiven: 20,
        tasksFinished: 18,
        topic: 'CSS'
    },
    {
        startedAt: date1 = new Date (2021, 1, 14, 14) ,
        finishedAt: date2 = new Date (2021, 1, 14, 18), 
        tasksGiven: 10,
        tasksFinished: 10,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 15, 15) ,
        finishedAt: date2 = new Date (2021, 1, 15, 19) ,
        tasksGiven: 8,
        tasksFinished: 8,
        topic: 'CSS'
    },
    {
        startedAt: date1 = new Date (2021, 1, 16, 16) ,
        finishedAt: date2  = new Date (2021, 1, 16, 18),
        tasksGiven: 15,
        tasksFinished: 12,
        topic: 'HTML'
    },
    {
        startedAt:  date1 = new Date (2021, 1, 17, 13) ,
        finishedAt: date2 = new Date (2021, 1, 17, 20),
        tasksGiven: 25,
        tasksFinished: 22,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 18, 13) ,
        finishedAt: date2 = new Date (2021, 1, 18, 16) ,
        tasksGiven: 10,
        tasksFinished: 8,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 19, 12) ,
        finishedAt: date2 = new Date (2021, 1, 19, 16),
        tasksGiven: 24,
        tasksFinished: 18,
        topic: 'HTML'
    }
       
]
function totalTime(startedAt, finishedAt) {
    return startedAt.getHours() - finishedAt.getHours();
}
function tasksFinishedPercent(tasksGiven, tasksFinished) {
    return (tasksGiven / tasksFinished) * 100
}
for (let task of tasks) {
    task['totalTime'] = Math.abs(task.startedAt - task.finishedAt) / 3600000;
    task['tasksFinishedPercent'] = Math.floor(task.tasksFinished / task.tasksGiven) * 100;
    
 }

// totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
// tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
console.log(tasks[1])