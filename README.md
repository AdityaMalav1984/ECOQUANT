# ECOQUANT
## Sustainable Commerce Platform

---

# BASIC DESCRIPTION

ECOQUANT is a sustainable commerce platform built with React and TypeScript
that rewards customers for buying from eco-certified businesses. It transforms
environmentally conscious shopping into tangible rewards through a innovative
points-based loyalty system. The platform calculates EcoScores for businesses
based on their sustainability practices and allows customers to earn points
proportional to their spending and the business's environmental rating.

---

# PROJECT SUMMARY

ECOQUANT addresses the growing demand for sustainable shopping options by
creating a loyalty ecosystem that incentivizes both businesses and consumers
to adopt greener practices. Businesses submit sustainability metrics to
receive an EcoScore (0-100) and star rating (1-10 stars), which determines
the points customers earn on their purchases. The platform tracks CO2 savings,
monitors transaction patterns for fraud, and provides a seamless mobile-first
experience for all users.

The application features three distinct user interfaces:

- Business Portal: For registering and managing sustainability metrics  
- Customer Wallet: For earning and redeeming points via QR scanning  
- Admin Dashboard: For approving businesses and monitoring platform health  

---

# KEY FEATURES

## 1. ECO-SCORING SYSTEM

- Calculate business sustainability scores (0-100) based on 6 metrics  
- Metrics include: Energy efficiency, Waste management, Water conservation,
  Transport practices, Supply chain ethics, Social impact  
- Convert scores to star ratings (1-10 stars)  

## 2. POINTS LOYALTY PROGRAM

- Customers earn points scaled by business star rating  
- Formula: (Purchase Amount / 100) * (Stars / 5)  
- Points can be redeemed for rewards  
- Full transaction history tracking  

## 3. QR CODE SYSTEM

- Businesses generate unique QR codes for customer scanning  
- Quick point collection at checkout  
- Mobile-optimized scanning interface  

## 4. FRAUD DETECTION

- Automatic flagging of high-value transactions (>500 points)  
- Admin alerts for suspicious activity  
- Transaction verification system  

## 5. CO2 TRACKING

- Platform-wide carbon savings calculation  
- Individual business contribution metrics  
- Environmental impact dashboards  

## 6. THREE USER ROLES

- Business: Registration, metrics submission, profile management  
- Customer: Wallet, point earning, transaction history  
- Admin: Business approval, fraud monitoring, platform analytics  

## 7. MODERN UI/UX

- Dark theme with eco-friendly green/teal accents  
- Mobile-responsive design  
- Smooth animations using Motion library  
- Phone mockup layouts for mobile-first experience  

---

# TECH STACK

## FRONTEND

- React 19.0.0  
- TypeScript 5.8.2  
- Vite 6.2.0  
- Tailwind CSS 4.1.14  
- Motion (animation library)  
- Lucide React (icons)  

## BACKEND (Ready for integration)

- Express.js 4.21.2  
- Better-SQLite3 12.4.1  
- Dotenv 17.2.3  

## AI INTEGRATION

- Google Gemini AI 1.29.0  

## DEVELOPMENT TOOLS

- TSX (TypeScript executor)  
- Autoprefixer  
- Node types  

---

# FOLDER STRUCTURE

ECOQUANT/

├── src/  
│   ├── components/  
│   │   ├── Admin.tsx  
│   │   ├── AdminDashboard.tsx  
│   │   ├── Business.tsx  
│   │   ├── Customer.tsx  
│   │   ├── CustomerDashboard.tsx  
│   │   ├── Home.tsx  
│   │   └── MerchantDashboard.tsx  
│   ├── App.tsx  
│   ├── GlobalContext.tsx  
│   ├── index.css  
│   └── main.tsx  
├── public/  
├── index.html  
├── package.json  
├── package-lock.json  
├── tsconfig.json  
├── vite.config.ts  
├── metadata.json  
└── README.md  

---

# SETUP AND INSTALLATION

## PREREQUISITES

- Node.js (v18 or higher recommended)  
- npm or yarn package manager  

## STEP 1: CLONE THE REPOSITORY

git clone https://github.com/AdityaMalav1984/ECOQUANT.git  
cd ECOQUANT  

## STEP 2: INSTALL DEPENDENCIES

npm install  

This will install all required packages:

- React and React DOM  
- TypeScript and type definitions  
- Vite build tool  
- Tailwind CSS  
- Motion animations  
- Lucide React icons  
- Express (for backend)  
- SQLite database  
- Google Gemini AI  

## STEP 3: ENVIRONMENT SETUP (Optional for backend)

Create a .env file in the root directory if using backend features:

GEMINI_API_KEY=your_api_key_here  

---

# RUNNING INSTRUCTIONS

## DEVELOPMENT MODE

npm run dev  

Starts the development server at:

http://localhost:3000  

The server runs with:

- Port: 3000  
- Host: 0.0.0.0 (accessible on network)  
- Hot reload enabled  

## BUILD FOR PRODUCTION

npm run build  

Creates optimized production build in /dist folder  

## PREVIEW PRODUCTION BUILD

npm run preview  

Serves the production build locally  

## LINTING

npm run lint  

Runs TypeScript type checking without emitting files  

## CLEAN BUILD ARTIFACTS

npm run clean  

Removes the dist folder  

---

# DEMO FLOW

## 1. HOME PAGE (Landing)

- View platform statistics (CO2 saved, active businesses, etc.)  
- Learn how the system works for each role  
- Navigate to any of the four sections  

## 2. BUSINESS REGISTRATION

- Click "Business" tab in navigation  
- Fill in company details:
  * Business name  
  * Industry type  
  * Location  
- Submit sustainability metrics:
  * Energy efficiency (1-10)  
  * Waste management (1-10)  
  * Water conservation (1-10)  
  * Transport practices (1-10)  
  * Supply chain ethics (1-10)  
  * Social impact (1-10)  
- System calculates EcoScore and star rating  
- Submit for admin approval  

## 3. CUSTOMER EXPERIENCE

- Click "Customer" tab  
- View current points balance  
- Scan business QR code to earn points  
- Points formula: (Amount / 100) * (Stars / 5)  
- Example: $100 at 5-star business = 100 points  
- View transaction history  
- Redeem points for rewards  

## 4. ADMIN MANAGEMENT

- Click "Admin" tab  
- View dashboard with KPIs:
  * Total CO2 saved  
  * Active businesses  
  * Points in circulation  
  * Pending approvals  
- Approve or reject business registrations  
- Review flagged transactions (>$500)  
- Monitor fraud alerts  
- Manage certifications  

---

# EXAMPLE DEMO SCENARIO

Scenario: Customer visits an eco-friendly cafe  

1. Business (Cafe) registers and submits:
   - Energy: 8/10 (solar panels)  
   - Waste: 9/10 (composting)  
   - Water: 8/10 (recycling)  
   - Transport: 7/10 (bike deliveries)  
   - Supply: 8/10 (local sourcing)  
   - Social: 9/10 (fair wages)  

2. EcoScore Calculation: (8+9+8+7+8+9)/6 * 10 = 81.67  
3. Star Rating: ~8 stars  

4. Customer makes $50 purchase  
5. Customer scans cafe's QR code  
6. Points earned: (50 / 100) * (8 / 5) = 8 points  
7. Transaction logged in customer history  
8. CO2 savings updated on dashboard  

---

# Live Demo

https://ecoquant.vercel.app
