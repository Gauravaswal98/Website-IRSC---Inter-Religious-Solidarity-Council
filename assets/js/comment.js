document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('comment-trigger');
    const panel = document.getElementById('comment-panel');
    const closeBtn = document.getElementById('close-comment');
    const emojiBtn = document.getElementById('emoji-btn');
    const emojiPanel = document.getElementById('emoji-panel');
    const textArea = document.getElementById('user-comment');
    const submitBtn = document.getElementById('submit-comment');

    // Toggle Panel
    trigger.addEventListener('click', () => {
        panel.classList.toggle('hidden');
        if (!panel.classList.contains('hidden')) {
            // Smooth reveal
            panel.style.opacity = '0';
            panel.style.transform = 'scale(0.95) translateY(10px)';
            setTimeout(() => {
                panel.style.opacity = '1';
                panel.style.transform = 'scale(1) translateY(0)';
            }, 10);
        }
    });

    closeBtn.addEventListener('click', () => panel.classList.add('hidden'));

    // Emoji Logic
    const emojis = ['😊', '🙏', '🔥', '❤️', '👏', '✨', '🤝', '💯', '🙌', '🎉'];
    emojis.forEach(emoji => {
        const span = document.createElement('span');
        span.textContent = emoji;
        span.className = 'cursor-pointer text-xl hover:scale-125 transition-transform text-center p-1';
        span.onclick = (e) => {
            e.stopPropagation();
            textArea.value += emoji;
            emojiPanel.classList.add('hidden');
        };
        emojiPanel.appendChild(span);
    });

    emojiBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        emojiPanel.classList.toggle('hidden');
    });

    // Close panel on outside click
    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && !trigger.contains(e.target)) {
            panel.classList.add('hidden');
        }
        if (!emojiBtn.contains(e.target)) {
            emojiPanel.classList.add('hidden');
        }
    });

    // Submit Logic
    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('user-name').value.trim();
        const msg = textArea.value.trim();

        if (name && msg) {
            // Yahan aap apna backend logic ya alert laga sakte hain
            alert(`Thank you ${name}! Your comment has been sent.`);
            
            // Reset and close
            document.getElementById('user-name').value = '';
            textArea.value = '';
            panel.classList.add('hidden');
        } else {
            alert("Please fill in both name and message.");
        }
    });
});