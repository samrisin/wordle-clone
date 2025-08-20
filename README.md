#Wordle Clone
A web-based version of Wordle that I built using vanilla HTML, CSS, and JavaScript. It's got all the core features you'd expect - the color-coded tiles, virtual keyboard, and proper word validation through a dictionary API.
What it does
This is basically Wordle but in your browser. You get 6 tries to guess a 5-letter word, and the tiles change colors to give you hints:
* Green = right letter, right spot
* Yellow = right letter, wrong spot
* Gray = letter's not in the word at all
The game validates words using a real dictionary API, so you can't just make up nonsense words (though it'll fall back to a built-in word list if the internet's being weird).
Features
* Works with both keyboard typing and clicking the on-screen buttons
* Handles duplicate letters correctly (this was trickier than expected)
* Dark theme because light themes hurt my eyes
* Smooth animations when tiles flip over
* Works on phones, tablets, whatever
* Shows you which letters you've already tried on the keyboard
##How to run it
Just download the HTML file and open it in any modern browser. That's it. No build process, no npm install, no webpack config files to wrestle with.
If you want to run it on a local server:
python -m http.server 8000
Then go to localhost:8000.
How I built this
It's all in one HTML file to keep things simple. The CSS handles the styling and animations, JavaScript manages the game logic and API calls.
For word validation, I'm using the Free Dictionary API (dictionaryapi.dev) - it's free, doesn't need an API key, and works pretty well. If it's down, the game falls back to a hardcoded list of common words.
##Known issues
* No statistics tracking (I might add this later)
* Can't share your results like the real Wordle
* Needs internet for word validation (though it has offline backup)
* Only English words
##Why I made this
I wanted to see if I could recreate Wordle from scratch and figured it'd be a fun weekend project. Turns out getting the letter validation logic right (especially with duplicate letters) was more involved than I initially thought, but it was a good learning experience.
The trickiest part was making sure the color feedback works exactly like the original - you can't just check if a letter exists in the target word, you have to account for how many times it appears and in what positions.

This was a fun project to build. The original Wordle is brilliant in its simplicity, and trying to recreate that experience taught me a lot about game design and user interface details I'd never really thought about before.
