const Task = require('./Task')
class Tasks {
  
  constructor() {
    this._list = {}
  }
  
  get listArr() {
    return Object.values(this._list)
  }

  deleteTask( id = '' ) {
    if (this._list[id]) {
      delete this._list[id]
    }
  }

  loadTasksFromArr(tasks = []) {
    tasks.forEach(task => {
      this._list[task.id] = task
    });
  }

  createTask(desc = '') {
    const task = new Task(desc)
    this._list[task.id] = task
  }

  fullList() {
    console.log()

    this.listArr.forEach(({desc, finishAt}, index) => {
      console.log(`${((index+1) + '.').green} ${desc} :: ${ finishAt ? 'Completado'.green : 'Pendiente'.red }`)
    })
  }

  listPendingCompleted(completed = true) {
    console.log()

    const filterTasks = this.listArr.filter(task => completed ? task.finishAt !== null : task.finishAt === null)

    filterTasks.forEach(({desc, finishAt}, index) => {
      const estado = finishAt !== null ? finishAt.toString().green : 'Pendiente'.red
      console.log(`${((index+1) + '.').green} ${desc} :: ${estado}`)
    })
  }

  toggleCompleted(ids = []) {
    ids.forEach(id => {
      const task = this._list[id]
      if (!task.finishAt) {
        task.finishAt = new Date().toISOString()
      }
    })

    this.listArr.forEach(task => {
      if (!ids.includes(task.id)) {
        this._list[task.id].finishAt = null
      }
    })

  }

}

module.exports = Tasks