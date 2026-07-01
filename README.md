# 🎮 Hangman Game

A modern, browser-based implementation of the classic **Hangman** game built using **HTML, CSS, and JavaScript**. Test your knowledge by guessing randomly selected **One Piece** character names before the hangman is fully drawn.

---

## ✨ Features

* 🎲 Randomly selected word from a predefined dataset
* ✍️ Letter and word guessing support
* ❤️ Six chances before game over
* 🎨 Animated hangman body parts
* 🔄 Play Again functionality
* 📱 Responsive and clean user interface
* ⚡ Built with pure JavaScript (no external libraries)

---

## 📸 Preview

<img width="1887" height="898" alt="Screenshot 2026-07-01 225613" src="https://github.com/user-attachments/assets/7f91b68d-6c21-4640-9573-07a2172907e5" />

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Docker
* Nginx

---

## 📁 Project Structure

```text
Hangman/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
└── README.md
 
```

---

## 🚀 Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/<your-username>/Hangman.git
```

Navigate to the project folder:

```bash
cd Hangman
```

Open `index.html` in your preferred web browser.

---

# 🐳 Running with Docker

## Build the Docker image

```bash
docker build -t hangman-game .
```

## Run the container

```bash
docker run -d -p 8080:80 --name hangman hangman-game
```

Open your browser and visit:

```text
http://localhost:8080
```

---

## 🎮 How to Play

1. A random One Piece character name is selected.
2. Guess a single letter or the complete word.
3. Correct guesses reveal matching letters.
4. Incorrect guesses animate one part of the hangman.
5. The game ends when:

   * You correctly guess the entire word, or
   * All six chances are exhausted.

---

## 🌟 Future Improvements

* Difficulty levels
* Hint system
* Score tracking
* Timer mode
* Sound effects
* Keyboard input support
* Mobile optimization
* Online leaderboard
* Category selection (Anime, Movies, Countries, etc.)

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it for educational and personal purposes.

---

## 👨‍💻 Author

**Bharath kumar Thirandas**

If you found this project useful, consider giving the repository a ⭐ to support future development.
