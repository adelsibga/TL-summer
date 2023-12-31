const getRandomImg = (max: number) => {
  return Math.floor(Math.random() * max)
}

const getRandomName = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  let result = ''
  let counter = 0

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }

  return result
}

const createArray = (length: number) => {
  const result: Array<number> = []

  for (let i = 1; i <= length; i++) {
    result.push(i)
  }

  return result
}

export {
  getRandomImg,
  getRandomName,
  createArray
}
