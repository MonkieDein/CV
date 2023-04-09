/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function togglePDF(containerId, pdfLink) {
    var container = document.getElementById(containerId);
    var viewer = container.querySelector("embed");
    var link = container.previousElementSibling;
    
    if (container.style.display === "none") {
      viewer.src = pdfLink;
      container.style.display = "block";
    } else {
      viewer.src = "";
      container.style.display = "none";
    }
  }
  // Function to toggle between grid view and list view
function toggleView(galleryId) {
    var pdfs = document.getElementById(galleryId).getElementsByClassName('pdf-thumbnail');
    var viewButton = document.getElementById(galleryId + '-view-toggle');
    
    // If currently in grid view, switch to list view
    if (viewButton.innerHTML == 'Switch to Grid View') {
      for (var i = 0; i < pdfs.length; i++) {
        pdfs[i].classList.add('pdf-list');
      }
      viewButton.innerHTML = 'Switch to List View';
    }
    // If currently in list view, switch to grid view
    else {
      for (var i = 0; i < pdfs.length; i++) {
        pdfs[i].classList.remove('pdf-list');
      }
      viewButton.innerHTML = 'Switch to Grid View';
    }
  }
  
  // Add event listener to view toggle button
  var viewButton = document.getElementById('gallery1-view-toggle');
  viewButton.addEventListener('click', function() {toggleView('gallery1')});