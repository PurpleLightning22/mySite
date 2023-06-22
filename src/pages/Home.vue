<template>
  <div class="home" v-if="true">
    <div class="home__img">
      <img :src="img" alt="" />
    </div>
    <div class="home__text">
      <span>Привет!</span>
      <h2>
        Я <span>{{ text }}</span>
      </h2>
      <p>
        Я Фрилансер и Веб разработчик. Я стремлюсь создавать захватывающие и
        красивые веб сайты и приложении , тщательно продуманный код и удобста
        для пользователю при использований моих веб приложении.
      </p>

      <div class="home__links">
        <router-link class="btn-hover_gray" to="/about">
          <img src="../assets/images/profile-icon.svg" alt="" />
          <span>Больше обо мне</span>
        </router-link>
        <router-link class="btn-hover_blue" to="/portfolio">
          <img src="../assets/images/bag.svg" alt="" />
          <span>Портфолио</span></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      text: "Алладдин Курбанбаев",
      textArr: ["Алладдин Курбанбаев", "Фрилансер", "Веб разработчик"],
      bool: true,
      time: 10,
    };
  },
  computed: {
    ...mapState(["img"]),
  },
  methods: {
    incrementFun(arr, j) {
      this.text += arr[j];
    },
    switchWord() {
      let spl = this.text.split("");
      spl.pop();
      this.text = spl.join("");
    },
    changeWord() {
      let i = 0;
      let j = 0;
      if (this.bool == false) {
        setInterval(() => {
          this.incrementFun(this.textArr[i], j);
          j++;
          if (this.text.length == this.textArr[i].length) {
            this.bool = true;
            j = 0;
          }
          this.time = 1000;
        }, this.time);
      } else {
        setInterval(() => {
          if (this.text.length == 0) {
            i++;
            this.bool = false;
            if (i > this.textArr.length - 1) {
              i = 0;
            }
          } else {
            this.switchWord();
          }
        }, 100);
      }
    },
  },

  created() {
    this.changeWord();
  },
};
</script>
<style lang="scss"></style>
