export default {
    name: 'GetUser',
    data() {
      return {
        loading: false,
        user: {
          name: "johnDoe",
          email: "johnDoe@gmail.com"
        },
        error: null,
      }
    },
    methods: {
      getUser () {
        this.error = this.user = null
        this.loading = true

        fetch('https://events-app.avashist.com/users', {
          method: "GET",
          credentials: "include",
        }).then(res => {
          res.json().then(res => {
            this.user = res
          })
        }).catch(err => {
          this.error = err.toString()
        }).finally(() => {
          this.loading = false
        });

      }
    },
    template: `
      <div>
        <div v-if="loading">Loading...</div>
    
        <div v-if="error">{{ error }}</div>
    
        <div v-if="user">
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>
      </div>
      <button @click="getUser">
        Get the user info.
      </button>
      `
}