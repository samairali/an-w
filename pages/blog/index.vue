<template>
    <div id="BlogPage">
        <CommonBridgeSection :text="BridgeText"  />
        <BlogBCard />
    </div>
</template>
<script>

export default {
    data() {
        return {
            BridgeText: 'Blog'
        }
    },
}

</script>