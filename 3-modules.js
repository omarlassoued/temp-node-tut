//modules
//evrey file in node is module (by default)
//modules - encapsulated code (only share minimum)

const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7.mind-grenade')
sayHi('omar')
sayHi(names.john)
sayHi(names.peter)







