<template>
    <ul class="py-5 bg-white-900 " ref="singleService" @click="$emit('toggle-nav')" >
        <li v-for="service in allServices" :key="service.name"  class="">
            <NuxtLink
            :to="service.link"
            class="block px-4 py-2 text-gray-900"
            aria-current="page"
            @click="$emit('toggle-services')"
            >
            {{ service.name }}
            </NuxtLink>
        </li>
    </ul>
</template>
<script setup>

import {services} from '~/stores/NavigationLinks.js';
const singleService = ref(null)
const allServices = services

</script>
<style scoped>

a.router-link-active.router-link-exact-active{
    color: rgb(59 130 246 / 1);
}
.router-link-active{
    color: rgb(59 130 246 / 1);
}

</style>