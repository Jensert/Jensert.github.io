document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mainCanvas');
    const context = canvas.getContext('2d');
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    // Game logic and rendering here
    context.fillStyle = 'blue';
    context.fillRect(50, 50, 100, 100);
});