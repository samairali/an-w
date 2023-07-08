<template>
    <section id="SingleService" class="">
        <div class="container mx-auto px-4 py-16">
            <div class="grid md:grid-cols-4 gap-4">
                <div :class="mainCardClasses" v-for="service in servicesData" :key="service">
                    <span class="number p-4 text-white inline-flex mb-5 text-4xl">{{ service.number }}</span>
                    <h3 class="text-2xl font-bold mb-5">{{service.heading}}</h3>
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
                    heading: 'Web Application', 
                    number: '01'
                },
                {
                    heading: 'E-Commerce Website', 
                    number: '02'
                },
                {
                    heading: 'CMS Website', 
                    number: '03'
                },
                {
                    heading: 'PHP Website Development', 
                    number: '04'
                },
                
            ],
            mainCardClasses: "relative    rounded-lg custom-box-shadow p-4 py-5 hover:bg-blue-800 hover:text-white",
            linkClass: 'inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 text-black  border-gray-700  hover:bg-blue-800  focus:ring-blue-800 hover:border-blue-800 hover:text-white'
            
        }
    }
}

</script>
<style>
#SingleService .custom-box-shadow:nth-child(1) {
    background-color: rgb(30 64 175 / 1);
    color: #fff;
}
#SingleService .custom-box-shadow .number{
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
  