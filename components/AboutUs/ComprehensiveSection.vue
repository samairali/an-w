<template>
    <section id="ComprehensiveSection" class="   -900">
        <div class="container mx-auto px-4 py-16">
            <div class="md:ml-10 md:mr-10">
                <p class="text-center">What Do We Do For Our Customers?</p>
                <h2 class="text-4xl font-bold mb-8 text-center md:mb-16">Our Comprehensive Digital Marketing Solution for Client Success</h2>
            </div>
            <div class="grid md:grid-cols-4 gap-4">
                <div :class="mainCardClasses" v-for="service in servicesData" :key="service">
                    <span class="number p-4 text-white inline-flex mb-5 text-4xl">{{ service.number }}</span>
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
                    heading: 'Strategy', 
                    data: 'We develop a scalable strategy to expand your digital presence and strengthen your brand.',
                    number: '01'
                },
                {
                    heading: 'Design', 
                    data: 'With the help of responsive design, our team of skilled and creative designers brings designs to life.',
                    number: '02'
                },
                {
                    heading: 'Development', 
                    data: 'We develop cutting-edge websites and marketing campaigns according to your business objectives and plans.',
                    number: '03'
                },
                {
                    heading: 'Activation', 
                    data: 'The combination of analytics, interaction, and progress in our digital marketing activation initiatives is fantastic.',
                    number: '04'
                },
                
            ],
            mainCardClasses: "relative    rounded-lg custom-box-shadow p-4 py-16 hover:bg-blue-800 hover:text-white",
            linkClass: 'inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 text-black  border-gray-700  hover:bg-blue-800  focus:ring-blue-800 hover:border-blue-800 hover:text-white'
            
        }
    }
}

</script>
<style>
#ComprehensiveSection .custom-box-shadow:nth-child(1) {
    background-color: rgb(30 64 175 / 1);
    color: #fff;
}
#ComprehensiveSection .custom-box-shadow .number{
    background-color: rgb(30 64 175 / 1) ;
}
#ServicesSection .custom-box-shadow span.nuxt-icon.nuxt-icon--fill svg{
    color: blue;
    font-size: 50px;
    text-align: center;
}
#ServicesSection .custom-box-shadow:hover span.nuxt-icon.nuxt-icon--fill svg{
    color: #fff;
}
</style>
  