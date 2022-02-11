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
  name: "MyHeaderSearch"
}
</script>

<style scoped>
.header__search {
  flex: 0 1 554px;
  display: flex;
  align-items: center;
}

.search__form {
  width: 100%;
  margin: unset;
}

.search__loupe {
  position: absolute;
  padding-left: 28px;
  padding-top: 14px;
  background: none;
  border: none;
}

.search__input {
  text-indent: 65px;
  width: 98%;
  height: 53px;
  border-radius: 30px;
  border: none;
}
</style>