<template>
  <div class="flex flex-col items-center justify-center p-4">
    <div class="camera-button">
      <button
        type="button"
        class="button is-rounded"
        :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }"
        @click="toggleCamera"
      >
        <span v-if="!isCameraOpen">
          <div class="flex justify-center items-center">
            <img src="@/assets/img/camera.png" alt="Camera Icon" class="w-12 h-12 cursor-pointer flex justify-center items-center" />
          </div>
          <div class="bg-gray-100 rounded-lg p-4 flex flex-col items-center mt-10">
            <p class="text-base font-semibold">Setup Face ID</p>
            <p class="text-gray-600 text-sm mt-2">Perform face verification by taking a photograph of your face, Quick and secured</p>
          </div>
        </span>
        <span class="flex items-center gap-x-3 border px-2 font-medium mb-4 py-2.5 rounded-lg text-sm" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d0021b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          Close Camera</span>
      </button>
    </div>

    <div v-show="isCameraOpen && isLoading" class="camera-loading">
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ flash: isShotPhoto }">
      <div class="camera-shutter" :class="{ flash: isShotPhoto }"></div>

      <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>

      <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
    </div>

    <div v-if="isCameraOpen && !isLoading" class="camera-shoot mt-6">
      <button type="button" class="button px-6 py-2 rounded-lg flex items-center gap-x-3 border font-medium" @click="takePhoto">
        <img src="@/assets/img/camera.png" class="h-6 w-6" /> Snap
      </button>
    </div>

    <div v-if="isPhotoTaken && isCameraOpen" class="camera-download mt-4">
      <a id="downloadPhoto" download="my-photo.jpg" class="button bg-black text-white px-6 py-2 rounded-lg" role="button" @click="downloadImage">
        Download
      </a>
    </div>
  </div>
</template> 

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isCameraOpen = ref(false);
const isPhotoTaken = ref(false);
const isShotPhoto = ref(false);
const isLoading = ref(false);

const camera = ref<HTMLVideoElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

const toggleCamera = () => {
  if (isCameraOpen.value) {
    isCameraOpen.value = false;
    isPhotoTaken.value = false;
    isShotPhoto.value = false;
    stopCameraStream();
  } else {
    isCameraOpen.value = true;
    createCameraElement();
  }
};

const createCameraElement = () => {
  isLoading.value = true;
  const constraints = {
    audio: false,
    video: true,
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      isLoading.value = false;
      if (camera.value) camera.value.srcObject = stream;
    })
    .catch(() => {
      isLoading.value = false;
      alert("The browser doesn't support this feature or there was an error.");
    });
};

const stopCameraStream = () => {
  const tracks = (camera.value?.srcObject as MediaStream)?.getTracks();
  tracks?.forEach((track) => track.stop());
};

const takePhoto = () => {
  if (!isPhotoTaken.value) {
    isShotPhoto.value = true;
    const FLASH_TIMEOUT = 50;
    setTimeout(() => {
      isShotPhoto.value = false;
    }, FLASH_TIMEOUT);
  }
  isPhotoTaken.value = !isPhotoTaken.value;

  if (canvas.value && camera.value) {
    const context = canvas.value.getContext("2d");
    context?.drawImage(camera.value, 0, 0, 450, 337.5);
  }
};

const downloadImage = () => {
  const downloadLink = document.getElementById("downloadPhoto") as HTMLAnchorElement;
  if (canvas.value) {
    const imageURL = canvas.value
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    downloadLink.setAttribute("href", imageURL);
  }
};

onBeforeUnmount(() => {
  stopCameraStream();
});
</script>

<style scoped>
/* Your existing CSS styling */
</style>