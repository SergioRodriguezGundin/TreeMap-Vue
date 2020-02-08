<template>
  <div id="app">
    <header class="header">
      <div class="containter--title">
        <span class="title">{{ title }}</span>
        <span class="author">{{ author }}</span>
      </div>
    </header>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "TreeMap chart",
      author: "Sergio Rodriguez Gundin"
    };
  }
};
</script>

<style lang="scss">
.header {
  .containter--title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .author {
      padding: 0.2rem 0 0 0;
      font-size: 12px;
    }
  }
}
</style>
