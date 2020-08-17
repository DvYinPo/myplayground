function f() {
  (async () => {
    await setTimeout(() => {
      console.log('这是第一个await');
    }, 2000);
    await setTimeout(() => {
      console.log('这是第二个await');
    }, 1000);
    console.log('这是一个console！');
    return '这是内部return';
  })();
  return '这是外部return！';
}
console.log(f());
