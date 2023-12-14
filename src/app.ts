// Code goes here!

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Max' }, { age: 30 })

console.log(mergedObj.age, mergedObj.name, mergedObj)

interface Lengthy {
  length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.'
  if (element.length === 1) {
    descriptionText = 'Got 1 element.'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText]
}

console.log(countAndPrint(['Hi there!', '10']))

function extractANdConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key]
}

console.log(extractANdConvert({ name: 'Max' }, 'name'))

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1)
numberStorage.addItem(2)
numberStorage.removeItem(1)
console.log(numberStorage.getItems())

// const maxObj = { name: 'Max' }
// const objStorage = new DataStorage<object>()
// objStorage.addItem(maxObj)
// objStorage.addItem({ name: 'Manu' })
// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems())

interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Max', 'Anna']
//names.push('Manu')
//names.pop()
console.log(names)

// Path: src/app.ts
// Code goes here!

// const names: Array<string> = []
