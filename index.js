const qs = require('qs')
const fs = require('fs')

const formData = ''
const filename = 'result.json'

const data = qs.parse(formData)

const jsonData = JSON.stringify(data, null, 2)

const jsonsDirExist = fs.existsSync('./jsons')
if (!jsonsDirExist) {
  fs.mkdir('./jsons', err => {
    if (err) throw err
    write()
  })
} else {
  write()
}
function write () {
  fs.writeFile(`./jsons/${filename}`, jsonData, err => {
    if (err) throw err
    console.log('文件已保存')
  })
}