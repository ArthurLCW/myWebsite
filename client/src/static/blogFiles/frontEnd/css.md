# CSS知识查缺补漏

## 0. CSS盒模型

1. **内容（Content）**:
   - 这是盒子的主体部分，包含了文本、图片或其他元素。
   - 在CSS中，可以通过`width`和`height`属性来设置内容区域的大小。
2. **内边距（Padding）**:
   - 内边距是内容区域与边框之间的空间。
   - 它可以通过`padding-top`、`padding-right`、`padding-bottom`、`padding-left`来分别设置，或者使用`padding`简写属性一次性设置所有四个方向的内边距。
3. **边框（Border）**:
   - 边框环绕在内边距和内容之外。
   - 可以通过`border-width`、`border-style`、`border-color`来分别设置边框的宽度、样式和颜色，或者使用`border`简写属性。
4. **外边距（Margin）**:
   - 外边距是盒子与其他元素之间的空间。
   - 可以通过`margin-top`、`margin-right`、`margin-bottom`、`margin-left`来分别设置，或者使用`margin`简写属性。

### 盒模型的类型

CSS盒模型有两种类型：标准盒模型和IE盒模型（也称为怪异模式）。

- **标准盒模型（W3C盒模型）**:
  - 在这个模型中，元素的总宽度和总高度是**内容的宽度和高度加上内边距、边框和外边距**。
  - `width`和`height`属性只包括内容区域的大小。
- **IE盒模型（怪异模式）**:
  - 在这个模型中，元素的总宽度和总高度包括内容、内边距和边框，但**不包括外边距**。
  - `width`和`height`属性包括内容、内边距和边框的大小。
  - 正常模式下也可以通过设置`box-sizing`属性为`border-box`来实现`width`和`height`属性包括内容、内边距和边框的大小



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

**align-items: center;** 定义如何沿交叉轴位置对齐

**justify-content: center;** 定义如何沿着主轴位置对齐

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

relative定位：指相对static定位的偏移量。**不脱离文档流，仍占据原位置**

absolute定位：指相对第一个非静态定位的父元素的偏移量。**脱离文档流**

fixed定位：指相对浏览器的偏移量。**脱离文档流**

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

```css
span {
    display: block;
}
```

上面的 CSS 会使所有`<span>`元素表现得像块级元素一样。

## 3. 选择器优先级

选择器的优先级是通过一个相对权重系统来计算的，这个权重系统通常可以表示为四个部分的值：(a, b, c, d)。

1. **a**：如果样式是通过内联样式设置的（即在HTML元素的`style`属性中），则a=1，否则a=0。
2. **b**：表示ID选择器的数量。
3. **c**：表示类选择器、属性选择器和伪类选择器的数量。
4. **d**：表示类型选择器和伪元素选择器的数量。

通用选择器（`*`）、组合符（如`+`, `>`, `~`, ``）和否定伪类（`:not()`）不会增加优先级。

### 优先级计算示例

假设你有以下CSS规则：

```css
#nav .item { color: blue; } /* a=0, b=1, c=1, d=0 */
.item a { color: green; }    /* a=0, b=0, c=1, d=1 */
a { color: red; }            /* a=0, b=0, c=0, d=1 */
```

这些规则的优先级分别是：

1. `#nav .item` 的优先级是 (0, 1, 1, 0)
2. `.item a` 的优先级是 (0, 0, 1, 1)
3. `a` 的优先级是 (0, 0, 0, 1)

在比较优先级时，从左到右比较每个部分的值。一个较高的值会覆盖所有较低部分的值。例如，一个ID选择器（b=1）的优先级高于任何数量的类选择器（c）和类型选择器（d）。

### 重要性

除了选择器的优先级，`!important`声明也会影响CSS规则的应用。如果一个声明后面有`!important`，它将覆盖任何没有标记为`!important`的普通声明，无论选择器的优先级如何。





## 4. 伪类和伪元素

伪类和伪元素都是 CSS 的特性，它们允许你为页面上的某些元素或元素的某些部分应用样式，而这些元素或部分可能并没有具体的 HTML 表示。它们都使用冒号 (`:`) 作为前缀，但伪元素使用两个冒号 (`::`)。

### 1. 伪类 (Pseudo-classes)

