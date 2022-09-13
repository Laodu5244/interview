<template>
  <div id="app">
    <h2>{{title}}</h2>
    <!-- 
    插槽的种类：
      1. 默认插槽
      2. 具名插槽
      3. 作用域插槽
    -->

    <!-- 默认插槽 -->
    <Default>
      <!-- 配置插槽的内容 -->
      <p>这是一个插槽</p>
    </Default>
    <!-- 如果父组件不传值，将会用子组件默认的值 -->
    <Default></Default>

    <!-- 具名插槽 -->
    <Name>
      <template v-slot:h1>
        <p>这是h1的内容</p>
      </template>
      <!-- #是v-slot的简写 -->
      <template #h2>
        <p>这是h2的内容</p>
      </template>
      <template #h3>
        <p>这是h3的内容</p>
      </template>
    </Name>

    <!-- 作用域插槽(不常用) -->
    <Scope>
      <template v-slot:default="person" >
        {{person}}
      </template>
    </Scope>

  </div>
</template>

<script>
import Default from '@/components/Default.vue'
import Name from './components/Name.vue'
import Scope from './components/Scope.vue'
export default {
	components:{
    Default,
    Name,
    Scope,
  },
  data(){
    return{
      title:'Vue插槽相关'
    }
  },
}
</script>
