const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
 .typeString('Best city for this services')
 .pauseFor(200)
 .start();