<template>
    <div 
        class="grid  px-4 py-8 mx-auto lg:gap-16 lg:pb-16 lg:grid-cols-12" 
        :class="leftImage ? 'max-w-screen-xl' : ' bg-gray-800 text-white' ">
        <div 
            class="lg:mt-0 lg:col-span-5 lg:flex" 
            :class="leftImage ? 'order-1 ' : 'order-2' "
        >
            <img :src="img" alt="mockup">
        </div> 
        <div class="m-auto place-self-center lg:col-span-7 md:pl-10" :class="leftImage ? 'order-2' : 'order-1' ">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl ">{{ heading }}</h1>
            <p class="max-w-2xl mb-6 font-dark text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">{{ paragraph }}</p>
            
            
        </div>
                        
    </div>
</template>
<script>

export default{
    props: {
        img: String,
        heading: String,
        paragraph: String,
        leftImage: {
            type: Boolean,
            default: true // or provide a default value
        }
    }
}

</script>
<style scoped>
.nuxt-icon svg{
  color: #fff;
}
</style>