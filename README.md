# Devnation Tech Talk Demo: Secure Vuejs app with Keycloak


Slides and Video: https://developers.redhat.com/devnation/tech-talks/secure-vuejs-keycloak


# Keycloak Setup: (port: 8081)
* Create Realm: 'devnation' 
* Create client: `vue-app` & `quarkus-bff`


# Vue App
## update the main.js (Port: 8080)
`npm install`
`yarn serve`


# Quarkus Bff (Port:8001)
## Configure the application properties
`./mvnw quarkus:dev`
