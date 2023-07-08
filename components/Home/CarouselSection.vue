<template>
    <section class="relative md:-translate-y-1/4 pt-5" id="CarouselSection">
        <div class="container mx-auto px-4  bg-white  py-10 rounded shadow-lg">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-center">Some of Our Happy Clients</h1>
            </div>
            <div class="   rounded-lg">
                <div class="grid md:grid-cols-5 gap-4 place-items-center">
                    <div class="" v-for="cItem in carouselItems" :key="cItem">
                        <img :src="cItem.itemName" alt="...">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    data(){
        return {
            carouselItems: [
                {itemName: 'https://digigenius.ca/wp-content/uploads/2023/04/logo-removebg-preview-1-300x140.png'},
                {itemName: 'https://digigenius.ca/wp-content/uploads/2023/04/logo-removebg-preview-1-300x140.png'},
                {itemName: 'https://digigenius.ca/wp-content/uploads/2023/04/logo-removebg-preview-1-300x140.png'},
                {itemName: 'https://digigenius.ca/wp-content/uploads/2023/04/logo-removebg-preview-1-300x140.png'},
                {itemName: 'https://digigenius.ca/wp-content/uploads/2023/04/logo-removebg-preview-1-300x140.png'},
            ]
        }
    }
}

</script>