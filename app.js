require('colors')

const {
  inquiererMenu,
  pause,
  readInput
} = require('./helpers/inquirer')
const { saveDB, readDB } = require('./helpers/saveFile')
const Tasks = require('./models/Tasks')

const main = async() => {
  
  let opt = ''
  const tasks = new Tasks()

  const tasksDB = readDB()

  if (tasksDB) {
    // Establecer las tareas
  }

  await pause()

  do {

    // Imprimir el menú
    opt = await inquiererMenu()
    
    // Valida las opciones seleccionadas en el menú anterior
    switch (opt) {
      case 1:
        const desc = await readInput('Descripción:')
        tasks.createTask(desc)
        break
      
      case 2:
        console.log(tasks.listArr)
        break
    }

    // saveDB(tasks.listArr)
    
    await pause()

  } while (opt !== 0);

}

main()