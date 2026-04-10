document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const btn = document.getElementById('scanBtn');
    const closeBtn = document.querySelector('.close');
    
    // Abrir modal
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
        this.textContent = 'ABERTO';
        typeWriter();
    });
    
    // Fechar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        btn.textContent = '🔍 SOBRE MIM';
    });
    
    // Fechar clicando fora
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            btn.textContent = '🔍 SOBRE MIM';
        }
    });
    
    // Efeito typewriter
    function typeWriter() {
        const outputs = document.querySelectorAll('.output');
        outputs.forEach((output, index) => {
            setTimeout(() => {
                output.style.opacity = '0';
                setTimeout(() => {
                    output.style.opacity = '1';
                    output.style.transform = 'translateX(0)';
                }, 100);
            }, index * 150);
        });
    }
});