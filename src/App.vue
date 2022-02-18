<template>
  <div class="h-screen">
    <WFNavigationBar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WFNavigationBar from '@/components/WFNavigationBar.vue';

export default defineComponent({
  components: { WFNavigationBar },
});
</script>
