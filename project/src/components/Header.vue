<script>
import { BIconList } from 'bootstrap-icons-vue';

export default {
    methods: {
        scrollTo(section) {
            const element = document.getElementById(section)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                })
            }
            this.popupVisible = false;
        }
    },
    components: {
        BIconList
    },
    data() {
        return {
            popupVisible: false
        }
    },
}
</script>
<template>
    <header>
        <a class="me" @click="scrollTo('hero')">moises</a>
        <a @click="scrollTo('projects')">projects</a>
        <a @click="scrollTo('about')">about</a>
        <a @click="scrollTo('contact')">contact me</a>
        <BIconList @click="popupVisible = !popupVisible"></BIconList>
        <Teleport to="body">
            <nav v-if="popupVisible" class="popup-nav">
                <a @click="scrollTo('projects')">projects</a>
                <a @click="scrollTo('about')">about</a>
                <a @click="scrollTo('contact')">contact me</a>
            </nav>
            <div v-if="popupVisible" class="backdrop" @click="popupVisible = !popupVisible"></div>
        </Teleport>
    </header>
</template>
<style scoped>
header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 3em;
    gap: 2em;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    z-index: 9;
    background: rgba(255, 255, 255, .05);
    backdrop-filter: blur(12px);
}

a {
    color: var(--subtext);
    text-decoration: none;
    cursor: pointer;
    opacity: 0;

    &:hover {
        color: var(--text);
    }
}

.popup-nav {
    animation: fadeInReverse 300ms ease-out 1 forwards;
    position: fixed;
    top: 80px;
    right: 30px;
    background: rgba(34, 34, 34, 0.3);
    border: 1px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    gap: 1.25em;
    padding: 2em 1.5em;
    border-radius: 1em;
    z-index: 12;
}

.backdrop {
    background: transparent;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
}

svg {
    display: none;
    animation: fadeIn 500ms ease-out 1 forwards;
    font-size: 2em;
}

a:nth-child(1) {
    animation: fadeIn 500ms ease-out 1 forwards;
}

a:nth-child(2) {
    animation: fadeIn 500ms ease-out 100ms 1 forwards;
}

a:nth-child(3) {
    animation: fadeIn 500ms ease-out 200ms 1 forwards;
}

a:nth-child(4) {
    animation: fadeIn 500ms ease-out 300ms 1 forwards;
}

.me {
    margin-right: auto;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes fadeInReverse {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

@media (max-width: 500px) {
    header {
        padding: 0 1.5em;
    }

    header > a {
        display: none;
    }

    a:first-child {
        display: block;
    }

    svg {
        display: block;
    }
}
</style>