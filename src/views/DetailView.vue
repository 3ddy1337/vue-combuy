<template>
  <h2>Detail</h2>
  <p>{{ currentUser.name }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.userId,
      currentUser: {}
    }
  },

  computed: {
    apiUrl() {
      return 'https://jsonplaceholder.typicode.com/users/' + this.id
    }
  },

  methods: {
    async getSingleUserData() {
      const response = await fetch(this.apiUrl)
      const data = await response.json()

      this.currentUser = data
    }
  },

  created() {
    this.getSingleUserData()
  }
}
</script>
