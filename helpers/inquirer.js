const inquirer = require('inquirer');
require('colors')

const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        name: '1. Crear tarea',
        value: 1
      },
      {
        name: '2. Listar tareas',
        value: 2
      },
      {
        name: '3. Listar tareas completadas',
        value: 3
      },
      {
        name: '4. Listar tareas pendientes',
        value: 4
      },
      {
        name: '5. Completar tarea(s)',
        value: 5
      },
      {
        name: '6. Borrar tarea',
        value: 6
      },
      {
        name: '0. Salir',
        value: 0
      },
    ]
  }
]

const inquiererMenu = async() => {

  console.clear()
  console.log('==========================='.green)
  console.log('   Seleccione una opción')
  console.log('===========================\n'.green)

  const { option } = await inquirer.prompt(questions)

  return option
}

const pause = async() => {
  
  console.log('\n')
  await inquirer.prompt([
    {
      type: 'input',
      name: 'pause',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ])

}

const readInput = async(message) => {
  
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true
      }
    }
  ]

  const {desc} = await inquirer.prompt(question)

  return desc
}


module.exports = {
  inquiererMenu,
  pause,
  readInput
}