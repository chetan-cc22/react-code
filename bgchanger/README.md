 🎨 React Color Switcher App

This is a simple **React + Tailwind CSS** application that allows users to switch the background color of the page by clicking buttons. It's a beginner-friendly project to understand **React state**, **event handling**, and **Tailwind CSS styling**.

---

## 🚀 Features

- Built with **React (Vite)** and **Tailwind CSS**
- Dynamically updates background color using `useState`
- Responsive layout with a fixed button bar
- Clean and smooth transition between color changes

---

## 📸 Demo

![Demo Screenshot](./screenshot.png)

---

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JSX, CSS

---

## 📁 Project Structure

tailwindprops/
├── public/
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── App.css
│ └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json

yaml
Copy
Edit

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-color-switcher.git
cd react-color-switcher
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the app
bash
Copy
Edit
npm run dev
Open your browser and go to http://localhost:5173

🧠 Learning Goals
Understand how useState works in React

Pass and use dynamic data in JSX

Use Tailwind for layout and styling

Build responsive and interactive UIs

📌 Example Code
jsx
Copy
Edit
const [color, setcolor] = useState("black");

<div style={{ backgroundColor: color }} className="h-screen">
  <button onClick={() => setcolor("red")}>Red</button>
</div>
📄 License
This project is open source and available under the MIT License.

🙋‍♂️ Author
Chetan Chaudhari
Made with ❤️ while learning React and Tailwind CSS.

yaml
Copy
Edit

---

Let me know if you'd like me to include a **screenshot**, GitHub repo link, or add this to your actual project folder!








Ask ChatGPT

