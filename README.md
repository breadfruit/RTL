# React Testing Library和Jest

## 背景

最近小组在搭建组件库，对于组件库测试有了一定的了解。源于Elab团队微信公众号的一篇关于[单元测试](https://mp.weixin.qq.com/s/REKt5JnbfJIQY0W9PhCPOA)的推文。

## 什么是测试？

模拟输入，运行测试，对比输出。

## 为什么要测试？

1. 提高代码质量
2. 提高开发者的信心和安全感
3. 最大程度保证产品是否符合预期

## 测试类型

在前端领域中的测试：主要分单元测试，集成测试，端到端测试。

#### 单元测试

单元测试是最容易实现的：代码中多个组件共用的工具类库、多个组件共用的子组件等。

##### Jest（create-reat-app内置est：

Jest 是Facebook出品的一个测试框架，算是一个大而全的测试框架，内置断言、测试覆盖率工具、Mock工具，开箱即用，支持浏览器和 NodeJS，支持BDD写法（也就是expect语法）是React官方推荐使用的测试框架

##### Mocha

Macha也是一个功能丰富的JS测试框架，支持浏览器和NodeJS，不过没有内置断言库、测试覆盖率工具和Mock工具，需要和其他三方库配合使用

##### Testing Library

Test Utilities

#### 端到端测试：

对web前端来说，主要的测试包括表单、动画、页面跳转、dom渲染、Ajax等是否符合预期，从这方面讲，已经包括了集成测试和单元测试。

##### cypress

Cypress一个e2e测试框架，测试界面和文档做到极致的一个产品。

##### playwright

支持使用NodeJS、python、Java、.net四种编程语言的API，同时支持Google Chrome和 Microsoft Edge（带有Chromium）、Apple Safari（带有WebKit）和 Mozilla Firefox。

#### 集成测试：

集成测试通常被应用在：耦合度较高的函数/组件、经过二次封装的函数/组件、多个函数/组件组合而成的函数/组件等。

## 测试思想：TDD和BDD

- TDD：**测试驱动开发（Test-Driven Development）**
- BDD：**行为驱动开发（Behavior Driven Development）**

从上述解释中可以提炼出TDD开发的一般流程：

![图片](https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIqGJ0Bo67c3pG5tOF80rfDa0DDV7QBnVzhZic3ZW1oz5RlOhm4woibEVpDTLNA2pu1iaibeK6sZibFibHAQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### 测试原则：[ARRANGE-ACT-ASSERT](https://link.juejin.cn/?target=https%3A%2F%2Fautomationpanda.com%2F2020%2F07%2F07%2Farrange-act-assert-a-pattern-for-writing-good-tests%2F)

- Arrange：准备好需要测试的内容，比如`render`出组件对应的`dom`元素；比如初始化一些变量值

- Act：包含组件的功能，可能是用户的交互如`userEvent`：`click`；或者发送异步请求使用`async...await`；或者调用某些方法；

- Assert：断言`expect`预期的结果。`Act`后会导致某些预期的反应，比如`click`后页面元素的变化；异步请求后，数据的变化；方法的调用次数等等；

## Testing-library与Jest之前的关系

1. `jest` 是一个开源的 `javascript` 单元测试框架，集成了测试执行器、断言库、spy、mock、snapshot和测试覆盖率报告等功能。
2. `@testing-library` 是用于 `Dom` 和 `UI` 组件测试的工具，提供了一系列常用的测试 `API`。

当我们想要为 `React` 应用编写单元测试的时候，官方推荐是使用 [React Testing Library](https://link.juejin.cn/?target=https%3A%2F%2Ftesting-library.com%2Fdocs%2Freact-testing-library%2Fintro) + [Jest](https://link.juejin.cn/?target=https%3A%2F%2Fjestjs.io%2F) 的方式

## Jest

### 安装

若选择create-react-app的时候内置jest，

其中需要jest,babel-jest，ts-jest, @types/jest

Jest:  安装框架

babel-jest：  babel进行转码

ts-jest ：ts语法解析 

@types/jest：	ts语法定义

### 生命周期

- afterAll(fn, timeout)：所有测试用例跑完以后执行的方法
- beforeAll(fn, timeout)：所有测试用例执行之前执行的方法
- afterEach(fn)：在每个测试用例执行完后执行的方法
- beforeEach(fn)：在每个测试用例执行之前需要执行的方法

### 基本API

`it 或 test` ：用于描述测试本身，其包含两个参数，第一个是该测试的描述，第二个是执行测试的函数。

`expect` ：表示测试需要通过的条件，它将接收到的参数与 `matcher` 进行比较。

`matcher` ：一个希望到达预期条件的函数，称其为匹配器。

`render` ：用于渲染给定组件的方法。

## Testing-library

### 其他类库

- **[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)**: `jest-dom` provides a set of custom Jest matchers that you can use to extend Jest. These make your tests more declarative, clearer to read, and easier to maintain.
- **[@testing-library/user-event](https://github.com/testing-library/user-event):** `user-event` tries to simulate the real events that happen in the browser as the user interacts with elements on the page. For example, `userEvent.click(checkbox)` would change the state of the checkbox.

### API

#### [Queries](https://testing-library.com/docs/queries/byrole)

**screen 为测试用例提供了一个全局 DOM 环境**

| Type of Query         | 0 Matches     | 1 Match        | >1 Matches   | Retry (Async/Await） |
| --------------------- | ------------- | -------------- | ------------ | -------------------- |
| `getBy...`            | Throw error   | Return element | Throw error  | No                   |
| `queryBy...`          | Return `null` | Return element | Throw error  | No                   |
| `findBy...`           | Throw error   | Return element | Throw error  | Yes                  |
| **Multiple Elements** |               |                |              |                      |
| `getAllBy...`         | Throw error   | Return array   | Return array | No                   |
| `queryAllBy...`       | Return `[]`   | Return array   | Return array | No                   |
| `findAllBy...`        | Throw error   | Return array   | Return array | Yes                  |

#### Actions

[fireEvent](https://testing-library.com/docs/dom-testing-library/api-events)

##### waitfor

```
await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))
```

##### waitForElementToBeRemoved

```
waitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() =>
  console.log('Element no longer in DOM'),
)
```

@testing-library/user-event另外提供了useEvent

## **RTL +** **Jest 匹配器**

 RTL 自己实现了一个 Jest 匹配器的扩展包：**jest-dom**

## 常见的测试场景

### 创建快照

[asFragment](https://testing-library.com/docs/react-testing-library/api#asfragment)

```tsx
it("should take a snapshot", () => {  const { asFragment } = render(<App />);   expect(asFragment(<App />)).toMatchSnapshot(); });
```

### 回调处理

```tsx
describe('Search', () => {
    test('calls the onChange callback handler', () => {
      const onChange = jest.fn();
   
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
   
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
   
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

```

### 异步处理

```tsx
describe('waitFor', () => {
    test('increments counter after 0.5s', async () => {
        render(<TestAsync />)
        fireEvent.click(screen.getByTestId("button-up"))
        await waitFor(() =>  expect(screen.getByText(1)))
    })
    test('waitForElementToBeRemoved', () => {
        render(<TestAsync />)
        fireEvent.click(screen.getByTestId("button-up"))
        waitForElementToBeRemoved(screen.queryByTestId("button-up")).then(() => {
           console.log('Element no longer in DOM')
        })  
    })
}
```

### React Router

```tsx
it("should render the home page", () => {
    const { container} = renderWithRouter(<TestRouter />);
    const navbar = screen.getByTestId("navbar");
    const link = screen.getByTestId("home-link");
  
    expect(container.innerHTML).toMatch("Home page");
    expect(navbar).toContainElement(link);
});
  
```

### http请求

```tsx
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('axios', () => {
    test('should display a loading text', () => {
        const url = "/greeting";
        render(<TestAxios url={url} />);
    
        
        mockedAxios.get.mockResolvedValue({
          data: { greeting: "hello there" },
        });
    
        fireEvent.click(screen.getByTestId("fetch-data"));
      })
})

```

### hook

```tsx
import { renderHook, } from '@testing-library/react'
import usePow from '../usePow'
describe('hook', () => {
    test('hook', () => {
        const { result } = renderHook(() => usePow([1, 2, 3]))
        expect(result.current).toEqual([1,4,9])
      })
})
```

## 在组件库的应用

### 环境搭建

@testing-library/react 与 react版本需要对应

[官网](https://github.com/testing-library/react-testing-library/releases)在CHANGELOG中指出@testing-library/react[v13.0.0](https://github.com/testing-library/react-testing-library/releases/tag/v13.0.0)版本之后只支持React<18的版本。

|       @testing-library/react        | React |
| :---------------------------------: | ----- |
|                >V13                 | >=18  |
|                <V13                 | <18   |
| [Enzyme](https://airbnb.io/enzyme/) | <=16  |