伪类用于定义**元素的特殊状态**。例如，当鼠标悬停在链接上时，你可以使用 `:hover` 伪类为该链接定义样式。

**常见的伪类**：

- `:hover`：元素被鼠标悬停时的状态。
- `:active`：元素被激活（例如，鼠标按下一个按钮）时的状态。
- `:focus`：元素获得焦点（例如，输入框被选中）时的状态。
- `:nth-child()`：选择其父元素的第 n 个子元素。
- `:first-child` 和 `:last-child`：选择其父元素的第一个或最后一个子元素。

**例子**：

```css
a:hover {
    color: red;
}

input:focus {
    border-color: blue;
}
```

### 2. 伪元素 (Pseudo-elements)

伪元素用于选择**元素的某一部分**，这部分在 HTML 中并没有具体的表示。**一个选择器只能有一个伪元素**。例如，你可以使用 `::before` 和 `::after` 伪元素在元素的内容之前或之后插入内容。

**常见的伪元素**：

- `::before`：在元素的内容之前插入内容。
- `::after`：在元素的内容之后插入内容。
- `::first-line`：选择元素的第一行。
- `::first-letter`：选择元素的第一个字母。

**例子**：

```css
p::before {
    content: "开头：";
}

p::after {
    content: " - 结尾";
}

p::first-letter {
    font-size: 2em;
    font-weight: bold;
}
```

总之，伪类和伪元素为开发者提供了强大的工具，使其能够为元素的特定状态或部分应用样式，而无需额外的 HTML 标记。



## 5. padding margin border书写格式

以下是关于`margin`的基本定义和使用方法：

1. **方向**:

   - ```css
     margin
     ```

      可以分为四个方向来定义：

     - `margin-top`: 定义元素的顶部外边距。
     - `margin-right`: 定义元素的右侧外边距。
     - `margin-bottom`: 定义元素的底部外边距。
     - `margin-left`: 定义元素的左侧外边距。

2. **简写属性**:

   - 你可以使用 

     ```css
     margin
     ```

      属性的简写形式来同时为四个方向设置外边距。

     - `margin: 10px;`：所有四个方向的外边距都为10px。
     - `margin: 10px 20px;`：上下外边距为10px，左右外边距为20px。
     - `margin: 10px 20px 30px;`：上外边距为10px，左右外边距为20px，底部外边距为30px。
     - `margin: 10px 20px 30px 40px;`：上外边距为10px，右外边距为20px，底部外边距为30px，左外边距为40px（顺时针）。

3. **值**:

   - ```css
     margin
     ```

      可以接受以下类型的值：

     - **固定值**：如 `px`, `em`(父元素**字体大小**倍数，2em就是父元素**字体大小**两倍), `rem`(根元素**字体大小**倍数，2em就是根元素**字体大小**两倍), `cm`, `mm`, `vh`(浏览器屏幕百分比) 等。
     - **百分比值**：基于父元素的宽度。
     - **自动值**：`auto`，通常用于水平居中块级元素。

4. **外边距合并**:

   - 在某些情况下，垂直方向上的外边距会合并（或称为叠加）。这意味着，***如果两个垂直相邻的块级元素的外边距相遇，它们之间的距离将是两个外边距值中的较大者，而不是它们的总和***。

5. **负值**:

   - `margin` 可以接受负值，这在某些布局技巧中特别有用。



## 6. 选择器样式

1. **元素选择器**： **Element Selector** 

   - **描述**：选择所有指定的 HTML 元素。

   - 示例：

     ```css
     p {
         color: blue;
     }
     ```

     所有 

     ```html
     <p>
     ```

      标签的文本颜色都会变为蓝色。

2. **类选择器**： **Class Selector** 

   - **描述**：选择所有带有指定类名的元素。

   - 示例：

     ```css
     .highlight {
         background-color: yellow;
     }
     ```

     HTML:

     ```html
     <p class="highlight">这段文本背景色为黄色。</p>
     ```

3. **ID 选择器**： **ID Selector** 

   - **描述**：选择带有指定 ID 的元素。每个 ID 应该在页面上是唯一的。

   - 示例：

     ```css
     #header {
         background-color: gray;
     }
     ```

     HTML:

     ```html
     <div id="header">这是一个灰色背景的头部。</div>
     ```

