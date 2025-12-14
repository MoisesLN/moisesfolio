<script>
import { BIconArrowDownShort } from 'bootstrap-icons-vue'

export default {
    components: {
        BIconArrowDownShort
    },
    mounted() {
        this.randomizeLetters('moises lopes', { target: this.$refs.title })
    }
}
</script>
<template>
    <section id="hero">
        <h1 @mouseenter="randomizeLetters('moises lopes', $event)" ref="title">moises lopes</h1>
        <div class="anim-container">
            <h2>front-end / web developer</h2>
            <h2>front-end / web developer</h2>
        </div>
        <div class="anim-container">
            <h2>vuejs - js - python</h2>
            <h2>vuejs - js - python</h2>
        </div>

        <span class="arrow">
            <BIconArrowDownShort></BIconArrowDownShort>
        </span>
    </section>
</template>
<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    position: relative;
}

h1, h2 {
    text-align: center;
}

h1 {
    font-size: 3em;
    font-weight: normal;
}

h2 {
    font-size: 2em;
    color: var(--sec-text);
    font-weight: 300;
    transition: 350ms ease all;
}

.anim-container {
    position: relative;
    overflow: hidden;
}

.anim-container>*:nth-child(2) {
    position: absolute;
    top: 100%;
    left: 0;
}

.anim-container:hover {
    &>*:nth-child(1) {
        transform: translateY(-100%);
    }

    &>*:nth-child(2) {
        top: 0;
    }
}

.arrow {
    font-size: 2em;
    position: absolute;
    bottom: 1.5em;
    animation: fadeInOut 2s ease-in-out infinite forwards;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
        transform: translateY(-50%)
    }

    40% {
        opacity: 1;
        transform: translateY(0%)
    }

    60% {
        opacity: 1;
        transform: translateY(0%)
    }

    100% {
        opacity: 0;
        transform: translateY(50%)
    }
}
</style>