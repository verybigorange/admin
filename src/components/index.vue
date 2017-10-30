<template>
  <div class="layout">
      <header class="header">
          <span>后台管理系统</span>
      </header>
      <div class="main">
        <aside>
          <slider></slider>
        </aside>
        <section>

        </section>
      </div>
     
  </div>
</template>

<script>
import slider from "views/common/slider";

export default {
  components: {
    slider
  },
  data() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  background: #409eff;
  color: #fff;
}
.layout{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

.main{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
</style>
