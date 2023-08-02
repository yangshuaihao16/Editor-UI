<script setup>
  import BaseDemo from './BaseDemo.vue'
  import DisabledDemo from './DisabledDemo.vue'
  import IconFontDemo from './IconFontDemo.vue'
  import SizeDemo from './SizeDemo.vue'
  import PrimaryDemo from './PrimaryDemo.vue'
</script>

# 按钮组件

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<demo-preview folder='button' file="BaseDemo">
  <base-demo/>
</demo-preview>

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<demo-preview folder='button' file="DisabledDemo">
  <disabled-demo/>
</demo-preview>

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。 您可以在我们的 `Icon` 组件中找到所需图标。 通过向右方添加 `<i>` 标签来添加图标， 你也可以使用自定义图标。

<demo-preview folder='button' file="IconFontDemo">
  <icon-font-demo/>
</demo-preview>

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large和small两种值。

<demo-preview folder='button' file="SizeDemo">
  <size-demo/>
</demo-preview>

## hover主题色

使用 `primary` 属性来控制按钮`hover`颜色是否始终为主题色。 该属性接受一个 `Boolean` 类型的值。

<demo-preview folder='button' file="PrimaryDemo">
  <primary-demo/>
</demo-preview>

## 属性

|    参数     |      说明       |   类型    |                            可选值                            |  默认值   | 是否必填 |
| :---------: | :-------------: | :-------: | :----------------------------------------------------------: | :-------: | :------: |
|   `type`    |    按钮类型     | `string`  | `default`, `primary`, `success`, `info`, `warning`, `danger` | `primary` |    否    |
|   `size`    |    按钮尺寸     | `string`  |                       `large`,`small`                        |    ``     |    否    |
| `disabled`  |    是否禁用     | `boolean` |                              -                               |  `false`  |    否    |
|   `icon`    |    字体图标     | `string`  |                              -                               |    ``     |    否    |
|   `plain`   |    朴素按钮     | `boolean` |                              -                               |  `false`  |    否    |
|   `round`   |    圆角按钮     | `boolean` |                              -                               |  `false`  |    否    |
|  `circle`   |    圆形图标     | `boolean` |                              -                               |  `false`  |    否    |
| `hoverType` | 强制hover主题色 | `string`  | `default`, `primary`, `success`, `info`, `warning`, `danger` |    ``     |    否    |

## 事件

| 事件名  |   说明   | 参数列表 |     参数说明     |
| :-----: | :------: | :------: | :--------------: |
| `click` | 点击事件 |  $event  | 原生的 dom event |
