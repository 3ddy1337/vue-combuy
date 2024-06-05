<template>
  <h2>Musthave</h2>
  <div class="grid">
    <div class="container" v-for="item in musthaves" :key="item.id">
      <div class="card">
        <div class="card-image">
          <img :src="item.productImages[0]" alt="Musthave image" />
          <div
            class="wrapper"
            @click="toggleLike(item)"
            :class="{ liked: item.liked }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="grey"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            <p>{{ item.likes }}</p>
          </div>
        </div>
        <div class="card-content">
          <h3>{{ item.manufacturer + " " + item.title }}</h3>
          <p>{{ item.description }}</p>
          <p>UVP: {{ item.retailprice }}€</p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musthaves: [],
    };
  },
  created() {
    this.fetchMustHaves();
  },
  methods: {
    async fetchMustHaves() {
      try {
        const response = await fetch("http://localhost:3001/musthave");
        const data = await response.json();
        this.musthaves = data;
      } catch (error) {
        console.error("Error fetching must-have items:", error);
      }
    },
    async toggleLike(item) {
      item.liked = !item.liked;
      if (item.liked) {
        item.likes++;
      } else {
        item.likes--;
      }

      try {
        const response = await fetch(
          `http://localhost:3001/musthave/${item.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error updating likes:", error);
      }
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
}

.card {
  width: 350px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  margin: 10px auto;
  position: relative;
}

.card-content {
  position: relative;
}

img {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

p {
  font-family: "Exo 2";
  color: black;
}

.card-image {
  position: relative;
}

.wrapper {
  position: absolute;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: white;
  padding: 3px;
  text-align: center;
  width: 50px;
  top: 10px;
  right: 55px;
}

.liked svg {
  fill: rgb(133, 228, 254);
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
