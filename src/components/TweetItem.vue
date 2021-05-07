<template>
  <div class="todo-item" @click="favouriteTweet(tweet.id)">
    <div class="user-profile-tweet">
      <div class="tweet-item-user">{{ username }}</div>
    </div>
    <div class="tweet-item-content">
      {{ tweet.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    username: {
      type: String,
      required: true,
    },
    tweet: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    function favouriteTweet(id) {
      ctx.emit('favourite', id)
    }
    return {
      favouriteTweet,
    }
  },
}
</script>

<style>
.todo-item {
  border: 1px solid #dfe3e8;
  border-radius: 5px;
  padding: 20px;
  background: #ccc;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 15px;
  transition: all 0.24s ease;
}
.todo-item:hover {
  transform: scale(1.1, 1.1);
  margin-left: 24px;
}
.tweet-item-user {
  font-weight: bold;
  font-size: 20px;
}
.tweet-item-content {
  font-size: 18px;
  margin-top: 5px;
}
</style>
