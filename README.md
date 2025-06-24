# Portfolio Website

A modern, responsive portfolio website built with React and Node.js, featuring a complete backend API for project management and contact form handling.

## 🚀 Features

### Frontend
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Type Animation**: Dynamic typing animation for role descriptions
- **Contact Form**: Functional contact form with validation
- **Projects Showcase**: Dynamic project display with filtering
- **Skills Display**: Animated skill bars and technology icons

### Backend
- **RESTful API**: Complete REST API for projects and contact management
- **Contact Form**: Email notifications and form submission handling
- **Project Management**: CRUD operations for portfolio projects
- **Validation**: Input validation and sanitization
- **Security**: Rate limiting, CORS, and security headers
- **Database**: MongoDB integration with Mongoose

## 🛠️ Tech Stack

### Frontend
- React 19
- Tailwind CSS 4
- React Router DOM
- React Hook Form
- React Icons
- React Scroll
- React Type Animation
- Axios
- DaisyUI

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer
- Joi (validation)
- Helmet (security)
- CORS
- Rate limiting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Clone Repository
```bash
git clone https://github.com/chandumakavana/portfolio.git
cd portfolio
```

### Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Environment Setup
1. Copy the backend environment file:
```bash
cp backend/.env.example backend/.env
```

2. Update `backend/.env` with your configuration:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email (for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com

# Other settings
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Database Setup
1. **Local MongoDB**: Make sure MongoDB is running on your system
2. **MongoDB Atlas**: Use your Atlas connection string in `MONGODB_URI`

### Seed Sample Data (Optional)
```bash
cd backend
node seed.js
```

## 🚀 Running the Application

### Development Mode
```bash
# Terminal 1 - Start Backend
cd backend
npm run dev

# Terminal 2 - Start Frontend
npm run dev
```

### Production Build
```bash
# Build frontend
npm run build

# Start backend in production
cd backend
NODE_ENV=production npm start
```

## 📁 Project Structure

```
portfolio/
├── src/                    # Frontend source
│   ├── components/         # React components
│   ├── services/          # API services
│   ├── Home/              # Home page
│   └── ...
├── backend/               # Backend source
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── config/           # Configuration files
│   └── utils/            # Utility functions
├── public/               # Static assets
└── ...
```

## 🔧 API Endpoints

### Contact Routes
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact` - Get all contacts (Admin)
- `PATCH /api/contact/:id/read` - Mark as read (Admin)
- `DELETE /api/contact/:id` - Delete contact (Admin)

### Project Routes
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (Admin)
- `PUT /api/projects/:id` - Update project (Admin)
- `DELETE /api/projects/:id` - Delete project (Admin)

### Health Check
- `GET /api/health` - Server health status

## 📧 Email Configuration

For Gmail setup:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `EMAIL_PASS`

## 🔒 Security Features

- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Security headers with Helmet
- Environment variable protection

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The website uses a yellow accent color scheme. To change:
1. Update Tailwind classes in components
2. Modify CSS custom properties if needed

### Content
1. Update personal information in components
2. Replace profile image in `public/images/`
3. Update resume file in `public/`
4. Modify skills and technologies in `Aboutme.jsx`

### Projects
1. Use the backend API to add/edit projects
2. Or modify the seed file and re-run seeding

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Update API base URL in production

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables
2. Use production MongoDB instance
3. Update CORS settings for production domain

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chandu Makavana**
- Portfolio: [chandumakavana.com](https://chandumakavana.com)
- GitHub: [@chandumakavana](https://github.com/chandumakavana)
- Email: chandu@example.com

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me directly.

---

⭐ If you found this project helpful, please give it a star!