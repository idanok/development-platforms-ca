# Development-platforms-ca
This is a news platform where users can browse and submit news articles.

The application demonstrates modern web development practices using Supabase as a backend platform, including authentication, database access, and Row Level Security (RLS).

Anyone can view published articles, while only authenticated users are allowed to create new articles.

# Features
- Public article feed
- User registration and login with email/password
- Email confirmation using Supabase Auth
- Auth-protected article creation
Articles include:
- Title
- Body
- Category
- Submission date

- Responsive design
- Error handling and user feedback
- UI updates based on authentication state

# Technologies Used
- HTML5
- JavaScript (ES Modules)
- Tailwind CSS (via CDN)
- Supabase
- Authentication
- PostgreSQL database
- Row Level Security (RLS)
- Git & GitHub
- Prettier 


# How to Run the Project Locally
## 1. Clone the repository 
git clone https://github.com/YOUR_USERNAME/development-platforms-ca.git
cd development-platforms-ca

## 2. Open the project
code .

## 3. Add Supabase credentials
js/supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://dkmuwvuvmwrsoxpkjzhn.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nStW_u_1lnWbpQ0VXuxMfA_0M9-gUYK";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


## 4. Run the project
Because this is a frontend-only project, you can open it using:
Live Server extension in VS Code, or
by opening index.html directly in your browser

# Authentication & Security
Supabase Auth is used for user registration and login
Email confirmation is enabled
Row Level Security (RLS) ensures:
- Anyone can read articles
- Only authenticated users can insert articles
- The UI updates automatically based on authentication state

# Motivation
I chose Option 2 (Supabase frontend) because I enjoy building full-stack applications where I can work with both frontend and backend functionality at the same time

## What I liked
- Working with Supabase made authentication and database management much easier
- Row Level Security was powerful and educational
- Seeing real-time updates in the database was motivating

## What I found difficult
- Understanding RLS policies
- Debugging authentication and user state
- Configuring Supabase correctly the first time

## Custom API vs Supabase
- Using Supabase saved a lot of setup time compared to building a custom API
- A custom API offers more control, but Supabase is ideal for rapid development and learning how modern platform-as-a-service solutions work

# Known Limitations
- No article editing or deletion
- No user profile page
- Tailwind is loaded via CDN
- No pagination on the article list

# Repository
GitHub repository:
https://github.com/YOUR_USERNAME/development-platforms-ca
