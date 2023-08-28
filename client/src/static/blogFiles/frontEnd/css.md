# CSS知识查缺补漏

## 1. 元素居中

### 1.1.  父元素display:flex,子元素 margin: auto 

margin: auto默认**水平**居中。但在flex container（弹性容器）中会变为**水平**+**垂直**居中。

```html
<head>
    <style>
        .parent{
            width: 300px;
            height: 200px;
            display: flex;
            background-color: yellow;
        }
        .child{
            width: 50px;
            height: 50px;
            margin: auto;
            background-color: red;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="child">
            HI
        </div>
    </div>
</body>
```



### 1.2. 使用Flexbox

定义容器的**display: flex**; 

**align-items: center;** 定义如何沿着垂直位置对齐

**justify-content: center;** 定义如何沿着水平位置对齐

```html
<div class="flex-container">
    <div class="centered-content">我是内容</div>
</div>

<style>
.flex-container {
    display: flex;
    width: 300px;
    height: 300px; 
    
    /* 垂直居中，y轴中心位置 */
    align-items: center;  

    /* 水平居中，x轴中心位置 */
    justify-content: center; 

    background-color: yellow;
}
.centered-content{
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>
```



### 1.3. 使用Grid布局

定义容器**display: grid;**

**place-items: center**;

```html
<div class="grid-container">
    <div class="centered-content">我是内容</div>
</div>

<style>
.grid-container {
    display: grid;
    place-items: center;
    width: 300px;
    height: 300px;
    background-color: yellow;
}
.centered-content{
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>
```



### 1.4. 使用定位

父元素相对定位+子元素绝对定位

 `transform` 是 CSS 中的一个属性，用于对元素进行旋转、缩放、移动或倾斜等变换操作。 先将子组件左上角放到中心位置，再向上向左偏移子元素的一半，实现完美居中。

[五种定位](http://c.biancheng.net/css3/position.html)

static定位：原本定位，不会受到top bottom left right影响。

relative定位：指相对static定位的偏移量。

absolute定位：指相对第一个非静态定位的父元素的偏移量。

fixed定位：指相对浏览器的偏移量。

sticky定位：综合相对和固定定位。滚动时是相对定位，滚动到一定位置时是固定定位。

```html
<div class="position-container">
    <div class="centered-content">我是内容</div>
</div>

<style>
.position-container {
    position: relative;
    height: 300px;
}

.centered-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
```

## 2. 行内元素与块级元素

1. **块级元素 (Block-level Elements)**:
   - 默认情况下，块级元素会独占一行，即它们会在内容前后添加一个换行符。
   - 常见的宽度是其父元素的宽度，但可以通过 CSS 来更改。
   - 可以设置宽度、高度、外边距和内边距。
   - 常见的块级元素有：`<div>`,`<p>`, `<h1>`,  ...`<h6>`, `<ul>`, `<ol>`, `<li>`等。
2. **行内元素 (Inline Elements)**:
   - 行内元素不会开始于新的一行，它们会在当前行内连续展示。
   - 通常，宽度和高度是由其内容决定的，不能通过 CSS 显式设置。
   - `margin` 和 `padding` 可以设置，但在垂直方向上可能不会表现得像你期望的那样。
   - 常见的行内元素有：`<span>`, `<a>`, `<strong>`, `<em>`, `<abbr>`, `<cite>` 等。

需要注意的是，通过 CSS 的 `display` 属性，你可以改变元素的显示性质。例如，你可以使一个块级元素表现为行内元素，反之亦然。

例如：

```
cssCopy codespan {
    display: block;
}
```

上面的 CSS 会使所有`<span>`元素表现得像块级元素一样。





