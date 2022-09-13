<template>
  <div class="scope">
    <h3>{{ title }}</h3>
    <!-- 作用域插槽 -->
    <h3 slot :person='job'>{{job}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: '作用域插槽',
      job:'前端开发工程师'
    }
  }
}
</script>

<style scoped>
.scope{
  background-color: rgb(144, 200, 128);
}
</style>
