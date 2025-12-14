<script>
export default {
    props: {
        project: Object
    },
    methods: {
        // hover effect by https://www.youtube.com/watch?v=htGfnF1zN4g&
        startGlow() {
            this.$refs.card.addEventListener('mousemove', this.updateGlow)
        },
        removeGlow() {
            this.$refs.card.removeEventListener('mousemove', this.updateGlow)
        },
        updateGlow(e) {
            // console.log('a')
            const card = this.$refs.card
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`)
            card.style.setProperty('--mouse-y', `${y}px`)
        }
    },
}
</script>

<template>
    <div class="project" @mouseenter="startGlow();" @mouseleave="removeGlow();" ref="card">
        <img v-if="project.image" class="img" :src="project.image" alt="Image of the project">
        <div class="img" v-else></div>
        <article>
            <h2 class="title">{{ project.title }}</h2>
            <p class="desc">{{ project.description }}</p>
            <div class="techs" v-if="project.stack.length">
                <span class="tech" v-for="(tech, index) in project.stack" :key="index">{{ tech }}</span>
            </div>
        </article>
    </div>
</template>

<style scoped>
.project {
    background-color: rgba(255, 255, 255, .02);
    border: 1px solid rgba(255, 255, 255, .1);
    display: flex;
    flex-direction: column;
    width: 600px;
    max-width: 80vw;
    border-radius: 2em;
    corner-shape: squircle;
    transition: 200ms ease-in-out all;
    position: relative;
}

.project::before {
    background: radial-gradient(
        800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, .05), transparent 40%
    );
    corner-shape: inherit;
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: inherit;
    z-index: 2;
    opacity: 0;
    transition: opacity 500ms ease;
}


.project:hover {
    scale: 1.05;

    &::before {
        opacity: 1;
    }

    img {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
    }
}

.img {
    aspect-ratio: 2 / 1;
    border-radius: 2em 2em 0em 0;
    corner-shape: squircle;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
}

div.img {
    background-image: linear-gradient(to top right, #333333, #1a1a1a);
}

img {
    -webkit-filter: grayscale(50%);
    filter: grayscale(50%);
    transition: 250ms filter ease;
}

article {
    display: flex;
    flex-direction: column;
    gap: .75em;
    min-height: 2em;
    padding: 1em 1.5em;
}

h2 {
    line-height: 1;
    font-weight: 400;
    font-size: 1.7em;
}

p {
    font-weight: 300;
}

.techs {
    display: flex;
    gap: 1em;
    margin-top: 1em;
}

.tech {
    padding: .5em 1.25em;
    background-color: rgba(255, 255, 255, .04);
    border: 1px solid rgba(255, 255, 255, .04);
    border-radius: .5em;
    font-weight: 400;
}

</style>