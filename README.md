# 🎬 IMDB Sentiment Analysis

An AI-powered web application that performs sentiment analysis on IMDB movie reviews. This project utilizes **LSTM (Long Short-Term Memory) models** for text classification, with a **FastAPI backend** for predictions and a **Next.js frontend** for an interactive user interface.

---

## 🚀 Live Demo

Frontend: **[IMDB Sentiment Analysis](https://imdb-reviews-sentiment-analysis-nine.vercel.app/)**  
Backend API: **[FastAPI Server](https://imdb-reviews-sentiment-analysis.onrender.com)**

---

## 📌 Features
✅ Sentiment analysis of IMDB reviews (Positive/Negative)  
✅ Uses LSTM-based deep learning model for classification  
✅ FastAPI backend for real-time inference  
✅ Next.js frontend with TailwindCSS for a clean UI  
✅ Deployed on **Render (backend)** and **Vercel (frontend)**  

---

## 🏗️ Tech Stack

### **Backend (FastAPI - `server/` folder)**
- **FastAPI** - Lightweight Python web framework
- **TensorFlow/Keras** - LSTM model for text classification
- **Pickle** - Tokenizer serialization
- **Uvicorn** - ASGI server for FastAPI
- **CORS Middleware** - Allow cross-origin requests

### **Frontend (Next.js - `client/` folder)**
- **Next.js** - React framework for SSR/SSG
- **TailwindCSS** - Modern UI styling
- **Axios** - API communication with FastAPI backend
- **TypeScript** - Ensures type safety

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Kaarti22/IMDB-Reviews-Sentiment-Analysis.git
cd IMDB-Reviews-Sentiment-Analysis
```

### 2️⃣ Setup Backend (FastAPI)
```bash
cd server
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3️⃣ Setup Frontend (Next.js)
```bash
cd client
npm install  # or yarn install
```

Create a `.env.local` file inside `client/` and add:
```env
NEXT_PUBLIC_FLASK_API_URL=http://127.0.0.1:8000
```

Then, start the frontend:
```bash
npm run dev  # or yarn dev
```

Now, visit `http://localhost:3000` to access the web app! 🎉

---

## 📡 Deployment

### **Backend (FastAPI) - Deployed on Render**
1. Push your project to GitHub
2. Go to **[Render](https://render.com/)** and create a new Web Service
3. Select the `server/` directory as the root
4. Use the following **Start Command**:
   ```bash
   cd server && uvicorn main:app --host=0.0.0.0 --port=8000
   ```
5. Deploy & get your **API URL** (e.g., `https://your-api.onrender.com`)

### **Frontend (Next.js) - Deployed on Vercel**
1. Go to **[Vercel](https://vercel.com/)** and create a new project
2. Set the root directory to `client/`
3. Add environment variables:
   ```env
   NEXT_PUBLIC_FLASK_API_URL=https://your-api.onrender.com
   ```
4. Deploy & get your **frontend URL** (e.g., `https://your-app.vercel.app`)

---

## 🔥 API Endpoints

### **1️⃣ Predict Sentiment**
- **URL:** `POST /predict`
- **Request Body:**
  ```json
  { "review": "This movie was amazing!" }
  ```
- **Response:**
  ```json
  { "sentiment": "positive", "confidence": 0.92 }
  ```

---

## 🎯 Future Improvements
- Add **model fine-tuning** for better accuracy
- Implement **batch predictions** for faster inference
- Improve UI/UX with more visual feedback
- Deploy the backend on a **GPU-powered service** for faster processing

---

## 👨‍💻 Author
- **Mondi Venkata Kartikeya**  
- GitHub: [@Kaarti22](https://github.com/Kaarti22)
- LinkedIn: [Kartikeya Mondi](https://www.linkedin.com/in/kartikeya-mondi-1b429325a/)

---

## 📜 License
This project is **MIT Licensed**. Feel free to use and improve it!

---

### ⭐ If you like this project, don't forget to **star** it on GitHub!

