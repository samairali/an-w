<template>
    <section class="bg-white mb-0 " id="image-text-web-designing-service">
        <CommonLeftImageRightText v-for="content in contentLoop" :img="content.img" :heading="content.heading" :paragraph="content.paragraph" :leftImage="content.leftImage"  />
    </section>
</template>
<script>

export default{
    data() {
        return {
            contentLoop: [
                {
                    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
                    heading: 'What Sets Us Better from Others?',
                    paragraph: 'DigiGenius is one of the best companies for providing digital marketing services in Canada. Every month, our staff of highly motivated experts that have received training in handling various digital marketing tasks. Our skilled team continuously works to deliver businesses with outstanding services that are focused on delivering results so that they can grow. We offer services to various sectors with a 360-degree approach to handle everything connected to elevate brands in digital space and preserve it. We help companies increase their reach and engagement with a comprehensive strategy.',
                    leftImage: true,
                },
                
            ]
        }
    },
}

</script>
