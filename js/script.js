
    /* fetch navbar */
    fetch('public/navbar.html')
      .then(response => response.text())
      .then(data => {
        const section1Container = document.getElementById('nav-container');
        section1Container.innerHTML = data;
      })
      .catch(error => {
        console.log('Erreur lors du chargement de navbar.html :', error);
      });
    /* fetch home */
  fetch('public/home.html')
    .then(response => response.text())
    .then(data => {
      const section1Container = document.getElementById('home-container');
      section1Container.innerHTML = data;
    })
    .catch(error => {
      console.log('Erreur lors du chargement de home.html :', error);
    });
    /* fetch about_me */
  fetch('public/about_me.html')
    .then(response => response.text())
    .then(data => {
      const section2Container = document.getElementById('about-container');
      section2Container.innerHTML = data;
    }
    ) .catch(error => {
      console.log('Erreur lors du chargement de about.html :', error);
    }
    );
    /* fetch skill */
    fetch('public/skill.html')
    .then(response => response.text())
    .then(data => {
      const section2Container = document.getElementById('skill-container');
      section2Container.innerHTML = data;
    }
    ) .catch(error => {
      console.log('Erreur lors du chargement de skill.html :', error);
    }
    );

    /* loading */
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
