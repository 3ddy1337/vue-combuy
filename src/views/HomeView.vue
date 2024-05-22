<template>
  <h2>Home View</h2>
  <HomeComponent />
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
export default {
  components: { HomeComponent },
};
</script>

<style scoped>
h2 {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  margin: 10px;
}
</style>
