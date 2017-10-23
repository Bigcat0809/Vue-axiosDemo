<template>
  <div>
      <ul>
          <router-link :to="{path:'/repository'}">
              <md-button class="md-raised md-primary" hrf="#/repository">查看你的仓库</md-button>
          </router-link>
      </ul>
  </div>
</template>
<script type="application/ecmascript">
export default {
  name:'',
  data(){
      return {
          msg:'',
      }
  }
}
</script>

