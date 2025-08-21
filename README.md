![React_portfolio_git2](https://github.com/user-attachments/assets/581563c6-dfe7-4ddb-9426-b88ca1301768)![React_portfolio_git3](https://github.com/user-attachments/assets/b8db6a01-a359-47d1-80f4-f9094a2fcf20)![React_portfolio_git1](https://github.com/user-attachments/assets/3eb0a614-397a-4b29-9742-cde5f0e2685f)# react_portfolio
 Portfolio website using React

# Purpose of the Application
This is a personal portfolio web application built with React. It showcases my development and 3D art projects, including GitHub repositories and YouTube videos. The goal is to demonstrate my technical skills, creative works, and provide a platform for others to explore my projects.

# Features
- Dynamic GitHub project cards
- YouTube video integration
- Live search filtering
- Responsive design

# Preview

Interative animation
![React_portfolio_git1](https://github.com/user-attachments/assets/e367433d-5f98-4602-a2f0-22fb8fc29793)


![React_portfolio_git2](https://github.com/user-attachments/assets/20176a34-3540-449a-ba55-89f56352971d)


![React_portfolio_git3](https://github.com/user-attachments/assets/eedeb4df-38d5-4f5e-96b0-9d5cfb4f2ae7)



# Installation

To run this application locally:

1. **Clone the repository:**
2.  Run **npm install** to install dependencies
3.  Create **.env** file in root directory and insert your YouTube API credentials.
4.  Run **npm start**
5.  The app will be available at **http://localhost:3000**.
 
  
# Dependencies
- `@testing-library/dom` — ^10.4.0  
- `@testing-library/jest-dom` — ^6.6.3  
- `@testing-library/react` — ^16.3.0  
- `@testing-library/user-event` — ^13.5.0  
- `animate.css` — ^4.1.1  
- `bootstrap` — ^5.3.6  
- `react` — ^19.1.0  
- `react-bootstrap` — ^2.10.10  
- `react-bootstrap-icons` — ^1.11.6  
- `react-dom` — ^19.1.0  
- `react-on-screen` — ^2.1.1  
- `react-router-dom` — ^7.6.1  
- `react-scripts` — 5.0.1  
- `web-vitals` — ^2.1.4  

### 🌐 External APIs

- [GitHub REST API](https://docs.github.com/en/rest) — Used to fetch public repositories  
- [YouTube Data API v3](https://developers.google.com/youtube/v3) — Used to load videos from a specific playlist

# Application Architecture
```plaintext
src/
├── components/
│   ├── About.js              # Skills and software cards
│   ├── Banner.js             # Landing page banner
│   ├── Contact.js            # Contact section
│   ├── Footer.js             # Page footer
│   ├── github_items.js       # GitHub project fetcher
│   ├── NavigationBar.js      # Top navigation bar
│   ├── Porfolio.js           # Portfolio section with search and tabs
│   ├── Project_items.js      # Reusable project card component
│   └── youtube_items.js      # YouTube playlist video fetcher
│
├── assets/
│   └── img/                  # All images and logos
│   └── font/                 # All custom fonts
│
├── App.js                    # Root component
├── App.css                   # Global styles
├── index.js                  # App entry point
├── index.css                 # Global CSS styles
└── .env 
```

# Reporting Issues
If you find a bug or want to request a feature:
- Open an Issue
- Include steps to reproduce, screenshots (if possible), and your environment info

# How to Contribute

1. Fork this repository.
2. Create a new branch: git checkout -b feature-name.
3. Make your changes and commit: git commit -m 'Add feature'.
4. Push to the branch: git push origin feature-name.
5. Open a Pull Request.

Contributions such as adding new sections, fixing bugs, or improving design are welcome.

