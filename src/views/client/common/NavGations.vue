<template>
    <div class="container">
        <div class="center">
            <ul class="clearfix" @click="navChnage">
                <li v-for="(item,index) in navs" :class="{active: path == item.path}" :data-index="item.path" :key="index">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavGations",
    data() {
        return {
            navs: [
                {
                    path: '/',
                    title: '首页'
                },
                 {
                    path: '/profile',
                    title: '个人简介'
                },
                 {
                    path: '/works',
                    title: '作品展示'
                },
                 {
                    path: '/album',
                    title: '相册'
                },
                {
                    path: '/news',
                    title: '新闻中心'
                },
                {
                    path: '/contact',
                    title: '联系我们'
                }
            ],
            path: this.$route.path
        }
    },
    methods: {
        navChnage(e) {
            let index = e.target.dataset.index
            this.$router.push(index)
        }
    },
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
            cursor: pointer;
            &.active {
                background-color: #b23e2f;
                color: #fff;
            }
            &:hover {
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
    }
</style>


