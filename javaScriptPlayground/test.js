async function f() {
  await setTimeout(() => {
    console.log('这是第一个await');
  }, 2000);
  await setTimeout(() => {
    console.log('这是第二个await');
  }, 1000);
}
f();
