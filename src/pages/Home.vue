<template>
  <div class="home" v-if="true">
    <div class="home__img">
      <img :src="img" alt="" />
    </div>
    <div class="home__text">
      <span>HI THERE!</span>
      <h2>I'm <span>{{ text }}</span></h2>
      <p>
        I'm a Freelance UI/UX Designer and Developer based in London, England. I
        strives to build immersive and beautiful web applications through
        carefully crafted code and user-centric design.
      </p>

      <div class="home__links">
        <router-link class="btn-hover_gray" to="/about">
          <img src="../assets/images/profile-icon.svg" alt="" />
          <span>More about me</span>
        </router-link>
        <router-link class="btn-hover_blue" to="/portfolio">
          <img src="../assets/images/bag.svg" alt="" />
          <span>Portfolio</span></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      text: 'Alladdin Kurbanbaev',
      textArr: ['Alladdin Kurbanbaev', 'a freelancer', 'a web developer'],
      bool: true,
      time: 100
    }
  },
  computed: {
    ...mapState(['img'])
  },
  methods: {
    incrementFun(arr, j) {
      this.text += arr[j]
    },
    switchWord() {
      let spl = this.text.split('')
      spl.pop()
      this.text = spl.join('')
    },
    changeWord() {
      let i = 0
      let j = 0


      setInterval(() => {
        if (this.bool == false) {

          this.incrementFun(this.textArr[i], j)
          j++
          if (this.text.length == this.textArr[i].length) {
            this.bool = true
            j = 0
          }
          this.time = 1000
        } else {

          if (this.text.length == 0) {
            i++
            this.bool = false
            if (i > this.textArr.length - 1) {
              i = 0
            }
          } else {
            this.switchWord()
          }
        }
      }, this.time);


    }
  },

  created() {
    this.changeWord()

  },
};
</script>
<style lang="scss"></style>