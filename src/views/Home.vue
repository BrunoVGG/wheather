<template>
  <div class="home">
    <WeatherForecast
      title="Lisbon"
      city="Lisbon"
    />
    <WeatherForecast
      title="London"
      city="London"
    />
    <WeatherForecast
      title="Netherlands"
      city="Netherlands"
    />
  </div>
</template>

<script>
import WeatherForecast from '@/components/WeatherForecast.vue';

export default {
  name: 'Home',
  components: {
    WeatherForecast,
  },
};
</script>
