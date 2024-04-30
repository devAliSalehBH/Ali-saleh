<template>
  <div id="skills" class="my-skill bg-slate-800 py-10 px-16">
    <h2
      class="text-white justify-center flex text-4xl pt-10 font-semibold y-animation-hidden"
    >
      My <span class="text-cyan-500">Skills</span>
    </h2>
    <p
      class="text-gray-400 flex justify-center text-xl font-semibold y-animation-hidden"
    >
      My knowledge
    </p>
    <div>
      <p
        class="text-white pb-10 font-semibold text-lg pt-10 y-animation-hidden"
      >
        Languages
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <div
          class="card x-animation-hidden border-2 rounded-xl bg-slate-900 w-full flex flex-col border-cyan-500 p-5 text-white"
          v-for="item in lang"
          :key="item.name"
        >
          <div class="img flex items-center h-5/6 justify-center py-5">
            <img class="w-2/3 p-2" :src="item.path" alt="" />
          </div>
          <p class="flex justify-center text-xl font-semibold">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <p
        class="text-white pb-10 font-semibold text-lg pt-10 y-animation-hidden"
      >
        Frameworks
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <div
          class="card x-animation-hidden border-2 rounded-xl bg-slate-900 w-full flex flex-col border-cyan-500 p-5 text-white"
          v-for="item in frameworks"
          :key="item.name"
        >
          <div class="img flex items-center h-5/6 justify-center py-5">
            <img class="w-2/3 p-2" :src="item.path" alt="" />
          </div>
          <p class="flex justify-center text-xl font-semibold">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <p
        class="text-white pb-10 font-semibold text-lg pt-10 y-animation-hidden"
      >
        DataBase
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <div
          class="card x-animation-hidden border-2 rounded-xl bg-slate-900 w-full flex flex-col border-cyan-500 p-5 text-white"
          v-for="item in db"
          :key="item.name"
        >
          <div class="img flex items-center h-5/6 justify-center py-5">
            <img class="w-2/3 p-2" :src="item.path" alt="" />
          </div>
          <p class="flex justify-center text-xl font-semibold">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const lang = [
  { name: "C#", path: "/images/img1.png" },
  { name: "python", path: "/images/img2.png" },
  { name: "dart", path: "/images/img3.png" },
  { name: "javaScript", path: "/images/img4.png" },
  { name: "PHP", path: "/images/img5.png" },
];
const frameworks = [
  { name: "flutter", path: "/images/f-img1.png" },
  { name: "Vue.js", path: "/images/f-img2.png" },

  { name: "ASP.NET", path: "/images/f-img4.png" },
];
const db = [
  { name: "SQL", path: "/images/d-img1.png" },
  { name: "my-SQL", path: "/images/d-img2.png" },
  { name: "SQLite", path: "/images/d-img3.png" },
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
.card:nth-child(1) {
  transition-duration: 300ms;
}
.card:nth-child(2) {
  transition-duration: 600ms;
}
.card:nth-child(3) {
  transition-duration: 900ms;
}
.card:nth-child(4) {
  transition-duration: 1200ms;
}
.card:nth-child(5) {
  transition-duration: 1500ms;
}
</style>
