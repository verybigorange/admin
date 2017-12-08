<template>
    <div class="container">
        <div class="center">
            <ul class="clearfix">
                <li>首页</li>
                <li class="active">个人简介</li>
                <li>作品展示</li>
                <li>相册</li>
                <li>新闻中心</li>
                <li>联系我们</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="less" scoped>
    ul {
        width: 750px;
        list-style: none;
        font-size: 24px;
        overflow: hidden;
        float: right;
        & > li {
            float: left;
            width: 125px;
            height: 45px;
            color: #666;
            text-align: center;
            line-height: 45px;
            &.active {
                background-color: #b23e2f;
                color: #fff;
            }
        }
    }

    .center {
        width: 1024px;
        height: 100px;
        margin: 0 auto;
        overflow: hidden;
    }
    .container {
        width: 100%;
        height: 100px;
        overflow: hidden;
        // background-image: url('../../../assets/img/nav_back.png');
        // background-repeat: no-repeat;
        // background-size: 100% 100px;
    }
</style>


