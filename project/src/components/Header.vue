<script>
export default {
    methods: {
        scrollTo(section) {
            const element = document.getElementById(section)
            if(element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }
    }
}
</script>
<template>
    <header>
        <a class="me" @click="scrollTo('hero')">moises</a>
        <a @click="scrollTo('projects')">projects</a>
        <a @click="scrollTo('about')">about</a>
        <a @click="scrollTo('contact')">contact me</a>
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
</style>