//local dependency - this project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g<packageName>

//package.json - manifest file (stores important info about project/package)
//manual approach(crate in the root, create properties)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _= require('lodash')

const items = [1,[2,[3,[4]]]]
const nitems = _.flattenDeep(items)
console.log(nitems)
