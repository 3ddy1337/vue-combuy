<template>
  <h2>ANGEBOTE<button @click="sortOffers">Endet bald</button></h2>

  <div class="grid">
    <div class="container" v-for="product in offers" :key="product.id">
      <div class="card" :class="{ inactive: isExpired(product.endDate) }">
        <div class="card-image">
          <template v-if="isExpired(product.endDate)">
            <p>Angebot abgelaufen!</p>
            <br />
          </template>
          <template v-else>
            <p>Angebot endet in:</p>
            <CountdownTimer :startDate="startDate" :endDate="product.endDate" />
          </template>
          <img :src="product.image" alt="product image" />
        </div>
        <div class="card-content">
          <h3>{{ product.manufacturer + " " + product.productname }}</h3>
          <p>UVP: {{ product.retailprice }}€</p>
          <br />
          <div v-for="(tier, index) in product.tiers" :key="index">
            <p :class="getTierClass(index, product.currentTier)">
              {{ tier.price }}€ | Spare:
              {{ Math.floor(product.retailprice - tier.price) }}€
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "../components/CountdownTimer.vue";

export default {
  components: {
    CountdownTimer,
  },
  data() {
    return {
      startDate: new Date(),
      offers: [],
    };
  },
  created() {
    this.fetchOffers();
  },
  methods: {
    async fetchOffers() {
      try {
        const response = await fetch("http://localhost:3001/offers");
        const data = await response.json();
        this.offers = data.map((item) => {
          const endDateTimestamp = this.convertToTimestamp(item.endDate);
          const endDate = new Date(endDateTimestamp);
          return {
            id: item.id,
            productname: item.title,
            manufacturer: item.manufacturer,
            description: item.description,
            retailprice: item.retailprice,
            tiers: item.tiers,
            currentTier: this.getCurrentTier(item.tiers, item.buyers),
            image: item.productImages[0] || "https://picsum.photos/300/300",
            endDate: endDate,
          };
        });
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    },
    convertToTimestamp(dateString) {
      return new Date(dateString).getTime();
    },
    isExpired(endDate) {
      return endDate < this.startDate.getTime();
    },
    getCurrentTier(tiers, buyers) {
      let currentTier = -1;
      tiers.forEach((tier, index) => {
        if (buyers >= tier.quantity) {
          currentTier = index;
        }
      });
      return currentTier;
    },
    getTierClass(index, currentTier) {
      return index === currentTier ? "highlight" : "crossed-out";
    },
    sortOffers() {
      this.offers.sort((a, b) => a.endDate - b.endDate);
    },
  },
};
</script>

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
  position: relative;
}

.card {
  width: 350px;
  height: 475px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  margin: 10px auto;
  position: relative;
}

.card.inactive::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
}

.card-content {
  position: relative;
}

img {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

svg {
  position: absolute;
  bottom: 0px;
  right: 15px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: white;
  padding: 5px;
}

p {
  font-family: "Exo 2";
  color: black;
}

.highlight {
  font-weight: bold;
}
.crossed-out {
  text-decoration: line-through;
  color: rgb(171, 171, 171);
}

button {
  font-family: "Exo 2";
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgb(209, 253, 255);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  border-color: none;
  border: none;
  padding: 5px;
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 75ch;
  }
  .grid {
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
