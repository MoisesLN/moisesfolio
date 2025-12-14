<script>
import Project from './Project.vue';
import { projects } from '../assets/projects.js'

export default {
    components: {
        Project
    },
    data() {
        return {
            projects: projects
        }
    },
}
</script>
<template>
    <section id="projects">
        <h1>projects</h1>
        <h2>what i've made in my journey until now</h2>
        <div class="projects">
            <Project v-for="(project, index) in projects" :project :key="index"></Project>
        </div>
    </section>
</template>
<style scoped>
    section {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
        padding: 4em 2em;
    }

    h1 {
        font-size: 3em;
        font-weight: 500;
    }

    h2 {
        font-weight: 300;
        text-align: center;
    }

    .projects {
        margin-top: 1em;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3em;
    }
</style>