<template>
    <div 
        class="items-center justify-between hidden w-full lg:flex lg:w-auto bg-gray-900" 
        :class="[nav ? 'show' : 'hide']" id="navbar-sticky" ref="listLinks">
        <ul :class=parentUl >
            <li v-for="navlink in navLinks" :key="navlink.name"  class="relative"   >
                <NuxtLink
                    :to="navlink.link"
                    :class=parentLink
                    @click="handleToggle(navlink)"
                    v-if="navlink.name !== 'Services'"
                >
                    {{ navlink.name }}
                </NuxtLink>
                <span
                    class="block pl-3 py-2 lg:p-0 text-white cursor-pointer"
                    @click="handleClick(navlink)"
                    v-else
                    :class="serviceActive ? 'router-link-active' : ''"
                >
                    {{ navlink.name }}
                </span>
                <div v-if="navlink.name === 'Services'" v-show="showServices"  class="md:absolute left-0 md:mt-10 md:w-64 bg-white rounded-lg shadow-lg" >
                    <common-header-allserviceslinks @toggle-nav="toggleNav" @toggle-services="toggleServices"  />
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import {allNavLinks} from '~/stores/NavigationLinks.js';
import { handleClickOutside, useHandleToggle } from '~/composables/header/handleClickOutside.js';

const props = defineProps({
    navbar : {
        type: String
    }
})
const navLinks = allNavLinks

let     nav             = ref(false);
let     showServices    = ref(false);
let     serviceActive   = ref(false);
const   listLinks       = ref(null)
const   parentUl        = ref(
    'flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 bg-gray-900 md:bg-gray-900 border-gray-700 mt-0'
);
const   parentLink      = ref(
    'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 lg:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700'
);

const toggleNav = () => nav.value = !nav.value;
const toggleServices = () => showServices.value = !showServices.value;
const handleClick = (navlink, event) => {
    toggleServices();
    serviceActive.value = true;
};


const handleToggle = () => useHandleToggle(nav, showServices, serviceActive)
const clickOutside = (event) => handleClickOutside(event,props,listLinks,showServices,nav)

onMounted(() => {
    document.addEventListener('click', clickOutside);

});

onBeforeUnmount(() => {
    document.removeEventListener('click', clickOutside);
});

defineExpose({
    toggleNav
})
</script>
<style scoped>

a.router-link-active.router-link-exact-active{
    color: rgb(59 130 246 / 1);
}
.router-link-active{
    color: rgb(59 130 246 / 1);
}
.custom-get-started {
    color: #fff !important;
}
@media only screen and (max-width: 1024px) {
    .show{
        display: block;
        position: absolute;
        top: 100%;
        z-index: 9;
        left: 0;
    }
}
.nuxt-icon svg{
    width: 30px;
    height: 30px;
}
</style>