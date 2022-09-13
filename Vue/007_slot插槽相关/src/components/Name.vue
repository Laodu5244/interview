<template>
  <div class="name">
    <h2>{{title}}</h2>

    <h2><slot name="h1"></slot></h2>
    <h3><slot name="h2"></slot></h3>
    <h4><slot name="h3"></slot></h4>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'具名插槽组件'
    }
  }
}
</script>

<style scoped>
.name{
  background-color: skyblue;
}
</style>
