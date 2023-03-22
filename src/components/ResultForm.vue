<template>
  <button class="back__button" @click="firstStage">
    Go to first stage
  </button>
  <div class="result__form">
    <p>Entered ZIP-Code: {{dataValue['post code']}}</p>
    <p>State: {{dataValue.places[0].state}}</p>
    <p>City: {{dataValue.places[0]['place name']}}</p>
    <p>IP: {{this.ipAddress}}</p>
    <p>User Agent: {{this.userAgent}}</p>
    <p>HTTP Referer: {{this.httpReferer}}</p>
    <p>UTM: {{this.utmParams}} </p>
  </div>
</template>

<script>
export default {
  name: 'result-form',
  props: ['dataValue'],
  data() {
    return {
      ipAddress: '',
      userAgent: '',
      httpReferer: '',
      utmParams: '',
    }
  },
  methods: {
    firstStage() {
      this.$emit('handleStep', 0)
    }
  },
  mounted() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          this.ipAddress = data.ip;
        })
        .catch(error => console.error(error));

    this.userAgent = navigator.userAgent;
    this.httpReferer = document.referrer;
    const queryParams = new URLSearchParams(window.location.search);
    this.utmParams = queryParams.getAll('utm_source');
  }
}
</script>

<style scoped>
.result__form{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.back__button{
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  border-radius: 0;
  background-color: #fff;
  border: 1px solid black;
  cursor: pointer;
}
</style>