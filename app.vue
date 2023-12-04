<template>
  <div class="h-screen">
    <!-- <Loading v-if="loading"> -->
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    <!-- </Loading> -->
  </div>
</template>

<script setup>
import Loading from '@/layouts/loading.vue'


const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  console.log(0)
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  console.log(1)
  loading.value = false;
});
</script>