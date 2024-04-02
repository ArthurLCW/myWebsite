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



## 2. virtual dom

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

In conclusion，React 的 Virtual DOM 提供了一种高效更新 DOM 的方法，使得开发者可以构建响应迅速的 UI，而不必担心性能问题。



## 3. 组件的重新渲染

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



## 4. Hook

### 4.1. useRef

#### 作用：

1. 存储数据。数据改变不会重新渲染（和state不同）。不过不可在渲染时读取写入ref，若需要在渲染时读写，改用state。

2. 通过ref操作DOM。

   首先，声明一个 initial value 为 `null` 的 ref 对象

   ```javascript
   import { useRef } from 'react';
   function MyComponent() {  
       const inputRef = useRef(null); 
   ```

   然后将你的 ref 对象作为 `ref` 属性传递给你想要操作的 DOM 节点的 JSX：

   ```javascript
     // ...  return <input ref={inputRef} />;
   ```

   当 React 创建 DOM 节点并将其渲染到屏幕时，React 将会把 DOM 节点设置为你的 ref 对象的 `current` 属性。现在你可以访问的 DOM 节点，并且可以调用类似于 [`focus()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/focus) 的方法：

   ```javascript
     function handleClick() {    
         inputRef.current.focus();  
     }
   ```

   当节点从屏幕上移除时，React 将把 `current` 属性设回 `null`。
   
   

### 4.2. useImperativeHandle

#### Reference

- [`useImperativeHandle(ref, createHandle, dependencies?)`](https://react.dev/reference/react/useImperativeHandle#useimperativehandle)

#### Usage (通常与forwardRef一起用)

- [Exposing a custom ref handle to the parent component](https://react.dev/reference/react/useImperativeHandle#exposing-a-custom-ref-handle-to-the-parent-component)
- [Exposing your own imperative methods](https://react.dev/reference/react/useImperativeHandle#exposing-your-own-imperative-methods)

### 示例

假设你有一个 `FancyInput` 组件，你只想让父组件能够访问组件的 `focus` 方法，而不是整个组件实例。

```javascript
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

function App() {
  const inputRef = useRef();

  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus the input
      </button>
    </>
  );
}
```



### 4.3. useMemo

`useMemo` 是一个 Hook，它允许你在函数组件内部记忆计算结果。当你有一些昂贵的计算，并且这些计算依赖于特定的依赖项时，`useMemo` 可以确保只有在这些依赖项改变时才重新计算。

- **用途**：记忆计算结果，避免在每次渲染时都执行昂贵的计算。
- **工作方式**：`useMemo` 接收一个“创建”函数和一个依赖项数组。只有当依赖项发生变化时，才会重新调用“创建”函数并计算新的值。
- **使用场景**：适用于优化昂贵的计算，特别是当这些计算的依赖项不经常变化时。

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 

### 4.4. UseCallback

`useCallback` 是 React 的一个 Hook，它用于在组件内部缓存函数。这个 Hook 可以帮助你在依赖项没有改变的情况下避免不必要的函数重新创建，从而优化组件性能，特别是当这些函数被传递给纯组件时。

### 基本用法

`useCallback` 接收两个参数：一个内联函数和一个依赖项数组。它返回该函数的 memoized（记忆化）版本，只有当依赖项改变时，才会重新创建这个函数。

```javascript
const memoizedCallback = useCallback(
  () => {
    // 这里是你的函数逻辑
  },
  [/* 依赖项列表 */],
);
```

### 示例

假设你有一个组件，其中包含一个事件处理器，你想要确保这个事件处理器不会在每次组件渲染时都被重新创建。

```javascript
import React, { useCallback, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    // 这个函数只会在 count 改变时重新创建
    setCount(count + 1);
  }, [count]);

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```



### 4.5. useLayoutEffect

`useLayoutEffect` 用于在 DOM 更新之后，但页面渲染之前执行副作用操作。这意味着你可以使用 `useLayoutEffect` 来读取 DOM 布局并同步触发重渲染。由于 `useLayoutEffect` 在 DOM 更新完成后立即执行，不会等待浏览器绘制，所以它适合用于需要同步处理 DOM 的情况。

#### `useLayoutEffect` 与 `useEffect` 的区别

- `useEffect` 在所有的 DOM 变更之后异步执行，这使得它不会阻塞浏览器的绘制过程。
- `useLayoutEffect` 在 DOM 更新之后同步执行，但在浏览器绘制之前。因此，如果你的 `useLayoutEffect` 中有大量工作，它可能会导致视觉上的延迟。

### 示例

假设你有一个组件，需要在组件挂载后立即测量一个 DOM 节点的大小，并根据这个大小做一些调整。在这种情况下，使用 `useLayoutEffect` 是合适的，因为它可以保证在浏览器绘制前完成测量和调整，避免出现视觉抖动。

```javascript
import React, { useLayoutEffect, useRef, useState } from 'react';

