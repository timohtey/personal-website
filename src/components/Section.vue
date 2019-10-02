<template>
  <div class="section floating">
    <router-link :to="link">
      <h1>{{sectionName}}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'section',
  props: {
    sectionName: {
      type: String,
      default: 'Section Name',
    },
    link: String,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 170px;
  margin-top: 0px;
}

// Animations
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  from { transform: translate(0,  0px); }
  65%  { transform: translate(0, 15px); }
  to   { transform: translate(0, -0px); }
}
</style>
