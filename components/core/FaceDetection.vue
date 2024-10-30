<template>
    <div>
      <input v-model="imageUrl" placeholder="Enter image URL" />
      <button @click="detectFace">Check Face</button>
      <canvas ref="canvas" v-if="faceDetected" />
      <p v-if="faceDetected === false">No face detected</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import * as faceapi from 'face-api.js';
  
  const imageUrl = ref('');
  const faceDetected = ref(null); // null indicates no check done yet
  
  // Load models on component mount
  onMounted(async () => {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  });
  
  const detectFace = async () => {
    if (!imageUrl.value) return;
  
    // Load the image from the provided URL
    const image = await loadImage(imageUrl.value);
  
    // Detect faces in the image
    const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions());
  
    if (detections.length > 0) {
      faceDetected.value = true;
      displayDetection(image, detections);
    } else {
      faceDetected.value = false;
    }
  };
  
  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  };
  
  const displayDetection = (image, detections) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    faceapi.draw.drawDetections(canvas, detections);
    document.body.appendChild(canvas);
  };
  </script>
  