<template>
  <h2>Was ist COM.BUY?</h2>
  <div class="wrapper">
    <div class="inner-wrapper">
      <p>
        Bei COM.BUY glauben wir daran, dass jeder Nutzer die Möglichkeit haben
        sollte, Produkte zu den besten Konditionen zu erwerben. Unser Ziel ist
        es, durch die Bündelung von Interessen und Kaufkraft günstige Angebote
        zu schaffen, die für alle Beteiligten von Vorteil sind. Hier erfahren
        Sie, wie COM.BUY funktioniert und wie Sie davon profitieren können.
      </p>
      <br />

      <h3>Wie funktioniert COM.BUY?</h3>
      <br />
      <ol>
        <li>
          <strong>Produkterstellung durch den Nutzer</strong>: Jeder Nutzer kann
          ein Produkt erstellen, das er haben möchte. Sobald ein Produkt
          erstellt ist, wird es von COM.BUY geprüft und freigegeben.
        </li>
        <br />
        <li>
          <strong>Musthave Phase</strong>: Nach der Freigabe erhält das Produkt
          den Status "Musthave". In dieser Phase sammeln wir Interessenten, die
          das Produkt ebenfalls haben möchten. Das Produkt erhält "Likes" von
          potenziellen Käufern, die ihr Interesse signalisieren.
        </li>
        <br />
        <li>
          <strong>Ziel-Angebot</strong>: Während der Musthave Phase holt COM.BUY
          verschiedene Angebote ein. Auf Grundlage dieser Angebote erstellen wir
          ein finales Ziel-Angebot.
        </li>
        <br />
      </ol>

      <h3>Beispiel für den Ablauf</h3>
      <br />
      <p><strong>Angebot von Händler A für Produkt X</strong>:</p>
      <br />
      <ul>
        <li>Bei Menge 100: Preis 150€</li>
        <li>Bei Menge 1.000: Preis 100€</li>
        <li>Bei Menge 10.000: Preis 75€</li>
        <li>Angebot ist 4 Wochen gültig</li>
      </ul>
      <br />
      <p>
        In der Musthave Phase kann das Produkt immer mehr Interesse gewinnen.
        Beispielsweise kann es 3 Wochen dauern, um ein adequates Angebot
        einzuholen. In dieser Zeit können sich bereits viele potenzielle Käufer
        registrieren.
      </p>
      <br />

      <p><strong>Ziel-Angebot für Endverbraucher</strong>:</p>
      <br />
      <ul>
        <li>Bei Menge 100: Preis 160€</li>
        <li>Bei Menge 1.000: Preis 110€</li>
        <li>Bei Menge 10.000: Preis 85€</li>
        <li>Regulärer Marktpreis für Produkt X: 199,95€</li>
      </ul>
      <br />

      <h3>Szenarien am Ende des Ziel-Angebotes</h3>
      <br />
      <p><strong>Szenario 1</strong>:</p>
      <br />
      <ul>
        <li>Nur 88 Leute haben gekauft.</li>
        <li>Das Mindestziel wurde nicht erreicht.</li>
        <li>Alle erhalten ihr Geld zurück.</li>
      </ul>
      <br />

      <p><strong>Szenario 2</strong>:</p>
      <br />
      <ul>
        <li>444 (oder mehr) Zahlungen sind eingegangen.</li>
        <li>
          Je nach erreichter Menge reduziert sich der Preis und alle zahlen den
          reduzierten Preis.
        </li>
      </ul>
      <br />

      <h3>Regeln und Rückgaberecht</h3>
      <br />
      <ul>
        <li>
          Wenn das Mindestziel (Mindestmenge 100 Stk.) nicht erreicht wird,
          erhalten alle ihr Geld zurück.
        </li>
        <li>
          Bis 999 Stk.: Der Mindestpreis ist zu zahlen. Eine Stornierung ist
          möglich und der Betrag wird sofort erstattet.
        </li>
        <li>
          Von 1.000 - 9.999 Stk.: Kunden, die bereits (den teureren Preis)
          bezahlt haben, bekommen die Differenz sofort zurück und für alle gilt
          der günstigere Preis. Ab hier ist eine Stornierung nicht mehr möglich.
        </li>
        <li>Bei jeder weiteren Stufe verhält es sich genauso.</li>
      </ul>
      <br />

      <p>
        Mit diesem innovativen Ansatz garantiert COM.BUY, dass das Geld der
        Interessenten jederzeit abrufbar ist, bis die Transaktion abgeschlossen
        ist. Wir sorgen dafür, dass die gewünschte Menge verfügbar ist und der
        gesamte Ablauf transparent und fair gestaltet ist. Profitieren Sie von
        den besten Angeboten und der Sicherheit, die COM.BUY Ihnen bietet.<br /><br />
        Bei dieser Berechnung handelt es sich um eine Beispielrechnung und dient
        nur zur Veranschaulichung.
      </p>
    </div>
  </div>
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

.wrapper {
  font-family: "Exo 2";
  color: black;
  margin: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
  padding: 10px;
}

@media screen and (min-width: 768px) {
  .inner-wrapper {
    max-width: 75ch;
  }
}
</style>
