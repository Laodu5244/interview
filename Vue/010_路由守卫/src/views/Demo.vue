<template>
  <div>
    <h2>demo1</h2>
    <router-link to="/">去首页</router-link>
  </div>
</template>

<script>
export default {
  // 三个组件守卫(不常用)
  beforeRouteEnter(to,from,next){
    next() 
  },
  beforeRouteUpdate(to,from,next){
    next() 
  },
  beforeRouteLeave(to, from, next ) {
    next() 
  },
}
</script>
