const Task = require('./Task')
class Tasks {
  
  constructor() {
    this._list = {}
  }
  
  get listArr() {
    return Object.values(this._list)
  }

  createTask(desc = '') {
    const task = new Task(desc)
    this._list[task.id] = task
  }

}

module.exports = Tasks