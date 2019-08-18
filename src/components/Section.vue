<template>
  <div class="section">
    <router-link :to="link">
      <span id="img-placeholder"/>
      <h4>{{sectionName}}</h4>
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

<style scoped>
h4 {
  font-size: 50px;
  margin-top: 0px;
}

#img-placeholder {
  height: 250px;
  width: 250px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 15px;
}
</style>
