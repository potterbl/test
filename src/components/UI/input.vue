<template>
  <input type="number" placeholder="Enter zip here..." v-model="ipnutArea">
</template>

<script>
export default {
  name: "input-zip",
  data() {
    return{
      ipnutArea: ''
    }
  }
}
</script>

<style scoped>
input{
  border-radius: 0;
  border: 1px solid black;
  width: 300px;
  height: 30px;
  box-sizing: border-box;
  padding-left: 10px;
}
</style>