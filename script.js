document.addEventListener('DOMContentLoaded', function() {
    const surpriseButton = document.querySelector('.surprise-button');
    const effectsContainer = document.querySelector('.effects');

   
    surpriseButton.addEventListener('click', function() 
    {
        // Create a lot of glitter effects
        for (let i = 0; i < 100; i++) {
            const effect = document.createElement('div');
            effect.classList.add('effect');
            effect.style.width = `${Math.random() * 20 + 10}px`;
            effect.style.height = effect.style.width;
            effect.style.left = `${Math.random() * 100}vw`;
            effect.style.top = `${Math.random() * 100}vh`;
            effect.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
            effectsContainer.appendChild(effect);
        }

       // Fade out effects after 10 seconds
        setTimeout(function() {
            effectsContainer.classList.add('hidden');
            setTimeout(function() {
                effectsContainer.innerHTML = '';
                effectsContainer.classList.remove('hidden');
            }, 2000); // Match the transition duration
        }, 20000); // 10 seconds
    });
});
