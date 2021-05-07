<template>
  <div>
    <AppHeader :username="state.user.username" v-if="state.user.isAdmin" />
    <div class="wrapper-main">
      <div class="user-profile-container">
        <div class="user-username">
          <h1>{{ state.user.username }}</h1>
          <h1>{{ userId }}</h1>
          <div class="user-admin-badge" v-if="state.user.isAdmin">
            Admin
          </div>
        </div>
        <div class="user-follower">
          <p>Followers: {{ state.followers }}</p>
        </div>
        <button type="button" @click="followUser" class="btn-follow">
          Follow
        </button>
        <CreateTodoPanel @addTweet="addTweet" />
      </div>
      <div class="tweet-section">
        <TweetItem
          v-for="tweet in state.user.tweets"
          :key="tweet.id"
          :username="state.user.username"
          :tweet="tweet"
          @favourite="toggleFavourite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TweetItem from '../components/TweetItem'
import CreateTodoPanel from '../components/CreateTodoPanel'
import { users } from '../assets/users'
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'UserLogin',
  components: {
    TweetItem,
    CreateTodoPanel,
  },
  setup() {
    const route = useRoute()
    const userId = computed(() => route.params.userId)
    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    })
    const fullName = computed(() => `${state.user.fname} ${state.user.lname}`)

    function followUser() {
      state.followers++
    }
    function toggleFavourite(id) {
      console.log(`Favourite Tweet ${id}`)
    }
    function addTweet(tweet) {
      state.user.tweets.unshift({
        id: state.user.tweets.length + 1,
        content: tweet,
      })
    }
    return {
      state,
      fullName,
      followUser,
      toggleFavourite,
      addTweet,
      userId,
    }
  },
  watch: {
    followers(newFlowerCount, oldflowerCount) {
      if (oldflowerCount < newFlowerCount) {
        console.log(`${this.user.username} gained a flower!`)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-main {
  display: flex;
  width: 95%;
  padding: 50px 30px;
}
.user-profile-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  align-items: center;
  background: #e0dddd;
}
.user-follower {
  width: 100%;
}
button {
  color: #fff;
  background: purple;
  font-size: 16px;
  padding: 10px;
  border: navajowhite;
  border-radius: 5px;
  width: 100%;
  margin: 10px auto;
}
.btn-follow {
  color: #fff;
  background: purple;
  font-size: 16px;
  padding: 10px;
  border: navajowhite;
  border-radius: 5px;
  width: 35%;
  margin: 10px auto;
}
p {
  font-size: 18px;
  color: green;
  font-weight: 900;
}
h1 {
  color: #1e7566;
}
.user-admin-badge {
  color: red;
  background: #fff;
  border-radius: 5px;
}
.user-admin-badge {
  color: red;
  background: #fff;
  border-radius: 5px;
  padding: 9px;
  width: 30%;
  margin: auto;
}
.tweet-section {
  flex: 3;
  text-align: left;
  padding-left: 50px;
}
.user-username {
  width: 100%;
}
.AddTweet {
  width: 80%;
  text-align: left;
}
</style>
