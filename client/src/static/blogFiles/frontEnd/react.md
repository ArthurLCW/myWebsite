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
4. useEffect+return()：卸载时执行，相当于componentWillUnmount。 **依赖数组中的值改变时**也会执行



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
   
   

## 3. 懒加载 Lazy Loading

### 3.1. Router懒加载

lazy(() => import(xxx)) + <Suspense fallback={}> <Home/></Suspense>

<Suspense>内的fallback返回加载未完成时的内容。

```javascript
const Home = lazy(() => import("./pages/Home/Home"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: 
          <Suspense fallback={<div>Loading...</div>}>
            <Home/>
          </Suspense>
      },
```



### 3.2. 图片的懒加载

IntersectionObserver

Intersection Observer API 提供了一种异步检测目标元素与祖先元素或 [viewport](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport) 相交情况变化的方法。 

声明IntersectionObserver，callback为发生intersect后（进入以及离开viewport）调用的回调函数，options允许您控制观察者的回调函数的被调用时的环境（根元素、根边距、覆盖比率）

```javascript
let observer = new IntersectionObserver(callback, options);
```

给定目标进行观察，可以用useRef的ref，ref.current，然后observe

```javascript
import React, {useRef, useEffect, useState} from "react";

const LazyImage = (props) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setInView(true);
        console.log("visible");
        observer.unobserve(ref.current); // 重要！确保不会被反复观察
      }
    })
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <div 
      style={{position: 'relative', 
        width: '100%', 
        paddingBottom: '75%'
      }}
      ref={ref} 
    >
      <img 
        src={inView? props.src:""}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }} 
      />
    </div>
  );
}

export default LazyImage
```

## 4. virtual dom

### 1. 什么是 Virtual DOM？

Virtual DOM（虚拟 DOM）是一个编程概念，其中一个对象可以代表实际的 DOM 对象。这个对象就像一个轻量级的 DOM 的副本，它可以快速创建和修改，而不需要实际渲染到屏幕上。

### 2. 为什么需要 Virtual DOM？

直接操作 DOM 通常是缓慢的，尤其是当涉及到大量的更新时。每次更新都可能导致浏览器重新计算布局、重新绘制等。Virtual DOM 允许我们在内存中进行许多更改，然后一次性更新实际的 DOM，从而提高性能。

### 3. 如何工作？

- **创建 Virtual DOM**: 当 JSX 被渲染时，React 会创建一个 Virtual DOM 来表示当前的 UI。
- **更新 Virtual DOM**: 当组件的状态或属性发生变化时，React 会创建一个新的 Virtual DOM 来表示更新后的 UI。
- **计算差异**: React 会使用 "diffing" 算法来确定原始 Virtual DOM 和新的 Virtual DOM 之间的差异。
- **更新实际的 DOM**: 一旦计算出差异，React 会尽可能高效地更新实际的 DOM。
- **批量更新**: React 会将多个更改批量处理，以减少对实际 DOM 的操作。

### 4. 优势

- **性能提升**: 通过避免不必要的 DOM 更新，React 可以提供更快的 UI 响应。
- **开发简便**: 开发者可以编写代码，好像每次渲染都会得到一个全新的 UI，而 React 负责只更新实际更改的部分。
- **跨平台**: Virtual DOM 的概念不仅限于浏览器的 DOM。它还可以用于其他渲染目标，如 React Native。

### 5. 注意事项

尽管 Virtual DOM 可以提高性能，但它并不总是比直接操作 DOM 快。在某些情况下，手动优化 DOM 操作可能更为高效。但在大多数情况下，React 和 Virtual DOM 提供的开箱即用的性能提升对开发者来说是非常有价值的。

总之，React 的 Virtual DOM 提供了一种高效更新 DOM 的方法，使得开发者可以构建响应迅速的 UI，而不必担心性能问题。



## 5. 组件间的信息传递

### 1. 提升状态（Lifting State Up）

这是一种在没有使用Context或其他状态管理库的情况下，在组件之间共享状态的常见方法。基本思想是将共享状态放在公共父组件中，然后通过props将状态和用于修改状态的函数传递给子组件。

```javascript
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

function ParentComponent() {
    const [sharedData, setSharedData] = useState('Initial Data');

    return (
        <div>
            <ChildComponentA data={sharedData} setData={setSharedData} />
            <ChildComponentB data={sharedData} setData={setSharedData} />
        </div>
    );
}
```

### 2. 使用全局状态管理库

对于更复杂的应用，你可能需要一个更强大的解决方案来管理状态。以下是一些流行的状态管理库：

- **Redux**: Redux是一个用于管理应用状态的库，它提供了一个中央存储来存放应用的所有状态，并允许你以一种可预测的方式来改变状态。

