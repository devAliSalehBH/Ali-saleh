<template>
  <header
    ref="navbar"
    class="nav z-10 text-white flex justify-between fixed w-full"
  >
    <div class="logo font-bold text-3xl py-4 px-10">
      A<span class="text-cyan-600">l</span>i
    </div>
    <div
      class="navigation hidden lg:flex gap-14 items-center text-2xl bg-white text-black py-4 px-20 rounded-bl-full font-bold"
    >
      <div v-for="item in naviation" :key="item.path">
        <NuxtLink
          :to="item.path"
          class="hover:text-cyan-500 hover:text-3xl duration-75"
        >
          {{ item.name }}</NuxtLink
        >
      </div>
    </div>
    <div
      @click="showMenu"
      class="menu-btn flex lg:hidden p-5 cursor-pointer text-2xl"
    >
      <Icon name="uil:align-justify" />
    </div>
  </header>
  <div class="flex justify-end 0">
    <div
      ref="menu"
      class="sm-menu z-10 lg:hidden bg-white fixed w-96 p-5 h-screen flex gap-7 text-2xl flex-col my-hidden duration-300"
    >
      <div @click="showMenu" class="text-2xl justify-end flex cursor-pointer">
        <Icon name="uil:align-justify" />
      </div>
      <div class="px-14" v-for="item in naviation" :key="item.path">
        <NuxtLink
          @click.native="showMenu"
          :to="item.path"
          class="hover:text-cyan-500 hover:text-3xl duration-75"
        >
          {{ item.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const menu = ref(null);
const naviation = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Aboout",
    path: "#about",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Projects",
    path: "#project",
  },
  { name: "Contact", path: "#contact" },
];

let menuIsOpen = true;
const showMenu = () => {
  if (!menuIsOpen) {
    menu.value.style.right = "-24rem";
    menuIsOpen = !menuIsOpen;
  } else {
    menu.value.style.right = "0";
    menuIsOpen = !menuIsOpen;
  }
};

onMounted(() => {
  window.addEventListener("scroll", navScroll);
});

const navScroll = () => {
  var header = document.querySelector("header");
  header.classList.toggle("trans", window.scrollY > 0);
};
</script>

<style scoped>
.my-hidden {
  right: -24rem;
}

.trans {
  background-color: rgba(255, 255, 255, 0.598);
}
.trans .logo {
  color: black;
}
.trans .menu-btn {
  color: black;
}
.trans .navigation {
  background-color: transparent !important;
}
</style>
