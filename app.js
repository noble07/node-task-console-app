require('colors')
const { inquiererMenu, pausa } = require('./helpers/inquirer')

console.clear()

const main = async() => {
  
  let opt = ''

  do {

   opt = await inquiererMenu()
   
   await pausa()

  } while (opt !== 0);

}

main()