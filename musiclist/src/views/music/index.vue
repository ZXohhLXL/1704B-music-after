<template>
  <div class="wrap">
    <div>
      <span>欢迎：{{username}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  data(){
    return{

    }
  },
  methods:{
   ...mapMutations(["setName"]),

  },
  computed:{
    // ...mapState({
    //   username:state => state.user.username
    // })
    ...mapState(["username"])
  }
}
</script>

<style>

</style>