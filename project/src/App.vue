<script>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import MouseStalker from './components/MouseStalker.vue';
import ProjectsContainer from './components/ProjectsContainer.vue';


export default {
    components: {
        Header,
        HeroSection,
        ProjectsContainer,
        About,
        Contact,
        MouseStalker
    }
}
</script>

<template>
    <main>
        <Header></Header>
        <HeroSection></HeroSection>
        <ProjectsContainer></ProjectsContainer>
        <About></About>
        <Contact></Contact>
        
        <MouseStalker></MouseStalker>
    </main>
</template>

<style scoped></style>
