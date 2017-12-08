<template>
    <div class="works-container">
        <Nav />
        <WorksContent />
    </div>
</template>

<script>
import Nav from '../common/Nav'
import WorksContent from './WorksContent'
export default {
    name: 'Works',
    components: {
        Nav,
        WorksContent
    }
}
</script>

<style lang="less" scoped>
    .works-container {
        background-color: #f6f0e2;
        min-height: calc(100% - 100px);
        background-image: url('../../../assets/images/bg2.png');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 100%;
        overflow: auto;
    }
</style>
