# ENGLISH 

# 📝 React Todo App

A simple and elegant **Todo List Application** built with React.  
This project is part of a learning exercise to practice **component-based structure**, **state management**, and **props usage** in React.

---

## 🚀 Features

- ➕ Add new todo tasks  
- ✅ Mark tasks as completed  
- ❌ Delete tasks  
- 🔍 Filter tasks by: **All**, **Active**, or **Completed**  
- 💾 Data persistence (optional — can be added using `localStorage`)  
- 🎨 Clean, minimal, dark-themed UI with responsive layout  

---

## 🧠 Tech Stack

- **Frontend:** React + Vite  
- **Language:** JavaScript (ES6+)  
- **Styling:** CSS (custom + responsive)

---

## 🧩 Component Structure

The app is divided into reusable and modular components:

src/
├── App.jsx → Main component, holds state and logic
├── components/
│ ├── TodoForm.jsx → Input form for adding new todos
│ ├── TodoList.jsx → Renders list of todos
│ ├── TodoItem.jsx → Single todo item (checkbox + delete)
│ └── TodoFilter.jsx → Filter buttons (All, Active, Completed)
└── App.css / index.css → Styling


---

## ⚙️ State Management

All main states are stored in the `App` component:

```jsx
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState("all");
```
Then they are passed down via props to child components for better separation of concerns.
For example:
```jsx
<TodoForm addTodo={addTodo} />
<TodoFilter currentFilter={filter} setFilter={setFilter} />
<TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
```
Props Usage

Each child component uses props effectively:

TodoForm receives addTodo to add new items.

TodoList receives the filtered todo list and control functions.

TodoItem receives a single todo object and functions for toggling or deleting.

TodoFilter receives current filter state and an updater function.

This design keeps the app modular, maintainable, and scalable.

🎨 Styling Overview

The app uses a dark minimalist theme inspired by developer dashboards.

The main container is styled as a card using shadows and rounded corners.

Buttons have hover animations and active states.

Checkbox and text are aligned in one row for a clean look.

Media queries ensure layout responsiveness.

🛠️ How to Run the Project
# 1. Clone the repository
git clone https://github.com/Loetphij/evaluasi-pekan1-bulan3

# 2. Navigate into the folder
cd react-todo-app

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev


Then open your browser at http://localhost:5173
 🎉


Author:

Muhammad Luthfi Aziz
📚 Student Developer 

# BAHASA INDONESIA

# 📝 Aplikasi Todo React

Aplikasi **Todo List sederhana** yang dibuat menggunakan **React**.  
Proyek ini dibuat sebagai latihan untuk memahami **struktur komponen**, **pengelolaan state**, dan **penggunaan props** dalam React.

---

## 🚀 Fitur Utama

- ➕ Menambahkan tugas baru  
- ✅ Menandai tugas sebagai selesai  
- ❌ Menghapus tugas  
- 🔍 Menyaring tugas berdasarkan: **Semua**, **Aktif**, atau **Selesai**  
- 🎨 Tampilan gelap yang minimalis dan responsif  

---

## 🧠 Teknologi yang Digunakan

- **Frontend:** React + Vite  
- **Bahasa:** JavaScript (ES6+)  
- **Tampilan:** CSS (kustom dan responsif)

---

## 🧩 Struktur Komponen

Aplikasi ini dibangun menggunakan beberapa komponen yang terpisah dan dapat digunakan kembali:



src/
├── App.jsx → Komponen utama yang menyimpan state dan logika
├── components/
│ ├── TodoForm.jsx → Form untuk menambah tugas baru
│ ├── TodoList.jsx → Menampilkan daftar tugas
│ ├── TodoItem.jsx → Menampilkan satu tugas (checkbox + tombol hapus)
│ └── TodoFilter.jsx → Tombol filter (All, Active, Completed)
└── App.css / index.css → File gaya (CSS)


---

## ⚙️ Pengelolaan State

State utama disimpan di dalam komponen `App`:

```jsx
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState("all");
```

State ini kemudian dikirim ke komponen anak melalui props, agar logika dan tampilan tetap terpisah dengan rapi.

Contohnya:
```jsx
<TodoForm addTodo={addTodo} />
<TodoFilter currentFilter={filter} setFilter={setFilter} />
<TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
```
💡 Penggunaan Props

Setiap komponen anak menggunakan props sesuai fungsinya:

TodoForm menerima fungsi addTodo untuk menambah data baru.

TodoList menerima daftar tugas yang sudah difilter dan fungsi untuk menghapus/menandai selesai.

TodoItem menerima satu objek tugas (todo) serta fungsi aksi.

TodoFilter menerima state filter saat ini dan fungsi untuk mengubahnya.

Dengan cara ini, aplikasi menjadi modular, mudah dirawat, dan mudah dikembangkan.

🎨 Tampilan

Tampilan menggunakan tema gelap minimalis, dengan elemen utama berupa kartu yang memiliki bayangan lembut dan sudut membulat.

Tombol memiliki efek hover dan status aktif.

Checkbox dan teks sejajar agar tampilan bersih.

Desain sudah responsif untuk berbagai ukuran layar.

🛠️ Cara Menjalankan Proyek
# 1. Clone repositori
git clone https://github.com/Loetphij/evaluasi-pekan1-bulan3

# 2. Masuk ke folder proyek
cd react-todo-app

# 3. Instal dependensi
npm install

# 4. Jalankan aplikasi
npm run dev


Lalu buka di browser: http://localhost:5173
 🎉

👤 Pembuat

Muhammad Luthfi Aziz
📚 Santri Programmer
