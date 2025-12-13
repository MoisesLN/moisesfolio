<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsContainer from './components/ProjectsContainer.vue';


export default {
    components: {
        Header,
        HeroSection,
        ProjectsContainer
    }
}
</script>

<template>
    <main>
        <Header></Header>
        <HeroSection></HeroSection>
        <ProjectsContainer></ProjectsContainer>
    </main>
</template>

<style scoped></style>
