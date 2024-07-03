# Art & Craft Store

The Art & Craft Store is a comprehensive e-commerce platform designed for artisans and craft enthusiasts. Built with a focus on user-friendly navigation and robust features, the website allows users to explore, showcase, and manage their craft items seamlessly.

## Core Features:

- **Navbar:** Includes the website logo, Home, All Art & Craft Items, Add Craft Item (protected route), My Art & Craft List (protected route), Login, and Register. Navbar items like Login, Register, and User Profile (displaying photoURL and displayName on hover) are conditionally rendered based on login status.
  
- **Login & Registration:** Secure password and email-based authentication with options for social login via Google, GitHub, or Facebook. Users can register with mandatory fields including Name, Email, photoURL, and password with password verification criteria.
  
- **Homepage:** Features a slider/banner for promotions and announcements, a section showcasing crafted items, Art & Craft Categories, and a footer.
  
- **Craft Items Section:** Displays crafted items with detailed cards, including a "View Details" button redirecting to the item's detail page.
  
- **Add Craft Item Page:** Protected route for adding new craft items to the database using CRUD operations.
  
- **All Art & Craft Items Page:** Lists all craft items from the database with detailed information and a "View Details" button for each item.
  
- **View Details Page:** Protected route displaying comprehensive details of each craft item with options for update and deletion (CRUD operations).
  
- **My Art & Craft List:** Protected route displaying only items added by the logged-in user, enabling management and updates of their crafted items.

## Technologies Used:

- **Frontend:** React.js for dynamic user interface components.
  
- **Backend:** Node.js, Express.js for server-side logic and API endpoints.
  
- **Database:** MongoDB for storing craft item data.
  
- **Authentication:** JWT (JSON Web Tokens) for secure user sessions.
  
- **UI/UX:** Utilizes responsive design principles and a user-friendly interface for seamless navigation and interaction.

## Live Site:

[BD Art Gallery](https://bd-art-gallery.firebaseapp.com/)

---

This website is designed to cater to artisans looking to showcase their work and enthusiasts interested in purchasing unique art and craft items. It leverages modern technologies and best practices to provide a secure and enjoyable user experience.
