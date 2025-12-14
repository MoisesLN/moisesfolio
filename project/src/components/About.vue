<script>
import { aboutInfo } from '../assets/projects.js'

export default {
    data() {
        return {
            aboutInfo: aboutInfo
        }
    },
    mounted() {
        const options = {
            rootMargin: '20px 0px 0px 0px',
            threshold: 1.0
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const element = entry.target
                    this.randomizeLetters('about me', { target: element })
                    observer.unobserve(element)
                }
            })
        }, options)

        observer.observe(this.$refs.title)
    },
}
</script>
<template>
    <section id="about">
        <h1 @mouseenter="randomizeLetters('about me', $event)" ref="title">about me</h1>
        <h3>17y/o specialist in creating interactive and responsive websites!</h3>
        <div class="container">
            <div class="column" v-for="info in aboutInfo">
                <h3 class="title">{{ info.title }}</h3>
                <div class="items">
                    <p v-for="item in info.content">{{ item }}</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <article>
                <span class="quote">“being 1% better every day you’ll end the year a 37.78x better you”</span>
                <span class="credits">- James Clear in Atomic Habits</span>
            </article>
            <div class="carrousel">
                <div class="stars"></div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    section {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3em;
        padding: 4em 2em;
        border-top: 1px solid rgba(255, 255, 255, .1);

        > h3 {
            font-weight: 500;
        }
    }

    h1 {
        font-size: 3em;
        font-weight: 400;
    }

    .container {
        display: flex;
        justify-content: space-between;
        width: 80vw;
        font-size: 1.6em;
        flex-wrap: wrap;
        gap: 2em;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .title {
        font-size: 1em;
        color: var(--sec-text);
    }

    .bottom {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3em;
    }

    article {
        display: flex;
        flex-direction: column;
        gap: .5em;
        align-items: center;
        margin-top: auto;

        .quote {
            font-size: 1.5em;
        }
        .credits {
            font-size: 1.2em;
        }
    }

    .carrousel {
        width: 80vw;
        border: 1px solid rgba(255, 255, 255, .4);
        height: 80px;
        border-radius: 1em;
        background-color: var(--sec-text);
    }

    .stars {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-image: url('https://assets.codepen.io/1468070/Star+Pattern+3.svg');
        background-size: 5%;
        animation: moveStars 20s infinite forwards linear;
    }

    @keyframes moveStars {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 0%;
        }
    }
</style>