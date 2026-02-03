# TaskFlow - Task Management Dashboard

A clean, production-ready full-stack task management application with authentication, built for a Frontend Developer Intern assignment.

## 🛠 Tech Stack

### Frontend
- **React.js** (with Vite for fast builds)
- **TailwindCSS** (for styling)
- **React Router** (for navigation)
- **Axios** (for API calls)

### Backend
- **Node.js** with **Express.js**
- **Supabase** (PostgreSQL database)
- **bcrypt.js** (password hashing)
- **JWT** (authentication tokens)
- **express-validator** (input validation)

## 📁 Project Structure

```
Internship Assignment/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # Supabase client configuration
│   │   ├── controllers/
│   │   │   ├── authController.js    # Signup & login logic
│   │   │   ├── userController.js    # Profile management
│   │   │   └── taskController.js    # Task CRUD operations
│   │   ├── middleware/
│   │   │   ├── auth.js              # JWT authentication middleware
│   │   │   └── errorHandler.js      # Centralized error handling
│   │   ├── routes/
│   │   │   ├── authRoutes.js        # Auth endpoints
│   │   │   ├── userRoutes.js        # User/profile endpoints
│   │   │   └── taskRoutes.js        # Task endpoints
│   │   └── server.js                # Express server setup
│   ├── database/
│   │   └── schema.sql               # Database schema
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Button.jsx           # Reusable button component
    │   │   ├── Input.jsx            # Reusable input component
    │   │   ├── Modal.jsx            # Modal component
    │   │   └── PrivateRoute.jsx     # Protected route wrapper
    │   ├── pages/
    │   │   ├── Login.jsx            # Login page
    │   │   ├── Signup.jsx           # Signup page
    │   │   └── Dashboard.jsx        # Main dashboard
    │   ├── services/
    │   │   ├── api.js               # Axios configuration
    │   │   └── index.js             # API service functions
    │   ├── App.jsx                  # Main app component
    │   ├── main.jsx                 # App entry point
    │   └── index.css                # Global styles
    ├── .env.example
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase account** (free tier works)

### 1. Database Setup (Supabase)

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to **SQL Editor** and run the schema from `backend/database/schema.sql`
4. Get your project credentials:
   - Go to **Settings > API**
   - Copy `Project URL` and `anon/public key`

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your credentials:
# - Add your Supabase URL
# - Add your Supabase anon key
# - Set a strong JWT secret (e.g., use a random string generator)
```

**Example `.env` file:**
```env
PORT=5000
NODE_ENV=development

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here

JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRES_IN=7d
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env (usually no changes needed for local development)
```

**Example `.env` file:**
```env
VITE_API_URL=http://localhost:5000/api/v1
```

### 4. Running the Application

**Start Backend (Terminal 1):**
```bash
cd backend
npm run dev
```
Server runs on: `http://localhost:5000`

**Start Frontend (Terminal 2):**
```bash
cd frontend
npm run dev
```
App runs on: `http://localhost:3000`

## 🔑 Environment Variables

### Backend (`backend/.env`)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `SUPABASE_ANON_KEY` | Supabase anon/public key | `eyJhbGc...` |
| `JWT_SECRET` | Secret for signing JWTs | `my-secret-key` |
| `JWT_EXPIRES_IN` | Token expiration time | `7d` |

### Frontend (`frontend/.env`)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000/api/v1` |

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - Register new user
- `POST /api/v1/auth/login` - Login user

### Profile (Protected)
- `GET /api/v1/me` - Get current user profile
- `PUT /api/v1/me` - Update user profile (name only)

### Tasks (Protected)
- `POST /api/v1/tasks` - Create new task
- `GET /api/v1/tasks` - Get all user's tasks
- `GET /api/v1/tasks/:id` - Get specific task
- `PUT /api/v1/tasks/:id` - Update task
- `DELETE /api/v1/tasks/:id` - Delete task

## 🧪 Testing the Application

### Sample Test Flow

1. **Visit** `http://localhost:3000`
2. **Sign Up** with:
   - Name: `John Doe`
   - Email: `john@example.com`
   - Password: `password123`
3. **Create Tasks:**
   - "Complete project documentation"
   - "Review pull requests"
   - "Deploy to production"
4. **Test Features:**
   - Search tasks
   - Filter by status (pending/completed)
   - Edit tasks
   - Delete tasks
   - Update profile name

## ✨ Features

### Authentication
- ✅ Secure signup with password hashing (bcrypt)
- ✅ JWT-based authentication
- ✅ Protected routes
- ✅ Auto-redirect on token expiration
- ✅ Form validation with error messages

