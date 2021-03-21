/* Cron-style Scheduling
The cron format consists of:

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL) 
https://www.npmjs.com/package/node-schedule
*/

const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 43 0 21 3 0', () => {
     console.log('Executando tarefa 1!', new Date().getSeconds());
})

// setando time para cancelar tarefa
setTimeout(() => {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1')
}, 20000);

const regra = new schedule.RecurrenceRule();
//regra.dayOfWeek = [new schedule.Range(1,5)];
regra.hour = 0;
regra.second = 55;

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})