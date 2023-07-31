### 开发规范

1.不要在循环中声明无用变量。

2.不要在 `template` 中写很长的判断逻辑或者运算逻辑，使用 `computed` 代替。

3.不要声明未使用的函数。

4.不要在循环中使用 `v-if`。

5.如果在 `data` 中声明已知属性的对象，请显示声明所有属性，避免绑定时创建隐式属性。

6.使用 `v-for` 需要配合 `key` 一起使用。

7.不要在返回或输出结果的逻辑内进行赋值。

8.将逻辑比较多的复杂计算属性拆分为多个简单的计算属性。

9.基础的表单组件或者其他自定义输入组件封装统一的属性或事件，实现 `v-model` 语法糖。

### 命名规范

1.定义类、组件及组件文件命名时使的完整单词的 `PascalCase` 命名（专业名词或特定含义简写除外），避免使用单个单词，`eg: Preview -> CodePreview`。

2.耦合组件的子组件需要以父级组件名作为子组件名称前缀，`eg: AssetList,AssetItem -> AssetList,AssetListItem`。

3.路由、路径及组件内其他变量或者属性使用 `pascalCase` 规则命名。

4.目录、非组件文件、样式名使用 `kebab-case` 规则命名，且组件内子节点对象类名以父级类名或父级类型的一部分为前缀，`eg：asset-item,asset-label -> asset-item,asset-item-label`。

### 交互式命令创建组件

![img](/src/assets/img/gen.png)
