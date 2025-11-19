document.addEventListener('DOMContentLoaded', function() {
    // Star Wars Opening Crawl
    const loadingScreen = document.getElementById('loading-screen');
    const starfield = document.getElementById('starfield');
    const crawlContent = document.getElementById('crawl-content');
    const skipButton = document.getElementById('skip-button');
    const sectionButtons = document.querySelectorAll('.crawl-selector button');
    
    let crawlTimeout;
    
    // Section content data
    const sections = {
        summary: `
            <h1>DIVYANSH AGARWAL</h1>
            <h2>THE SUMMARY</h2>
            <p>A Computer Science graduate from NYU with deep interest in artificial intelligence, machine learning, and modern computing systems.</p>
            <p>Work spans academic research, startup innovation, and collaborative engineering—from low-level data pipelines to high-level intelligent systems.</p>
            <p>Specializes in designing models for neurological signals, optimizing real-time performance, and exploring how large language models reshape automation.</p>
            <p>Tackles problems requiring technical depth and creative thinking, pushing boundaries of machine learning and human progress.</p>
        `,
        experience: `
            <h1>DIVYANSH AGARWAL</h1>
            <h2>THE EXPERIENCE</h2>
            <p><strong>NYU NEUROINFORMATICS LAB</strong><br/>Researcher focusing on event detection in voltage imaging data reflecting neural activity.</p>
            <p>Collaborating with Columbia University's Losonczy Lab to establish ground truth labels for neural events.</p>
            <p>Achieved F1 score of 0.92 for event detection using machine learning and deep learning techniques.</p>
            <p>Built browser-based app for interactive neural calcium trace data exploration.</p>
            <p><strong>ADEPTMIND</strong><br/>Data Analyst scaling landing pages from 10K to 80K with 20% monthly traffic increase.</p>
            <p>Created content using LLMs and prompt engineering, built analytics dashboard with Streamlit.</p>
            <p><strong>ENORD</strong><br/>Computer Vision Intern developing lightweight depth estimation models using PyTorch/CUDA.</p>
            <p><strong>TEAM OJAS</strong><br/>Head of Autonomous Department, led team to become first Indian qualifiers for Formula Student Hungary.</p>
            <p>Implemented YOLO-based object detection achieving 92% accuracy in real-world autonomous systems.</p>
        `,
        education: `
            <h1>DIVYANSH AGARWAL</h1>
            <h2>THE EDUCATION</h2>
            <p><strong>NEW YORK UNIVERSITY</strong><br/>Master of Science in Computer Science<br/>2023 - 2025 | GPA: 3.76/4.0</p>
            <p>Coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Information Visualization, Big Data, Blockchains, Cloud Computing</p>
            <p><strong>VIT UNIVERSITY, VELLORE</strong><br/>Bachelor of Technology in Computer Science<br/>2019 - 2023 | GPA: 8.9/10</p>
            <p>Coursework: AI/ML/DL, Statistics, Finance, Business Management, Design Thinking, Innovation</p>
            <p><strong>DELHI PUBLIC SCHOOL</strong><br/>High School - Science and Math Focus<br/>2017 - 2019 | GPA: 92.8%</p>
        `,
        projects: `
            <h1>DIVYANSH AGARWAL</h1>
            <h2>THE PROJECTS</h2>
            <p><strong>EXPERT-CALL RAG ASSISTANT</strong><br/>Locally-run Retrieval-Augmented Generation system using Llama-3.1-8B for querying expert transcripts with citations.</p>
            <p><strong>CLOUD-NATIVE SOCIAL MEDIA AUTOMATION</strong><br/>Serverless AWS pipeline with Rekognition, OpenSearch, Claude 3 for AI-generated social media content.</p>
            <p><strong>FINE-TUNING LLAMA 3.1-8B</strong><br/>Achieved 0.85 accuracy for math answer verification using LoRA adapters and advanced optimization.</p>
            <p><strong>VECTOR SEARCH FOR MUSIC</strong><br/>Large-scale recommendation system using Spotify dataset with Word2Vec embeddings and Apache Spark.</p>
            <p><strong>ERC-721 NFT CONTRACT</strong><br/>Deployed smart contract on Sepolia testnet with IPFS storage and royalty enforcement.</p>
            <p><strong>IN-CONTEXT LEARNING WITH GPT-4</strong><br/>Explored strategic capabilities in Pokémon Showdown using context-aware prompting.</p>
        `,
        personal: `
            <h1>DIVYANSH AGARWAL</h1>
            <h2>THE PERSONAL SIDE</h2>
            <p>Finds joy in long walks in nature, discovering new experiences, and wandering through museums.</p>
            <p>Passionate about classical music and live orchestral performances.</p>
            <p>Current playlist: Money for Nothing (Dire Straits), Alive (Pearl Jam), Drive Home (Steven Wilson), Pigs (Pink Floyd).</p>
            <p>Experiments in the kitchen with new recipes and writes privately.</p>
            <p>Reading Dostoevsky's Crime and Punishment, with The Brothers Karamazov and White Nights on deck.</p>
            <p>Recently finished Tolstoy's The Death of Ivan Ilyich, Kafka's The Metamorphosis, and started Hesse's Siddhartha.</p>
        `
    };
    
    // Generate starfield
    function createStarfield() {
        const numStars = 200;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = star.style.height = Math.random() * 2 + 1 + 'px';
            star.style.animationDelay = Math.random() * 3 + 's';
            starfield.appendChild(star);
        }
    }
    
    // Load section content
    function loadSection(sectionName) {
        // Clear existing timeout
        if (crawlTimeout) {
            clearTimeout(crawlTimeout);
        }
        
        // Update active button
        sectionButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.section === sectionName) {
                btn.classList.add('active');
            }
        });
        
        // Reset and load content
        crawlContent.style.animation = 'none';
        crawlContent.innerHTML = sections[sectionName];
        
        // Force reflow to restart animation
        void crawlContent.offsetWidth;
        crawlContent.style.animation = 'crawl 30s linear forwards';
        
        // Auto-advance after animation (or allow manual skip)
        crawlTimeout = setTimeout(() => {
            skipToCrawl();
        }, 30000);
    }
    
    // Skip to main portfolio
    function skipToCrawl() {
        if (crawlTimeout) {
            clearTimeout(crawlTimeout);
        }
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            initializeTerminal();
        }, 1000);
    }
    
    // Show crawl screen (for terminal command)
    window.showStarWarsCrawl = function() {
        loadingScreen.style.display = 'flex';
        loadingScreen.classList.remove('fade-out');
        loadSection('summary');
    };
    
    // Initialize
    createStarfield();
    loadSection('summary'); // Start with summary
    
    // Button event listeners
    sectionButtons.forEach(button => {
        button.addEventListener('click', () => {
            loadSection(button.dataset.section);
        });
    });
    
    skipButton.addEventListener('click', skipToCrawl);

    // Navigation Menu
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Navigation link functionality
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const command = link.getAttribute('data-command');
            if (commands[command] && typeof commands[command] === 'function') {
                commands[command]();
            }
        });
    });

    // Terminal functionality
    const terminalBody = document.getElementById('terminal-body');
    const typedOutput = document.getElementById('typed-output');
    const terminalInput = document.getElementById('terminal-input');
    const welcomeLine = document.getElementById('welcome-line');
    const helpLine = document.getElementById('help-line');

    const commands = {
        help: 'Available commands: about, projects, summary, contact, clear, personal, starwars',
        about: () => {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        },
        projects: () => {
            const projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        },
        personal: () => {
            const personalSection = document.getElementById('personal');
            personalSection.scrollIntoView({ behavior: 'smooth' });
        },
        summary: () => {
            const summarySection = document.getElementById('summary');
            summarySection.scrollIntoView({ behavior: 'smooth' });
        },
        contact: () => {
            const footer = document.getElementById('contact');
            footer.scrollIntoView({ behavior: 'smooth' });
        },
        starwars: () => {
            if (typeof window.showStarWarsCrawl === 'function') {
                window.showStarWarsCrawl();
            }
        },
        clear: () => {
            welcomeLine.textContent = '';
            helpLine.textContent = '';
            const lines = terminalBody.querySelectorAll('.terminal-line:not(#welcome-line):not(#help-line)');
            lines.forEach(line => line.remove());
            typedOutput.textContent = '';
        }
    };

    let commandHistory = [];
    let historyIndex = -1;

    function typeText(element, text, speed = 50) {
        return new Promise((resolve) => {
            let i = 0;
            const timer = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(timer);
                    resolve();
                }
            }, speed);
        });
    }

    async function initializeTerminal() {
        await typeText(welcomeLine, "Welcome to my portfolio!", 50);
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeText(helpLine, "Type 'help' to see available commands or use the navigation menu above.", 50);
    }

    terminalInput.addEventListener('input', () => {
        typedOutput.textContent = terminalInput.value;
    });

    terminalInput.addEventListener('keydown', function(e) {
        // Prevent default behavior for certain keys
        if (['ArrowUp', 'ArrowDown', 'Tab'].includes(e.key)) {
            e.preventDefault();
        }

        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
            }

            const newLine = document.createElement('div');
            newLine.classList.add('terminal-line');
            newLine.innerHTML = `<span class="prompt-user">guest@div</span><span class="prompt-symbol">~$</span> ${command}`;
            terminalBody.insertBefore(newLine, terminalBody.lastElementChild);

            if (commands[command]) {
                if (typeof commands[command] === 'function') {
                    commands[command]();
                } else {
                    const outputLine = document.createElement('div');
                    outputLine.classList.add('terminal-line');
                    outputLine.textContent = commands[command];
                    terminalBody.insertBefore(outputLine, terminalBody.lastElementChild);
                }
            } else if (command) {
                const errorLine = document.createElement('div');
                errorLine.classList.add('terminal-line');
                errorLine.textContent = `command not found: ${command}. Type 'help' for available commands.`;
                terminalBody.insertBefore(errorLine, terminalBody.lastElementChild);
            }

            terminalInput.value = '';
            typedOutput.textContent = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
                typedOutput.textContent = terminalInput.value;
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
                typedOutput.textContent = terminalInput.value;
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
                typedOutput.textContent = '';
            }
        } else if (e.key === 'Tab') {
            // Auto-complete functionality
            const currentInput = terminalInput.value;
            const matchingCommands = Object.keys(commands).filter(cmd => 
                cmd.startsWith(currentInput.toLowerCase())
            );
            if (matchingCommands.length === 1) {
                terminalInput.value = matchingCommands[0];
                typedOutput.textContent = terminalInput.value;
            }
        }
    });

    // Click to focus terminal
    terminalBody.addEventListener('click', () => {
        terminalInput.focus();
    });
});
