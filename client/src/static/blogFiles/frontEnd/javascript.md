# JavaScript

### 1. === and ==

===: 不做类型转换

==: 做类型转换

eg. 6=="6" (T);  

6==="6" (F);

### 2. 函数作用域

1. 作用域链：由里到外，先函数内（局部）再全局

2. 状态提升：函数执行时，函数内的函数名、变量名会先被声名（实际声明顺序不同于代码编写的声明顺序）。

3. **var**和**let**的区别：

    使用var声明的变量，其**作用域为该语句所在的函数内**，且存在变量提升现象（即可以先使用变量再声明，先上车后买票）； 

    使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升； 

    let不允许在相同作用域内，重复声明同一个变量。 var可以重复声明。

### 3. 原型与原型链

1. `__proto__`  and `prototype`

   `__proto__`  ued in instance, `prototype` used in  constructor functions (which includes classes in JavaScript) .

   ```javascript
   a = new String('abc') 
   a.__proto__ // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
   String.prototype // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
   ```

   `示例.__proto__` （隐式原型）==`类.prototype`（显示原型）

2. difference from class in C++/Java

   1. **Inheritance mechanism**: In Javascript, the object can inherit from an instance. 
   1. __Flexibility__: In Javascript, you can modify the class/prototype in runtime. In C++, No. 

3. `xx instanceof XX` is true, if `XX` is on the prototype chain of `xx`. For instance, `array instanceof Array` is true.

   Notice: `xx typeof` **only** returns the type of the data (number, string, boolean, undefined, null, object)

### 4. 异步编程

1. setTimeout() 设置一段时间后执行

   ```javascript
   let timerId = setTimeout(() => {
     console.log('This will not be shown');
   }, 2000);
   
   // later (perhaps after 2000)
   clearTimeout(timerId);
   ```

   缺点：当需要依次进行异步操作时会产生**回调地狱（callback hell）**

2. fetch('url request').then().then()

   Example:

   ```javascript
   fetch('https://api.example.com/data')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error:', error))
     .finally();// finally will be executed no matter success or not
   ```

3. Async Await

   Example

   ```javascript
   async function myFunction() {
     let response = await fetch('https://api.example.com/data');
     let data = await response.json(); // execute after the line before finished
     return data;
   }
   ```

   如果想要async函数内多条语句并发执行：

   ```javascript
   let promises = await Promise.all([fetch(), fetch()])
   ```

### 5. 深浅拷贝

#### 1. 准万能深拷贝方法：

无法处理/拷贝function、undefined、原型链等

```javascript
const list=[{myLove:'sq'}];
const listCopy = JSON.parse(JSON.stringify(list))
```

#### 2. 真万能深拷贝方法

##### 2.1. 调包

```javascript
const _ = require('lodash');
const clonedObject = _.cloneDeep(originalObject);
```

##### 2.2. 手写deepClone

```javascript
function deepClone(obj){
    // 1. 判断传入的obj是不是对象，如果不是对象直接返回
    if (typeof obj !== 'object' || obj == null){
        return obj
    }

    // 2. 初始化返回结果（数组或者对象）
    let result;
    if (obj instanceof Array){
        result = []
    }
    else{
        result = {}
    }

    // 3. 遍历obj所有的key，递归调用deepClone
    for (let key in obj){
        if (obj.hasOwnProperty(key)){ // hasOwnProperty保证key不是原型的属性
            result[key] = deepClone(obj[key])
        }
    }

    return result;
}
```



### 6. 闭包

闭包=内层函数+引用外层函数的变量

```javascript
function outer(){
	const a = 1;
	function inner(){
		console.log(a);
	}
	inner();
}
outer();
```

例子：统计某一函数发动了几次。

意义：保证变量私有。

![1690627984672](javascript1.png)

### 7. JavaScript导入类

一般JavaScript导入方法：

test1.js

```javascript
const exportClass = () => {
    return 2;
}

// export default exportClass;
module.exports = {
    exportClass : exportClass
};
```

test2.js

```javascript
const { exportClass } = require('./test1.js');
console.log(exportClass()); // 2
```

import xxx; export default xxx; 为webpack中使用的方法

### 8. [事件捕获与冒泡](https://www.bilibili.com/video/BV1m7411L7YW/?spm_id_from=333.788&vd_source=a82ddca015c3600e3ebfadd0eb69d716)

#### 1. DOM事件流

事件捕获阶段（自上而下）+处于目标阶段+事件冒泡阶段（自下而上）

#### 2. 例子

![1693208037428](javascript2.png)

事件捕获优先于事件冒泡。事件捕获从上到下，所以先触发mother再触发daughter。然后再事件冒泡自下而上，先baby再grandma。