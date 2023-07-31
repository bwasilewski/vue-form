<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="wrap">
    <router-view />
  </div>
</template>

<style lang="scss">
.wrap {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
