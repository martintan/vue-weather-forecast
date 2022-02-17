<template>
  <button
    class="rounded-lg bg-blue-700 text-white px-4 py-2 disabled:opacity-50"
    @click="handleClick"
    :disabled="loading"
  >
    <div class="flex items-center">
      <Loading :loading="loading" />
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'wf-button',
  props: {
    loading: Boolean,
  },
  methods: {
    handleClick(e: Event) {
      this.$emit('click', e);
    },
  },
});
</script>
