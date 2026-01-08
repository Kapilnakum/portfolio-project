# Portfolio Website with Enquiry Management

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) portfolio website featuring enquiry management functionality.

## Features

### Frontend
- **Landing Page**: Professional portfolio introduction with responsive design
- **Contact Form**: Enquiry submission form with validation
- **Admin Dashboard**: Table view of all enquiries with CRUD operations
- **Enquiry Details Modal**: Popup displaying full enquiry details with edit capability
- **Responsive Design**: Mobile and desktop friendly UI using Tailwind CSS

### Backend
- **RESTful APIs**: Complete CRUD operations for enquiries
- **Authentication**: JWT-based admin authentication
- **Validation**: Server-side input validation
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Frontend**: React.js, React Router, Tailwind CSS, Axios, React Hot Toast
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Deployment**: Ready for Vercel/Netlify (frontend) and Railway/Render (backend)

## Project Structure

```
portfolio-project/
├── client/
│   └── myapp/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Header.jsx
│       │   │   ├── Footer.jsx
│       │   │   └── Layout.jsx
│       │   ├── pages/
│       │   │   ├── Home.jsx
│       │   │   ├── Contact.jsx
│       │   │   ├── Enquiries.jsx
│       │   │   └── AdminLogin.jsx
│       │   └── App.js
│       └── package.json
└── server/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── scripts/
    ├── server.js
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Create admin user:
   ```bash
   node scripts/createAdmin.js
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client/myapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Portfolio Landing Page**: Visit `http://localhost:3000` to view the portfolio
2. **Submit Enquiry**: Click "Hire Me" or go to `/contact` to submit project enquiries
3. **Admin Access**: Go to `/admin-login` and use email: `admin@example.com`, password: `admin123`
4. **Manage Enquiries**: View, edit, and delete enquiries in the dashboard at `/enquiries`

## API Endpoints

### Public Endpoints
- `POST /api/enquiries` - Submit new enquiry

### Protected Endpoints (Require JWT token)
- `GET /api/enquiries` - Get all enquiries
- `PUT /api/enquiries/:id` - Update enquiry
- `DELETE /api/enquiries/:id` - Delete enquiry
- `POST /api/admin/login` - Admin login

## Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting platform
3. Update API base URLs to production backend URL

### Backend (Railway/Render)
1. Deploy the server code to your backend hosting platform
2. Set environment variables in the hosting platform
3. Update MongoDB URI for production database

## Features Implemented

✅ Landing Page with professional design
✅ Responsive contact form with validation
✅ Enquiry management dashboard
✅ CRUD operations for enquiries
✅ Enquiry details modal with edit functionality
✅ JWT authentication for admin
✅ Clean UI with Tailwind CSS
✅ Server-side validation
✅ Proper error handling
✅ Toast notifications

## Future Enhancements

- Search and filter functionality in dashboard
- Pagination for large enquiry lists
- Email notifications for new enquiries
- File upload for project attachments
- Advanced admin user management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.