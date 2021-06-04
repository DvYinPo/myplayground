// 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目
// 给你两个整数 x 和 y，计算并返回他们之间的汉明距离

// 示例1
//输入：x=1,y=4
//输出：2
// 解释：
// 1 （0001）
// 4 （0100）

// 示例2
// 输入：x=3，y=1
// 输出：1

//提示：0<=x,y<=2^31 - 1
// //思路：
// 获取x,y的二进制字符串
// 长度较短者，其余位补全为0
// 开始计数统计


var hammingDistance = function (x, y) {
    x = x.toString(2);
    y = y.toString(2);
    let maxLength = Math.max(x.length, y.length);
    x = x.padStart(maxLength, 0);
    y = y.padStart(maxLength, 0);
    let res = 0;
    for (let i = 0; i < maxLength; i++) {
        if (x[i] !== y[i]) res++;
    }
    return res;
}
//toString(param)
// 除开null 和 undefined之外所有的数据类型都是拥有toString方法的。　　
// 通常情况下我们使用toString()方法的时候都是不用传递参数的，但是Number类型的toString方法是可以接收一个参数的，这个参数是“输出数值的基数”。
// 这个参数指定要用于数字到字符串的转换的基数(从2到36), 参数不在这个范围之间时，报错！如果未指定  参数，则默认值为 10。 也就是说它可以指定该数值是多少进制的格式

//padStart(param1,param2)
//在字符的前端补全，param1：总长度；param2：填充的字符
//相应的方法有padEnd()