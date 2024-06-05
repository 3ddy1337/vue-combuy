<template>
  <div>
  <h2>Angebot und Nachfrage?</h2><br>
  <p>
    Wir von COM.BUY drehen den Spieß um!<br> Bei uns bestimmt die Nachfrage das
    Angebot. 
    <p><br>Über einen festgelegten Zeitraum könnt ihr euch für ein Produkt
    entscheiden. Je mehr Personen sich für ein Produkt entscheiden, desto
    günstiger wird der Preis.</p><br>
    <p>Am Ende des Zeitraums wird, anhand der Anzahl der
    Käufer, der Preis festgelegt und das Produkt wird an alle Teilnehmer
    versendet.</p><br>
    <p>Dadurch ist es uns möglich, euch die besten Preise zu bieten!</p>
  </p>
</div>
<div>
<RouterLink
          class="router"
          to="/offers"
          ><p>Hier geht es zu unseren <span>Angeboten</span>!</p></RouterLink
        >
      </div>
      <div><RouterLink class="router" to="/musthave-inquiry"
      ><p>Du möchtest einen Artikel anfragen?<br>Frage hier dein <span>Musthave</span> Produkt an!</p></RouterLink></div>
  <!-- <HomeComponent /> -->
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
export default {
  components: { HomeComponent },
};
</script>

<style scoped>

p {
  font-family: "Exo 2";
  color: black;
}

.router  {
  text-decoration: none;
}

span {
  font-weight: 900;
  font-family: "nico Moji";
}

div {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  margin: 10px;
}

@media screen and (min-width: 768px) {
  p {
    max-width: 60ch;
  }
}
</style>
