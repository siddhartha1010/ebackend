const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "Afcdzqx2EuhRZnBesifnd7ZS-3gbkMgoJq4bQzzsucacdHNgFETC05isP6ERzhiNGw-Yq21hvwGgvO_3",
  client_secret:
    "EL_Y60pInDzXpi5HLalkAngYlmIaHBtPXbihrkxAk24e5qDjmh0STqYVPlDPq6KrZROh-3QZD3xpbuQg",
});

module.exports = paypal;
