<template>
  <div class="" id="disqus_thread">

  </div>
</template>

<script>
export default {
  mounted() {
    const discus_config = () => {
      this.page.url = window.location.origin;
      this.page.identifier = window.location.pathname;
    };
    (() => {
      const d = window.document, s = d.createElement('script');
      s.src = 'https://nicolas-martinez-blog.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
};
</script>
