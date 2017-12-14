<template>
    <div class="footer-container">
        <h3>联系我们</h3>
        <h4>Contact us</h4>
        <hr class="solid-hr-b" />
        <h5>联系我们</h5>
        <hr class="solid-hr-t" />
        <div class="footer-content">
            <div class="links-l">
                <span class="attention">关注</span>
                <a class="attention-link" href=""><i class="weibo"></i></a>
                <a class="attention-link" href=""><i class="qq"></i></a>
                <a class="attention-link" href=""><i class="weixin"></i></a>
            </div>
            <div class="adds-m">
                <p>地址：四川省眉山市洪雅县</p>
                <p>电话：028-58478454</p>
                <p>地址：0000000000@qq.com</p>
            </div>
            <div class="adds-r">
                <p>邮编：620350</p>
                <p>地址：18183272222</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
    h3 {
        font-size: 35px;
        color: #b23e2f;
        text-align: center;
        margin: 25px 0 10px;
    }
    h4 {
        font-size: 24px;
        color: #999999;
        text-align: center;
        
        margin: 15px 0 30px;
        margin-top: 10px;
        padding-top: 0;
    }
    h5 {
        font-size: 28px;
        color: #b23e2f;
        margin: 12px 20px
    }
    hr {
        border: none;
        margin: 0;
    }
    .footer-content {
        font-size: 0;
    }
    .solid-hr-b {
        height: 4px;
        margin-top: 22px;
        background-color: #b23e2f;
    }
    .solid-hr-t {
        height: 0;
        border-top: 1px solid  #b23e2f;
    }
    .attention {
        display: block;
        font-size: 29px;
        color: #666;
        margin: 60px 30px;

    }
    .attention-link {
        width: 35px;
        height: 35px;
        float: left;
        margin: 0 0 65px 50px; 
    }
    .attention-link+.attention-link {
        margin-left: 45px;
    }
    i.weibo {
        display: block;
        width: 35px;
        height: 35px;
        background-image: url('../../../assets/img/weibo.png');
        background-size: 35px 35px;
    }
     i.qq {
        display: block;
        width: 35px;
        height: 35px;
        background-image: url('../../../assets/img/QQ.png');
        background-size: 35px 35px;
    }
     i.weixin {
        display: block;
        width: 35px;
        height: 35px;
        background-image: url('../../../assets/img/weixin.png');
        background-size: 35px 35px;
    }
    .links-l {
        display: inline-block;
        vertical-align: top;
    }
    .adds-m,.adds-r {
        font-size: 23px;
        color: #989898;
        margin-top: 60px;
        margin-left: 120px;
        display: inline-block;
        vertical-align: top;
        &>p {
            padding: 0;
            margin: 0;
            &+p {
                margin-top: 35px;
            }
        }
    }
</style>
