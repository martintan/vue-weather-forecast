<template>
  <button
    class="rounded-lg bg-blue-700 text-white px-4 py-2 flex items-center disabled:opacity-50"
    @click="handleClick"
    :disabled="loading"
  >
    <Loading :loading="loading" />
    <slot></slot>
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
