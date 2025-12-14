<script>
export default {
    mounted() {
        window.addEventListener('mousemove', (e) => {
            const stalker = this.$refs.stalker
            stalker.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, {
                duration: 2000,
                fill: 'forwards'
            })
        })
    }
}
</script>
<template>
    <div class="mouse-stalker" ref="stalker" >
    </div>
</template>
<style scoped>
    .mouse-stalker {
        position: fixed;
        width: 2.5em;
        background: transparent;
        border: 2px #f0f0f0 solid;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        transition: 200ms ease-out;
        z-index: 5;
        pointer-events: none;
    }

    @media (max-width: 950px) {
        .mouse-stalker {
            display: none;
        }
    }
</style>