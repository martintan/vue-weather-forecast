<template>
  <nav class="flex items-center bg-slate-200 p-4">
    <div class="flex items-center cursor-pointer" @click="handleLogoClick">
      <img class="mr-2" src="@/assets/cloud.png" />
      <h1 class="text-xl">Weather Forecast</h1>
    </div>
    <div class="grow"></div>
    <WFButton v-if="isAuthenticated" @click="logout" :loading="loggingOut">
      Logout
    </WFButton>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WFButton from '@/components/WFButton.vue';
import { IAuthPlugin } from '@/utils/auth';

export default defineComponent({
  name: 'wf-navigation-bar',
  inject: ['Auth'],
  components: { WFButton },
  data: () => ({
    loggingOut: false,
  }),
  computed: {
    isAuthenticated() {
      const auth = (this as any).Auth as IAuthPlugin;
      return auth.isAuthenticated.value;
    },
  },
  methods: {
    handleLogoClick() {
      this.$router.push({ name: 'home' });
    },
    async logout() {
      try {
        const auth = (this as any).Auth as IAuthPlugin;
        this.loggingOut = true;
        await auth.logout({ returnTo: window.location.origin });
      } catch (e) {
        const err = e as Error;
        console.error('[NavigationBar::logout] error:', err.toString());
      } finally {
        this.loggingOut = false;
      }
    },
  },
});
</script>
