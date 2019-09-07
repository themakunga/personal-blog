<template>
  <div class="custom-layout">

      <!-- .main-div is the block with white background -->
      <div class="main-div">
        This is a custom layout
      </div>
        <pre>
          {{ obj }}
        </pre>
      <div class="main-div">
        <!-- <Content /> is to show the rendered markdown content of this page -->
        <Content class="content" />
      </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'CustomLayout',
  data: () => ({
    obj: {},
  }),
  async mounted() {
    await axios.get('https://lets-work-app.herokuapp.com/api/notices')
    .then((res) => {
      console.log(res);
      this.obj = res;
    });
  },
};
</script>

<style lang="css" scoped>
</style>
