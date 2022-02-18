<template>
  <div class="lg:w-2/5 mx-auto my-16 flex flex-col items-center">
    <p class="mb-4 text-center">{{ fullname }}</p>
    <p class="mb-16 text-center">{{ githubRepoUrl }}</p>
    <form @submit.prevent="displayWeather" class="flex flex-col items-center">
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
    </form>
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
      // Navigate straight to the Weather page and pass the city into the query
      this.$router.push({ name: 'weather', query: { city: this.city } });
    },
  },
  // Every time this page mounts we will load the user's Github profile information
  // into the component state.
  // Alternative way is to load it via computed: { ... }.
  mounted() {
    const auth = (this as any).Auth as IAuthPlugin;
    const user = auth.user.value;
    this.fullname = user?.name ?? '';
    // Github Repositories always have the format of "https://github.com/" + the Github username
    // Based on checking the Auth0 Github User payload we can get the username from "nickname".
    this.githubRepoUrl =
      user && user.nickname ? 'https://github.com/' + user.nickname : '';
  },
});
</script>
