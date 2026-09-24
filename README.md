# MERN Image Upload with Multer and MongoDB

A full-stack MERN (MongoDB, Express, React, Node.js) application that enables users to upload images using **Multer** disk storage, store metadata in **MongoDB**, and render an interactive frontend built with **React**, **Axios**, and **CSS Modules**.

---

## 🌟 Key Features

- **Disk Storage with Multer**: Uploaded files are safely stored in the backend `uploads/` directory with unique timestamped filenames.
- **MongoDB Metadata Tracking**: Image references (`name`, `path`) are saved in the `images_data` collection inside the `mern_multer_db` database.
- **Instant Client-Side Preview**: Renders a live image preview in React using `URL.createObjectURL()` before submitting.
- **Axios API Integration**: Uses `FormData` for clean `multipart/form-data` uploads and `GET` requests.
- **CSS Modules**: Modular, scoped component styling (`*.module.css`).
- **ES Modules**: Modern `import`/`export` syntax enabled across backend (`"type": "module"`) and frontend (Vite).

---

## 📂 Project Directory Structure

```text
multer-image-upload/
├── backend/
│   ├── package.json               # Backend config ("type": "module")
│   ├── server.js                  # Main Express server entry point
│   ├── .env                       # Environment variables
│   ├── config/
│   │   └── db.js                  # MongoDB Mongoose connection
│   ├── models/
│   │   └── Image.js               # Mongoose schema (collection: 'images_data')
│   ├── middleware/
│   │   └── uploadMiddleware.js    # Multer diskStorage configuration
│   ├── controllers/
│   │   └── imageController.js     # Logic for uploadImage and getImages
│   ├── routes/
│   │   └── imageRoutes.js         # API endpoints (/api/images)
│   └── uploads/                   # Local folder for physical images
│
└── frontend/
    ├── package.json               # Frontend dependencies (React, Axios, Vite)
    ├── index.html                 # Main HTML template
    └── src/
        ├── App.jsx                # Single-page application coordinator
        ├── App.module.css         # Main application container styles
        └── components/
            ├── ImageForm.jsx      # File upload form input component
            ├── ImageForm.module.css
            ├── ImagePreview.jsx   # Instant browser preview component
            ├── ImagePreview.module.css
            ├── ImageGallery.jsx   # Uploaded images grid gallery
            └── ImageGallery.module.css
```

---

## ⚙️ Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **MongoDB** running locally on `mongodb://127.0.0.1:27017`

---

## 🔑 Environment Variables

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/mern_multer_db
PORT=5000
```

---

## 🚀 Installation & Setup

### 1. Backend Setup
Navigate to the `backend/` directory, install dependencies, and start the development server:
```bash
cd backend
npm install
npm run dev
```
The server will run on `http://localhost:5000` and connect to MongoDB.

### 2. Frontend Setup
In a separate terminal window, navigate to the `frontend/` directory, install dependencies, and start the Vite development server:
```bash
cd frontend
npm install
npm run dev
```
The React frontend will launch on `http://localhost:5173`.

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description | Payload / Query |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/images/upload` | Upload single image & save metadata | `multipart/form-data` with field key `image` |
| `GET` | `/api/images` | Fetch metadata for all uploaded images | None |
| `GET` | `/uploads/:filename` | Serve static physical image file | URL path parameter `:filename` |

---

## 🧪 Tech Stack Summary

- **Frontend**: React 18, Vite, Axios, CSS Modules
- **Backend**: Node.js, Express.js, Multer
- **Database**: MongoDB, Mongoose ORM
