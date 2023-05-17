<template >
  <section class="portfolio">
    <div class="container portfolio__content">
      <div class="titles">
        <h1>Мое <span>Портфолио</span></h1>
        <p>Хотите увидеть мои работы? Переходите по картинкам ниже!</p>
      </div>
      <div class="portfolio__cards cards" v-if="repos">
        <a :href="rep.html_url" class="cards__item" v-for="rep in repos" :key="rep">
          <h2>{{ rep.name }}</h2>
        </a>
        <a href="https://github.com/PurpleLightning22?tab=repositories" class="cards__item">
          <h2>Все репозитории</h2>
        </a>
      </div>
      <div v-else>
        Загрузка...
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      portfolio: null,
    };
  },
  methods: {
    ...mapActions(['getRepos'])
  },
  computed: {
    ...mapState(['repos'])
  },
  mounted() {
    this.getRepos()
  },
  created() {
  },
};
</script>
<style lang="">
</style>