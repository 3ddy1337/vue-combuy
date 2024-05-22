<template>
  <div v-if="timeRemaining">
    <div>
      {{ timeRemaining.days }}:{{ timeRemaining.hours }}:{{
        timeRemaining.minutes
      }}:{{ timeRemaining.seconds }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      timeRemaining: null,
      intervalId: null,
    };
  },
  mounted() {
    this.calculateTimeRemaining();
    this.intervalId = setInterval(this.calculateTimeRemaining, 1000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    calculateTimeRemaining() {
      const now = new Date();
      let distance = this.endDate - now;

      if (distance < 0) {
        this.timeRemaining = {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
        clearInterval(this.intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      this.timeRemaining = { days, hours, minutes, seconds };
    },
  },
};
</script>

<style scoped>
div {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
</style>
