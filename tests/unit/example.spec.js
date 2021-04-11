import { expect } from 'chai';
import axios from 'axios';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import ForecastDay from '@/components/ForecastDay.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
localVue.use(axios);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe('ForecastDay.vue', () => {
  it('renders info when day is passed', () => {
    const day = {
      date: '2021-04-10',
      date_epoch: 1618012800,
      day: {
        maxtemp_c: 6.3,
        maxtemp_f: 43.3,
        mintemp_c: 3.9,
        mintemp_f: 39,
        avgtemp_c: 5.3,
        avgtemp_f: 41.6,
        maxwind_mph: 11.4,
        maxwind_kph: 18.4,
        totalprecip_mm: 1,
        totalprecip_in: 0.04,
        avgvis_km: 8,
        avgvis_miles: 4,
        avghumidity: 83,
        daily_will_it_rain: 1,
        daily_chance_of_rain: 97,
        daily_will_it_snow: 0,
        daily_chance_of_snow: 0,
        condition: {
          text: 'Patchy rain possible',
          icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
          code: 1063,
        },
      },
    };
    const wrapper = shallowMount(ForecastDay, {
      propsData: { day },
    });

    const img = wrapper.find('img');

    expect(wrapper.text()).to.include('10 Sat');
    expect(wrapper.text()).to.include('83%');
    expect(wrapper.text()).to.include('3.9°');
    expect(wrapper.text()).to.include('6.3°');
    expect(img.exists());
  });
});
