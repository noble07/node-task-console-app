require('colors')
const { inquiererMenu } = require('./helpers/inquirer')

console.clear()

const main = async() => {

  console.log('Hola Mundo')
  
  let opt = ''

  do {

   opt = await inquiererMenu()
   console.log({opt})

  } while (opt !== '0');

}

main()