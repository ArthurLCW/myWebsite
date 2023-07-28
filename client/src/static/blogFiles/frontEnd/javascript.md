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

    使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象； 

    使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升； 

    let不允许在相同作用域内，重复声明同一个变量。 

### 3. 原型与原型链

1. `__proto__`  and `prototype`

   `__proto__`  ued in instance, `prototype` used in  constructor functions (which includes classes in JavaScript) .

   ```javascript
   a = new String('abc') 
   a.__proto__ // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
   String.prototype // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
   ```

2. difference from class in C++/Java

   1. **Inheritance mechanism**: In Javascript, the object can inherit from an instance. 

   1. __Flexibility__: In Javascript, you can modify the class/prototype in runtime. In C++, No. 

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

万能深拷贝方法：

```javascript
const list=[{myLove:'sq'}];
const listCopy = JSON.parse(JSON.stringify(list))
```







