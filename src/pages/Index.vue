<template>
  <q-page class="bg-container">
    <Login/>
  </q-page>
</template>

<script>
import Login from '../components/Login.vue'
export default{
  components:{
    Login
  }
}
</script>
<style scoped>
.bg-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
