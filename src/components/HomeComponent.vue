<!-- <template>
  <h3>Home Component</h3>
</template> -->

<template>
  <div>
    <h1>Welcome to the Home Component</h1>
    <CountdownTimer :startDate="startDate" :endDate="endDate" />
  </div>
</template>

<script>
import CountdownTimer from "./CountdownTimer.vue";

export default {
  components: {
    CountdownTimer,
  },
  data() {
    return {
      startDate: new Date(), // current date and time
      endDate: new Date("2024-12-31T23:59:59"), // example end date
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
