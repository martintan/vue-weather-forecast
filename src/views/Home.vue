<template>
  <div class="w-2/5 mx-auto my-16 flex-col items-center text-center">
    <p class="mb-4 text-center">{{ fullname }}</p>
    <p class="mb-16 text-center">{{ githubRepoUrl }}</p>
    <div class="mb-4">
      <input
        v-model="city"
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="City"
      />
    </div>
    <WFButton @click="displayWeather" :loading="loading">
      Display Weather
    </WFButton>
  </div>
</template>

<script lang="ts">
import WFButton from '@/components/WFButton.vue';
import { IAuthPlugin } from '@/utils/auth';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home-view',
  components: { WFButton },
  data: () => ({
    // Github Profile information
    fullname: '',
    githubRepoUrl: '',
    // Form values
    city: '',
    // UI Flags
    loading: false,
  }),
  inject: ['Auth'],
  methods: {
    async displayWeather() {
      // Do something
    },
  },
  mounted() {
    const auth = (this as any).Auth as IAuthPlugin;
    const user = auth.user.value;
    console.log('user:', user);
    this.fullname = user?.name ?? '';
    this.githubRepoUrl =
      user && user.nickname ? 'https://github.com/' + user.nickname : '';
  },
});
</script>
