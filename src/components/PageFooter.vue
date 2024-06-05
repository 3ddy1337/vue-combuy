<template>
  <footer>
    <div class="wrapper">
      <img src="/logo/cumbuy-logo-small.png" alt="combuy-logo" />
      <div>
        <p>
          Kontakt<br />
          Unsere AGB<br />
          Datenschutz<br />
          Impressum
        </p>
      </div>
    </div>
    <br />
    <p>© 2024 COM.BUY - Alle Inhalte unterliegen unserem Copyright.</p>
  </footer>
</template>

<style scoped>
footer {
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
  margin-bottom: 50px;
}

div {
  text-align: left;
}

img {
  scale: 0.7;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .wrapper {
    max-width: 75ch;
  }
}
</style>
