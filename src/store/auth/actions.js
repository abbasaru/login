import {api} from 'boot/axios'

export const sendDetails=async({commit},payload)=>{
    try{
        const result=await api.post('/register',payload);
        const dataItem=result.data
        return "success"
        // commit('setUser',dataItem)      
    }catch(err){
        console.log(err)

    }
 
}

export const getDetails=async({commit},payload)=>{
    const result=await api.post('/login',payload)
    const dataItem=result.data
    commit('setUser',dataItem)
}