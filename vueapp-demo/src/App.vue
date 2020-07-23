<template>
  <div id="app">
    <img alt="Devnation logo" src="./assets/devnation-logo.png" />
    <h1 style="margin-left: 50px;">Welcome to Secure Vue App</h1>
    <h2 style="margin-left: 50px;">User: {{keycloak.tokenParsed.preferred_username}}</h2>
    <div>
      <button class="btn" @click="keycloak.logout()">Logout</button>
    </div>
    <div id="wrapper">
      <div class="jwt-token">
        <h3 style="color: black;">JWT Token</h3>
        {{keycloak.token}}
      </div>
      <div class="jwt-token-info">
        <h3 style="color: black;">Response from Quarkus API</h3>
        <pre style="background-color: black;">{{user.data}}</pre>
      </div>
    </div>
    <HelloWorld msg="Welcome to Demo App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "App",
  props: ["keycloak"],
  components: {
    HelloWorld
  },
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8001/user", {
        headers: {
          Authorization: "Bearer " + this.keycloak.token
        }
      })
      .then(response => (this.user = response));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#wrapper {
  display: flex;
  margin-top: 100px;
}

.jwt-token {
  width: 50%;
  display: block;
  padding: 20px;
  margin: 10 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #d63aff;
  font-weight: bolder;
}

.jwt-token-info {
  width: 50%;
  display: block;
  padding: 20px;
  margin: 10 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #00b9f1;
  font: caption;
  font-weight: bolder;
}

.btn {
    color: #fff;
    background-color: #0088ce;
    border-color: #00659c;
    padding: 6px 10px;
    font-size: 14px;
    line-height: 1.3333333;
    border-radius: 1px;
}
</style>
