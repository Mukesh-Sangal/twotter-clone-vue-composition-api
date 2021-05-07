<template>
  <div class="AddTweet">
    <form
      class="user-profile-add-tweet"
      @submit.prevent="createNewTweet"
      :class="{ '--exceeded': newTweetCharacterCount > 180 }"
    >
      <label for="tweet"
        ><strong>Add Tweet</strong>({{ newTweetCharacterCount }}/180)</label
      >
      <textarea
        name=""
        id="tweet-text"
        cols="24"
        rows="4"
        v-model="state.newTweetType"
      ></textarea>
      <div class="user-profile-add-tweet-option">
        <div>
          <label for="newTweetType" class="type"><strong>Type:</strong></label>
          <select id="newTweetType" v-model="state.selectedTweetType">
            <option
              :value="option.value"
              v-for="(option, index) in state.tweetTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div>
          <button>Tweet</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'CreateTodoPanel',
  setup(props, ctx) {
    const state = reactive({
      newTweetType: '',
      selectedTweetType: 'instant',
      tweetTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Tweets' },
      ],
    })
    const newTweetCharacterCount = computed(() => state.newTweetType.length)
    function createNewTweet() {
      if (state.newTweetType && state.selectedTweetType !== 'draft') {
        ctx.emit('addTweet', state.newTweetType)
      }
      state.newTweetType = ''
    }
    return {
      state,
      newTweetCharacterCount,
      createNewTweet,
    }
  },
}
</script>

<style scoped>
form.user-profile-add-tweet {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
}
.AddTweet {
  width: 40%;
  text-align: left;
}
.--exceeded {
  color: red;
  border-color: red;
}
.user-profile-add-tweet-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}
select#newTweetType {
  color: #fff;
  background-color: #000;
  font-size: 16px;
  padding: 5px;
}
button {
  color: #fff;
  background: #000;
  font-size: 16px;
  padding: 5px;
}
.type {
  margin-right: 5px;
}
</style>
