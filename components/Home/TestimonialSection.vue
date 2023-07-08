<template>
    <section id="TestimonialSection" :data-aos="'fade-up'" data-aos-delay="300">
        
        <div class="container mx-auto py-16 text-dark">
            <h1 class="text-4xl text-center md:mb-16 font-bold">What they say about us</h1>
            <figure class="max-w-screen-md mx-auto text-center" v-for="testimonial in testimonials" :key="testimonial">
                <nuxt-icon name="quote" />
                <blockquote>
                    <p class="text-2xl italic font-medium text-gray-900  text-dark">{{ testimonial.text }}</p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" :src=testimonial.image alt="profile picture">
                    <div class="flex items-center divide-x-2 divide-gray-500  divide-gray-700">
                        <cite class="pr-3 font-medium text-gray-900  text-dark">{{ testimonial.name  }}</cite>
                        <cite class="pl-3 text-sm text-gray-500  text-gray-400">{{ testimonial.designation }}</cite>
                    </div>
                </figcaption>
            </figure>
        </div>

    </section>
</template>
<script setup>

const testimonials = ref([
    {
        text: '"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
        image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
        name: 'Micheal Gough',
        designation: 'CEO at Google'
    }
])

</script>
<style scoped>
.nuxt-icon svg{
    width: 50px;
    height: 50px;
}
</style>