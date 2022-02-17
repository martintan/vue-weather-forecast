<template>
  <div class="w-2/5 mx-auto my-16">
    <p class="mb-4">{{ landingText }}</p>
    <WFButton @click="login" :loading="loading">Login</WFButton>
  </div>
</template>

<script lang="ts">
import WFButton from '@/components/WFButton.vue';
import { AUTH0_SESSION_STORAGE_KEY, LANDING_TEXT } from '@/constants';
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
        await auth.loginWithRedirect({
          // After user finishes authentication redirect back to Home
          appState: { targetUrl: window.location.origin },
        });
        // sessionStorage.setItem(AUTH0_SESSION_STORAGE_KEY, token);
        // Replace the current route with Home so that the user cannot just
        // navigate back to Login while they are already logged in.
        this.$router.replace({ name: 'home' });
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
