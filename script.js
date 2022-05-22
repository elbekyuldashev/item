let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let str = []
let num = []
let obj = []
let bool = []
let other = []
arr.filter(item => {
    if (typeof (item) === 'string') {
        str.push(item)
    } else if (typeof (item) === 'number') {
        num.push(item)
    } else if (typeof (item) === 'object') {
        obj.push(item)
    } else if (typeof (item) === 'boolen') {
        bool.push(item)
    } else {
        other.push(item)
    }
})
console.log(str, num, obj, bool, other)





let arr_2 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
arr_2.filter(item => {
    if (typeof(item)=== 'number' && typeof(item)=== 'number' >= 5){
        console.log('good');
    }else {
        console.log('bad');
    }
        
})