<template>
  <div class="wrapper">
    <h2>Musthave</h2>
    <p>
      Hier kannst du deinen Wunschartikel anlegen. Nachdem wir deine Anfrage
      geprüft haben, werden in der Kategorie "Musthave" die Artikel angezeigt,
      die du dir wünschst.
    </p>
  </div>
  <form @submit.prevent="handleSubmit">
    <label for="name">Produktname: </label>
    <input type="text" id="name" v-model="form.name" name="name" required />

    <label for="manufacturer">Hersteller: </label>
    <input
      type="text"
      id="manufacturer"
      v-model="form.manufacturer"
      name="manufacturer"
      required
    />

    <label for="ean">EAN: </label>
    <input type="text" id="ean" v-model="form.ean" name="ean" />

    <label for="color">Wunschfarbe: </label>
    <input type="text" id="color" v-model="form.color" name="color" />

    <label for="manufacturerlink">Hersteller-Link: </label>
    <input
      type="text"
      id="manufacturerlink"
      v-model="form.manufacturerlink"
      name="manufacturerlink"
    />

    <label for="message">Nachricht:</label>
    <textarea id="message" v-model="form.message" name="message"></textarea>

    <div></div>
    <button type="submit">Absenden</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        manufacturer: "",
        ean: "",
        color: "",
        manufacturerlink: "",
        message: "",
      },
    };
  },
  methods: {
    generateUniqueId() {
      return "id-" + Math.random().toString(36).substr(2, 9);
    },
    async handleSubmit() {
      const uniqueId = this.generateUniqueId();
      const payload = {
        ...this.form,
        id: uniqueId,
        status: "waiting",
      };

      try {
        const response = await fetch("http://localhost:3001/inquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert("Deine Anfrage wurde erfolgreich gesendet.");
          this.resetForm();
        } else {
          alert("Fehler beim Senden der Anfrage.");
        }
      } catch (error) {
        alert("Fehler beim Senden der Anfrage: " + error.message);
      }
    },
    resetForm() {
      this.form = {
        name: "",
        manufacturer: "",
        ean: "",
        color: "",
        manufacturerlink: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.wrapper {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
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
  background-color: #f1f1f1;
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
  padding-top: 5px;
}

input {
  width: 180px;
  height: 30px;
}

textarea {
  width: 180px;
  height: 42px;
}
</style>
