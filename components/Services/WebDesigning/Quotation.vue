<template>
    <section id="Quotation">
        <div class="container grid  px-4 py-8 mx-auto lg:gap-16 lg:pb-16 lg:grid-cols-12" >
            <div class="m-auto place-self-center md:col-span-6 md:pl-10">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl ">Request Quotation</h1>
                <p class="max-w-2xl mb-6 font-dark text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">What specifically are you looking for, and how can we help you with your mission? You can contact us anytime.</p>            
            </div>
            <div class="lg:mt-0 lg:col-span-6 lg:flex" >
                <CommonContactForm />
            </div> 
        </div>
    </section>
</template>
<script>

export default{
    
}

</script>
<style scoped>
.nuxt-icon svg{
  color: #fff;
}
</style>