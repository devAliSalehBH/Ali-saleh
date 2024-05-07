<template>
  <div id="project" class="py-10 px-16">
    <h2
      class="text-white justify-center flex text-4xl pt-10 font-semibold y-animation-hidden"
    >
      My <span class="text-cyan-500">Projects</span>
    </h2>
    <p
      class="text-gray-400 flex justify-center text-xl font-semibold y-animation-hidden"
    >
      My awesome works
    </p>

    <div class="lg:flex pt-10">
    
      <div class="lg:w-1/3"><SvgThree /></div>
      <div
        class="lg:w-2/3 rounded-3xl p-5 gap-4 grid grid-cols-1 lg:grid-cols-2 "
      >
        <div class="" v-for="i in 2">
          <div class="bg-slate-800 rounded-3xl p-5 flex flex-col gap-4">
            <img
              class="rounded-2xl"
              src="/images/61d859fd155e10d378cb20e4_2.jpg"
              alt=""
            />
            <p class="text-white font-semibold text-2xl">Project Name</p>

            <button class="bg-slate-900 w-fit text-cyan-600 p-3 rounded-2xl">
              GitHub Link
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
