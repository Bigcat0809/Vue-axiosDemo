import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
Vue.use(Vuex)
export default new Vuex.Store({
    //定义状态 采用 数据名：初始值的格式
    state:{
        user:{},
        token:null,
        title:''
    },
    mutations:{
        // 修改登陆 中括号代表常量 [types.常量名]
        [types.LOGIN]:(state,data)=>{
            console.log(data)
            localStorage.token=data;
            state.token=data;
        },
        [types.LOGOUT]:(state)=>{
            localStorage.removeItem('token');
            state.token=null;
            state.title=''
        },
        [types.TITLE]:(state,data)=>{
            console.log(data)
            state.title=data
        }
    }
})