4. **后代选择器**： **Descendant Selector** 

   - **描述**：选择指定元素的所有后代。

   - 示例：

     ```css
     article p {
         font-size: 18px;
     }
     ```

     HTML:

     ```html
     <article>
         <p>这段文本的字体大小为18px。</p>
         <div><p>这段文本的字体大小也为18px，因为它是<article>的后代。</p></div>
     </article>
     ```

5. **子元素选择器**： **Child Selector** 

   - **描述**：选择指定元素的**直接**子元素。看html范例！

   - 示例：

     ```css
     ul>li {
         list-style-type: square;
     }
     ```

     HTML:

     ```html
     <ul>
         <li>这是一个方形的列表项。</li>
         <li>这也是。</li>
         <ol><li>这不是，因为它不是<ul>的直接子元素。</li></ol>
     </ul>
     ```

6. **属性选择器**： **Attribute Selector** 

   - **描述**：选择带有指定属性和值的元素。

   - 示例：

     ```css
     input[type="text"] {
         border: 1px solid black;
     }
     ```

     HTML:

     ```html
     <input type="text" placeholder="这个输入框有黑色边框。">
     <input type="password" placeholder="这个输入框没有特定样式。">
     ```

7. **伪类选择器**： **Pseudo-class Selector** 

   - **描述**：选择元素的特定状态，如悬停、焦点、激活等。

   - 示例：

     ```css
     a:hover {
         color: red;
     }
     
     li:nth-child(odd) {
         background-color: lightgray;
     }
     ```

     HTML:

     ```html
     <a href="#">悬停在我上面，我会变红。</a>
     <ul>
         <li>我是灰色背景的。</li>
         <li>我是默认背景的。</li>
         <li>我是灰色背景的。</li>
     </ul>
     ```

8. **伪元素选择器**： **Pseudo-element Selector** 

   - **描述**：选择元素的某一部分，如第一行、第一个字母等。

   - 示例：

     ```css
     p::first-line {
         font-weight: bold;
     }
     
     p::first-letter {
         font-size: 2em;
     }
     ```

     HTML:

     ```html
     htmlCopy code<p>这是一个长段落。只有第一行是粗体的，而第一个字母的字体大小是其他字母的两倍。</p>
     ```

9. **分组选择器**： **Grouping Selector** 

   - **描述**：将多个选择器组合在一起，为所有选择器应用相同的样式。

   - 示例：

     ```css
     h1, h2, h3 {
         font-family: "Arial", sans-serif;
     }
     ```

     HTML:

     ```html
     <h1>我是 Arial 字体。</h1>
     <h2>我也是。</h2>
     <h3>我同样是。</h3>
     ```

10. **通配符选择器**： **Wildcard Selector** 

    - **描述**：选择页面上的所有元素。

    - 示例：

      ```css
      * {
          box-sizing: border-box;
      }
      ```

11. **相邻兄弟选择器**： **Adjacent Sibling Selector** 

    - **描述**：选择紧接在另一个元素后的元素，且两者共享同一个父元素。

    - 示例：

      ```css
      h2 + p {
          margin-top: 20px;
      }
      ```

      HTML:

      ```html
      <h2>标题</h2>
      <p>这段文本上边距为20px，因为它紧跟在<h2>后面。</p>
      ```

12. **通用兄弟选择器**： **General Sibling Selector** 

    - **描述**：选择同一父元素下的所有兄弟元素。

    - 示例：

      ```css
      h2 ~ p {
          color: green;
      }
      ```

      HTML:

      ```html
      <h2>标题</h2>
      <p>我是绿色的。</p>
      <div>我是默认颜色的。</div>
      <p>我也是绿色的，因为我和上面的<p>都是<h2>的兄弟元素。</p>
      ```

## 7. flexbox

1. **flex-direction**（定义主轴的方向）:
   - `row`: 项目从左到右水平排列（默认值）。
   - `row-reverse`: 项目从右到左水平排列。
   - `column`: 项目从上到下垂直排列。
   - `column-reverse`: 项目从下到上垂直排列。
2. **justify-content**（沿主轴对齐项目）:
   - `flex-start`: 项目排列在容器的开始位置（默认值）。
   - `flex-end`: 项目排列在容器的结束位置。
   - `center`: 项目在容器中居中。
   - `space-between`: 项目之间有相等的空间，但容器的两端没有空间。
   - `space-around`: 项目之间和周围都有相等的空间。
   - `space-evenly`: 项目之间和容器的两端都有相等的空间。
