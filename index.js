
const cats= ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(string) {
    cats.push(string)
}
  
function destructivelyPrependCat(string) {
    cats.unshift(string)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(string) {
 
//    const Ccats= cats.slice();
//    Ccats.push('Broom')
//    return Ccats;
return [...cats, string]
      
} 
function prependCat(string) {
    // const Ccats= cats.slice();
    const Ccats=[...cats]
   Ccats.unshift('Arnold')
   return Ccats;

}
function removeLastCat(string){
    const Ccats= cats.slice(0,2);
    return Ccats;
}
function removeFirstCat(string){
    const Ccats= cats.slice(1,3);
    return Ccats;
}
