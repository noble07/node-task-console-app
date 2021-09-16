require('colors')
const { inquiererMenu, pausa } = require('./helpers/inquirer')
const Tarea = require('./models/Tarea')
const Tareas = require('./models/Tareas')

console.clear()

const main = async() => {
  
  let opt = ''

  do {

   opt = await inquiererMenu()
   
   await pausa()

  } while (opt !== 0);

}

main()