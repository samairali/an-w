<template>
    <section id="WebDesigning-page">
        <CommonBridgeSection :text="BridgeText" />
        <ServicesWebDesigningImageText />
        <ServicesWebDesigningSingleService />
        <ServicesWebDesigningQuotation />
        <ServicesWebDesigningImageTextBg />
    </section>
</template>
<script>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    data() {
        return {
            BridgeText: 'Web Designing'
        }
    },
    setup() {
        onMounted(() => {
            AOS.init({
                once: true,
            });
        });
    },
}

</script>