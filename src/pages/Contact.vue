<template>
  <div class="contact">
    <div class="titles">
      <h1>СВЯЗАТЬСЯ <span>Со мной</span></h1>
      <p>
        Я ВСЕГДА ОТКРЫТ ДЛЯ ОБСУЖДЕНИЯ ИЛИ ДЛЯ ПАРТНЕРСТВА.
      </p>
    </div>
    <div class="container contact__content">
      <div class="contact__info">
        <div class="contact__feedback">
          <span>Phone</span>
          <a href="tel:+998913762505"><img src="../assets/images/whatsapp.svg" alt="">+99891 376 25 05</a>
        </div>
        <div class="contact__feedback">
          <span>Email</span>
          <a href="mailto:alladdin.kurbanbaev2212@gmail.com"><img src="../assets/images/gmail.svg"
              alt="">alladdin.kurbanbaev2212@gmail.com</a>
        </div>
        <div class="contact__feedback">
          <span>Instagram</span>
          <a href="https://www.instagram.com/alladdin_kurbanbaev/"><img src="../assets/images/instagram.svg"
              alt="">alladdin.kurbanbaev</a>
        </div>
        <div class="contact__feedback">
          <!-- <span>Social Profiles</span> -->
          <!-- <div class="contact__socials">
            <a href="#"><img src="../assets/images/whatsapp.svg" alt=""></a>
            <a href="#"><img src="../assets/images/whatsapp.svg" alt=""></a>
            <a href="#"><img src="../assets/images/whatsapp.svg" alt=""></a>
          </div> -->
        </div>
      </div>
      <form class="contact__form form">
        <p>Если у вас есть какое-либо предложение, проект или даже вы хотите поздороваться.. пожалуйста, заполните форму
          ниже, и я отвечу вам в ближайшее время.</p>
        <label for="userName">
          <img src="../assets/images/profile.svg" alt="">
          <input type="text" id="userName" placeholder="YOUR NAME">
        </label>
        <label for="userEmail">
          <img src="../assets/images/mess.svg" alt="">

          <input type="text" id="userEmail" placeholder="YOUR EMAIL">
        </label>
        <label class="" for="userMess">
          <img src="../assets/images/comments.svg" alt="">

          <textarea name="" id="userMess" cols="30" rows="10" placeholder="YOUR MESSAGE"></textarea>
        </label>
        <button class="btn-hover_gray" to="/portfolio">
          <img src="../assets/images/bag.svg" alt="" />
          <span>Портфолио</span></button>
      </form>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>