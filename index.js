document.addEventListener('DOMContentLoaded', () => {
  // Configuração do carrossel
  const carouselInner = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const carouselHeight = document.querySelector('.carousel').offsetHeight;

  let currentIndex = 0;
  let autoSlideInterval;

  // Função para atualizar o carrossel
  function updateCarousel() {
    const offset = -currentIndex * carouselHeight;
    carouselInner.style.transform = `translateY(${offset}px)`;
  }

  // Função para ir para o próximo slide automaticamente
  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  // Inicia a movimentação automática do carrossel
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos
  }

  // Pausa o movimento automático ao interagir
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Eventos para os botões do header
  document.getElementById('S').addEventListener('click', () => {
    stopAutoSlide(); // Pausa ao interagir manualmente
    currentIndex = 0; // Slide "Sobre mim"
    updateCarousel();
    startAutoSlide(); // Reinicia o movimento automático
  });

  document.getElementById('P').addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = 1; // Slide "Projetos"
    updateCarousel();
    startAutoSlide();
  });

  document.getElementById('L').addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = 2; // Slide "Contato" (se aplicável)
    updateCarousel();
    startAutoSlide();
  });

  // Configuração dos colapsos no footer
  const toggleImages = document.querySelectorAll('.toggle-collapse');

  toggleImages.forEach(img => {
    img.addEventListener('click', () => {
      const targetId = img.getAttribute('data-target');
      const target = document.getElementById(targetId);

      // Fecha todos os outros colapsos antes de abrir o novo
      document.querySelectorAll('.collapsible-content').forEach(content => {
        if (content !== target) {
          content.classList.remove('show');
        }
      });

      // Alterna a visibilidade do colapso clicado
      target.classList.toggle('show');
    });
  });

  // Inicia a movimentação automática no carregamento
  startAutoSlide();
});
