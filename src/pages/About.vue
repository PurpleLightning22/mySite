<template>
  <section class="about">
    <div class="container about__content">
      <div class="titles">
        <h1>ABOUT <span>ME</span></h1>
        <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
      </div>
      <div class="about-me">
        <div class="about-me__img">
          <div><img :src="img" alt="" /></div>
        </div>
        <div class="about-me__text">
          <div class="about-me__bio">
            <p>Фамилия <span>Алладдин</span></p>
            <p>Имя <span>Курбанбаев</span></p>
            <p>День рождения <span>22 декабрь 1999</span></p>
            <p>Национальность <span>Каракалпак</span></p>
            <p>Опыт <span>3 года</span></p>
            <p>Адресс <span>Ташкент</span></p>
            <p>Фриланс <span>Доступный</span></p>
            <p>Язык <span>Русский,Каракалпакский</span></p>
            <p>Номер телефона <span>+998913762505</span></p>
            <p>Эмайл <span>alladdin.kurbanbaev2212@gmail.com</span></p>
          </div>
          <a href="https://drive.google.com/file/d/1rZHUvoQJac6KZ5R_F1v7HTBIahQNVOLO/view?usp=share_link"
            class="about-me__cv btn-hover_gray" download>
            <img src="../assets/images/download-icon.svg" alt="">
            <span>Скачать мое резюме</span>
          </a>
        </div>
      </div>
      <div class="skills">
        <h3>SKILLS</h3>
        <div class="skills__block">
          <div class="skills__item" v-for="skill in skills" :key="skill.idx">
            <p>{{ skill.name }}</p>
            <div><span :style="'left:' + skill.high + '%'">{{ skill.high }}%</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', high: 80 },
        { name: 'JAVASCRIPT', high: 60 },
        { name: 'VUE', high: 70 },
        { name: 'VUEX', high: 60 },
        { name: 'scss', high: 70 },
        { name: 'CSS', high: 75 },
        { name: 'JQUERY', high: 65 },
        { name: 'PHOTOSHOP', high: 80 },
      ]
    }
  },
  computed: {
    ...mapState(['img'])
  }
};
</script>
<style lang="scss"></style>