<template>
    <section id="ServSection" class="   -900 mb-10">
        <div class="container mx-auto px-4 py-5 text-center">
            <div class="grid md:grid-cols-3 gap-4">
                <div :class="mainCardClasses" class="flex flex-col items-center justify-center">
                    <span class="number p-4 text-white inline-flex mb-5">Elevate Brands On Digital Space</span>
                    <h3 class="text-2xl md:text-3xl font-bold mb-5">We Offer Various Services to Support Your Business Growth</h3>
                </div>
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
                    heading: 'Web Development', 
                    data: 'We provide flexible and business-centric web development solutions in order to meet all of your company’s needs while allowing for scalability to adapt to potential future requirements.',
                    number: '01'
                },
                {
                    heading: 'Web Designing', 
                    data: 'Digi Genius Company provides stunning site design that is mobile responsive and up-to-date with technology to deliver the best user experience on laptops, smartphones, and computers.',
                    number: '02'
                },
                {
                    heading: 'Search Engine Optimization', 
                    data: 'Provide all SEO services to improve website ranking on search engine result pages to receive more relevant traffic.',
                    number: '03'
                },
                {
                    heading: 'Social Media Marketing', 
                    data: 'With the help of our cutting-edge SEO strategies, our digital marketing services Canada dramatically increase your website’s google rankings. The ideal keywords will be chosen by our team in order to generate a ton of organic traffic.',
                    number: '04'
                },
                {
                    heading: 'Pay Per Click Management', 
                    data: 'We can manage all types of PPC campaigns, including Google Ads, Instagram Ads, Facebook Ads, Dynamic Remarketing Ads, etc., with our team of Google AdWords Certified Professionals.',
                    number: '05'
                },
                
                
            ],
            mainCardClasses: "relative    rounded-lg custom-box-shadow p-4 py-16 hover:bg-blue-800 hover:text-white",
            linkClass: 'inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 text-black  border-gray-700  hover:bg-blue-800  focus:ring-blue-800 hover:border-blue-800 hover:text-white'
            
        }
    }
}

</script>
<style>
#ServSection .custom-box-shadow:nth-child(1) {
    background-color: rgb(30 64 175 / 1);
    color: #fff;
}
#ServSection .custom-box-shadow .number{
    background-color: rgb(30 64 175 / 1) ;
}
#ServSection .custom-box-shadow span.nuxt-icon.nuxt-icon--fill svg{
    color: blue;
    font-size: 50px;
    text-align: center;
}
#ServSection .custom-box-shadow:hover span.nuxt-icon.nuxt-icon--fill svg{
    color: #fff;
}
</style>
  