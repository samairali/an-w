<template>
    <section class="   md:my-10 my-5" id="Bussiness">
        <CommonLeftImageRightText :img="img" :heading="heading" :paragraph="paragraph" />
    </section>
</template>
<script>

export default{
    data() {
        return {
            img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
            heading: 'We Help Businesses to Improve Their Business Image',
            paragraph: 'The outstanding digital marketing services that DigiGenius offers to various reputable agencies in Canada are its area of expertise. We are renowned for covering all the bases regarding the many digital marketing services available here. We are equipped with the tools necessary to guarantee that our services live up to and beyond our client’s expectations. We offer a wide range of services, including website design, mobile marketing, SEO, social media marketing, and more, all focused on generating leads and revenue. Everything you need to know about digital marketing services is available right here.'
        }
    },
}

</script>
