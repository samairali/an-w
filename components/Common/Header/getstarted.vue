<template>
    <div class="flex">
        <NuxtLink to="contact-us" :class=getStartedBtnClasses>Get started</NuxtLink>
        <button @click="$emit('emitToggleNav')" :class=openMenuBtnClasses>
            <span class="sr-only">Open main menu</span>
            <nuxt-icon name="hamburger" />
        </button>
    </div>
</template>
<script setup>

const getStartedBtnClasses = 'custom-get-started text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 hidden md:block';
const openMenuBtnClasses = 'inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 ml-5';


</script>