<script setup>
  import DefaultTheme from 'vitepress/theme';
  import { useRoute } from 'vitepress';
  import { watch } from 'vue';

  import GitalkComment from '../components/gitalkComment.vue';

  const { Layout } = DefaultTheme;
  const route = useRoute();

  watch(() => route.path, (newValue, oldValue) => {
    if (typeof _hmt !== 'undefined') {
      newValue && _hmt.push(['_trackPageview', newValue]);
    }
  });
</script>

<template>
  <Layout>
    <template #doc-after>
      <GitalkComment />
    </template>
  </Layout>
</template>