<template>
  <div className="exampleComponent">
    <img src="/images/vue.png" alt="Vue Logo" className="logo" />
    <p>Hello <strong>{{name}}</strong> from your friendly Vue component.</p>
    <button type="submit" className="btn btn-secondary" onClick={onHelloEvt}>Say hello</button>
  </div>
</template>

<script>
  export default {
    data: {
      name: 'Chris'
    }
  }
</script>

<style scoped>

</style>
