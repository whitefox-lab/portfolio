document.addEventListener('DOMContentLoaded', () => {
    console.log("Always yours, whitefox!");
  
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Здесь можно добавить интерактив: смена темы, фильтрация проектов и пр.

  });


  
