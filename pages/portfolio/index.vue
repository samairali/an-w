<template>
    <div id="PortfolioPage">
        <CommonBridgeSection :text="BridgeText"  />
        <PortfolioImageText />
    </div>
</template>
<script>

export default {
    data() {
        return {
            BridgeText: 'Portfolio'
        }
    },
}

</script>