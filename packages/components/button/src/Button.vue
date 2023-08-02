<template>
	<button class="avw-button" :class="comClassName" @click="clickBtn">
		<i v-if="icon" class="icon iconfont" :class="icon"></i>
		<span v-if="isSlot">
			<slot> </slot>
		</span>
	</button>
</template>

<script lang="ts" setup>
import { computed, useSlots, ref } from 'vue';
defineOptions({
	name: 'AvwButton',
});
const emit = defineEmits(['click']);
const props = defineProps({
	// 按钮类型
	type: {
		type: String,
		default: 'primary',
		validator(value: string) {
			return ['default', 'primary', 'success', 'info', 'warning', 'danger'].includes(value);
		},
	},
	// 按钮尺寸
	size: {
		type: String,
		default: '',
		validator(value: string) {
			return ['', 'large', 'small'].includes(value);
		},
	},
	// 按钮图标
	icon: {
		type: String,
		default: '',
	},
	// 是否禁用
	disabled: {
		type: Boolean,
		default: false,
	},
	// 朴素按钮
	plain: {
		type: Boolean,
		default: false,
	},
	// 圆角
	round: {
		type: Boolean,
		default: false,
	},
	// 圆形
	circle: {
		type: Boolean,
		default: false,
	},
	hoverType: {
		type: String,
		default: '',
		validator(value: string) {
			return ['', 'default', 'primary', 'success', 'info', 'warning', 'danger'].includes(value);
		},
	},
	// 悬浮色
	// primary: {
	// 	type: Boolean,
	// 	default: false,
	// },
});
function clickBtn(e: Event) {
	if (!props.disabled) {
		emit('click', e);
	}
}
// 类名计算属性
const comClassName = computed(() => {
	let className = `avw-button--${props.type}`;
	if (props.size) {
		className += ` avw-button--${props.size}`;
	}
	if (props.disabled) {
		className += ` is-disabled`;
	}
	if (props.round) {
		className += ` is-round`;
	}
	if (props.circle) {
		className += ` is-circle`;
	}
	if (props.plain) {
		className += ` is-plain`;
	}
	if (props.hoverType) {
		className += ` ${props.hoverType}`;
	}
	// if (props.primary) {
	// 	className += ` is-primary`;
	// }
	return className;
});
// 获取插槽是否传递数据
let isSlot = ref(false);
let uSlots = useSlots();
isSlot.value = Boolean(uSlots.default);
</script>

<style lang="scss">
.avw-button {
	--avw-button-basics-height: 26px;
	--avw-button-height: var(--avw-button-basics-height);
}
$avw-button-type-arr: default, primary, success, info, warning, danger;
$avw-button-color-arr: #fff, #1b66f0, #00b98b, #303845, #e6a23c, #f56c6c;
@each $item in $avw-button-type-arr {
	$index: index($avw-button-type-arr, $item); /**可得到循环的索引*/
	$colorItem: nth($avw-button-color-arr, $index);
	.avw-button {
		&.avw-button--#{$item} {
			background: mix($colorItem, #fff, 90%);
			border-color: $colorItem;
			&:not(.is-disabled):hover {
				background-color: $colorItem;
			}
			&.is-plain {
				background-color: mix($colorItem, #fff, 20%);
				color: $colorItem;
				&:not(.is-disabled):hover {
					background-color: $colorItem;
					opacity: 1;
					color: #ccc;
				}
			}
		}
		&.#{$item} {
			$colorItem: nth($avw-button-color-arr, $index);
			&:not(.is-disabled):hover {
				background-color: $colorItem !important;
				border-color: $colorItem !important;
				color: #ccc !important;
			}
		}
	}
}
.avw-button {
	font-size: 14px;
	padding: calc((var(--avw-button-height) - 14px) / 2) calc((var(--avw-button-height) - 14px));
	cursor: pointer;
	border-radius: 2px;
	color: #ccc;
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	align-content: center;
	white-space: nowrap;
	line-height: 1;
	border: 1px solid;
	& > span {
		line-height: 1;
		display: inline-flex;
		align-items: center;
	}
	.iconfont {
		font-size: 14px;
	}
	& [class*='iconfont'] + span,
	& > span .iconfont {
		margin-left: 4px;
	}
	// 圆角
	&.is-round {
		border-radius: calc(var(--avw-button-height) / 2);
	}
	// 圆形
	&.is-circle {
		border-radius: 50%;
		padding: calc((var(--avw-button-height) - 14px) / 2);
	}
	// 禁用
	&.is-disabled {
		cursor: no-drop;
		opacity: 0.5;
	}
}
.avw-button.avw-button--default {
	color: #333;
	&.is-plain {
		color: #333;
		&:not(.is-disabled):hover {
			color: #333;
		}
	}
}
.avw-button.avw-button--info {
	border-color: #424a5e;
}
// 小按钮
.avw-button--small {
	--avw-button-height: calc(var(--avw-button-basics-height) - 4px);
}
// 大按钮
.avw-button--large {
	--avw-button-height: calc(var(--avw-button-basics-height) + 4px);
}
</style>
