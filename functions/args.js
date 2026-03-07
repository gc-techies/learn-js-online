function add(a = 1, b = 2, c = 3) {
    return a + b + c;   // 2 + undefined
}

function anotherAdd() {
    const first = arguments[0];
    const second = arguments[1];
    let sum = 0;
    // for (const element of arguments) {
    //     sum += element
    // }
    for (let index = 2; index < arguments.length; index++) {
        sum += arguments[index];
    }
    return sum - (first + second);
}

// using REST operator to have a variable-length argument (VarArgs)
function restAdd(a, b, ...params) {
    const ans = params.reduce((a, b) => a + b);
    return ans - (a + b);
}

const argsAdd = anotherAdd(1, 3, 5, 6, 7, 19, 3, 4);
const varArgsAdd = restAdd(1, 3, 5, 6, 7, 19, 3, 4);
console.log(argsAdd, varArgsAdd);
// arguments and paramenters

console.log(add(2, undefined, 2), 'addition');