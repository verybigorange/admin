<template>
    <div class="index-container">
        <NavGations />
        <router-view></router-view>
    </div>
</template>

<script>
import NavGations from '../common/NavGations'
import NewsContent from './NewsContent'
export default {
    components: {
        NavGations,
        NewsContent
    }
}
</script>

<style lang="less" scoped>
    .index-container {
        background-color: #f6f0e2;
        min-height: calc(100% - 100px);
        background-image: url('../../../assets/img/bg2.png');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 100%;
        overflow: auto;
    }
</style>
