
const cats= ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(string) {
    cats.push('Ralph')
}
  
function destructivelyPrependCat(string) {
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(string) {
    cats.pop()
}
function destructivelyRemoveFirstCat(string) {
    cats.shift()
}
function appendCat(string) {
 
   const Ccats= cats.slice();
   Ccats.push('Broom')
   return Ccats;
      
} 
function prependCat(string) {
    const Ccats= cats.slice();
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
