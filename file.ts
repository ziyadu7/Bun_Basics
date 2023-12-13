// WRITE A FILE

// const data = 'i love Bun.js'

// await Bun.write('newFIle.txt',data)

// READ A FILE

const file  = await Bun.file('newFIle.txt')

// GET OUTPUT IN STRING

console.log(await file.text())

// GET THE FILE SIZE IN BITES

console.log(file.size)

// GET THE CONTENT IN READABLE STREAM

console.log(await file.stream())

// GET IN ARRAY BUFFER

console.log(await file.arrayBuffer())
