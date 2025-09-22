# AI SaaS Platform - Full Stack Application

A comprehensive AI SaaS platform with a modern Next.js frontend and a robust Node.js backend with microservices architecture.

## 🏗️ Project Structure

```
frontend_task/
├── frontend/           # Next.js Frontend Application
│   ├── src/
│   │   ├── app/       # Next.js App Router
│   │   ├── components/ # React Components
│   │   ├── lib/       # Utility Functions
│   │   └── styles/    # Global Styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── vercel.json    # Vercel Deployment Config
│
└── backend/           # Node.js Backend with Microservices
    ├── middleware/    # JWT Auth & Rate Limiting
    ├── routes/        # API Routes
    ├── services/      # Microservices
    ├── index.js       # API Gateway
    ├── package.json
    └── Procfile       # Deployment Config
```

## 🚀 Frontend Features

- **Modern Design** - Clean, professional UI with gradient backgrounds
- **Responsive** - Mobile-first design that works on all devices
- **Animations** - Smooth animations powered by Framer Motion
- **Performance** - Optimized for speed and SEO
- **Sections** - Navbar, Hero, Features, Testimonials, Pricing, Footer

## 🔧 Backend Features

- **JWT Authentication** - Secure token-based authentication
- **Rate Limiting** - Per-user rate limiting (100 requests per 15 minutes)
- **Microservices Architecture** - User, Product, and Analytics services
- **API Gateway** - Centralized routing and service forwarding
- **Health Checks** - Service health monitoring with fallback responses
- **Security** - Helmet.js, CORS, input validation

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TypeScript** - Type safety
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **Axios** - HTTP client for service communication
- **Express Rate Limit** - Rate limiting middleware

## 🚀 Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Backend Setup
```bash
cd backend
npm install
npm run dev:all  # Starts all microservices + API Gateway
```

### Individual Services
```bash
# API Gateway only
npm start

# All microservices
npm run services
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - Login with username/password
- `POST /api/auth/register` - Register new user

### Protected Routes (Require JWT Token)
- `GET /api/user/*` - User service endpoints
- `GET /api/product/*` - Product service endpoints
- `GET /api/analytics/*` - Analytics service endpoints

### Health Checks
- `GET /health` - API Gateway health check
- `GET /api/health` - Microservices health check

## 🔐 Authentication Example

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# Use token for protected routes
curl -X GET http://localhost:5000/api/user/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🏗️ Microservices

### User Service (Port 3001)
- User management operations
- CRUD operations for users
- Health check endpoint

### Product Service (Port 3002)
- Product catalog management
- Product filtering and search
- Category-based queries

### Analytics Service (Port 3003)
- Metrics collection and reporting
- Dashboard data
- Analytics reports

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Deploy automatically from `frontend/` folder

### Backend (Render/Railway)
1. Connect GitHub repository
2. Set environment variables
3. Deploy from `backend/` folder

### Environment Variables
```env
PORT=5000
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key
USER_SERVICE_URL=https://your-user-service.com
PRODUCT_SERVICE_URL=https://your-product-service.com
ANALYTICS_SERVICE_URL=https://your-analytics-service.com
```

## 🧪 Testing

### Test Authentication
```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

### Test Health Checks
```bash
# API Gateway health
curl http://localhost:5000/health

# Microservices health
curl http://localhost:5000/api/health
```

## 📊 Rate Limiting

- **General**: 100 requests per 15 minutes per IP
- **Per-User**: 100 requests per 15 minutes per authenticated user
- **Auth Routes**: 5 requests per 15 minutes (strict)

## 🔒 Security Features

- JWT token authentication
- Rate limiting per user and IP
- Security headers with Helmet.js
- CORS configuration
- Input validation
- Error handling without sensitive data exposure

## 📝 Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev:all  # All services
npm run dev      # API Gateway only
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License