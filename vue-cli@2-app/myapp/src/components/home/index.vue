<template>
  <div class="content">
  <mt-swipe :auto="4000">
      <mt-swipe-item>11111111</mt-swipe-item>
      <mt-swipe-item>222222</mt-swipe-item>
      <mt-swipe-item>333333333</mt-swipe-item>
  </mt-swipe>
  <router-link to="/directors">去导演页面</router-link>
  <button @click='goDireactors'>去导演页面</button>
  </div>
</template>

<script src='./script.js'></script>

<style lang="scss" src="./style.scss"></style>