function MeasureExample() {
  const [size, setSize] = useState({});
  const ref = useRef();

  useLayoutEffect(() => {
    setSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
    // 做一些基于这个大小的操作
  }, []); // 空依赖数组，仅在组件挂载时运行

  return (
    <div ref={ref}>
      我是一个需要测量的元素
      <p>宽度: {size.width}px</p>
      <p>高度: {size.height}px</p>
    </div>
  );
}
```

在这个示例中：

- `useLayoutEffect` 用于在组件挂载后立即测量 `div` 元素的大小。
- 由于 `useLayoutEffect` 在 DOM 更新后立即执行，它可以确保在页面渲染之前完成所有的测量和状态更新，避免了由于异步更新引起的任何视觉抖动。
- `setSize` 被调用来更新组件状态，这会导致组件再次渲染，但此时我们已经有了正确的尺寸信息。

#### 何时使用 `useLayoutEffect`

`useLayoutEffect` 应该在需要同步读取或更改 DOM，并且不希望有任何视觉延迟时使用。然而，由于它会阻塞浏览器的绘制，所以应该谨慎使用，避免在其中执行耗时的操作。大多数情况下，`useEffect` 是更好的选择，因为它不会阻塞页面渲染，更适合处理不需要同步执行的副作用。





### 4.6. useContext

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



### 4.7. useReducer

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



## 5. API

### 5.1. ForwardRef

#### Reference

- [`forwardRef(render)`](https://react.dev/reference/react/forwardRef#forwardref)
- [`render` function](https://react.dev/reference/react/forwardRef#render-function)

#### Usage

- [Exposing a DOM node to the parent component](https://react.dev/reference/react/forwardRef#exposing-a-dom-node-to-the-parent-component)
- [Forwarding a ref through multiple components](https://react.dev/reference/react/forwardRef#forwarding-a-ref-through-multiple-components)
- [Exposing an imperative handle instead of a DOM node](https://react.dev/reference/react/forwardRef#exposing-an-imperative-handle-instead-of-a-dom-node)

#### 示例

假设我们有一个 `FancyButton` 组件，我们希望从父组件中直接访问这个按钮的 DOM 元素。我们可以使用 `forwardRef` 来实现这一点。

```javascript
import React, { useRef, useEffect } from 'react';

// 使用 forwardRef 创建组件
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function App() {
  // 可以直接获取子组件的 ref
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current); // 这将指向 <button> DOM 节点
  });

  return <FancyButton ref={ref}>Click me!</FancyButton>;
}

export default App;
```



### 5.2. React.memo

`React.memo` 是一个高阶组件，用于防止不必要的重新渲染。它仅检查组件的 props 是否发生变化，如果 props 没有变化，则不会重新渲染组件。这对于优化那些仅依赖于 props 且不需要频繁更新的组件特别有用。

- **用途**：用于包装函数组件，当组件的 props 没有发生变化时，避免组件的重新渲染。
- **工作方式**：`React.memo` 对组件的 props 进行浅比较。如果比较结果显示 props 没有变化，React 将跳过渲染该组件及其子组件。
- **使用场景**：适用于那些渲染开销较大的组件，特别是当这些组件经常接收相同的 props 时。

```javascript
const MyComponent = React.memo(function MyComponent(props) {
    // 组件逻辑
});
```

### 

### 5.3. lazy

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





## 6. Dom

1. ### `render(reactNode, domNode, callback?)` 

Call `render` to display a React component inside a browser DOM element.

```javascript
import { render } from 'react-dom';

const domNode = document.getElementById('root');

render(<App />, domNode);
```

React will display `<App />` in the `domNode`, and take over managing the DOM inside it.

An app fully built with React will usually only have one `render` call with its root component. 



2. ### `createRoot(domNode, options?)` 

Call `createRoot` to create a React root for displaying content inside a browser DOM element.

```javascript
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');

