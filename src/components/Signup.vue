<template>
  <div class="q-pa-md bg-container">
    <div class="register">
         <img class="logo" src='../assets/spryker.png'/>
          <q-input class="i-input" outlined v-model="username" placeholder="Name" />
        <q-input class="i-input" outlined v-model="email" placeholder="Email" />
        <q-input class="i-input" outlined  v-model="password" placeholder="Password" type='password' />
        <button @click="signin">Signup</button>
    </div>
    </div>
</template>

<script>
import {ref,onBeforeMount} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name:"Signup",
    setup(){
        const $store=useStore()
        const router=useRouter()
        const username=ref('')
        const email=ref('')
        const password=ref('')


        const signin=()=>{
            $store.dispatch("auth/sendDetails",{username:username.value,email:email.value,password:password.value})
            .then(res=>{
                if(res=="success"){
                    router.push('/login')
                }

            })
            username.value='',
            email.value=''
            password.value=''
        }
  
        return{username,email,password,signin}
    }

}
</script>
<style>

.logo{
    width: 190px;
    margin-bottom: 25px;

}
.bg-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.register{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.i-input{
    margin-bottom: 20px;
    font-family: "Bree Serif";
    padding: 10px;
    border-radius: 5px;
    border-color: green;
    min-width: 300px;
    margin-bottom: 30px;
}
h1{
    font-family: "Roboto";
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
}
button{
    width: 100px;
    height: 36px;
    padding: 4px;
    border-width: 0px;
    border-radius: 5px;
    font-family: "Open Sans";
    font-size: 16px;
    background-color: black;
    color: white;
    cursor: pointer;
}

</style>