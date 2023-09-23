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

```css
span {
    display: block;
}
```

上面的 CSS 会使所有`<span>`元素表现得像块级元素一样。

## 3. 选择器优先级

以下是 CSS 选择器的优先级从高到低的顺序：

1. **内联样式**：直接在 HTML 元素上使用 `style` 属性定义的样式。

   ```css
   <div style="color: red;">这是内联样式</div>
   ```

2. **ID 选择器**：使用 `#` 符号定义的选择器。

   ```css
   #myId {
     color: blue;
   }
   ```

3. **类选择器、属性选择器和伪类**：使用 `.` 符号、`[]` 符号和 `:` 符号定义的选择器。

   ```css
   .myClass {
     color: green;
   }
   
   [data-attribute="value"] {
     color: yellow;
   }
   
   :hover {
     color: pink;
   }
   ```

4. **元素选择器和伪元素**：直接使用元素名称和 `::` 符号定义的选择器。

   ```css
   p {
     color: brown;
   }
   
   ::before {
     content: "伪元素";
   }
   ```

5. **通配符选择器**：使用 `*` 符号定义的选择器。

   ```css
   * {
     color: orange;
   }
   ```

6. **继承的样式**：样式可以从父元素继承到子元素。

7. **默认的浏览器样式**：如果没有任何样式被应用，浏览器会使用其默认样式。

当多个选择器选择同一个元素并有冲突时，优先级更高的选择器的样式会被应用。如果优先级相同，则最后定义的样式会被应用。

**例子**：

考虑以下的 CSS 和 HTML：

```css
#myId {
  color: blue;
}

.myClass {
  color: green;
}

p {
  color: brown;
}
<p id="myId" class="myClass">这是一个段落。</p>
```

虽然这个段落被三个选择器选择，但 `#myId` 的优先级最高，所以段落的颜色会是蓝色。



## 4. 伪类和伪元素

伪类和伪元素都是 CSS 的特性，它们允许你为页面上的某些元素或元素的某些部分应用样式，而这些元素或部分可能并没有具体的 HTML 表示。它们都使用冒号 (`:`) 作为前缀，但伪元素使用两个冒号 (`::`)。

### 1. 伪类 (Pseudo-classes)

伪类用于定义元素的特殊状态。例如，当鼠标悬停在链接上时，你可以使用 `:hover` 伪类为该链接定义样式。

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

伪元素用于选择元素的某一部分，这部分在 HTML 中并没有具体的表示。**一个选择器只能有一个伪元素**。例如，你可以使用 `::before` 和 `::after` 伪元素在元素的内容之前或之后插入内容。

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

   - ```
     margin
     ```

      可以分为四个方向来定义：

     - `margin-top`: 定义元素的顶部外边距。
     - `margin-right`: 定义元素的右侧外边距。
     - `margin-bottom`: 定义元素的底部外边距。
     - `margin-left`: 定义元素的左侧外边距。

2. **简写属性**:

   - 你可以使用 

     ```
     margin
     ```

      属性的简写形式来同时为四个方向设置外边距。

     - `margin: 10px;`：所有四个方向的外边距都为10px。
     - `margin: 10px 20px;`：上下外边距为10px，左右外边距为20px。
     - `margin: 10px 20px 30px;`：上外边距为10px，左右外边距为20px，底部外边距为30px。
     - `margin: 10px 20px 30px 40px;`：上外边距为10px，右外边距为20px，底部外边距为30px，左外边距为40px（顺时针）。

3. **值**:

   - ```
     margin
     ```

      可以接受以下类型的值：

     - **固定值**：如 `px`, `em`, `rem`, `cm`, `mm` 等。
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
   - 例如: `flex: 1 0 auto;` 表示 `flex-grow: 1;`, `flex-shrink: 0;`, 和 `flex-basis: auto;`.
10. **align-self**（允许单个项目有与其他项目不同的对齐方式）:

- `auto`: 项目的对齐方式继承自容器的 `align-items` 属性。
- `stretch`: 项目被拉伸以填充容器。
- `flex-start`: 项目排列在容器的交叉轴的开始位置。
- `flex-end`: 项目排列在容器的交叉轴的结束位置。
- `center`: 项目在交叉轴上居中。
- `baseline`: 项目沿其基线对齐。























