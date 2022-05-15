const mediaQueryMobile = window.matchMedia('(min-width:1px) and (max-width: 767px)');
const mediaQueryTablet = window.matchMedia('(min-width:767px) and (max-width: 1439px)');
const mediaQueryDesktop = window.matchMedia('(min-width:1439px) and (max-width: 2540px)');

function handleTabletChangeMobile(e) {
    if (e.matches) {
        document.querySelector('.menu').addEventListener('click', function() {
            item = document.querySelector('.menu');
            item.classList.remove("active");
        })
    }
  };
  
  
  function handleTabletChangeTablet(e) {
    if (e.matches) {
        document.querySelector('.menu').addEventListener('click', function() {
            item = document.querySelector('.menu');
            item.classList.remove("active");
        })
    }
  };
  
  function handleTabletChangeDesktop(e) {
    if (e.matches) {

    }
  };

mediaQueryMobile.addListener(handleTabletChangeMobile)
handleTabletChangeMobile(mediaQueryMobile);
mediaQueryTablet.addListener(handleTabletChangeTablet)
handleTabletChangeTablet(mediaQueryTablet);
mediaQueryDesktop.addListener(handleTabletChangeDesktop)
handleTabletChangeDesktop(mediaQueryDesktop);