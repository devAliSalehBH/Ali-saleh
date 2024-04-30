<template>
  <div id="home" class="home text-white pb-10 pt-36 gap-3 px-10 lg:flex">
    <div class="pic lg:w-1/2">
      <div class="box">
        <img src="/images/Programming-amico.png" alt="" />
      </div>
    </div>
    <div class="welcome pt-14 text-center lg:text-start">
      <p class="hello text-7xl font-bold pb-5 text-cyan-600 y-animation-hidden">
        Hello!
      </p>
      <p class="name text-6xl font-bold pb-5 text-white y-animation-hidden">
        My Name is Ali Saleh
      </p>
      <p class="text-3xl pb-5 font-bold text-gray-500 y-animation-hidden">
        Fullstack Developer
      </p>
      <button
        @click="$router.push('#contact')"
        class="bg-cyan-500 py-3 px-7 rounded-3xl font-bold y-animation-hidden"
      >
        Contact me
      </button>
      <div
        class="media pt-5 text-2xl flex gap-2 justify-center lg:justify-start y-animation-hidden"
      >
        <Icon name="uil:github" color="gray" />
        <Icon name="uil:linkedin" color="gray" />
        <Icon name="uil:whatsapp" color="gray" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const Yobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("y-animation-show");
      } else {
        entry.target.classList.remove("y-animation-show");
      }
    });
  });
  const Xobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("x-animation-show");
      } else {
        entry.target.classList.remove("x-animation-show");
      }
    });
  });
  const YhiddenElements = document.querySelectorAll(".y-animation-hidden");
  YhiddenElements.forEach((el) => Yobserver.observe(el));
  const XhiddenElements = document.querySelectorAll(".x-animation-hidden");
  XhiddenElements.forEach((el) => Xobserver.observe(el));
});


</script>

<style scoped>
.y-animation-hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(80%);
  animation-delay: 500ms;

  transition: all 1s;
}
.x-animation-hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-10%);

  transition: all 1s;
}
.y-animation-show {
  opacity: 1;

  filter: blur(0);
  transform: translateY(0) rotate(0deg);
}
.x-animation-show {
  opacity: 1;

  filter: blur(0);
  transform: translateX(0) rotate(0deg);
}
</style>
