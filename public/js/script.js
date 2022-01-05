/* find out what route we're currently on */
const currRoute = window.location.href.split('/')[3];

/* add listener to mobile menu icon */
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('revealedMenu');
  menuIcon.classList.toggle('closeMenu');
});

/* if on home page, run the following... */
if (currRoute === 'index.html' || !currRoute) {
  /* home page parallax effects */
  const parallax = document.getElementById('cta');
  const announcements = document.getElementById('announcements-background');

  window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + 'px';
    announcements.style.backgroundPositionY = '-' + offset * 0.5 + 'px';
  });

  /* home page intersection observer (section fade-ups) */
  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    section.style.opacity = '0';
  });

  const options = {
    root: null,
    threshold: 0.3,
    rootMargin: '0px',
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style = '';
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  /* because the sponsors section is so long it needs its own observer options */

  const sponsorSectionOptions = {
    root: null,
    threshold: 0.08,
    rootMargin: '0px',
  };

  const sponsorSectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style = '';
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    sponsorSectionOptions
  );

  sections.forEach((section) => {
    if (section.id === 'sponsors') {
      sponsorSectionObserver.observe(section);
    } else {
      observer.observe(section);
    }
  });

  const sponsors = document.querySelectorAll('.sponsor');

  sponsors.forEach((sponsor) => {
    sponsor.style.opacity = '0';
  });

  const sponsorOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px',
  };

  const sponsorObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style = '';
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, sponsorOptions);

  sponsors.forEach((sponsor) => {
    sponsorObserver.observe(sponsor);
  });

  /* home page sponsor spotlight randomizer, generates 2 unique sponsors */
  function displayRandomSponsor() {
    const sponsorNodes = [...document.getElementsByClassName('sponsor')];
    const possibleSponsorIndexes = [];

    for (let i = 0; i < sponsorNodes.length - 1; i++) {
      possibleSponsorIndexes.push(i);
    }

    const firstSponsorIndex = Math.floor(
      Math.random() * possibleSponsorIndexes.length
    );

    const remainingSponsorIndexes = possibleSponsorIndexes.filter(
      (index) => index !== firstSponsorIndex
    );

    const secondSponsorRandom = Math.floor(
      Math.random() * remainingSponsorIndexes.length
    );

    const secondSponsorIndex = remainingSponsorIndexes[secondSponsorRandom];

    const lastFilteredIndexes = remainingSponsorIndexes.filter(
      (index) => index !== secondSponsorIndex
    );

    const thirdSponsorRandom = Math.floor(
      Math.random() * lastFilteredIndexes.length
    );

    const thirdSponsorIndex = lastFilteredIndexes[thirdSponsorRandom];

    sponsorNodes.forEach((node, idx) => {
      if (
        idx !== firstSponsorIndex &&
        idx !== secondSponsorIndex &&
        idx !== thirdSponsorIndex &&
        idx !== sponsorNodes.length - 1
      ) {
        node.setAttribute('style', 'display: none');
      }
    });
  }

  /* home page hero image randomizer */
  function displayRandomHero() {
    const heroEl = document.getElementById('cta');
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    heroEl.style.backgroundImage = `url('./public/img/mltarts${randomNumber}_opt.jpg')`;
  }
  displayRandomSponsor();
  displayRandomHero();
}

/* if on individual membership page, run this script */

if (
  currRoute.includes('individual-membership') ||
  currRoute.includes('couple-membership') ||
  currRoute.includes('family-membership') ||
  currRoute.includes('business-membership')
) {
  const clearFormEl = document.getElementById('clear-form');
  const formEl = document.getElementById('membership-form');
  clearFormEl.addEventListener('click', () => {
    formEl.reset();
  });
}

/* if on history page, run the following scripts */
if (currRoute === 'history.html') {
  const decadeBtns = [...document.getElementsByClassName('decade-btn')];
  const decades = [...document.getElementsByClassName('decade')];

  /* hide all decade elements */
  function hideAllDecades() {
    decades.forEach((decade) => {
      decade.style.display = 'none';
    });
  }

  hideAllDecades();

  /* function to display selected decade while hiding all others */
  function displaySelectedDecade(decadeToShow) {
    hideAllDecades();
    decades.forEach((decade) => {
      if (decade.id.replace('decade', '') === decadeToShow)
        decade.style.display = 'block';
    });
  }

  decadeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const decadeToShow = e.target.id.replace('decade-btn-', '');
      displaySelectedDecade(decadeToShow);
    });
  });
}
