<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/Personal-Taskmanager-App/blob/main/task%20manger%20app.jpg" alt="Project Banner">

# 📋 Personal Task Manager App

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Web_Vitals-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Web Vitals" />
</div>

  <h3 align="center">📋 Personal Task Manager App </h3>
</div>

A sleek, futuristic-themed task management application built with **React**, **TypeScript**, and **Tailwind CSS**. The app allows users to add, view, and delete personal tasks, helping them stay organized and productive. This project was built as a practical TypeScript and React learning experience.

---

## 🚀 Features

✅ Add new tasks with a description  
✅ View a list of active tasks  
✅ Delete tasks when completed  
✅ Futuristic UI theme using **Tailwind CSS**  
✅ Responsive design for mobile and desktop  
✅ Type-safe components with **TypeScript**

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) (for fast development builds)
- [web-vitals](https://github.com/GoogleChrome/web-vitals) (optional performance monitoring)

---

## 📂 Project Structure

```
src/
├── assets/                # Image and static asset files
├── components/            # Reusable React components (TaskCard, TaskList, etc.)
├── styles/                # Tailwind CSS configurations and custom styles
├── App.tsx                # Main application component
├── main.tsx               # App entry point
├── reportWebVitals.ts     # Web performance measuring tool (optional)
├── vite-env.d.ts          # TypeScript vite environment declarations
├── index.css              # Global stylesheet
└── tsconfig.json          # TypeScript configuration
```

---

## 📦 Installation

To get a local copy up and running follow these simple steps:

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/iamjohncaleb/Personal-Taskmanager-App.git

# Navigate into the project directory
cd task-manager-project

# Install project dependencies
npm install
```

---

## 💻 Running the Application

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` by default.

---

## 🧱 Building for Production

To build the application for production:

```bash
npm run build
```

This will generate a `dist/` directory with optimized production-ready files.

---

## 📝 Usage Guide

1. Launch the app using `npm run dev`.
2. Use the **Add Task** button to input a new task description.
3. View active tasks in the task list.
4. Click the **Delete** button on a task card to remove it when complete.

---

## 🎨 Customization

**To update the theme:**
- Edit colors, spacing, or animations in `tailwind.config.ts`
- Update global styles in `src/index.css`

**To add new features:**
- Create new components in the `components/` directory.
- Manage task state using React `useState` or an external state manager if scaling up.

---

## 🐞 Troubleshooting

**Common Issues:**

| Issue                                    | Solution                                              |
|:-----------------------------------------|:------------------------------------------------------|
| `web-vitals` import errors               | Ensure you’re using `onCLS`, `onFID`, etc. in `reportWebVitals.ts` |
| TypeScript errors on new components      | Make sure to define proper types and interfaces       |
| Tailwind classes not applying            | Check that `src/index.css` includes `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` |

---

## 📊 Web Vitals (Optional)

This project optionally uses `web-vitals` to measure performance metrics like CLS, FID, FCP, etc.  
**To remove:**
- Delete `src/reportWebVitals.ts`
- Remove any imports or calls to `reportWebVitals()` in `main.tsx`

---

## 🙌 Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Developer:** Caleb John
**Twitter:** [@iamjohncalebb](https://x.com/iamjohncalebb)  
**Portfolio:** [@myportfolio](https://recent-resume.vercel.app/) 

---

<!-- ## 📌 Future Improvements

- Task edit functionality  
- Task categories and filters  
- User authentication  
- Deploy to Vercel or Netlify  
- Persistent storage with localStorage or a backend API  
 -->
