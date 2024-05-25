<template>
  <div class="wrapper">
    <h2>Musthave</h2>
    <p>
      Hier kannst du deinen Wunschartikel anlegen. Nachdem wir deine Anfrage
      geprüft haben, werden in der Kategorie "Musthave" die Artikel angezeigt,
      die du dir wünschst.
    </p>
  </div>
  <form>
    <label for="name">Produktname: </label>
    <input type="text" id="name" name="name" required />
    <label for="manufacturer">Hersteller: </label>
    <input type="text" id="manufacturer" name="manufacturer" required />
    <label for="ean">EAN: </label>
    <input type="text" id="ean" name="ean" />
    <label for="color">Wunschfarbe: </label>
    <input type="text" id="color" name="color" />
    <label for="manufacturerlink">Hersteller-Link: </label>
    <input type="text" id="manufacturerlink" name="manufacturerlink" />
    <label for="message">Nachricht:</label>
    <textarea id="message" name="message"></textarea>
    <div></div>
    <button type="submit">Absenden</button>
  </form>
</template>

<style scoped>
.wrapper {
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
  grid-template-columns: auto 1fr;
  gap: 10px;
  margin: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background: linear-gradient(
    125deg,
    rgb(209, 253, 255) 0%,
    rgba(42, 255, 251, 0.418) 40%,
    rgb(133, 228, 254) 100%
  );
  padding: 10px;
}

button {
  font-family: "Nico Moji";
  background-color: white;
  border: none;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}

p {
  font-family: "Exo 2";
  margin: 10px;
}

label {
  margin-left: 10px;
}

input {
  width: 180px;
  height: 21px;
}

textarea {
  width: 180px;
  height: 42px;
}
</style>
