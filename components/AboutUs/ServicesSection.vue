<template>
    <section id="ServicesSection" class=" bg-gray-900">
        <div class="container mx-auto px-4 py-16">
            <div class="md:ml-10 md:mr-10">
                <p class="text-white text-center">Elevate Brands On Digital Space</p>
                <h2 class="text-4xl font-bold mb-8 text-center text-white mb-0">Client Satisfaction and Continued Growth Expansion are Our Primary Objectives</h2>
                <p class="text-white text-center mt-2 mb-10">We at the DigiGenius digital marketing agency think each business has distinctive traits that may be highlighted for its intended audience. So, we employ these characteristics and a strong plan supported by data to generate the most conversions possible.</p>
            </div>
            <div class="grid md:grid-cols-4 gap-4">
                <div :class="mainCardClasses" v-for="service in servicesData" :key="service">
                    <nuxt-icon :name="service.icon" class="flex justify-center mb-5" />
                    <h3 class="text-2xl font-bold mb-5">{{service.heading}}</h3>
                    <p>{{ service.data }}</p>
                </div>
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
                    heading: 'Dedicated Project Manager', 
                    data: 'We give the client a personal resource who is by their side at every step is the finest method to comprehend their business.',
                    icon: 'bulb'
                },
                {
                    heading: 'Marketing Automation', 
                    data: 'We utilize advanced strategies to streamline your operations and overcome customer relationship issues.',
                    icon: 'bulb'
                },
                {
                    heading: 'ROI Focused Marketing', 
                    data: 'We develop your digital marketing strategies with the single goal of getting the highest ROI.',
                    icon: 'bulb'
                },
                {
                    heading: 'Real-Time Performance Tracking', 
                    data: 'We inform our clients by offering real-time performance tracking on their digital marketing projects.',
                    icon: 'bulb'
                },
                
            ],
            mainCardClasses: "relative  bg-white  rounded-lg custom-box-shadow p-4 py-16 hover:bg-blue-800 hover:text-white text-center",
            linkClass: 'inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 text-black  border-gray-700  hover:bg-blue-800  focus:ring-blue-800 hover:border-blue-800 hover:text-white'
            
        }
    }
}

</script>
<style>
.custom-box-shadow{
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
}
#ServicesSection .custom-box-shadow span.nuxt-icon.nuxt-icon--fill svg{
    color: rgb(30 64 175 / 1);
    font-size: 50px;
    text-align: center;
}
#ServicesSection .custom-box-shadow:hover span.nuxt-icon.nuxt-icon--fill svg{
    color: #fff;
}
</style>
  