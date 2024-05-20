<template>
  <h2>Offers</h2>
  <ul>
    <li v-for="product in offers" :key="product.id">
      <span>{{ product.manufacturer + ' ' + product.productname }}</span>
    </li>
    <!-- <li v-for="user in users" :key="user.id">
      <span>{{ user.name }}</span> |
      <RouterLink :to="{ name: 'detail', params: { userId: user.id } }">Offers</RouterLink>
    </li> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          id: 1,
          productname: 'G502 HERO',
          manufacturer: 'Logitech',
          description: 'High Performance Gaming-Maus',
          color: 'schwarz',
          retailprice: '89,99 €',
          tier1: '79,99 €',
          tier2: '69,99 €',
          tier3: '59,99 €',
          tier4: '$49,99 €',
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: '',
          link: 'https://www.logitechg.com/de-de/products/gaming-mice/g502-hero-gaming-mouse.910-005470.html',
          startdate: '',
          enddate: ''
        },
        {
          id: 2,
          productname: 'Playstation Dualshock 4',
          manufacturer: 'Sony',
          description: '',
          color: '',
          retailprice: '$49,99',
          tier1: '$44,99',
          tier2: '$39,99',
          tier3: '$34,99',
          tier4: '$29,99',
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: '',
          link: '',
          startdate: '',
          enddate: ''
        },
        {
          id: 3,
          productname: 'Xbox One Controller',
          manufacturer: 'Microsoft',
          description: '',
          color: '',
          retailprice: '$49,99',
          tier1: '$44,99',
          tier2: '$39,99',
          tier3: '$34,99',
          tier4: '$29,99',
          tier1pieces: 99,
          tier2pieces: 199,
          tier3pieces: 299,
          tier4pieces: 399,
          image: '',
          link: '',
          startdate: '',
          enddate: ''
        }
      ]
      // apiUrl: 'https://jsonplaceholder.typicode.com/users'
    }
  }
}

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
