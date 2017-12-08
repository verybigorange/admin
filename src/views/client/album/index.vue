<template>
    <div class="index-container">
        <NavGations />
        <AlbumContent />
    </div>
</template>

<script>
import NavGations from '../common/NavGations'
import AlbumContent from './AlbumContent'
export default {
    components: {
        NavGations,
        AlbumContent
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
