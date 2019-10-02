<template>
  <div id="home">
    <div id="overview">
      <h2>Tim Rodriguez</h2>
      <div id="description">
        <p>
          A Full Stack Developer who found his passion on
          Web Development
        </p>
        <p>Striving to bring impact to the world</p>
      </div>
    </div>
    <div id="sections">
      <Section
        v-if="currentSection === 'resume'"
        sectionName="RESUME"
        link="resume"
      />
      <Section
        v-else-if="currentSection === 'projects'"
        sectionName="PROJECTS"
        link="projects"
      />
      <Section
        v-else-if="currentSection === 'photos'"
        sectionName="PHOTOS"
        link="photos"
      />
      <Section
        v-else-if="currentSection === 'videos'"
        sectionName="VIDEOS"
        link="videos"
      />
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
  data() {
    return {
      currentSection: 'resume',
      previousScrollY: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > this.previousScrollY) {
        this.retrieveNextSection();
      } else {
        this.retrievePreviousSection();
      }

      this.previousScrollY = window.scrollY;
    },
    retrieveNextSection() {
      switch (this.currentSection) {
        case 'resume':
          this.currentSection = 'projects';
          break;
        case 'projects':
          this.currentSection = 'photos';
          break;
        case 'photos':
          this.currentSection = 'videos';
          break;
        default:
          break;
      }
    },
    retrievePreviousSection() {
      switch (this.currentSection) {
        case 'projects':
          this.currentSection = 'resume';
          break;
        case 'photos':
          this.currentSection = 'projects';
          break;
        case 'videos':
          this.currentSection = 'photos';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/sass/variables";
#home {
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 30px;
  }

  #overview {
    display: flex;
    flex-direction: column;

    #description {
      font-style: italic;
      line-height: 0.9;
    }
  }

  #sections {
    display: flex;
    justify-content: center;

    .section {
      padding-left: 50px;
      margin-top: 160px;
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
