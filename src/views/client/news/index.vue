<template>
    <div class="index-container">
        <Nav />
        <NewsContent />
    </div>
</template>

<script>
import Nav from '../common/Nav'
import NewsContent from './NewsContent'
export default {
    components: {
        Nav,
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
