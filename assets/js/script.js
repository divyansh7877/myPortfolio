document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            initializeTerminal();
        }, 500);
    }, 3000);

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
        help: 'Available commands: about, projects, summary, contact, clear, personal',
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
