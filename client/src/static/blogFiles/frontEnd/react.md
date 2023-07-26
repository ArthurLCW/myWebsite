## 1. 生命周期

#### 渲染

在1. initial render；2. 更新state/prop；3. Change in context：React.useContext/更高级组件更新

#### 抽象的生命周期

1. 挂载Mount; 2. 更新Update；3. 卸载Unmount。

#### 类式组件生命周期函数

1. Constructor；2. render；3. componentDidMount；4. componentDidUpdate；5. componentWillUnmount。

#### 函数式组件生命周期

函数式组件没有生命周期函数。不过可以使用useEffect达到类似效果。

1. useEffect+空白dependency array：只在第一次渲染激活一次，相当于componentDidMount。
2. useEffect不加dependency array：每次渲染都运行，相当于componentDidUpdate。
3. useEffect+具体dependency array：只在特定状态更新时运行。
4. useEffect+return()：卸载时执行，相当于componentWillUnmount。



## 2. useRef

#### 作用：

1. 存储数据。数据改变不会重新渲染（和state不同）。不过不可在渲染时读取写入ref，若需要在渲染时读写，改用state。

2. 通过ref操作DOM。

   首先，声明一个 initial value 为 `null` 的 ref 对象

   ```javascript
   import { useRef } from 'react';
   function MyComponent() {  
       const inputRef = useRef(null);  // ...
   ```

   然后将你的 ref 对象作为 `ref` 属性传递给你想要操作的 DOM 节点的 JSX：

   ```javascript
     // ...  return <input ref={inputRef} />;
   ```

   当 React 创建 DOM 节点并将其渲染到屏幕时，React 将会把 DOM 节点设置为你的 ref 对象的 `current` 属性。现在你可以访问 `` 的 DOM 节点，并且可以调用类似于 [`focus()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/focus) 的方法：

   ```javascript
     function handleClick() {    
         inputRef.current.focus();  
     }
   ```

   当节点从屏幕上移除时，React 将把 `current` 属性设回 `null`。

