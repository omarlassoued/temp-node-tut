
//run callback when we're done
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err,rst)=> {
    if (err){
        console.log(err)
        return 
    }
    const first = rst


    readFile('./content/second.txt', 'utf8', (err,rst) => {
        if(err) {
            console.log(err)
            return
        }
        const second = rst
        writeFile(
            './content/rst-async.txt',
             `resultante file ${first}, ${second}`,
              (err,rst) => {
                  if(err) {
                      console.log(err)
                      return
                  }
                  console.log(rst)
              })
    })
})
