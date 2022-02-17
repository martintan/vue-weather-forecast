<template>
  <div class="w-2/5 mx-auto my-16 flex flex-col items-center">
    <div class="my-2" v-show="loading">
      <WFLoading :loading="loading" />
    </div>
    <table
      v-if="forecast !== null && !loading"
      class="table-auto border-collapse border border-slate-500 mb-4"
    >
      <thead>
        <tr>
          <th class="border border-slate-500 p-1">Date (mm/dd/yyyy)</th>
          <th class="border border-slate-500 p-1">Temp (F)</th>
          <th class="border border-slate-500 p-1">Description</th>
          <th class="border border-slate-500 p-1">Main</th>
          <th class="border border-slate-500 p-1">Pressure</th>
          <th class="border border-slate-500 p-1">Humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-500 p-1">
            {{ formatDate(forecast.dt) }}
          </td>
          <td class="border border-slate-500 p-1">{{ forecast.main.temp }}</td>
          <td class="border border-slate-500 p-1">
            {{ getForecastWeatherDescription(forecast) }}
          </td>
          <td class="border border-slate-500 p-1">
            {{ getForecastWeatherMain(forecast) }}
          </td>
          <td class="border border-slate-500 p-1">
            {{ forecast.main.pressure }}
          </td>
          <td class="border border-slate-500 p-1">
            {{ forecast.main.humidity }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="error !== null" class="my-4">{{ error }}</p>
    <WFButton @click="back"> Back </WFButton>
  </div>
</template>

<script lang="ts">
import WFButton from '@/components/WFButton.vue';
import WFLoading from '@/components/WFLoading.vue';
import { IForecast } from '@/interfaces';
import { getForecastAPIUrl } from '@/utils/weather';
import axios from 'axios';
import { format } from 'date-fns';
import { defineComponent } from 'vue';

interface IWeatherComponentData {
  forecast: IForecast | null;
  loading: boolean;
  error: string | null;
}

export default defineComponent({
  name: 'weather-view',
  components: { WFButton, WFLoading },
  data(): IWeatherComponentData {
    return {
      forecast: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    back() {
      this.$router.push({ name: 'home' });
    },
    getForecastWeatherMain(forecast: IForecast) {
      // For now, just return the first element from the array
      if (forecast.weather.length > 0) return forecast.weather.shift()?.main;
      return '-';
    },
    getForecastWeatherDescription(forecast: IForecast) {
      // For now, just return the first element from the array
      if (forecast.weather.length > 0)
        return forecast.weather.shift()?.description;
      return '-';
    },
    formatDate(epochDateTime: number) {
      return format(new Date(epochDateTime), 'MM/dd/yyyy');
    },
  },
  async mounted() {
    const city = this.$route.query.city as string;
    if (city) {
      try {
        const res = await axios.get<IForecast>(getForecastAPIUrl(city, 5));
        this.forecast = res.data;
      } catch (e) {
        const err = e as Error;
        console.error('[WeatherView::mounted] error:', err.toString());
        // Check if there's a response message from the server
        if ((e as any)?.response?.data?.message) {
          this.error = (e as any).response.data.message;
        }
      } finally {
        this.loading = false;
      }
    }
  },
});
</script>
