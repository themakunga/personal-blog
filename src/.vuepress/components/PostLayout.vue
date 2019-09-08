<template>
  <div class="post">
    <PostMeta v-if="meta" />

    <article class="main-div">
      <small>{{ $page.readingTime.text }}</small>
      <Content
        :key="$page.path"
        class="post-content content"
      />

    </article>
    <PostMeta v-if="meta" />
    <article class="main-div">
      <disqus />

    </article>
  </div>
</template>

<script>
import PostMeta from '../../../node_modules/vuepress-theme-meteorlxy/lib/components/PostMeta.vue'

export default {
  name: 'Post',

  components: {
    PostMeta,
  },

  computed: {
    meta () {
      return this.$frontmatter['meta'] !== false
    },
  },
}
</script>
