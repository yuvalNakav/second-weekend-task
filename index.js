const tasks = [
    {
        startedAt: date1 =new Date (2021, 1, 10, 16)  ,
        finishedAt: date2 = new Date (2021, 1, 10, 20) ,
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '10',
        tasksFinished: '8',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 11, 13) ,
        finishedAt: date2 = new Date (2021, 1, 11, 19) ,
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '8',
        tasksFinished: '4',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 12, 14),
        finishedAt: date2 = new Date (2021, 1, 12, 19),
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '10',
        tasksFinished: '7',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 13, 13) ,
        finishedAt: date2 = new Date (2021, 1, 13, 15) ,
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '20',
        tasksFinished: '18',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 14, 14) ,
        finishedAt: date2 = new Date (2021, 1, 14, 18), 
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '10',
        tasksFinished: '10',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 15, 15) ,
        finishedAt: date2 = new Date (2021, 1, 15, 19) ,
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '8',
        tasksFinished: '8',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 16, 16) ,
        finishedAt: date2  = new Date (2021, 1, 16, 18)
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '15',
        tasksFinished: '12',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt:  date1 = new Date (2021, 1, 17, 13) ,
        finishedAt: date2 = new Date (2021, 1, 17, 20),
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '25',
        tasksFinished: '22',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 18, 13) ,
        finishedAt: date2 = new Date (2021, 1, 18, 16) ,
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '10',
        tasksFinished: '8',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    },
    {
        startedAt: date1 = new Date (2021, 1, 19, 12) ,
        finishedAt: date2 =  = new Date (2021, 1, 19, 16),
        totalTime: ${totalTime(this.startedAt, this.finishedAt)} ,
        tasksGiven: '24',
        tasksFinished: '18',
        tasksFinishedPercent: ${tasksFinishedPercent(this.tasksGiven, this.tasksFinished)} ,
        topic: 'JavaScript'
    }
       
]
function totalTime(startedAt, finishedAt) {
    return startedAt - finishedAt;
}
function tasksFinishedPercent(tasksGiven, tasksFinished) {
    return (tasksGiven / tasksFinished) * 100
}
for (let task in tasks)