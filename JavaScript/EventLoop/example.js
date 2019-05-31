async function async1() {
  console.log("async1 start");

  await async2();

  console.log("async1 end");
}

// async function async2() {
//   console.log("async2");
// }
async function async2() {
  console.log("async2");
  return new Promise((resolve, reject) => {
    console.log("async2 promise");
    resolve();
  })
      .then(() => {
    console.log("async2 promise then");
  }); // 加与不加会影响最终结果
}

console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1().then(resp=>{console.log('????我是最后吗')});

new Promise(function(resolve) {
  console.log("promise1");

  resolve();
})
  .then(function() {
    console.log("promise2");
  })
  .then(function() {
    console.log("promise3");
  })
  .then(function() {
    console.log("promise4");
  })
  .then(function() {
    console.log("promise5");
  });

console.log("script end");
