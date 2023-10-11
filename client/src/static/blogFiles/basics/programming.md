# Programming

## 1. C++

### 1.0. IO

#### 1.0.1. read strings with many spaces; 

自动跳过空格tab换行；

```
scanf("%s", word) != EOF
```

```c++
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {
    char word[100000]; 
    string str;

    // Read words until end of the file (or input)
    while (scanf("%s", word) != EOF) {
        if (str.empty()) str = word;
        else str = string(word)+string(" ")+str;
    }
    printf("%s", str.c_str());
    return 0;
}
```

#### 1.0.2.  read numbers 

自动跳过空格tab换行；

```
int n;
scanf("%d", &n)
```

注意&；%f for float; %ld for long, %lld for long long, %lf for double, %Lf for long double

#### 1.0.3. read line as string

```c++
char line[100];
scanf(" %[^\n]", line); 
```



### 1.1. Data Structures

#### 1.1.1. C++ priority queue

Template:

```c++
template<
    class T,
    class Container = std::vector<T>,
    class Compare = std::less<typename Container::value_type>
> class priority_queue;
```

Default: max-heap

Example: 

```c++
std::priority_queue<int, std::vector<int>, CustomCompare> pq;
```

Self-defined comparator **IMPORTANT**:

```c++
struct CustomCompare {
    bool operator()(const int& a, const int& b) {
        return a > b;  // This makes it a min-heap
    }
};
```

#### 1.1.2. C++ queue/stack/vector

queue<int> q; q.push(x); **q.front()**; q.pop();

stack<int> s; s.push(x); s.top(); s.pop();

```c++
vector<vector<int>> matrix(rows, vector<int>(cols, defaultValue));
```



vector<int> vec; **vec.push_back(); vec. pop_back()**; vec.begin(); vec.end(); vec.front(); vec.back();

vec.shrink_to_fit(); 瘦身

#### 1.1.3. Sort

sort(start, end, comparator());

#### 1.1.4. Pair

```c++
#include <iostream>
#include <utility>

int main() {
    std::pair<int, std::string> p(1, "Hello");
	auto p2 = std::make_pair(2, "two");
    std::cout << "First: " << p.first << ", Second: " << p.second << std::endl;

    return 0;
}
```

### 1.2. String

string[i] => char

int/float to string: to_string(x);

char to string: string str(1, char);

## 2. OOP

### 2.1. 多态

多态是面向对象编程中的一个核心概念，它允许你使用一个统一的接口来操作不同的对象，而这些对象可能属于不同的类。

多态可以分为两种主要类型：

1. **重载 (Overloading)**：

   - **类型**：编译时多态（静态多态）。

   - **描述**：当在同一作用域中有两个或多个函数名相同但参数列表不同的函数时，我们说这些函数是重载的。重载可以基于参数的数量、类型或顺序。

   - 示例

     ：

     ```c++
     void print(int i) {
         std::cout << "Printing int: " << i << std::endl;
     }
     
     void print(double d) {
         std::cout << "Printing double: " << d << std::endl;
     }
     ```

   - 在上述示例中，`print` 函数被重载了，一次用于 `int` 类型，一次用于 `double` 类型。

2. **重写 (Overriding)**：

   - **类型**：运行时多态（动态多态）。

   - **描述**：当派生类提供与基类中同名同参数的函数的自己的实现时，我们说派生类的函数重写了基类的函数。为了确保可以重写基类的函数，基类中的函数必须被声明为 `virtual`。

   - 示例

     ：

     ```c++
     class Animal {
     public:
         virtual void sound() {
             std::cout << "Some sound" << std::endl;
         }
     };
     
     class Dog : public Animal {
     public:
         void sound() override {
             std::cout << "Woof!" << std::endl;
         }
     }
     ```

   - 在上述示例中，`Dog` 类重写了 `Animal` 类中的 `sound` 函数。

多态的实现原理主要涉及到两个概念：虚函数表（vtable）和虚函数指针（vptr）。每个含有虚函数的类，或者从这样的类派生的类，都有一个虚函数表。这个表中存储了虚函数的地址。类的对象中包含一个虚函数指针，指向这个虚函数表。当我们通过基类的指针或引用调用虚函数时，实际上是通过这个虚函数指针找到虚函数表，然后在表中查找并调用相应的函数。这个过程是在运行时完成的，所以可以实现运行时多态。 