在 Redux 中，状态的更新是通过发送“actions”来完成的，而“reducers”则定义了这些 actions 如何转换状态。

#### Redux 的核心概念：

1. **Store**：存储整个应用的状态。
2. **Actions**：描述发生了什么的普通对象。(相当于可以改变store的事件)
3. **Reducers**：根据 actions 更新状态的函数。

#### 在 React 函数组件中使用 Redux：

要在 React 函数组件中使用 Redux，通常会用到 `react-redux` 库，它提供了 `useSelector` 和 `useDispatch` 这样的 Hooks。

#### 示例：

假设我们有一个简单的计数器应用：

1. **Action Types**：

   ```jsx
   // action types
   const INCREMENT = 'INCREMENT';
   const DECREMENT = 'DECREMENT';
   ```

2. **Actions**：

   ```jsx
   // action creators
   const increment = () => ({ type: INCREMENT });
   const decrement = () => ({ type: DECREMENT });
   ```

3. **Reducer**：

   ```jsx
   // reducer
   const counterReducer = (state = 0, action) => {
     switch (action.type) {
       case INCREMENT:
         return state + 1;
       case DECREMENT:
         return state - 1;
       default:
         return state;
     }
   };
   ```

4. **Store**：

   ```jsx
   import { createStore } from 'redux';
   
   // create store
   const store = createStore(counterReducer);
   ```

5. **React Component**：

   ```jsx
   import React from 'react';
   import { useSelector, useDispatch } from 'react-redux';
   
   const CounterComponent = () => {
     const count = useSelector(state => state);
     const dispatch = useDispatch();
   
     return (
       <div>
         <button onClick={() => dispatch(decrement())}>-</button>
         <span>{count}</span>
         <button onClick={() => dispatch(increment())}>+</button>
       </div>
     );
   };
   ```

在这个例子中，`CounterComponent` 组件使用 `useSelector` 来访问 Redux store 中的状态（在这里是计数值），并使用 `useDispatch` 来分发 actions（增加或减少计数）。

#### 配置 Provider：

为了让 Redux store 在整个应用中可用，你需要在应用的最外层使用 `Provider` 组件，将 store 传递给它：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store'; // 导入你创建的 store
import CounterComponent from './CounterComponent';

ReactDOM.render(
  <Provider store={store}>
    <CounterComponent />
  </Provider>,
  document.getElementById('root')
);
```

这样，任何子组件都可以通过 `useSelector` 和 `useDispatch` 访问和操作 Redux store 中的状态了。

### 3.  React的Context API 

#### 1. 创建Context

首先，你需要创建一个Context。通常在一个单独的文件中创建。

```jsx
// DataContext.js
import React from 'react';

const DataContext = React.createContext(null);

export default DataContext;
```

#### 2. 创建提供Context的组件

然后，创建一个组件来提供Context。这个组件将包裹所有需要访问共享数据的组件。**注意区分context组件和提供context的组件之间的区别**

```jsx
// DataProvider.js
import React, { useState } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
    const [data, setData] = useState("Initial Data");

    // 提供一个更改数据的方法
    const updateData = (newData) => {
        setData(newData);
    };

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
```

在这个`DataProvider`组件中，我们使用了`DataContext.Provider`来提供一个值。这个值是一个包含数据和一个更新数据函数的对象。

#### 3. 使用Context的组件

现在，任何需要访问这些共享数据的组件都可以使用`DataContext.Consumer`或`useContext`钩子来访问这些数据。

```jsx
// ChildComponent.js
import React, { useContext } from 'react';
import DataContext from './DataContext';

function ChildComponent() {
    const { data, updateData } = useContext(DataContext);

    return (
        <div>
            <h1>Child Component</h1>
            <p>Data: {data}</p>
            <button onClick={() => updateData("New Data from Child")}>
                Update Data
            </button>
        </div>
    );
}

export default ChildComponent;
```

在这个`ChildComponent`组件中，我们使用了`useContext`钩子来访问Context中的数据和更新数据的函数。

#### 4. 组合组件

最后，将`DataProvider`组件包裹在你的应用或需要共享数据的组件树的最外层。

```jsx
// App.js
import React from 'react';
import DataProvider from './DataProvider';
import ChildComponent from './ChildComponent';

function App() {
    return (
        <DataProvider>
            <ChildComponent />
            {/* 你可以在这里添加更多需要共享数据的组件 */}
        </DataProvider>
    );
}

