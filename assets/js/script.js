document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminal-body');
    const typedOutput = document.getElementById('typed-output');

    const commands = {
        help: 'Available commands: about, projects, summary, contact, clear',
        about: () => {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        },
        projects: () => {
            const projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        },
        summary: () => {
            const summarySection = document.getElementById('summary');
            summarySection.scrollIntoView({ behavior: 'smooth' });
        },
        contact: () => {
            const footer = document.querySelector('.footer');
            footer.scrollIntoView({ behavior: 'smooth' });
        },
        clear: () => {
            terminalBody.innerHTML = '<div class="terminal-prompt"><span class="prompt-user">guest@divyansh-portfolio:</span><span class="prompt-symbol">~$</span><span id="typed-output"></span><span class="cursor">&nbsp;</span></div>';
        }
    };

    let commandHistory = [];
    let historyIndex = -1;

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = typedOutput.textContent.trim();
            commandHistory.push(command);
            historyIndex = commandHistory.length;

            const newLine = document.createElement('div');
            newLine.classList.add('terminal-line');
            newLine.innerHTML = `<span class="prompt-user">guest@divyansh-portfolio:</span><span class="prompt-symbol">~$</span> ${command}`;
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
                errorLine.textContent = `command not found: ${command}`;
                terminalBody.insertBefore(errorLine, terminalBody.lastElementChild);
            }

            typedOutput.textContent = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        } else if (e.key === 'Backspace') {
            typedOutput.textContent = typedOutput.textContent.slice(0, -1);
        } else if (e.key.length === 1) {
            typedOutput.textContent += e.key;
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                typedOutput.textContent = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                typedOutput.textContent = commandHistory[historyIndex];
            } else {
                typedOutput.textContent = '';
            }
        }
    });
});
