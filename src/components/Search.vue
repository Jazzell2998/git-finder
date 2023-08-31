<template lang="pug">
.container.search
  .search-box
    input.search-box__input(type="text" v-model="search" @keydown.enter="getUserInfo" placeholder="Введите логин...")
    img.search-box__close(
      src="https://cdn.onlinewebfonts.com/svg/img_276651.png",
      alt="alt"
      v-if="search != ''"
    )
  button.search__btn(@click="getUserInfo") НАЙТИ
</template>
<script>
    import { mapActions } from 'vuex'
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...mapActions(['userInfo']),
        getUserInfo(){
            this.userInfo(this.search)
        }
    },
};
</script>
<style lang="scss">
.search {
  display: flex;
  justify-content: center;
  margin-top: 20px !important;
  &-box {
    position: relative;
    max-width: 600px;
    width: 100%;
    &__close {
      position: absolute;
      right: 0;
      top: 0;
      width: 5%;
    }
    &__input {
      width: 100%;
      padding: 10px 20px;
      background: white;
      border: none;
      outline: none;
      font-size: 14px;
      line-height: 120%;
      color: #c2c2c5;
    }
  }
  &__btn {
    border: none;
    outline: none;
    background: #3f3f3f;
    border-radius: 0px 4px 4px 0px;
    color: white;
    padding: 10px;
  }
}
</style>