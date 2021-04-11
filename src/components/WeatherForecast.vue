<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class="forecast-days">
      <ForecastDays
        v-for="day in weatherDays"
        :key="day.date_epoch"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import ForecastDays from './ForecastDay.vue';

export default {
  name: 'WeatherForecast',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Lodon',
    },
    city: {
      type: String,
      required: false,
      default: 'London',
    },
  },
  components: {
    ForecastDays,
  },
  data() {
    return {
      weather: {},
      key: process.env.VUE_APP_WHEADER_KEY,
      host: process.env.VUE_APP_WHEADER_HOST,
    };
  },
  computed: {
    weatherDays() {
      if (this.weather && this.weather.data && this.weather.data.forecast) {
        return this.weather.data.forecast.forecastday;
      }
      return [];
    },
  },
  mounted() {
    this.callGetWeather();
  },
  methods: {
    callGetWeatherLocalStorage() {
      this.weather = JSON.parse(window.localStorage.getItem('weather'));
    },
    callGetWeather() {
      const url = `${this.host}?key=${this.key}&q=${this.city}&days=5&aqi=no&alerts=no`;

      this.axios.get(url).then((response) => {
        this.weather = response;
      });
    },
    callGetWeatherMetaweather() {
      // Metaweather return a CORS error from localhost.
      // I tested by Postman and it was ok, but not locally.
      // I sent a message to support email ( jason@p.ota.to)
      // and the message backed (Address not found).
      // Obs: I left this message just to explain as it is just a test
      // but on a real project I wouldn't do that

      const url = 'https://www.metaweather.com/api/location/search/?query=san';

      this.axios.get(url).then((response) => {
        this.weather = response;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.forecast-days {
  display: block;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    display: flex;
  }
}
</style>
