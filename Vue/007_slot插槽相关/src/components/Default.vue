<template>
	<div class="default">
		<h2>{{title}}</h2>

		<!-- 默认插槽 -->
		<slot>这是子组件插槽的默认值</slot>

	</div>
</template>

<script>
export default {
	data(){
		return{
			title:'默认插槽组件',
		}
	}
}
</script>

<style scoped> 
.default{
	background-color: pink;
}
</style>

