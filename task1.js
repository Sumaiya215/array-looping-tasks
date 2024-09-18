// decremental for loop
// reverse colors without using reverse methods
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const rev_rev_colors = []; 
for (let i = colors.length -1 ; i >=0; i--){
    const color = colors[i];
    // console.log(color);
    rev_rev_colors.push(color);
}
console.log(rev_rev_colors);