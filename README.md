# 🏋️‍♂️ Fitverse - A MERN based Gym Website

![Fitness Tracker Banner](https://i.ibb.co/21MQmTq8/Screenshot-216.png)

🚀 **Fitverse** is a full-stack MERN application designed to help users track their fitness activities, book trainers, and engage with a fitness community. Built with modern web technologies, this project includes role-based functionalities for admins, trainers, and members.

---

## 🔗 Live Demo
[🌐 View Live Project](#) *(https://fitness-tracker-project-96f15.web.app/)*

---

## 📌 Key Features
✅ **User Authentication** (JWT & Firebase Login)  
✅ **Role-Based Access Control** (Admin, Trainer, Member)  
✅ **Trainer Booking System** (Schedule & Payments via Stripe)  
✅ **Activity Tracking** (Monitor workouts, progress, and reports)  
✅ **Community Forum** (Post fitness discussions, upvote/downvote system)  
✅ **Responsive & Accessible UI** (Built with Tailwind & DaisyUI)  
✅ **SEO Optimized** (React Helmet for better visibility)  
✅ **Secure & Scalable** (MongoDB Atlas, JWT Auth, Environment Variables)  

---

## 👥 User Roles & Permissions
| Role      | Permissions |
|-----------|------------|
| **Admin** | Manage users, approve trainers, oversee payments & bookings |
| **Trainer** | Create classes, manage bookings, interact with members |
| **Member** | Book trainers, track workouts, engage in the forum |

---

## 🛠️ Technologies Used
- **Frontend:** React, Tailwind CSS, DaisyUI, React Router, React Helmet
- **Backend:** Node.js, Express.js, MongoDB, JWT Authentication
- **Database:** MongoDB Atlas
- **State Management:** TanStack Query
- **Payment Gateway:** Stripe
- **Authentication:** Firebase, JWT
- **Hosting & Deployment:** Firebase (Frontend), Vercel (Backend)

---

## 🚀 Getting Started
To run the project locally, follow these steps:
1. **Clone the repository:**
   ```sh
   git clone https://github.com/SumiyaRahman/fitness-tracker.git
   cd fitness-tracker
2. **Set up environment variables**
   ```sh
   # For Backend:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   # For Frontend:
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
3. **Install dependencies:**
   ```sh
   # For backend
    cd server
    npm install
   # For frontend
    cd client
    npm install
1. **Run the project:**
   ```sh
   # For backend
    cd server
    npm start
   # For frontend
    cd client
    npm start

---

## 📩 Feedback & Support
💬 Found a bug or have a suggestion? Feel free to create an issue or contribute to the project.  
📧 Contact: [sumiyabintearahman24@gmail.com](sumiyabintearahman24@gmail.com)

---

## 📜 License
This project is licensed under the **MIT License** - feel free to modify and use it as needed.
