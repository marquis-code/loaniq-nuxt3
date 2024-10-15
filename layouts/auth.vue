<template>
  <div class="lg:flex h-screen">
    <!-- Static Carousel Section -->
    <div class="lg:w-1/2 hidden lg:block">
      <AuthCarousel />
    </div>
    <!-- Dynamic Form Section -->
    <div class="lg:w-1/2">
      <slot />
    </div>
  </div>
</template>
