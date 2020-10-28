<template>
  <div class="secret">
    <h1>Secret Content</h1>
    <p class="content">{{ text }}</p>
    <b>Expire:</b>
    <p class="content">{{ expire }}</p>
    <b>Remaining Views</b>
    <p class="content">{{ remainingViews }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Secret',
  data() {
    return {
      text: '',
      expire: null,
      remainingViews: null,
    };
  },
  created() {
    const id = this.$route.params.id;

    axios({
      method: 'get',
      url: `http://localhost:8080/api/secret/${id}`,
    })
      .then((res) => {
        this.text = res.data.secret.secretText;
        this.expire = res.data.secret.expiresAt;
        this.remainingViews = res.data.secret.remainingViews;
      })
      .catch((err) => {
        this.text = 'This secret is expired!';
      });
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

.secret {
  margin: auto;
  text-align: center;
}

.content {
  margin: 15px;
}
</style>
