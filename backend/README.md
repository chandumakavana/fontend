# Portfolio Backend API

A robust Node.js backend API for the portfolio website with contact form handling and project management.

## Features

- 📧 Contact form submission with email notifications
- 🚀 Project management (CRUD operations)
- 🔒 Input validation and sanitization
- 🛡️ Security middleware (Helmet, CORS, Rate limiting)
- 📊 MongoDB integration with Mongoose
- 📱 RESTful API design
- 🔄 Error handling and logging

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Validation**: Joi
- **Email**: Nodemailer
- **Security**: Helmet, CORS, Rate limiting

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your system

4. **Run the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## API Endpoints

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

## Environment Variables

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# JWT (for future auth)
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com

# CORS
FRONTEND_URL=http://localhost:5173
```

## Security Features

- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Joi schema validation
- **CORS**: Configured for frontend domain
- **Helmet**: Security headers
- **Error Handling**: Comprehensive error responses

## Database Models

### Contact Model
- Name, email, subject, message
- Read status tracking
- IP address and user agent logging
- Timestamps

### Project Model
- Title, description, technologies
- Images, live URL, GitHub URL
- Category, status, featured flag
- Order for sorting

## Email Configuration

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in EMAIL_PASS

## Development

```bash
# Install nodemon for development
npm install -g nodemon

# Run in development mode
npm run dev
```

## Production Deployment

1. Set NODE_ENV=production
2. Use a production MongoDB instance
3. Configure proper email credentials
4. Set up reverse proxy (nginx)
5. Use PM2 for process management

## API Usage Examples

### Submit Contact Form
```javascript
const response = await fetch('/api/contact/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Project Inquiry',
    message: 'I would like to discuss a project...'
  })
});
```

### Get Projects
```javascript
const response = await fetch('/api/projects?featured=true&limit=6');
const data = await response.json();
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details