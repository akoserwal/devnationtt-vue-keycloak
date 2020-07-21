<template>
  <div class="hello">
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://www.keycloak.org/" target="_blank" rel="noopener">Keycloak</a></li>
      <li><a href="https://medium.com/keycloak/secure-vue-js-app-with-keycloak-94814181e344" target="_blank" rel="noopener">Blog:secure vuejs app with keycloak</a></li>
      <li><a href="https://twitter.com/@akoserwal" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://github.com/akoserwal/devnationtt-vue-keycloak" target="_blank" rel="noopener">github repo</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      token:localStorage.getItem("vue-token")
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.jwt-token{
  width:40%;
  display: block;
  padding: 20px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #d63aff;
}
</style>