3. **align-items**（沿交叉轴对齐项目）:
   - `stretch`: 项目被拉伸以填充容器的高度或宽度（默认值）。
   - `flex-start`: 项目排列在容器的交叉轴的开始位置。
   - `flex-end`: 项目排列在容器的交叉轴的结束位置。
   - `center`: 项目在交叉轴上居中。
   - `baseline`: 项目沿其基线对齐。
4. **flex-wrap**（定义项目如何换行）:
   - `nowrap`: 项目都在一行内，不换行（默认值）。
   - `wrap`: 项目会在需要的时候换行到下一行。
   - `wrap-reverse`: 项目会在需要的时候换行，但是是到上一行。
5. **align-content**（当有多行时，定义行的对齐方式）:
   - `stretch`: 行被拉伸以填充容器的高度（默认值）。
   - `flex-start`: 行紧靠容器的交叉轴的开始位置。
   - `flex-end`: 行紧靠容器的交叉轴的结束位置。
   - `center`: 行在交叉轴上居中。
   - `space-between`: 行之间有相等的空间，但容器的两端没有空间。
   - `space-around`: 行之间和周围都有相等的空间。
6. **flex-grow**（定义项目的增长因子）:
   - 接受一个无单位的值，如 `0`, `1`, `2` 等。这个值定义了当有可用空间时，项目应该增长的比例。比如，flex: 2增长20px, flex:1增长10px。
7. **flex-shrink**（定义项目的收缩因子）:
   - 接受一个无单位的值，如 `0`, `1`, `2` 等。这个值定义了当容器太小，无法容纳所有项目时，项目应该收缩的比例。
8. **flex-basis**（定义项目的默认大小）:
   - 可以是一个具体的值，如 `20px`, `5em`, `30%` 等，或者是 `auto`，表示项目的默认内容大小。
9. **flex**（是`flex-grow`, `flex-shrink`, 和 `flex-basis`的简写）:
   - 例如: `flex: 1 0 auto;` 表示 `flex-grow: 1;`, `flex-shrink: 0;`, 和 `flex-basis: auto`（ 定义了元素在分配剩余空间之前的默认大小）.
10. **align-self**（允许单个项目有与其他项目不同的对齐方式）:

- `auto`: 项目的对齐方式继承自容器的 `align-items` 属性。
- `stretch`: 项目被拉伸以填充容器。
- `flex-start`: 项目排列在容器的交叉轴的开始位置。
- `flex-end`: 项目排列在容器的交叉轴的结束位置。
- `center`: 项目在交叉轴上居中。
- `baseline`: 项目沿其基线对齐。



## 8. 层叠上下文

层叠上下文（Stacking Context）是一个非常重要的概念，用于CSS中的视觉渲染。它决定了页面上元素的堆叠顺序，即哪些元素在其他元素的上方或下方。理解层叠上下文对于控制复杂布局中元素的重叠和可见性至关重要。

### 基本概念

- **层叠顺序**：在一个层叠上下文中，元素按照特定的顺序堆叠。这个顺序不仅由 `z-index` 决定，还受元素类型和源代码中的顺序影响。
- **独立性**：每个层叠上下文都是独立的。在一个层叠上下文内部，子元素的堆叠顺序不会影响到外部的元素。
- **根层叠上下文**：文档的根元素（通常是 `` 元素）会创建一个根层叠上下文。

### 层叠顺序

在一个层叠上下文中，元素按以下顺序堆叠：

1. **背景和边框**：层叠上下文元素的背景和边框。
2. **负 `z-index`**：`z-index` 值小于0的子元素。
3. **块级盒模型**：非定位的块级元素。
4. **浮动元素**：浮动的元素。
5. **行内盒模型**：非定位的行内元素。
6. **`z-index: auto` 或 `z-index: 0`**：`z-index` 为 `auto` 或 `0` 的定位元素。
7. **正 `z-index`**：`z-index` 值大于0的子元素。

### 创建新的层叠上下文

如前所述，某些CSS属性和值的组合会创建新的层叠上下文。这包括但不限于定位元素与非 `auto` 的 `z-index`、`opacity` 小于1、使用 `transform`、`filter` 等。

