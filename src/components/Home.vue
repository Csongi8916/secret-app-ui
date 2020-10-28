<template>
  <div id="app">
    <form ref="form" class="form">
      <div class="form-element">
        <textarea
          class="input-box"
          v-model="secret.secretText"
          rows="3"
          cols="80"
          placeholder="Write here your secret"
        ></textarea>
      </div>
      <div class="form-element">
        <label class="from-label">Expiration Count:</label>
        <input class="input-box" v-model="secret.expireAfterViews" type="number" />
      </div>
      <div class="form-element">
        <label class="from-label">Expiration Minutes:</label>
        <input class="input-box" v-model="secret.expireAfter" type="number" />
      </div>
      <button class="btn" v-on:click="submit">SUBMIT</button>
    </form>
    <p class="status-text">{{ this.result }}</p>
    <p class="status-text">{{ this.hash }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      secret: {
        secretText: '',
        expireAfterViews: 0,
        expireAfter: 0,
      },
      result: '',
      hash: '',
    };
  },
  methods: {
    submit: function() {
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/secret',
        headers: {},
        data: {
          secret: this.secret.secretText,
          expireAfter: this.secret.expireAfter,
          expireAfterViews: this.secret.expireAfterViews,
        },
      })
        .then((res) => {
          this.result = 'Secret is created!';
          this.has = res.data.secret.hash;
        })
        .catch((err) => {
          this.result = 'Error!';
        });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  margin: 15px;
}

.form-element {
  padding: 10px;
}

.from-label {
  margin-right: 10px;
}

.input-box {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.status-text {
  text-align: center;
}

.btn {
  margin-top: 20px;
  background-color: #45a049;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
