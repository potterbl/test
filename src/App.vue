<template>
  <div>
    <request-form @handleData="dataHandler" v-if="currentStep == 0"/>
    <result-form v-else :dataValue="data" @handleStep="stepHandler"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      data: '',
      currentStep: 0,
    }
  },
  methods: {
    dataHandler(data){
      this.data = data
      console.log(this.data)
      this.currentStep = 1
    },
    stepHandler(data){
      this.currentStep = data
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
