<script>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsContainer from './components/ProjectsContainer.vue';


export default {
    components: {
        Header,
        HeroSection,
        ProjectsContainer,
        About,
        Contact
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
    </main>
</template>

<style scoped></style>
