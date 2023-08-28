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