export default App;
```

## 6. 组件的重新渲染

 React 中，组件的重新渲染（re-rendering）可以由多种情况触发。理解这些情况对于优化 React 应用的性能和避免不必要的渲染非常重要。以下是触发 React 组件重新渲染的主要情况：

1. **State 变化**：当组件的 state 发生变化时，组件会重新渲染。这是因为 state 的变化通常意味着组件的输出可能需要更新。

   ```javascript
   this.setState({ /* new state */ });
   ```

2. **Props 变化**：当组件接收到的 props 发生变化时，组件也会重新渲染。即使 props 的值没有改变，如果父组件重新渲染，子组件也会默认重新渲染。

   ```jsx
   <MyComponent someProp={value} />
   ```

3. **父组件渲染**：即使组件的 props 和 state 都没有变化，如果其父组件重新渲染，子组件也会默认重新渲染。这是因为 React 默认行为是在父组件渲染时重新渲染所有子组件。

4. **强制渲染**：使用 `forceUpdate()` 方法可以强制组件重新渲染。这种方法应该谨慎使用，因为它会绕过组件的 `shouldComponentUpdate()`。

   ```jsx
   this.forceUpdate();
   ```

5. **Context 变化**：如果组件使用了 React 的 Context API，并且所依赖的 context 值发生了变化，那么组件也会重新渲染。

6. **Hooks 引起的渲染**：在使用 Hooks 的函数组件中，如果使用了 `useState`、`useReducer` 或 `useContext`，并且这些 Hooks 的依赖发生变化，也会导致组件重新渲染。

## 7. React.memo和useMemo

### React.memo

`React.memo` 是一个高阶组件，用于防止不必要的重新渲染。它仅检查组件的 props 是否发生变化，如果 props 没有变化，则不会重新渲染组件。这对于优化那些仅依赖于 props 且不需要频繁更新的组件特别有用。

- **用途**：用于包装函数组件，当组件的 props 没有发生变化时，避免组件的重新渲染。
- **工作方式**：`React.memo` 对组件的 props 进行浅比较。如果比较结果显示 props 没有变化，React 将跳过渲染该组件及其子组件。
- **使用场景**：适用于那些渲染开销较大的组件，特别是当这些组件经常接收相同的 props 时。

```javascript
const MyComponent = React.memo(function MyComponent(props) {
    // 组件逻辑
});
```

### useMemo

`useMemo` 是一个 Hook，它允许你在函数组件内部记忆计算结果。当你有一些昂贵的计算，并且这些计算依赖于特定的依赖项时，`useMemo` 可以确保只有在这些依赖项改变时才重新计算。

- **用途**：记忆计算结果，避免在每次渲染时都执行昂贵的计算。
- **工作方式**：`useMemo` 接收一个“创建”函数和一个依赖项数组。只有当依赖项发生变化时，才会重新调用“创建”函数并计算新的值。
- **使用场景**：适用于优化昂贵的计算，特别是当这些计算的依赖项不经常变化时。

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 区别

- **应用范围**：`React.memo` 是针对组件整体的优化，用于防止组件的不必要渲染；而 `useMemo` 是针对特定计算的优化，用于避免重复执行昂贵的计算。
- **比较方式**：`React.memo` 进行的是 props 的浅比较；`useMemo` 则是依赖项的比较。
- **使用场景**：如果你需要防止整个组件的不必要渲染，使用 `React.memo`；如果你需要避免特定计算的重复执行，使用 `useMemo`。



## 8. useReducer

`useReducer` 是 React 的一个 Hook，它用于在函数式组件中管理复杂的状态逻辑。它类似于 Redux 中的 reducer，但用于局部状态管理。`useReducer` 对于那些基于多个子值的复杂状态逻辑特别有用，它可以让你更清晰地管理状态的更新。

### 基本用法

`useReducer` 接收两个参数：一个 reducer 函数和初始状态。它返回当前状态以及一个 dispatch 函数。

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

1. **reducer 函数**：这是一个纯函数，接收当前状态和一个 action 对象，然后返回新的状态。它的形式通常是 `(state, action) => newState`。
2. **initialState**：这是初始状态值。
3. **dispatch 函数**：用于触发状态更新的函数。

### 示例

假设我们有一个计数器组件，我们可以使用 `useReducer` 来管理它的状态：

```jsx
import React, { useReducer } from 'react';

// 定义 reducer 函数
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

// 使用 useReducer 的组件
function Counter() {
    const initialState = { count: 0 };

    // 使用 useReducer 并传入 reducer 函数和初始状态
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
```

在这个例子中：

- `counterReducer` 函数根据当前状态和 action 对象来计算并返回新的状态。
- `useReducer` 返回当前的状态（`state`）和一个可以用来触发状态更新的 `dispatch` 函数。
- 当用户点击按钮时，会调用 `dispatch` 函数并传入一个描述操作的 action 对象（例如 `{ type: 'increment' }`），这会触发状态的更新。