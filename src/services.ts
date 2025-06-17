import type { PhoneBookEntry } from './types.ts'

const data: PhoneBookEntry[] = [
  { firstName: 'John', lastName: 'Doe', phoneNumber: '123' },
  { firstName: 'Jane', lastName: 'Smith', phoneNumber: '456' },
]

const getData = () =>
  new Promise((resolve, reject) => {
    const randomNum = Math.random()
    const isFail = randomNum < 0.9
    if (isFail) {
      return reject('error')
    }
    resolve(data)
  })

export { getData }
