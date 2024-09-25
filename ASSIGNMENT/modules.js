console.log("Exporting functions: math.js(module file)")
export function add(x,y){
    return x+y;
}
export function subtract(a,b){
    return a-b;
}

console.log("default export: greet.js(module file)")
export default function greet(name){
    return 'Hello,${name}!';
}
