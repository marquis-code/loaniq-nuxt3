import { ref } from 'vue'

export function useModal() {
  const isVisible = ref(false)
  const modalData = ref({
    title: '',
    description: '',
    buttonText: ''
  })

  const showModal = (data: { title: string, description: string, buttonText?: string }) => {
    modalData.value = { ...data, buttonText: data.buttonText || 'Close' }
    isVisible.value = true
  }

  const closeModal = () => {
    isVisible.value = false
  }

  return {
    isVisible,
    modalData,
    showModal,
    closeModal
  }
}
