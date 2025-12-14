<script>
import About from './components/About.vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsContainer from './components/ProjectsContainer.vue';


export default {
    components: {
        Header,
        HeroSection,
        ProjectsContainer,
        About
    }
}
</script>

<template>
    <main>
        <Header></Header>
        <HeroSection></HeroSection>
        <ProjectsContainer></ProjectsContainer>
        <About></About>
    </main>
</template>

<style scoped></style>
