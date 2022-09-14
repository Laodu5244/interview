<template>
  <div class="home">
    <h1>首页</h1>
    <button @click="login">login</button>
    <button @click="exit">exit</button>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      localStorage.setItem('user','admin')
    },
    exit(){
      localStorage.clear()
    }
  }
}
</script>
