<template>
  <div id="home">
    <div id="overview">
      <h1>Tim Rodriguez</h1>
      <div id="sections">
        <Section :sectionName="'RESUME'" :link="'resume'"/>
        <Section :sectionName="'PROJECTS'" :link="'projects'"/>
        <Section :sectionName="'PHOTOS'" :link="'photos'"/>
        <Section :sectionName="'VIDEOS'" :link="'videos'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Section from '@/components/Section.vue';

export default {
  name: 'home',
  components: {
    Section,
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/sass/variables";
#home {
  display: flex;
  justify-content: center;

  h1 {
    font-size: 80px;
  }

  #overview {
    display: flex;
    flex-direction: column;
    padding-top: 150px;
  }

  #sections {
    display: flex;
    justify-content: center;
    .section {
      padding-left: 50px;
    }

    @media #{$mobile} {
      flex-direction: column;
      .section {
        padding-left: 0;
      }
    }
  }
}
</style>
