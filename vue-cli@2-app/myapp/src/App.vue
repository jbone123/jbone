<template>
  <div class="container">
    <!-- <header>
    </header> -->
    <router-view name="header"></router-view>
    <!-- <div class="content"> -->
      <router-view name="content"></router-view>
    <!-- </div> -->
    <!-- <footer>
      <main-footer></main-footer>
    </footer> -->
    <router-view name='footer'></router-view>
  </div>
</template>

<script>
import MainFooter from './components/mainfooter/index.vue'
// import Home from '@/components/home/index.vue'
import User from '@/components/user/index.vue'
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {},
  components: {
    'main-footer': MainFooter,
    'home-content': User
  }
}
</script>

<style>

</style>
