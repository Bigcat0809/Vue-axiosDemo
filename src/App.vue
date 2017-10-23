<template>
  <div id="app" style="margin-top:0">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <md-toolbar>
      <div class="container">
        <div class="fl">
          <a href="https://github.com" target="_blank">
            <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1"viewBox="0 0 16 16" width="32">
              <path fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <span class="md-title title">{{title}}</span>
        </div>
        <div class="fr">
          <a class="md-default logout" @click="logout">退出</a>
        </div>
      </div>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import * as types from './store/types'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data(){
    return {
      msg:'Welcome to Your Vue.js App'
    }
  },
  computed:mapState({
    title:state=>state.title
  }),
  methods:{
    logout:function(){ 
      this.$store.commit(types.LOGOUT)
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style>
@import "assets/common.css";
@import "assets/font.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  width:1200px;
  margin:0 auto;
}
a.logout{
  display: inline-block;
  height: 30px;
  line-height: 30px;
  border:1px solid #14a6de;
  background:#14a6de;
  width:75px;
  color: #fff!important;
  letter-spacing: 2px;
  font-size: 14px;
}
.logout:hover{
  text-decoration: none!important;
  opacity: .8;
}
.title{
 position: relative;
 top:3px;
 padding-left:8px;
 color: #fff
}
.fl{
  position: absolute;;
  top:13px;
}
</style>
