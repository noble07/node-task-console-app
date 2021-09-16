require('colors')
const {
  inquiererMenu,
  pause,
  readInput
} = require('./helpers/inquirer')
const Tasks = require('./models/Tasks')

const main = async() => {
  
  let opt = ''
  const tasks = new Tasks()

  do {

    opt = await inquiererMenu()
    
    switch (opt) {
      case 1:
        const desc = await readInput('Descripción:')
        tasks.createTask(desc)
        break
      
      case 2:
        console.log(tasks._list)
        break
    }
    
    await pause()

  } while (opt !== 0);

}

main()