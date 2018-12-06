const throttle = (fn, gapTime) => {
  let lastTime = null;
  return () => {
    let nowTime = +new Date(); // 时间戳
    if (!lastTime || nowTime - lastTime > gapTime) {
      // 第一次，和以后每次
      lastTime = nowTime;
      fn(lastTime);
    }
  };
};

const fn = time => {
  console.log("boom", time);
};

setInterval(throttle(fn, 6000), 500); // 6秒打一次boom