### Task Management
- ✅ Create, read, update, delete tasks
- ✅ User-owned tasks (isolation)
- ✅ Search tasks by title
- ✅ Filter by status (pending/completed)
- ✅ Task statistics dashboard

### User Experience
- ✅ Clean, responsive UI
- ✅ Loading states
- ✅ Empty states
- ✅ Error handling & display
- ✅ Modal-based forms

## 🔒 Security Features

- **Password Hashing:** bcrypt with salt rounds
- **JWT Authentication:** Secure token-based auth
- **Input Validation:** express-validator on all inputs
- **User Isolation:** Tasks are user-specific
- **Environment Variables:** No hardcoded secrets
- **CORS Protection:** Configured CORS middleware
- **SQL Injection Prevention:** Supabase parameterized queries

## 🏗 Scaling for Production

### Current Architecture Limitations
- Single server (no horizontal scaling)
- No caching layer
- No rate limiting
- Basic error logging
- No automated tests

### Production Enhancements

#### 1. **Infrastructure**
- **Containerization:** Docker for consistent deployments
- **Orchestration:** Kubernetes for auto-scaling
- **Load Balancer:** Nginx or cloud-based (AWS ALB, Cloudflare)
- **CDN:** Serve static frontend assets globally (Cloudflare, Vercel)

#### 2. **Database**
- **Connection Pooling:** PgBouncer for Postgres
- **Read Replicas:** Separate read/write traffic
- **Indexes:** Add indexes on frequently queried columns
- **Backups:** Automated daily backups with point-in-time recovery

#### 3. **Authentication & Security**
- **Refresh Tokens:** Implement refresh token rotation
- **Rate Limiting:** Add express-rate-limit
- **HTTPS Only:** Force SSL/TLS
- **CORS Whitelist:** Restrict to production domains
- **Helmet.js:** Security headers
- **Input Sanitization:** Additional XSS protection

#### 4. **Observability**
- **Logging:** Winston or Pino with structured logs
- **Monitoring:** Prometheus + Grafana
- **Error Tracking:** Sentry or Rollbar
- **APM:** New Relic or Datadog
- **Uptime Monitoring:** Pingdom or UptimeRobot

#### 5. **Performance**
- **Redis Cache:** Cache frequently accessed data
- **API Pagination:** Limit query results
- **Lazy Loading:** Frontend code splitting
- **Asset Optimization:** Compress images, minify code
- **HTTP/2:** Enable for multiplexing

#### 6. **CI/CD**
- **GitHub Actions:** Automated testing & deployment
- **Staging Environment:** Test before production
- **Database Migrations:** Automated schema changes
- **Blue-Green Deployment:** Zero-downtime releases

#### 7. **Testing**
- **Unit Tests:** Jest for business logic
- **Integration Tests:** Supertest for API
- **E2E Tests:** Playwright or Cypress
- **Load Testing:** k6 or Artillery

#### 8. **Additional Features**
- **Email Notifications:** SendGrid or AWS SES
- **File Uploads:** AWS S3 for attachments
- **Real-time Updates:** WebSockets or Server-Sent Events
- **Multi-tenancy:** Team/organization support
- **Role-Based Access Control (RBAC):** Admin, member roles
- **Audit Logs:** Track all data changes

### Deployment Options

**Frontend:**
- Vercel (recommended for Vite/React)
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting

**Backend:**
- Railway
- Render
- Heroku
- AWS EC2/ECS
- Google Cloud Run
- DigitalOcean App Platform

**Database:**
- Supabase (managed Postgres)
- AWS RDS
- Google Cloud SQL
- Neon.tech

## 📝 Code Quality

### Best Practices Implemented
- ✅ Separation of concerns (MVC pattern)
- ✅ Reusable components
- ✅ Consistent error handling
- ✅ Environment-based configuration
- ✅ Clean, readable code
- ✅ Meaningful variable names
- ✅ Input validation at all layers

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is available
- Verify `.env` file exists and has correct values
- Run `npm install` again

### Frontend won't start
- Check if port 3000 is available
- Verify `.env` file exists
- Run `npm install` again

### Can't login/signup
- Check backend console for errors
- Verify Supabase credentials in backend `.env`
- Check database schema was created properly

### Tasks not loading
- Open browser DevTools (F12) and check Network tab
- Verify JWT token is being sent in headers
- Check backend logs for errors

## 📄 License

MIT

## 👨‍💻 Author

Built for Frontend Developer Intern Assignment

---

**Note:** This is a demo application for educational/interview purposes. Do not use in production without implementing proper security measures and thorough testing.
