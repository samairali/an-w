<template>
    <section id="BridgeSection" class="py-14  bg-gray-900">
        <div class="container mx-auto px-14">
            <h1 
                class="md:text-4xl xl:text-6xl text-white"
                :class="center ? 'text-center' : 'text-left'"
            >{{ text }}</h1>
        </div>
    </section>
</template>
<script>

export default {
    data() {
        return {
            
        }
    },
    props: {
        text: String,
        center: {
            type: Boolean,
            default: false
        },
    }
}

</script>