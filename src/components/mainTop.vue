<template>
  <div id="mainTop">
    <div>
      <p>Okada<br>Asako</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #mainTop{
    background: rgb(119, 182, 153);
    animation: gradationTest 10s ease-in-out infinite alternate;
    max-width: 90%;
    margin: auto;
    height: 600px;
  }
  // @keyframes gradationTest{
  //   0%{ background: #6CB8FF;}
  //   50%{ background: #FFF66C; }
  //   100%{ background: #FFA36C; }
  // }
</style>

<script>
export default {
  name: 'mainTop'
}
</script>



