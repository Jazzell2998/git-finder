<template lang="pug">
.container.user
    .user-content
        .user-content-left
            img(src="", alt="alt")
            a(href="#") link
        .user-content-right
            h2 {{user}}
            h3 Репозиториев: <span>10</span>
            h4 Создан: <span>2020-01-20</span>
            h5 Подписчиков: <span>1</span>
            h6 Подписок: <span>1</span>
</template>
<script>    
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(['user'])
    },
}
</script>
<style lang="scss">
    
</style>