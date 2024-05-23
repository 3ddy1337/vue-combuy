<template>
  <h2>ANGEBOTE</h2>
  <!-- <ul>
    <li v-for="product in offers" :key="product.id">
      <span>{{ product.manufacturer + " " + product.productname }}</span>
    </li>
  </ul> -->
  <!-- <li v-for="user in users" :key="user.id">
      <span>{{ user.name }}</span> |
      <RouterLink :to="{ name: 'detail', params: { userId: user.id } }">Offers</RouterLink>
    </li> -->
  <div class="container" v-for="product in offers" :key="product.id">
    <div class="card">
      <div class="card-image">
        <p>Angebot endet in:</p>
        <CountdownTimer :startDate="startDate" :endDate="product.enddate" />
        <img :src="product.image" alt="product image" />
      </div>
      <div class="card-content">
        <h3>{{ product.manufacturer + " " + product.productname }}</h3>
        <!-- <p>{{ product.description }}</p> -->
        <!-- <p>{{ product.color }}</p> -->
        <p>UVP: {{ product.retailprice }}€</p>
        <br />
        <p>
          {{ product.tier1 }}€ | Spare:
          {{ Math.floor(product.retailprice - product.tier1) }}€
        </p>
        <p>
          {{ product.tier2 }}€ | Spare:
          {{ Math.floor(product.retailprice - product.tier2) }}€
        </p>
        <p>
          {{ product.tier3 }}€ | Spare:
          {{ Math.floor(product.retailprice - product.tier3) }}€
        </p>
        <p>
          {{ product.tier4 }}€ | Spare:
          {{ Math.floor(product.retailprice - product.tier4) }}€
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-cart4"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          />
        </svg>
        <!-- <a :href="product.url" target="_blank">Link</a> -->
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
      offers: [
        {
          id: 1,
          productname: "G502 HERO",
          manufacturer: "Logitech",
          description: "High Performance Gaming-Maus",
          color: "schwarz",
          retailprice: 89.99,
          tier1: 79.99,
          tier2: 69.99,
          tier3: 59.99,
          tier4: 49.99,
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: "https://source.unsplash.com/300x300/?product,1",
          url: "https://www.logitechg.com/de-de/products/gaming-mice/g502-hero-gaming-mouse.910-005470.html",
          enddate: new Date("2024-06-05T23:59:59"),
        },
        {
          id: 2,
          productname: "Playstation Dualshock 4",
          manufacturer: "Sony",
          description: "",
          color: "",
          retailprice: 89.99,
          tier1: 79.99,
          tier2: 69.99,
          tier3: 59.99,
          tier4: 49.99,
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: "https://source.unsplash.com/300x300/?product,2",
          url: "",
          enddate: new Date("2024-05-23T10:38:00"),
        },
        {
          id: 3,
          productname: "Xbox One Controller",
          manufacturer: "Microsoft",
          description: "",
          color: "",
          retailprice: 89.99,
          tier1: 79.99,
          tier2: 69.99,
          tier3: 59.99,
          tier4: 49.99,
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: "https://source.unsplash.com/300x300/?product,3",
          url: "",
          enddate: new Date("2024-06-25T23:59:59"),
        },
      ],
      // apiUrl: 'https://jsonplaceholder.typicode.com/users'
    };
  },
};

// methods: {
//   async getAllUsers() {
//     const response = await fetch(this.apiUrl)
//     const data = await response.json()

//     this.users = data
//   }
// },

//   created() {
//     this.getAllUsers()
//   }
// }
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
}

.card {
  width: 350px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  margin: 10px auto;
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
</style>
