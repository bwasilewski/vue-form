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
  max-width: 600px;
  margin: 1.5rem auto 0;
  padding: 3rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
