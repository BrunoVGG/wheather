<template>
  <div class="forecast-day">
    <div
     :class="{ 'is-today': isToday }"
     class="forecast-day-header">{{ title }}</div>
    <div class="forecast-day-body">
      <div class="forecast-day-temp">
        <span>
          {{ mintemp }}
        </span>
        <span>
          {{ maxtemp }}
        </span>
      </div>
      <img v-if="dayIcon" alt="Weader Icon" :src="dayIcon">
      <div>
        {{ avgHumidity }}
      </div>
    </div>
  </div>
</template>

<script>
import { getDay, getWeekdayShort } from '@/helpers/date';

export default {
  name: 'ForecastDay',
  props: {
    day: {
      type: Object,
      require: false,
      default: () => {},
    },
  },
  computed: {
    monthDay() {
      if (!this.day.date) return '';
      return getDay(this.day.date);
    },
    weekday() {
      if (!this.day.date) return '';
      return getWeekdayShort(this.day.date);
    },
    mintemp() {
      if (!this.day.date) return '';
      return `${this.day.day.mintemp_c}°`;
    },
    maxtemp() {
      if (!this.day.date) return '';
      return `${this.day.day.maxtemp_c}°`;
    },
    dayIcon() {
      if (!this.day.date) return '../assets/day/116.png';
      return this.day.day.condition.icon;
    },
    avgHumidity() {
      if (!this.day.date) return '-';
      return `${this.day.day.avghumidity}%`;
    },
    isToday() {
      const wheaterDate = new Date(this.day.date);
      const today = new Date();

      return wheaterDate.getDate() === today.getDate()
        && wheaterDate.getMonth() === today.getMonth()
        && wheaterDate.getFullYear() === today.getFullYear();
    },
    title() {
      return `${this.monthDay} ${this.weekday}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.forecast-day {
  width: 100%;
  height: 200px;
  border: 1px solid $white;
  background-color: $gray-1;

  @media (min-width: 600px) {
    width: 130px;
  }

  .forecast-day-header {
    background-color: $gray-2;
    padding: 0.7rem 0.5rem;
    color: #49627F;
    font-weight: bold;
    font-size: 1.1rem;

    &.is-today {
      background-color: $blue;
      color: $white;
    }
  }

  .forecast-day-body {
    padding: 0.4rem;

    .forecast-day-temp {
      padding: 0.5rem 0.5rem;
      color: $white;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;

      span {
        padding: 0.3rem 0.5rem;
        flex-basis: 3px;
        flex-grow: 1;

        &:nth-child(1) {
          background: $blue;
          margin-right: 2px;
        }

        &:nth-child(2) {
          margin-left: 2px;
          background: $yellow;
        }
      }

    }
  }

}
</style>
