<template>
  <h2>Frage einen Musthave-Artikel an!</h2>
  <form>
    <div><label for="name">Produktname: </label></div>

    <input type="text" id="name" name="name" required />
    <label for="email">Hersteller: </label>
    <input type="email" id="email" name="email" required />
    <label for="musthave">EAN: </label>
    <input type="text" id="musthave" name="musthave" required />
    <label for="color">Wunschfarbe: </label>
    <input type="text" id="color" name="color" required />
    <label for="musthave">Hersteller-Link: </label>
    <input type="text" id="herstellerlink" name="herstellerlink" required />
    <label for="message">Nachricht:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Absenden</button>
  </form>
</template>

<style scoped>
h2 {
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

form {
  font-family: "Exo 2";
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 10px;
  text-align: left;
  justify-content: start;
  justify-items: start;
}

div {
  text-align: left;
  justify-self: start;
  justify-content: start;
  justify-items: start;
}
</style>
