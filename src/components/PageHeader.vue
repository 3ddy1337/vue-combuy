<template>
  <header>
    <svg
      @click="toggle"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
    <img src="/logo/cumbuy-logo-small.png" alt="combuy-logo" />
    <h1>COM.BUY</h1>
    <!-- <p>Buying in bulk instead of supply and demand!</p> -->
    <nav v-if="active">
      <div class="link">
        <RouterLink class="router" @click="toggle" v-if="active" to="/"
          >Home</RouterLink
        ><br />
      </div>
      <div class="link">
        <RouterLink
          class="router"
          @click="toggle"
          v-if="active"
          :to="{ name: 'offers' }"
          >Angebote</RouterLink
        ><br />
      </div>
      <div class="link">
        <RouterLink class="router" @click="toggle" v-if="active" to="/musthave"
          >Mustahve</RouterLink
        ><br />
      </div>
      <div class="link">
        <RouterLink class="router" @click="toggle" v-if="active" to="/about"
          >Was ist COM.BUY</RouterLink
        >
      </div>
      <div class="link">
        <RouterLink
          class="router"
          @click="toggle"
          v-if="active"
          to="/musthave-inquiry"
          >Musthave Anfrage</RouterLink
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
header {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background: linear-gradient(
    125deg,
    rgb(209, 253, 255) 0%,
    rgba(42, 255, 251, 0.418) 40%,
    rgb(133, 228, 254) 100%
  );
  padding: 10px;
  text-align: center;
  margin: 10px;
}

svg {
  position: absolute;
  top: 23px;
  left: 25px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: white;
}

svg:hover {
  cursor: pointer;
  background-color: rgb(133, 228, 254);
}

p {
  padding: 10px;
}

nav {
  z-index: 100;
  position: absolute;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
  text-align: left;
  padding: 1rem;
  top: 65px;
  left: 25px;
}

.link {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  margin: 10px;
}

.link:hover {
  background-color: rgb(133, 228, 254);
  border-radius: 3px;
}

.router {
  text-decoration: none;
  color: black;
}
</style>
