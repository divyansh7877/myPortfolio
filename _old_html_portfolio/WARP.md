# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website featuring a terminal-like interface design with a green-on-black color scheme reminiscent of classic terminals. The portfolio showcases Divyansh Agarwal's work in AI/ML, neuroinformatics research, and full-stack development.

## Architecture & Structure

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: No framework dependencies, vanilla web technologies
- **Terminal UI Pattern**: Interactive terminal-style interface using JavaScript for command processing
- **Single Page Application**: All content sections are in `index.html` with JavaScript navigation
- **Responsive Design**: Mobile-first approach with hamburger navigation

### Key Components
1. **Terminal Interface** (`assets/js/script.js`):
   - Command processor with history and tab completion
   - Available commands: `help`, `about`, `projects`, `summary`, `contact`, `clear`, `personal`
   - Typing animation for initial welcome messages
   - Mobile-responsive input handling

2. **Navigation System**:
   - Dual navigation: traditional nav menu + terminal commands
   - Both systems control smooth scrolling to sections
   - Mobile hamburger menu with overlay

3. **Content Sections** (all in `index.html`):
   - `#summary`: Professional summary and AI/ML focus
   - `#about`: Experience and education details
   - `#projects`: Technical projects with GitHub links
   - `#personal`: Personal interests and reading list
   - `#contact`: Social links and document downloads

## Development Commands

### Local Development
```bash
# Serve the site locally (Python)
python3 -m http.server 8000
# Or using Node.js
npx http-server .

# Open in browser
open http://localhost:8000
```

### Git Workflow
```bash
# Check status and commit changes
git status
git add .
git commit -m "your message"
git push origin main

# View recent commits
git --no-pager log --oneline -10
```

### File Management
```bash
# Update resume and documents (replace existing files)
# Files are referenced in index.html footer section:
# - Divyansh_Agarwal_Resume.pdf
# - Divyansh_Agarwal_Transcript_og.pdf
# - Divyansh_Agarwal_PyMetrics.pdf
# - Diploma Divyansh.pdf

# View project structure
ls -la
find . -name "*.html" -o -name "*.css" -o -name "*.js" | head -20
```

## Code Organization Patterns

### CSS Structure
- **Global Styles**: Terminal theme (green #0F0 on black #000)
- **Component-Based**: Each major UI component has dedicated CSS blocks
- **Responsive Breakpoints**: Mobile-first with hamburger menu at smaller screens
- **Animation System**: Loading animations, hover effects, and smooth transitions

### JavaScript Architecture
- **Event-Driven**: DOMContentLoaded initialization pattern
- **Command Pattern**: Terminal commands as object methods
- **Promise-Based**: Async typing animations with Promise chains
- **History Management**: Command history with arrow key navigation

### Content Management
- **Inline Content**: All text content directly in HTML for easy editing
- **Semantic HTML**: Proper heading hierarchy and section structure
- **Asset Links**: External documents served as static files from root

## Key Features to Understand

### Terminal Interface
The terminal is the main interactive feature:
- Commands are processed through a `commands` object in `script.js`
- Each command either shows text or scrolls to a section
- Auto-complete and command history are implemented
- Mobile users can tap terminal to focus input

### Loading Experience
- 3-second loading screen with progress bar animation
- Terminal initialization happens after loading completes
- Welcome messages use typewriter effect

### Content Sections
- **Summary**: AI/ML focus, modern development practices
- **Experience**: NYU research, startup work, autonomous systems
- **Projects**: Mix of ML/AI, cloud-native, and blockchain projects
- **Personal**: Reading list (Dostoevsky, philosophy), music taste

## Content Update Patterns

### Adding New Projects
1. Add new project div in `#projects` section
2. Follow existing HTML structure with `<h3>`, description `<p>`, and optional GitHub link
3. Update if needed - projects showcase range from neural networks to cloud architecture

### Updating Experience
1. Edit `#about` section in `index.html`
2. Maintain reverse chronological order
3. Include specific metrics and technologies used

### Document Updates
1. Replace PDF files in root directory
2. Ensure filenames match links in footer section of `index.html`
3. Files are served statically - no special deployment needed

## Development Notes

- **No Build Process**: Direct file editing, no compilation or bundling
- **Git-Based**: Repository at `git@github.com:divyansh7877/myPortfolio.git`
- **Static Hosting Ready**: Can be deployed to GitHub Pages, Netlify, Vercel without configuration
- **Cross-Platform**: Works on any system with modern browser
- **Performance**: Minimal dependencies, fast loading, smooth animations

## Styling Philosophy

The design follows a "hacker terminal" aesthetic:
- Monospace fonts (Courier New family)
- Green (#0F0) on black (#000) color scheme
- Subtle glow effects and shadows
- Smooth hover transitions
- Minimal, functional UI elements

When making changes, maintain this consistent visual language and ensure all interactive elements follow the terminal metaphor.