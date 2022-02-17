<template>
  <div class="w-2/5 mx-auto my-16">
    <p class="mb-4">{{ landingText }}</p>
    <WFButton @click="login" :loading="loading">Login</WFButton>
  </div>
</template>

<script lang="ts">
import WFButton from '@/components/WFButton.vue';
import { LANDING_TEXT } from '@/constants';
import { IAuthPlugin } from '@/utils/auth';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'login-view',
  components: { WFButton },
  data: () => ({
    landingText: LANDING_TEXT,
    loading: false,
  }),
  inject: ['Auth'],
  methods: {
    async login() {
      const auth = (this as any).Auth as IAuthPlugin;
      this.loading = true;
      try {
        const token = await auth.getTokenWithPopup({ ignoreCache: true });
        console.log('token:', token);
      } catch (e) {
        const err = e as Error;
        console.error('[login-view] error:', err.toString());
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    // console.log('this.$auth:', this.$auth);
  },
});
</script>
