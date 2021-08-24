const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print chars 
    process.stdout.write(char);
  }, time) // delay is long to be noticeable
  time += 50;
}
setTimeout(() => {
  console.log('\n');
}, time);
