<template>
    <div class="flex flex-col items-center justify-center p-10 bg-gradient-to-r from-white to-green-50 w-full h-screen">
      <!-- <div class="grid grid-cols-3 gap-3 mb-8">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-28 h-28 overflow-hidden rounded-lg"
        >
          <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full" />
        </div>
      </div> -->
     <div class="p-20">
        <img src="@/assets/img/group.png" alt="" />
     </div>
      <div class="text-center mb-4">
        <h2 class="text-3xl font-bold leading-relaxed text-[#333333] max-w-md mx-auto">Build wealth, diversifying your investments</h2>
        <p class="text-[#687181] leading-relaxed mt-2 max-w-md mx-auto">{{ currentText }}</p>
      </div>
      <div class="flex space-x-2 mt-4">
        <button
          v-for="(btn, index) in images.length"
          :key="index"
          @click="changeSlide(index)"
          class="w-3 h-3 rounded-full"
          :class="{
            'bg-pink-500': index === activeIndex,
            'bg-gray-300': index !== activeIndex,
          }"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import groupUser from '@/assets/img/group.png'
  import { ref, onMounted } from 'vue';
  
  interface Image {
    src: string;
    alt: string;
  }
  
  const images: Image[] = [
    { src: groupUser, alt: 'Image 1' },
    { src: groupUser, alt: 'Image 2' },
    { src: groupUser, alt: 'Image 3' },
    { src: groupUser, alt: 'Image 4' },
    { src: groupUser, alt: 'Image 5' },
    { src: groupUser, alt: 'Image 6' },
  ];
  
  const texts = [
    "Discover new opportunities for wealth building with our alternative investment options across various asset classes.",
    "Grow your portfolio with strategic investment planning.",
    "Invest with confidence and diversify your financial future.",
    "Discover new opportunities for wealth building with our alternative investment options across various asset classes.",
    "Grow your portfolio with strategic investment planning.",
    "Invest with confidence and diversify your financial future."
  ];
  
  const activeIndex = ref(0);
  const currentText = ref(texts[activeIndex.value]);
  
  const changeSlide = (index: number) => {
    activeIndex.value = index;
    currentText.value = texts[index];
  };
  
  onMounted(() => {
    setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % images.length;
      currentText.value = texts[activeIndex.value];
    }, 3000);
  });
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  