<script>
export default {
    
}
</script>
<template>
    <header>
        <a href="#" class="me">moises</a>
        <a href="#projects">projects</a>
        <a href="#about">about</a>
        <a href="#contact">contact me</a>
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
        &:hover {
            color: var(--text);
        }
    }

    .me {
        margin-right: auto;
    }
</style>