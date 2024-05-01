<template>
  <div id="contact" class="contact pt-10">
    <h2
      class="text-white justify-center flex text-4xl pt-10 font-semibold y-animation-hidden"
    >
      Contact
      <span class="text-cyan-500">Me</span>
    </h2>
    <p
      class="text-gray-400 flex justify-center text-xl font-semibold y-animation-hidden"
    >
      Get in touch
    </p>

    <div
      class="medias m-10 lg:m-20 p-10 bg-slate-800 rounded-xl grid grid-cols-1 lg:grid-cols-2"
    >
      <div v-for="i in contact" :key="i.link">
        <div
          @click="navigateToExternal(i.link)"
          class="media cursor-pointer w-fit flex gap-3 p-4 items-center text-[3vw] lg:text-3xl text-gray-400 hover:text-cyan-500 x-animation-hidden"
        >
          <div
            class="icon flex rounded-full bg-slate-900 border-2 border-cyan-500 p-3 justify-center items-center"
          >
            <Icon :name="i.icon" color="white" />
          </div>
          <p class=" ">{{ i.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const contact = [
  {
    name: "+967779819388",
    link: "https://wa.me/967779819388",
    icon: "uil:whatsapp",
  },
  {
    name: "off.alisaleh@gmail.com",
    link: "https://mailto:off.alisaleh@gmail.com",
    icon: "uil:envelope-alt",
  },
  {
    name: "devAliSalehBH",
    link: "https://github.com/devAliSalehBH",
    icon: "uil:github",
  },
  {
    name: "Ali Saleh",
    link: "https://www.linkedin.com/in/ali-saleh-5493932a3/",
    icon: "uil:linkedin",
  },
];

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
.media:nth-child(1) {
  transition-duration: 300ms;
}
.media:nth-child(2) {
  transition-duration: 600ms;
}
.media:nth-child(3) {
  transition-duration: 900ms;
}
.media:nth-child(4) {
  transition-duration: 1200ms;
}
.media:nth-child(5) {
  transition-duration: 1500ms;
}
</style>
