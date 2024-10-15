<template>
    <main>
        <div class="bg-white">
            <div class="mx-auto max-w-7xl px-6 py-10 sm:pt-10 lg:px-8 lg:py-10">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="lg:col-span-5" data-aos="fade-up">
                        <h2 class="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
                        <p class="mt-6 max-w-2xl text-base leading-7 text-gray-300">Have a different question and can’t find the answer you’re looking for? Reach out to our support team by <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">sending us an email</a> and we’ll get back to you as soon as we can.</p>
                    </div>
                    <div class="lg:col-span-7 lg:mt-0 space-y-8 pt-6 md:pt-0" data-aos="fade-up">
                        <div v-for="item in faqs" :key="item.id" class="overflow-hidden border-b">
                            <button
                                class="w-full text-left py-2 transition-colors duration-300 flex justify-between items-center pb-9"
                                @click="toggle(item.id)">
                                <p class="text-gray-800 font-semibold text-sm md:text-lg">
                                    {{ item.question }}
                                </p>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                    <svg v-if="isOpen(item.id)" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div v-if="isOpen(item.id)" class="overflow-hidden transition-max-height duration-500 pb-3"
                                :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
                                <p class="p-1 lg:p-4 text-gray-700 text-sm font-light md:text-base rounded-lg">
                                    {{ item.answer }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template> 

<script lang="ts" setup>
const faqs = [
    {
        id: 1, question: 'How can I get started?', answer: `To get started, simply reach out to our team through the contact form or give us a call. We'll be happy to discuss your project and provide you with all the information you need.`
    },
    {
        id: 2, question: 'What services do you offer?', answer: `We offer a wide range of services including software development, product design, and bespoke software solutions. Our team is experienced in working with startups, scale-ups, and enterprises across various industries.
`
    },
    {
        id: 3,
        question: `How do you ensure quality?`,
        answer: `We prioritize quality assurance through manual testing and test automation. This allows us to deliver powerful web and mobile applications that provide a seamless user experience.
`
    },
    {
        id: 4,
        question: `What is your design process?`,
        answer: `Our design process focuses on creating user-friendly navigation, engaging UX/UI design, and improving conversions through relevant content and consistent branding. We support clients at any stage of product development, from discovery to UX/UI design.`
    },
    {
        id: 5,
        question: `Can you help with scalability?`,
        answer: `Yes, we ensure that our designs are scalable and coherent across all teams involved. Whether you're a startup or an enterprise, we can help you build a digital product that grows with your business.`
    }
]

const openId = ref(null)
const maxHeight = ref(0)

const toggle = (id: any) => {
    openId.value = openId.value === id ? null : id
    maxHeight.value = openId.value ? 200 : 0
}

const isOpen = (id: any) => {
    return openId.value === id
}

const isClose = (id: any) => {
    return openId.value !== id
}
</script>
