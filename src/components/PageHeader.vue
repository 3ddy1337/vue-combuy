<template>
  <header>
    <h1>COM.BUY</h1>
    <p>Buying in bulk instead of supply and demand!</p>
    <RouterLink to="/">Home</RouterLink> | <RouterLink :to="{ name: 'users' }">Offers</RouterLink> |
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

p {
  padding: 10px;
}
</style>
