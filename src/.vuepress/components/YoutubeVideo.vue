<template>
  <youtube :video-id="videoId"></youtube>

</template>


<script>

export default {
  name: 'YoutubeVideo',
  props: [
    'url',
  ],
  data: () => ({
    videoId: '',
  }),
  mounted() {
    const data = this.url.split('=');

    this.videoId = data[1];
  }
};
</script>
