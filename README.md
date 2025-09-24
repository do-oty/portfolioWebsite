# Network Security & Development Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing networking security expertise and development skills. Designed specifically for BSIT students and networking professionals.

## 🚀 Live Demo

Visit the live portfolio: [Your GitHub Pages URL]

## 🎯 Features

- **Modern Design**: Dark theme with cyber-inspired color scheme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects
- **Networking Focus**: Specialized content for network security professionals
- **Project Showcase**: Detailed project cards with filtering capabilities
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with modern React practices

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React icon library
- **Animations**: CSS transitions and Tailwind animations
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## 📋 Sections

1. **Hero**: Eye-catching introduction with career focus areas
2. **About**: BSIT background and networking specialization
3. **Skills**: Technical skills with progress indicators
4. **Experience**: Enterprise network security project showcase
5. **Projects**: Portfolio projects with filtering and detailed descriptions
6. **Contact**: Contact form and professional information

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolioAss.git
cd portfolioAss
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **public/index.html**: Update meta tags and title
2. **src/components/Hero.js**: Update name and introduction
3. **src/components/About.js**: Update background and skills
4. **src/components/Contact.js**: Update contact information
5. **package.json**: Update homepage URL for GitHub Pages

### Colors and Styling

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  'cyber-blue': '#00D4FF',
  'cyber-green': '#00FF94',
  'cyber-purple': '#8B5CF6',
  'dark-bg': '#0A0F1C',
  'dark-card': '#1A1F2E',
  'dark-border': '#2D3748',
}
```

### Content Updates

- **Skills**: Update skill levels in `src/components/Skills.js`
- **Projects**: Add your projects in `src/components/Projects.js`
- **Experience**: Update with your project experience in `src/components/Experience.js`

## 📦 Building for Production

1. Build the project:
```bash
npm run build
```

2. The `build` folder contains the production-ready files.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolioAss"
```

2. Install gh-pages (if not already installed):
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the `build` folder to the `gh-pages` branch:
```bash
git subtree push --prefix build origin gh-pages
```

## 📁 Project Structure

```
portfolioAss/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎯 Networking Focus Areas

This portfolio is specifically designed for students and professionals in:

- Network Security / SOC Analyst roles
- Network Administrator / NOC positions  
- Systems Administration
- IoT Development
- Network Automation / NetDevOps
- Cybersecurity consulting

## 📱 Mobile Responsiveness

The portfolio is fully responsive and tested on:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or feedback about this portfolio template:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Lucide React for the beautiful icon set
- React community for the excellent documentation and resources
- Networking and cybersecurity communities for inspiration

---

**Built with ❤️ for the networking community** 