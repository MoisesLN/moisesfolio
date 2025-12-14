<script>
export default {
    mounted() {
        const options = {
            rootMargin: '20px 0px 0px 0px',
            threshold: 1.0
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const element = entry.target
                    this.randomizeLetters('contact me', { target: element })
                    observer.unobserve(element)
                }
            })
        }, options)

        observer.observe(this.$refs.title)
    },
}
</script>
<template>
    <section id="contact">
        <h1 @mouseenter="randomizeLetters('contact me', $event)" ref="title">contact me</h1>
        <h4>get in touch, let's connect!</h4>
        <div class="container">
            <div class="item">
                <h3>email</h3>
                <a href="mailto:moisesbruh5@gmail.com" target="_blank">moisesbruh5@gmail.com</a>
            </div>
            <div class="item">
                <h3>github</h3>
                <a href="https://github.com/MoisesLN" target="_blank">github.com/MoisesLN</a>
            </div>
            <div class="item">
                <h3>instagram</h3>
                <a href="instagram.com/moiseslopesn/" target="_blank">instagram.com/moiseslopesn</a>
            </div>
        </div>
        <footer>© 2025 moisesln all rights reserved | coded with 🩵</footer>
    </section>
</template>
<style scoped>
    section {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        gap: 2.5em;
        padding: 4em 2em;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, .1);
    }

    h1 {
        font-size: 3em;
        font-weight: 400;
        text-align: center;
    }

    h4 {
        font-size: 1.5em;
        font-weight: 300;
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 2em;
        text-align: left;
        align-items: flex-start;
        font-size: 1.7em;
    }

    h3 {
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: var(--sec-text);
        &:hover {
            text-decoration: underline;
        }
    }

    footer {
        margin-top: auto;
        font-weight: 400;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 2.5em;
        }
        
        .container {
            font-size: 1.25em;
        }
    }
</style>