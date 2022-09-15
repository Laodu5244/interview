<template>
  <div id="app">
    <h2>{{title}}</h2>
    <button @click="getData">get</button>
    <h3 v-if='data1'>
      接收的get请求数据:
      姓名:{{data1.name}}
      年龄:{{data1.age}}
    </h3> 
    <hr>
    <button @click="postData">post</button>
    <h3 v-if='data2'>
      接收的post请求数据:
      姓名:{{data2.name}}
      年龄:{{data2.age}}
    </h3>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'配置vue.config.js文件解决跨域',
      data1:'',
      data2:''
    }
  },
  methods:{
    async getData(){
      let response = await this.axios.get('/api/get')
      this.data1 = response.data
    },
    async postData(){
      let response = await this.axios.post('/api/post')
      this.data2 = response.data
    },
  },
}
</script>
