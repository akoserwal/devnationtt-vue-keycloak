import Vue from 'vue'
import App from './App.vue'
import VueLogger from 'vuejs-logger';
import * as Keycloak from 'keycloak-js';


Vue.config.productionTip = false
Vue.use(VueLogger);

let initOptions = {
  url: 'http://127.0.0.1:8081/auth', realm: 'devnation', clientId: 'vue-app', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {

  if (!auth) {
    window.location.reload();
  } else {
    Vue.$log.info("Authenticated");
    new Vue({
      render: h => h(App, { props: { keycloak: keycloak } }),
    }).$mount('#app')
    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);
  }


//Token Refresh 
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        Vue.$log.info('Token refreshed' + refreshed);
      } else {
        Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      Vue.$log.error('Failed to refresh token');
    });
  }, 6000)

}).catch(() => {
  Vue.$log.error("Authenticated Failed");
});