const root = createRoot(domNode);
```

React will create a root for the `domNode`, and take over managing the DOM inside it. After you’ve created a root, you need to call [`root.render`](https://react.dev/reference/react-dom/client/createRoot#root-render) to display a React component inside of it:

```javascript
root.render(<App />);
```

An app fully built with React will usually only have one `createRoot` call for its root component. A page that uses “sprinkles” of React for parts of the page may have as many separate roots as needed.

3. ### `createPortal(children, domNode, key?)` 

When you want to render a piece of JSX in a different part of the DOM tree that isn’t a child of your component (for example, a modal or a tooltip), use [`createPortal`](https://react.dev/reference/react-dom/createPortal) instead of `createRoot`.

To create a portal, call `createPortal`, passing some JSX, and the DOM node where it should be rendered:

```javascript
export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
```



## 7. 组件间的信息传递

### 1. 提升状态（Lifting State Up）

这是一种在没有使用Context或其他状态管理库的情况下，在组件之间共享状态的常见方法。基本思想是将共享状态放在公共父组件中，然后通过props将状态和用于修改状态的函数传递给子组件。

```jsx
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

### 3. Mobx

1. #### 基本概念

​	**State**

​	**Action** (modify state)

​	**Derivations**: 

​		derivation1: **Computed Value**: 基于state自动变化数值

​		derivation2: **Reaction**: 基于state自动产生side effect

2. #### 基本API

Properties, entire objects, arrays, Maps and Sets can all be made observable. The basics of making objects observable is specifying an annotation per property using `makeObservable`. The most important annotations are:

