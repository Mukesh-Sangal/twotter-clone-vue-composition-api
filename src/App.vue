<template>
  <div class="header-main">
    <div class="sitebranding">
      <router-link to="/" v-if="user">
        <p>{{ user.id }}</p>
      </router-link>
    </div>
    <div class="userLoggedin" v-if="user">
      {{ user.username }}
    </div>
  </div>
  <router-view />
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const user = computed(() => store.state.User.user)
    console.log(user, 'Hii')
    return {
      user,
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.header-main {
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  align-items: center;
}
img {
  width: 80px;
  height: 80px;
}
.header-main {
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  align-items: center;
  background: #90afb0;
}
.userLoggedin {
  font-weight: bold;
  font-size: 26px;
}
</style>
