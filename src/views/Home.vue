<template>
  <h1>Hii From Home Component</h1>
  <div class="users-list">
    <router-link
      v-for="user in users"
      :to="{ name: 'UserLogin', params: { userId: user.id } }"
      :key="user.id"
    >
      {{ user.username }}
    </router-link>
  </div>
</template>

<script>
import { users } from '../assets/users.js'
export default {
  name: 'Home',
  setup() {
    return {
      users,
    }
  },
}
</script>

<style scoped>
.users-list {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
}
a {
  font-size: 24px;
  line-height: 2.22;
  text-align: left;
  padding-left: 25px;
  color: #6997bf;
}
</style>
