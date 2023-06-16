
    fetch('public/navbar.html') // Utilisez le chemin relatif du fichier home.html à partir de l'emplacement de index.html
      .then(response => response.text())
      .then(data => {
        const section1Container = document.getElementById('nav-container');
        section1Container.innerHTML = data;
      })
      .catch(error => {
        console.log('Erreur lors du chargement de navbar.html :', error);
      });
  fetch('public/home.html') // Utilisez le chemin relatif du fichier home.html à partir de l'emplacement de index.html
    .then(response => response.text())
    .then(data => {
      const section1Container = document.getElementById('home-container');
      section1Container.innerHTML = data;
    })
    .catch(error => {
      console.log('Erreur lors du chargement de home.html :', error);
    });
  fetch('public/about_me.html') // Utilisez le chemin relatif du fichier about.html à partir de l'emplacement de index.html
    .then(response => response.text())
    .then(data => {
      const section2Container = document.getElementById('about-container');
      section2Container.innerHTML = data;
    }
    ) .catch(error => {
      console.log('Erreur lors du chargement de about.html :', error);
    }
    );
    fetch('public/skill.html') // Utilisez le chemin relatif du fichier about.html à partir de l'emplacement de index.html
    .then(response => response.text())
    .then(data => {
      const section2Container = document.getElementById('skill-container');
      section2Container.innerHTML = data;
    }
    ) .catch(error => {
      console.log('Erreur lors du chargement de skill.html :', error);
    }
    );
    $(".meter > span").each(function () {
      $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate(
          {
            width: $(this).data("origWidth")
          },
          1200
        );
    });
