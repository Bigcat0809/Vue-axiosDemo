<template>
  <div class="container">
      <form action="" novalidate class="login-form" @submit.stop.prevent="login">
          <label for="" class="enter-login">回车登陆</label>
          <md-input-container md-has-password>
              <label>请填写自己的GitHub账户Token</label>
              <md-input type="password" v-model="token"></md-input>
          </md-input-container>
      </form>
      <md-button href="https://github.com/settings/tokens/new" target="_blank" class="md-raised md-primary">获取你的Token</md-button>
  </div>
</template>
<script>
import * as types from '../store/types'
export default {
    name:'',
    data(){
        return {
            msg:'',
            token:''
        }
    },
    mounted(){
        this.$store.commit(types.TITLE,'请填写token登录')
    },
    methods:{
        login(){
            if(this.token){
                this.$store.commit(types.LOGIN,this.token);
                let redirect=decodeURIComponent(this.$route.query.redirect||'/');
                this.$router.push({
                    path: redirect
                })
            }
        }
    }
}
</script>
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
    .login-form{
        width:600px;
        margin:50px auto
    }
    .login-form{
        label{
            padding: 30px 10px 2px 15px;
        }
        input{
           border-bottom: 1px solid #eee;
            margin-top:28px;
            padding-left:15px;
            height:42px;
        }
    }
    .enter-login{
        font-size: 24px
    }
</style>


