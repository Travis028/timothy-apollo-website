# Timothy Apollo Website

Professional website for Mr. Timothy Apollo Owino Otieno - Early Childhood Education Specialist

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email
1. Copy `.env.example` to `.env`
2. Update with your Gmail credentials:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail App Password (not regular password)

### 3. Gmail App Password Setup
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use this App Password in `.env`

### 4. Run the Server
```bash
npm start
```

Visit `http://localhost:3000` to view the website.

## Contact Form
The contact form sends emails directly to `apollotimothy13@gmail.com` when visitors submit messages.

## Deployment
For production deployment, set environment variables on your hosting platform (Heroku, Vercel, etc.).