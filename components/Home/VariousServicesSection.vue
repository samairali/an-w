<template>
    <section id="VariousServicesSection">
        <div class="container mx-auto px-4 py-16">
            <p class="text-blue-800 text-center">Elevate Brands On Digital Space</p>
            <h2 class="text-4xl font-bold mb-8 text-center">We Offer Various Services to Support Your Business Growth</h2>
            <div class="grid grid-cols-2 gap-4">
                <div :class="mainCardClasses" v-for="service in servicesData" :key="service">
                    <h3 class="text-3xl font-bold mb-5">{{service.heading}}</h3>
                    <p>{{ service.data }}</p>
                </div>
            </div>
            <div class="view-all-btn flex text-center justify-center mt-16">
                <NuxtLink to="services" :class="linkClass">
                    Our Services
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script>

export default{
    data(){
        return {
            servicesData : [
                {
                    heading: 'Web Development', 
                    data: 'Provide websites that are dynamic, static, and e-commerce.'
                },
                {
                    heading: 'Search Engine Optimization', 
                    data: 'Provide all SEO services to improve website ranking on search engine result pages to receive more relevant traffic.'
                },
                {
                    heading: 'Social Media Marketing', 
                    data: 'Deliver Social Media Marketing (SMM) services for better Facebook, Instagram, Twitter, and LinkedIn.'
                },
                {
                    heading: 'Pay Per Click', 
                    data: 'We can manage all types of PPC campaigns, including Google Ads, Instagram Ads.'
                },
                
            ],
            mainCardClasses: "relative    rounded-lg custom-box-shadow p-4 py-16 hover:bg-blue-800 hover:text-white",
            linkClass: 'inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 text-black  border-gray-700  hover:bg-blue-800  focus:ring-blue-800 hover:border-blue-800 hover:text-white'
            
        }
    }
}

</script>
<style>
.custom-box-shadow{
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
}
</style>
  