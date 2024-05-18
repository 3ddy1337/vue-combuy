<template>
  <h2>Offers</h2>
  <ul>
    <li v-for="user in users" :key="user.id">
      <span>{{ user.name }}</span> |
      <RouterLink :to="{ name: 'profile-detail', params: { userId: user.id } }">Offers</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      apiUrl: 'https://jsonplaceholder.typicode.com/users'
    }
  },

  methods: {
    async getAllUsers() {
      const response = await fetch(this.apiUrl)
      const data = await response.json()

      this.users = data
    }
  },

  created() {
    this.getAllUsers()
  }
}
</script>
