 const WORDS = [
            'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
            'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
            'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
            'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWAKE', 'AWARD',
            'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING', 'BELOW',
            'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST',
            'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BRASS', 'BRAVE', 'BREAD', 'BREAK', 'BREED', 'BRIEF',
            'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUNCH', 'BURNS', 'BUYER', 'CABLE', 'CALIF',
            'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHEAP',
            'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIC', 'CIVIL', 'CLAIM', 'CLASS',
            'CLEAN', 'CLEAR', 'CLICK', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD', 'COACH', 'COAST', 'COULD',
            'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD',
            'CROWN', 'CRUDE', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUG',
            'DELAY', 'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM',
            'DRESS', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT',
            'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY',
            'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY',
            'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE',
            'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT',
            'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND',
            'GRANT', 'GRASS', 'GRAVE', 'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS',
            'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE',
            'HUMAN', 'IDEAL', 'IMAGE', 'INDEX', 'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT',
            'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN',
            'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES',
            'LOCAL', 'LOOSE', 'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH',
            'MARIA', 'MATCH', 'MAYBE', 'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS',
            'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED',
            'MOVIE', 'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL',
            'NURSE', 'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL',
            'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PICKED', 'PIECE',
            'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER',
            'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE',
            'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH',
            'READY', 'REALM', 'REBEL', 'REFER', 'RELAX', 'RIDER', 'RIDGE', 'RIGHT', 'RIVAL', 'RIVER',
            'ROBIN', 'ROGER', 'ROMAN', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE',
            'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET',
            'SHELF', 'SHELL', 'SHINE', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIDES', 'SIGHT',
            'SILLY', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED', 'SKILL', 'SKIN', 'SLEEP', 'SLIDE', 'SMALL',
            'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SNAKE', 'SNOW', 'SOBER', 'SOLID', 'SOLVE', 'SORRY',
            'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT', 'SPOKE',
            'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM', 'STEEL', 'STEEP',
            'STEER', 'STERN', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY',
            'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'TABLE',
            'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEAMS', 'TEETH', 'TERRY', 'TEXAS', 'THANK', 'THEFT',
            'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE',
            'THREW', 'THROW', 'THUMB', 'TIGER', 'TIGHT', 'TIMER', 'TIMES', 'TIRED', 'TITLE', 'TODAY',
            'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIL', 'TRAIN', 'TREAT',
            'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRUCK', 'TRULY', 'TRUNK', 'TRUST',
            'TRUTH', 'TWICE', 'TWIST', 'UNCLE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER',
            'URBAN', 'USAGE', 'USUAL', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE',
            'WASTE', 'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE',
            'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WRITE', 'WRONG',
            'WROTE', 'YOUNG', 'YOUTH'
        ];

        let targetWord = '';
        let currentGuess = '';
        let currentRow = 0;
        let gameOver = false;

        // Game state
        const gameState = {
            guesses: [],
            keyboardState: {}
        };

        // Initialize the game
        function initGame() {
            createGameBoard();
            setupEventListeners();
            startNewGame();
        }

        // Create the game board
        function createGameBoard() {
            const gameBoard = document.getElementById('gameBoard');
            gameBoard.innerHTML = '';

            for (let row = 0; row < 6; row++) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'row';
                rowDiv.setAttribute('data-row', row);

                for (let col = 0; col < 5; col++) {
                    const tile = document.createElement('div');
                    tile.className = 'tile';
                    tile.setAttribute('data-row', row);
                    tile.setAttribute('data-col', col);
                    rowDiv.appendChild(tile);
                }

                gameBoard.appendChild(rowDiv);
            }
        }

        // Setup event listeners
        function setupEventListeners() {
            // Keyboard event listeners
            document.addEventListener('keydown', handleKeyPress);
            
            // Virtual keyboard listeners
            document.querySelectorAll('.key').forEach(key => {
                key.addEventListener('click', async () => {
                    const keyValue = key.getAttribute('data-key');
                    await handleInput(keyValue);
                });
            });
        }

        // Handle keyboard input
        async function handleKeyPress(e) {
            if (gameOver) return;

            const key = e.key.toLowerCase();
            
            if (key === 'enter') {
                await handleInput('Enter');
            } else if (key === 'backspace') {
                handleInput('Backspace');
            } else if (key.match(/^[a-z]$/)) {
                handleInput(key);
            }
        }

        // Handle input from keyboard or virtual keyboard
        async function handleInput(key) {
            if (gameOver) return;

            if (key === 'Enter') {
                await submitGuess();
            } else if (key === 'Backspace') {
                removeLetter();
            } else if (key.match(/^[a-z]$/i) && currentGuess.length < 5) {
                addLetter(key.toLowerCase());
            }
        }

        // Add a letter to the current guess
        function addLetter(letter) {
            if (currentGuess.length < 5) {
                currentGuess += letter;
                updateDisplay();
            }
        }

        // Remove a letter from the current guess
        function removeLetter() {
            if (currentGuess.length > 0) {
                currentGuess = currentGuess.slice(0, -1);
                updateDisplay();
            }
        }

        // Update the display
        function updateDisplay() {
            const row = document.querySelector(`[data-row="${currentRow}"]`);
            const tiles = row.querySelectorAll('.tile');

            tiles.forEach((tile, index) => {
                if (index < currentGuess.length) {
                    tile.textContent = currentGuess[index].toUpperCase();
                    tile.classList.add('filled');
                } else {
                    tile.textContent = '';
                    tile.classList.remove('filled');
                }
            });
        }

        // Submit the current guess
        async function submitGuess() {
            if (currentGuess.length !== 5) {
                showMessage('Word must be 5 letters');
                return;
            }

            // Show loading state
           // showMessage('Checking word...');
            
            const isValid = await isValidWord(currentGuess);
            if (!isValid) {
                showMessage('Not a valid word');
                return;
            }

            // Evaluate the guess
            const result = evaluateGuess(currentGuess, targetWord);
            gameState.guesses.push({ word: currentGuess, result: result });

            // Animate the reveal
            animateReveal(currentRow, result);

            // Update keyboard colors
            updateKeyboardColors(currentGuess, result);

            // Check win condition
            if (currentGuess.toLowerCase() === targetWord.toLowerCase()) {
                gameOver = true;
                setTimeout(() => {
                    showMessage('Congratulations! You won!');
                }, 1500);
                return;
            }

            // Move to next row
            currentRow++;
            currentGuess = '';

            // Check lose condition
            if (currentRow >= 6) {
                gameOver = true;
                setTimeout(() => {
                    showMessage(`Game over! The word was: ${targetWord}`);
                }, 1500);
            }
        }

        // Check if word is valid using Free Dictionary API
        async function isValidWord(word) {
            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
                return response.ok; // Returns true if word exists, false if 404 (word not found)
            } catch (error) {
                console.warn('Dictionary API error, falling back to word list:', error);
                // Fallback to local word list if API fails
                return WORDS.includes(word.toUpperCase());
            }
        }

        // Evaluate the guess against the target word
        function evaluateGuess(guess, target) {
            const result = [];
            const targetArray = target.toLowerCase().split('');
            const guessArray = guess.toLowerCase().split('');

            // First pass: mark correct letters
            for (let i = 0; i < 5; i++) {
                if (guessArray[i] === targetArray[i]) {
                    result[i] = 'correct';
                    targetArray[i] = null; // Mark as used
                }
            }

            // Second pass: mark present letters
            for (let i = 0; i < 5; i++) {
                if (result[i] === undefined) {
                    const index = targetArray.indexOf(guessArray[i]);
                    if (index !== -1) {
                        result[i] = 'present';
                        targetArray[index] = null; // Mark as used
                    } else {
                        result[i] = 'absent';
                    }
                }
            }

            return result;
        }

        // Animate the reveal of letters
        function animateReveal(rowIndex, result) {
            const row = document.querySelector(`[data-row="${rowIndex}"]`);
            const tiles = row.querySelectorAll('.tile');

            tiles.forEach((tile, index) => {
                setTimeout(() => {
                    tile.classList.add('reveal');
                    tile.classList.add(result[index]);
                }, index * 100);
            });
        }

        // Update keyboard colors based on guesses
        function updateKeyboardColors(guess, result) {
            for (let i = 0; i < guess.length; i++) {
                const letter = guess[i];
                const status = result[i];
                const key = document.querySelector(`[data-key="${letter}"]`);

                if (key) {
                    // Only update if the new status is better than current
                    if (status === 'correct' || 
                        (status === 'present' && !key.classList.contains('correct')) ||
                        (status === 'absent' && !key.classList.contains('correct') && !key.classList.contains('present'))) {
                        key.classList.remove('correct', 'present', 'absent');
                        key.classList.add(status);
                        gameState.keyboardState[letter] = status;
                    }
                }
            }
        }

        // Show a message to the user
        function showMessage(text) {
            const messageEl = document.getElementById('message');
            messageEl.textContent = text;
            messageEl.classList.add('show');

            setTimeout(() => {
                messageEl.classList.remove('show');
            }, 2000);
        }

        // Start a new game
        function startNewGame() {
            // Reset game state
            targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
            currentGuess = '';
            currentRow = 0;
            gameOver = false;
            gameState.guesses = [];
            gameState.keyboardState = {};

            // Clear the board
            document.querySelectorAll('.tile').forEach(tile => {
                tile.textContent = '';
                tile.classList.remove('filled', 'correct', 'present', 'absent', 'reveal');
            });

            // Clear keyboard colors
            document.querySelectorAll('.key').forEach(key => {
                key.classList.remove('correct', 'present', 'absent');
            });

            console.log('New game started. Target word:', targetWord); // For testing
        }

        // Initialize the game when the page loads
        document.addEventListener('DOMContentLoaded', initGame);