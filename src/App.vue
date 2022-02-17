<template>
  <div class="h-screen">
    <navigation-bar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from '@/components/NavigationBar.vue';

export default defineComponent({
  components: { NavigationBar },
});
</script>
