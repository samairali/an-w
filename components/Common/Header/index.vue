<template>
  <div>
    <nav class="bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 border-gray-600 relative" ref="navbar">
      <div class="container px-4 flex flex-wrap items-center justify-between mx-auto py-7">
        <common-header-logo />
        <common-header-navLinks ref="headerNavLinks" :navbar="navbar" />
        <common-header-getstarted @emitToggleNav="emittingToggleNav" />
      </div>
    </nav>  
  </div>
</template>
<script setup>
const headerNavLinks = ref(null);
const navbar = ref(null);

const emittingToggleNav = () => {
  headerNavLinks.value.toggleNav();
}

</script>

