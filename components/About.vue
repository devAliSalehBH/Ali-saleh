<template>
  <div id="about" class="pb-20">
    <h2
      class="text-white justify-center flex text-4xl pt-28 font-semibold y-animation-hidden"
    >
      About <span class="text-cyan-500">Me</span>
    </h2>
    <p
      class="text-gray-400 flex justify-center text-xl font-semibold y-animation-hidden"
    >
      My introduction
    </p>

    <div class="lg:flex">
      <div class="w-full lg:w-2/3">
        <div class="about-me py-14 px-16 text-xl w-3/3">
          <p class="text-white x-animation-hidden">
            My name is Ali, a recent graduate IT student, I am interested in
            designing and developing Software. I enjoy challenges and solving
            problems. I’m a diligent self-learner and motivated to learn
            everything new. I am looking forward to developing myself and the
            place I am in. I am keen to achieve all my ambitions and goals.
          </p>
        </div>
        <div class="cv-download py-5 px-16">
          <button
            @click="
              navigateToExternal(
                'https://drive.google.com/file/d/1O2WfMjWKsnK21bp46aiWbICb2klkIPLm/view?usp=sharing'
              )
            "
            class="bg-cyan-500 rounded-full text-white px-11 py-5 font-semibold text-md y-animation-hidden"
          >
            Download CV
          </button>
        </div>
      </div>
      <div class="lg:w-1/3 m-10">
        <img src="public/images/Code typing-bro.png" alt="" />
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

const navigateToExternal = (link) => {
  window.open(link, "_blank");
};
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
