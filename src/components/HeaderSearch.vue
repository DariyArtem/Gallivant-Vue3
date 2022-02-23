<template>
  <div class="header__search">
    <form class="search__form" action="http://gallivant/search">
      <button class="search__loupe">
        <img src="http://gallivant/img/header/lupa.png" alt="loupe">
      </button>
      <input class="search__input" type="text" name="title" placeholder="Search your option">
    </form>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch"
}
</script>

<style scoped>
</style>