import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Global function
app.config.globalProperties.randomizeLetters = (originalText, event) => {
    console.log('a')
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let iterations = 0;
    let displayText = '';

    const interval = setInterval(() => {
        displayText = originalText.split('').map((letter, index) => {
            if (index < iterations / 4) {
                return originalText[index]
            }
            return letters[Math.floor(Math.random() * 26)] // gets a random letter out of the 26 in the alphabet
        }).join('');

        event.target.textContent = displayText

        if (iterations >= originalText.length * 4) {
            clearInterval(interval)
        }
        iterations += 1;

    }, 30)
}


app.mount('#app')