- [`observable`](https://mobx.js.org/observable-state.html#observable) defines a trackable field that stores the state.
- [`action`](https://mobx.js.org/actions.html) marks a method as an action that will modify the state.
- [`computed`](https://mobx.js.org/computeds.html) marks a getter that will derive new facts from the state and cache its output.

```javascript
import { makeObservable, observable, action, computed } from "mobx"

class Todo {
    id = Math.random()
    title = ""
    finished = false

    constructor(title) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        })
        this.title = title
    }

    toggle() {
        this.finished = !this.finished
    }
}

class TodoList {
    todos = []
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
    constructor(todos) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })
        this.todos = todos
    }
}
```



Reactions

 [`autorun`](https://mobx.js.org/reactions.html#autorun), [`reaction`](https://mobx.js.org/reactions.html#reaction) or [`when`](https://mobx.js.org/reactions.html#when) ...

```javascript
// A function that automatically observes the state.
autorun(() => {
    console.log("Tasks left: " + todos.unfinishedTodoCount)
})
```



3. #### React Integration

**3.1. `observer` **

The `observer` HoC automatically subscribes React components to *any observables* that are used *during rendering*. 

```javascript
import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const myTimer = new Timer()

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)

ReactDOM.render(<TimerView timer={myTimer} />, document.body)

setInterval(() => {
    myTimer.increaseTimer()
}, 1000)
```

**3.2. 两大坑点**

3.2.1. Tip: Grab values from objects as late as possible

`observer` works best if you pass object references around as long as possible, and **only read their properties inside the `observer` based components** that are going to render them into the DOM / low-level components. In other words, `observer` reacts to the fact that you 'dereference' a value from an object.

In the above example, the `TimerView` component would **not** react to future changes if it was defined as follows, because the `.secondsPassed` is not read inside the `observer` component, but outside, and is hence *not* tracked:

```javascript
const TimerView = observer(({ secondsPassed }) => <span>Seconds passed: {secondsPassed}</span>)

React.render(<TimerView secondsPassed={myTimer.secondsPassed} />, document.body)
```

如果 `TimerView` 组件接受 `secondsPassed` 作为一个 prop 而不是直接从 `MobX` 中读取它，`MobX` 就无法追踪 `secondsPassed` 的变化。这是因为 `secondsPassed` 的值是在组件外部读取的，然后作为一个普通的 prop 传递给 `TimerView`。即使这个值在 `myTimer` 中改变了，`MobX` 也不会触发 `TimerView` 的重新渲染，因为从 `MobX` 的角度看，`TimerView` 并没有直接使用（或“访问”）这个可观察状态。

所以，要让 `TimerView` 组件响应 `secondsPassed` 的变化，应该直接在 `TimerView` 组件内部访问这个状态。例如，通过将整个 `myTimer` 对象作为一个 prop 传递给 `TimerView`，然后在 `TimerView` 内部访问 `timer.secondsPassed`。

3.2.2. Don't pass observables into components that aren't `observer`

```javascript
class Todo {
    title = "test"
    done = true

    constructor() {
        makeAutoObservable(this)
    }
}

const TodoView = observer(({ todo }: { todo: Todo }) =>
   // WRONG: GridRow won't pick up changes in todo.title / todo.done
   //        since it isn't an observer.
   return <GridRow data={todo} />

   // CORRECT: let `TodoView` detect relevant changes in `todo`,
   //          and pass plain data down.
   return <GridRow data={{
       title: todo.title,
       done: todo.done
   }} />

   // CORRECT: using `toJS` works as well, but being explicit is typically better.
   return <GridRow data={toJS(todo)} />
)
```

组件必须包裹`observer`才能相应内部`observable`的变化。

如果子组件要相应`observable`的变化，则必须二选一：

1. 包裹`observer`
2. 把`observable`给拆开成具体的attribute，把他们当成props传给子组件。以上例子中，`todo`地址一般不会发生变化，而他的attribute可能变化。

## 8. React-router-dom

### 1. 基本概念

#### 1.1. Path and URL

```javascript
<Route path="/users/:userId" component={UserComponent} />
```

当用户访问 `http://yourapp.com/users/123` 时：

- `path` 是 `/users/:userId`，它是定义路由时使用的模式。
- `url` 是 `/users/123`，它是匹配到的实际URL路径。



### 2. Hook

1. **`useHistory` 钩子**:

   - `useHistory` 是一个钩子，它允许你访问 `history` 实例。这个实例使你能够在组件中进行导航（比如前进、后退或跳转到特定的路径）。

   - 示例用法：

     ```javascript
     import { useHistory } from 'react-router-dom';
     
     function MyComponent() {
       let history = useHistory();
       // 使用 history 进行导航
       function handleClick() {
         history.push('/home');
       }
     
       return (
         <button onClick={handleClick}>Go to home</button>
       );
     }
     ```

2. **`useLocation` 钩子**:

   - `useLocation` 钩子返回当前 URL 的 `location` 对象。它可以用于访问当前 URL 的路径名、查询字符串、哈希值等。

   - 示例用法：

     ```javascript
     import { useLocation } from 'react-router-dom';
     
     function MyComponent() {
       let location = useLocation();
       // 使用 location 对象
       return <div>Current URL: {location.pathname}</div>;
     }
     ```

3.  **`useParams`**钩子

   `useParams` 是一个 Hook，用于从当前 URL 中提取路径参数。当你在定义路由时使用了像 `:param` 这样的动态路径部分，`useParams` 就可以帮助你获取这些路径参数的实际值。

   #### 示例：

   假设你的路由定义如下：
   
   ```javascript
   <Route path="/post/:postId" component={Post} />
   ```
   
   在 `Post` 组件中，你可以使用 `useParams` 来获取 `postId`：
   
   ```javascript
   import { useParams } from 'react-router-dom';
   
   function Post() {
     const { postId } = useParams();
   
     // 现在可以使用 postId
   }
   ```
   
4. **`useRouteMatch` 钩子**:

   - `useRouteMatch` 钩子用于匹配当前 URL。它类似于组件的 `match` 对象，可用于获取 URL 参数。

   - 示例用法：

     ```javascript
     import { useRouteMatch } from 'react-router-dom';
     
     function BlogPost() {
       let match = useRouteMatch('/blogs/:id');
       // 使用 match 对象
       let blogId = match.params.id;
       return <div>Blog ID: {blogId}</div>;
     }
     ```

### 3. BrowserRouter, HashRouter

### BrowserRouter

`BrowserRouter` 使用 HTML5 的历史 API (`pushState`, `replaceState`, `popstate`) 来保持 UI 和 URL 的同步。这意味着它创建的是常规的 URL。

#### 特点：

- 生成看起来像普通网页 URL 的路由（例如 `http://example.com/about`）。
- 需要服务器正确配置，以便对所有可能的 URL 响应相同的 HTML 页面，因为应用的路由是在客户端处理的。
- 更适用于支持 HTML5 历史 API 的现代 web 服务器。

#### 示例：

```javascript
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}
```

### HashRouter

`HashRouter` 使用 URL 的哈希部分（`window.location.hash`）来保持 UI 和 URL 的同步。这种方式不依赖于 HTML5 历史 API。

#### 特点：

- 生成带有 `#` 的 URL（例如 `http://example.com/#/about`）。
- 不需要服务器端的特殊配置，因为 URL 的哈希部分永远不会发送到服务器。
- 哈希变化可以通过 `hashchange` 事件监听到，因此可以在不支持 HTML5 历史 API 的旧浏览器中使用。

#### 示例：

```javascript
import { HashRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  );
}
```

### 选择哪一个？

- 如果你的服务器可以配置以响应所有路由请求，或者你使用的是像 Create React App 这样的开发工具(自动配置好响应web服务器)，那么 `BrowserRouter` 是一个更好的选择，因为它可以创建干净、标准的 URL.
- 如果你的应用是一个静态文件服务器，不方便配置服务器来响应所有路由请求，或者需要在旧浏览器中运行，那么 `HashRouter` 会更加方便和实用。