### 重要性

- **避免意外重叠**：理解层叠上下文可以帮助避免元素之间的意外重叠。
- **性能优化**：合理使用层叠上下文可以提高页面渲染性能，因为浏览器可以更有效地处理重绘和重排。
- **动画和交互**：在复杂的动画和交互设计中，正确管理层叠上下文是实现预期视觉效果的关键。



## 9. transform

### 1. 旋转（rotate）

使用 `rotate()` 函数可以旋转一个元素。例如，将一个元素顺时针旋转 45 度：

```css
transform: rotate(45deg);
```

### 2. 缩放（scale）

使用 `scale()` 函数可以改变元素的大小。例如，将一个元素的宽度和高度放大两倍：

```css
transform: scale(2);
```

你也可以分别指定水平和垂直方向的缩放比例：

```css
transform: scale(2, 3); /* 水平方向放大两倍，垂直方向放大三倍 */
```

### 3. 倾斜（skew）

使用 `skew()` 函数可以倾斜一个元素。 它会使元素的形状扭曲，类似于斜切效果。这种变换会改变元素的形状，但不会改变其旋转。 例如，沿 X 轴倾斜 30 度，沿 Y 轴倾斜 20 度：

```css
transform: skew(30deg, 20deg);
```

### 4. 平移（translate）

使用 `translate()` 函数可以移动元素。例如，沿 X 轴移动 50 像素，沿 Y 轴移动 100 像素：

```css
transform: translate(50px, 100px);
```

### 组合使用

`transform` 属性可以组合多个函数，以实现更复杂的变换。例如，同时进行旋转、缩放和平移：

```css
transform: rotate(30deg) scale(1.5) translate(100px, 50px);
```

### 注意事项

- `transform` 属性在不同的浏览器中可能需要前缀，如 `-webkit-`、`-moz-`、`-o-` 和 `-ms-`。
- `transform` 会创建一个新的层叠上下文（stacking context）。
- 在使用 `transform` 时，元素的布局位置仍然是基于其未变换的状态。这意味着即使元素被移动或旋转，它原本占据的空间仍然保留。



## 10. CSS模块化技术

CSS Modules 旨在解决传统 CSS 开发中的一些常见问题，如全局命名空间的冲突、重复类名等。这种技术通过在构建过程中对类名和选择器进行局部作用域处理和唯一性转换，来避免这些问题。

### 基本概念

1. **局部作用域**：CSS Modules 自动将所有类名和选择器变成唯一的标识符。这意味着你可以在一个模块中使用简单的类名（如 `.button`、`.menu`）而不用担心与其他文件中的同名类冲突。
2. **显式依赖**：CSS Modules 通过 JavaScript 引入 CSS 文件，创建了一个显式的依赖关系。这种方式有助于理解和维护代码之间的关系。
3. **组合**：在 CSS Modules 中，可以轻松地组合多个类，以创建新的样式变种。

### 实现方式

通常，你会有一个 `.module.css` 或 `.module.scss` 文件，里面定义了一些类。然后，在 JavaScript 组件中导入这些类，并使用它们。

#### 示例

假设有一个样式文件 `Button.module.css`：

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
}
```

在 JavaScript 组件中使用这个样式文件：

```css
import React from 'react';
import styles from './Button.module.css';

const Button = () => {
  return <button className={styles.button}>Click me</button>;
};

export default Button;
```

在上述示例中，`.button` 类在构建时会被转换成一个唯一的标识符，例如 `Button_button__3K0xp`，这样就避免了与其他 CSS 文件中 `.button` 类的潜在冲突。

### 配置

为了使用 CSS Modules，你可能需要对构建系统（如 Webpack）进行相应配置。大多数现代前端框架（如 Create React App、Next.js）已经内置了对 CSS Modules 的支持。

### 优势

- **避免全局命名空间污染**：通过局部作用域，CSS Modules 防止了类名冲突。
- **模块化和重用性**：CSS Modules 提高了样式的模块化程度和重用性。
- **清晰的依赖关系**：由于 CSS 是通过 JavaScript 引入的，因此依赖关系更加清晰。
- **易于维护**：局部作用域和清晰的依赖关系使得代码易于维护。











​         