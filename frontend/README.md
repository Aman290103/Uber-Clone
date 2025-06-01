# UberClone Frontend

## Pages Documentation

### Home Page
**File:** `src/pages/Home.jsx`  
**Route:** `/`  
**Description:** Landing page for the application.  
**Features:**
- Displays Uber logo
- "Get Started with Uber" heading
- Continue button that navigates to the login page

### User Login Page
**File:** `src/pages/userLogin.jsx`  
**Route:** `/Login`  
**Description:** Handles user authentication.  
**Features:**
- Email input field
- Password input field
- Login button
- Link to signup page
- Submits credentials to `/users/login` API endpoint

### User Signup Page
**File:** `src/pages/userSignup.jsx`  
**Route:** `/Signup`  
**Description:** Handles new user registration.  
**Features:**
- First name input
- Last name input
- Email input
- Password input
- Signup button
- Link to login page
- Submits registration data to `/users/register` API endpoint

### Captain Login Page
**File:** `src/pages/captainLogin.jsx`  
**Route:** `/captain-Login`  
**Description:** Handles captain authentication.  
**Features:**
- Email input field
- Password input field
- Login button
- Link to captain signup page
- Submits credentials to `/captain/login` API endpoint

### Captain Signup Page
**File:** `src/pages/captainSignup.jsx`  
**Route:** `/captain-Signup`  
**Description:** Handles new captain registration.  
**Features:**
- Personal information inputs (name, email, password)
- Vehicle information inputs (type, color, plate number, capacity)
- Phone number input
- Signup button
- Link to captain login page
- Submits registration data to `/captain/register` API endpoint

## Important Notes

1. **Component Naming Convention:**
   - All React components should use PascalCase (e.g., `UserLogin` not `userLogin`)
   - Make sure both the component declaration and export statement use the capitalized name

2. **Common Issues:**
   - Route paths are case-sensitive, ensure they match exactly in both the App.jsx routes and Link components
   - Always import required components (e.g., `import { Link } from 'react-router-dom'`)
   - When using background images, use relative paths instead of absolute file system paths

3. **Routing Structure:**
   ```jsx
   <Routes> 
     <Route path='/' element={<Home/>} />
     <Route path='/Login' element={<UserLogin/>}/>
     <Route path='/Signup' element={<UserSignup/>}/>
     <Route path='/captain-Signup' element={<CaptainSignup/>}/>
     <Route path='/captain-Login' element={<CaptainLogin/>}/>
   </Routes>
   ```