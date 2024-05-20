<template>
  <header>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      class="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
    <h1>COM.BUY</h1>
    <p>Buying in bulk instead of supply and demand!</p>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink :to="{ name: 'offers' }">Offers</RouterLink> |
    <RouterLink to="/musthave">Mustahve</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </header>
</template>

<style scoped>
header {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
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
  background-color: #f1f1f1;
}

p {
  padding: 10px;
}
</style>
