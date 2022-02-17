<template>
  <nav class="flex items-center bg-slate-200 p-6">
    <img class="mr-2" src="@/assets/cloud.png" />
    <h1 class="text-xl">Weather Forecast</h1>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'wf-navigation-bar',
});
</script>
