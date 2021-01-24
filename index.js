const tasks = [
    {
        startedAt: date1 =new Date(2021, 1, 10, 16),
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
        finishedAt: date2 = new Date (2021, 1, 12, 15),
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
    task['tasksFinishedPercent'] = Math.floor((task.tasksFinished / task.tasksGiven) * 100);
 }
document.write(
    '<table id = "table" >' +
    '<tr id ="headline">' +
        '<th>Started At</th>' +
        '<th>Finished At</th>' +
        '<th>Total Time Spent</th>' +
        '<th>Tasks Given</th>' +
        '<th>Tasks Finished</th>' +
        '<th>Tasks finished %</th>' + 
        '<th>Topic</th>' + 
    '</tr>')


    for (let i in tasks) {
        if (tasks[i].totalTime < 2) {
            document.write(
                '<style>'
                + '#total' + i + '{' +
                'background-color: green;' +
                '}' +
                '</style>')
        } else if (tasks[i].totalTime > 2 && tasks[i].totalTime > 4) {
            document.write(
                '<style>'
                + '#total' + i + '{' +
                'background-color: orange;' +
                '}' +
                '</style>')
        } else {
            document.write(
                '<style>'
                + '#total' + i + '{' +
                'background-color: red;' +
                '}' +
                '</style>')
        }
        if (tasks[i].tasksFinishedPercent <= 50) {
            document.write('<style>'
            + '#percent' + i + '{' +
            'background-color: lightblue;' +
            '}' +
            '</style>')
        } else if (tasks[i].tasksFinishedPercent > 50 && tasks[i].tasksFinishedPercent < 75) {
            document.write('<style>'
            + '#percent' + i + '{' +
            'background-color: blue;' +
            '}' +
            '</style>')
        } else {
            document.write('<style>'
            + '#percent' + i + '{' +
            'background-color: darkblue;' +
            '}' +
            '</style>')
        }
        document.write
            ('<tr class ="content">' +
            '<td>' + tasks[i].startedAt.toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit'}) + '</td>' + 
            '<td>' + tasks[i].finishedAt.toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit'})  + '</td>' + 
            '<td id ="total' + i + '">' + tasks[i].totalTime + '</td>' + 
            '<td>' + tasks[i].tasksGiven + '</td>' + 
            '<td>' + tasks[i].tasksFinished + '</td>' + 
            '<td id ="percent' + i + '">' + tasks[i].tasksFinishedPercent + '%' + '</td>' + 
            '<td>' + tasks[i].topic + '</td>' + 
        '</tr>'
        );
    
    }
    document.write('</table>')
