<template>
  <div class="post">
    <PostMeta v-if="meta" />

    <article class="main-div">
      <Content
        :key="$page.path"
        class="post-content content"
      />

      <disqus />
    </article>
    <PostMeta v-if="meta" />

    <div
      v-if="vssue"
      id="post-comments"
      class="main-div"
    >
    <disqus />
    </div>
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
