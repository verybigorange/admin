<template>
    <div class="works-container">
        <NavGations />
        <router-view></router-view>
    </div>
</template>

<script>
import NavGations from '../common/NavGations'
import WorksContent from './WorksContent'
export default {
    name: 'Works',
    components: {
        NavGations,
        WorksContent
    }
}
</script>

<style lang="less" scoped>
    .works-container {
        background-color: #f6f0e2;
        min-height: calc(100% - 100px);
        background-image: url('../../../assets/img/bg2.png');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 100%;
        overflow: auto;
    }
</style>
