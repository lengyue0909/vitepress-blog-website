<script setup>
import Gitalk from 'gitalk';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vitepress';

import 'gitalk/dist/gitalk.css';

const route = useRoute();
const gitalkContainerId = 'gitalk-comments-wrapper';

function initializeGitalk() {
  const gitalk = new Gitalk({
    clientID: '456a99429bf910225e41',
    clientSecret: '1e997a0b0c4495e109336980462ff273b322487d',
    repo: 'vitepress-blog-website',
    owner: 'lengyue0909',
    admin: ['lengyue0909'],
    id: location.pathname,
    proxy: 'https://cloudflare-cors-anywhere.lengyuefe.workers.dev/?https://github.com/login/oauth/access_token',
    distractionFreeMode: false
  })
  gitalk.render(gitalkContainerId);
};

onMounted(initializeGitalk);

watch(() => route.path, () => {
  const oldGitalkContainer = document.getElementById(gitalkContainerId);
  const oldGitalkParentNode = oldGitalkContainer.parentNode;

  oldGitalkContainer && oldGitalkParentNode.removeChild(oldGitalkContainer);

  const newGitalkContainer = document.createElement('div');
  newGitalkContainer.setAttribute('id', gitalkContainerId);
  oldGitalkParentNode.appendChild(newGitalkContainer);

  initializeGitalk();
});
</script>

<template>
  <div :id="gitalkContainerId"></div>
</template>

<style lang="scss">
#gitalk-comments-wrapper {
  margin: 30px 0;

  .gt-btn {
    border-color: var(--vp-button-brand-bg);
    background-color: var(--vp-button-brand-bg);
  }

  a {
    color: var(--vp-c-brand);
  }

  .gt-no-init {

    p {
      margin-bottom: 12px;
      color: var(--vp-c-text-2);
    }
  }
}
</style>