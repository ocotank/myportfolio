<template>
  <section>
    <div id="mainTop">
      <p>Okada<br>Asako</p>
    </div>
  <profileBlock></profileBlock>
  </section>
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
import profileBlock from '@/components/profileBlock'

export default {
  name: 'mainTop',
  components: {
    profileBlock
  }
}
</script>
