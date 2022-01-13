<template>
  <q-page class="bg-container">
    <Signup/>
  </q-page>
</template>

<script>
import Signup from '../components/Signup.vue'
export default{
  components:{
    Signup
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
