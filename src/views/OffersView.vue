<template>
  <h2>OFFERS</h2>
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
        <img :src="product.image" alt="product image" />
      </div>
      <div class="card-content">
        <h3>{{ product.manufacturer + " " + product.productname }}</h3>
        <!-- <p>{{ product.description }}</p> -->
        <!-- <p>{{ product.color }}</p> -->
        <p>RRP: {{ product.retailprice }}</p>
        <br />
        <p>{{ product.tier1 }}</p>
        <p>{{ product.tier2 }}</p>
        <p>{{ product.tier3 }}</p>
        <p>{{ product.tier4 }}</p>
        <!-- <a :href="product.url" target="_blank">Link</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          id: 1,
          productname: "G502 HERO",
          manufacturer: "Logitech",
          description: "High Performance Gaming-Maus",
          color: "schwarz",
          retailprice: "89,99 €",
          tier1: "79,99 €",
          tier2: "69,99 €",
          tier3: "59,99 €",
          tier4: "$49,99 €",
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: "https://source.unsplash.com/300x300/?product,1",
          url: "https://www.logitechg.com/de-de/products/gaming-mice/g502-hero-gaming-mouse.910-005470.html",
          startdate: "",
          enddate: "",
        },
        {
          id: 2,
          productname: "Playstation Dualshock 4",
          manufacturer: "Sony",
          description: "",
          color: "",
          retailprice: "$49,99",
          tier1: "$44,99",
          tier2: "$39,99",
          tier3: "$34,99",
          tier4: "$29,99",
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: "https://source.unsplash.com/300x300/?product,2",
          url: "",
          startdate: "",
          enddate: "",
        },
        {
          id: 3,
          productname: "Xbox One Controller",
          manufacturer: "Microsoft",
          description: "",
          color: "",
          retailprice: "$49,99",
          tier1: "$44,99",
          tier2: "$39,99",
          tier3: "$34,99",
          tier4: "$29,99",
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: "https://source.unsplash.com/300x300/?product,3",
          url: "",
          startdate: "",
          enddate: "",
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
  background-color: #f1f1f1;
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
</style>
