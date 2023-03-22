<template>
  <div class="request__form">
    <h1>Enter ZIP-Code</h1>
    <input-zip v-model="zip"/>
    <button-render style="margin-top: 20px;" @click="sendRequest"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'request-form',
  data() {
    return {
      zip: '',
      data: '',
    }
  },
  methods: {
    sendRequest() {
      axios.get(`https://api.zippopotam.us/us/${this.zip}`)
          .then(response => {
            this.$emit('handleData', response.data)
          })
          .catch(error => {
            alert(error);
          });
    }
  }
}
</script>

<style scoped>
.request__form{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>