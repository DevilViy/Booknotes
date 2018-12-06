const debounce = (fn, wait) => {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(timer);
    }, wait);
  };
};
const fn = timer => {
  console.log("boom", timer);
};
setInterval(debounce(fn, 500), 3000); // // 第一次在3500ms后触发，之后每3000ms触发一次
setInterval(debounce(fn,4000),300) // 永远不会触发
