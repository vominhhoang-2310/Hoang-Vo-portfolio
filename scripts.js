document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => document.body.classList.add('page-loaded'));

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const projects = [
    {
      id: 'elm-resources',
      title: 'ELM Resources',
      image: 'assets/ELM_resources.png',
      imageAlt: 'Screens from the ELM Resources website',
      description:
        'A collection of resources for teachers and parents using the ELM software in the Learning Toolkit+.',
      impact:
        'Improved usability across devices so teachers and parents always access the latest documentation.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Implemented a new responsive layout and refreshed outdated documents with updated versions across the site.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Live Website',
          url: 'https://literacy.concordia.ca/resources/elm/teacher/en/',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1H8Totjon46mXEIb00_alj-2MAyyPxaQl?usp=sharing',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'abra-resources',
      title: 'ABRA Resources',
      image: 'assets/ABRA_resources.png',
      imageAlt: 'ABRA Resources website preview',
      description:
        'A companion site for ABRA software that curates downloadable resources for teachers and parents.',
      impact:
        'Introduced JSON-driven metadata, refreshed outdated resources, and launched a requested content section.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Used JSON to manage document metadata, updated outdated resources, and added a new section based on requests.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Live Website',
          url: 'https://literacy.concordia.ca/resources/abra/teacher/en/',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1D2smxg5gQTD7mskq3hoN4zvAH--qcqpk?usp=sharing',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'ltk-reads',
      title: 'LTK READS',
      image: 'assets/LTK_READS.jpg',
      imageAlt: 'LTK READS interface preview',
      description:
        'A multilingual story catalogue with filters for theme, reading level, language, and country of origin.',
      impact:
        'Crafted the footer About page, aligned UI/UX patterns, and resolved cross-browser bugs.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Implemented a new About page accessible from the footer, maintained consistent UI/UX standards, and fixed reported bugs.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Live Website',
          url: 'https://literacy.concordia.ca/reads/index.html#en',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1RIy8eFUWc_hQwjTIE1bXngXIWsucl-Zm?usp=drive_link',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'learning-toolkit',
      title: 'Learning Toolkit+',
      image: 'assets/LTK+.png',
      imageAlt: 'Learning Toolkit+ dashboard preview',
      description:
        'A suite of tools designed to nurture literacy, numeracy, information literacy, and self-regulated learning.',
      impact:
        'Delivered stability fixes and ensured compatibility with the latest PHP and MySQL releases.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Resolved reported bugs and ensured software compatibility with the latest PHP and MySQL versions.',
      ],
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Project Overview',
          url: 'https://drive.google.com/drive/folders/11tOAIjJadtTOJu9FQgITZCaOoJnCZ9G-?usp=drive_link',
          variant: 'primary',
        },
        {
          label: 'Code Sample Soon',
          variant: 'outline',
          disabled: true,
        },
      ],
    },
    {
      id: 'readsmanage',
      title: 'Readsmanage',
      image: 'assets/Readsmanage.png',
      imageAlt: 'Readsmanage application preview',
      description:
        'A secure platform for creating and managing books with authentication and content management tools.',
      impact:
        'Migrated from Vue 2 to Vue 3, adopted the Composition API, and upgraded Laravel 8 to 9.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Migrated the project from Vue 2 to Vue 3, converted components to the Composition API, and upgraded from Laravel 8 to Laravel 9.',
      ],
      tags: ['PHP', 'MySQL', 'Laravel', 'Vue.js'],
      links: [
        {
          label: 'Project Overview',
          url: 'https://drive.google.com/drive/folders/1Gvb6V1lDsI5mDPbVU2-JKe15tRVRN0oX?usp=drive_link',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1Xlyua4XQ4nXRNMRS8FoyWU9cGNrCo8ll?usp=drive_link',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'abra',
      title: 'ABRA',
      image: 'assets/ABRA.jpg',
      imageAlt: 'ABRA learning application preview',
      description:
        'An evidence-based literacy tool supporting early readers, struggling readers, and ESL learners.',
      impact:
        'Resolved prioritized bugs alongside senior designers and QA testers to keep the platform dependable.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Fixed reported bugs in collaboration with cross-functional teams, including senior web designers and QA testers.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      links: [
        {
          label: 'Live Website',
          url: 'https://abralite.concordia.ca',
          variant: 'primary',
        },
        {
          label: 'Code Sample Soon',
          variant: 'outline',
          disabled: true,
        },
      ],
    },
    {
      id: 'elm',
      title: 'ELM',
      image: 'assets/ELM.jpg',
      imageAlt: 'ELM learning game preview',
      description:
        'A JavaScript-based tool that builds number sense and reduces math anxiety for young learners.',
      impact:
        'Collaborated with cross-functional partners to triage and fix production issues.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Fixed reported bugs in collaboration with cross-functional teams, including senior web designers and QA testers.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      links: [
        {
          label: 'Live Demo',
          url: 'https://elm-demo.infinityfree.me/elm/',
          variant: 'primary',
        },
        {
          label: 'Code Sample Soon',
          variant: 'outline',
          disabled: true,
        },
      ],
    },
  ];

  initProjectsCarousel(projects);
  initScrollReveal();
});

function initProjectsCarousel(projects) {
  const carousel = document.querySelector('.project-carousel');
  const track = document.getElementById('carousel-track');
  const prevBtn = carousel?.querySelector('.carousel-control.prev');
  const nextBtn = carousel?.querySelector('.carousel-control.next');

  if (!carousel || !track || !projects.length) return;

  const featuredImage = document.getElementById('featured-image');
  const featuredTitle = document.getElementById('featured-title');
  const featuredDescription = document.getElementById('featured-description');
  const featuredImpact = document.getElementById('featured-impact');
  const featuredHighlights = document.getElementById('featured-highlights');
  const featuredTags = document.getElementById('featured-tags');
  const featuredActions = document.getElementById('featured-actions');

  if (
    !featuredImage ||
    !featuredTitle ||
    !featuredDescription ||
    !featuredImpact ||
    !featuredHighlights ||
    !featuredTags ||
    !featuredActions
  ) {
    return;
  }

  track.innerHTML = '';
  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    const cardButton = document.createElement('button');
    cardButton.type = 'button';
    cardButton.className = 'carousel-card';
    cardButton.dataset.projectId = project.id;
    cardButton.setAttribute('aria-label', `${project.title} project`);
    cardButton.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

    const imageWrap = document.createElement('div');
    imageWrap.className = 'carousel-card-image-wrap';

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.imageAlt;

    const title = document.createElement('span');
    title.className = 'carousel-card-title';
    title.textContent = project.title;

    imageWrap.appendChild(img);
    cardButton.append(imageWrap, title);
    fragment.appendChild(cardButton);
  });

  track.appendChild(fragment);

  const cardButtons = Array.from(track.querySelectorAll('.carousel-card'));
  const controlsContainer = carousel.querySelector('.carousel-controls');

  const getCardsPerView = () => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      return Math.min(1, projects.length);
    }

    if (window.matchMedia('(max-width: 1024px)').matches) {
      return Math.min(2, projects.length);
    }

    return Math.min(3, projects.length);
  };

  let cardsPerView = getCardsPerView();
  let groupCount = Math.max(0, Math.ceil(projects.length / cardsPerView) - 1);
  let activeIndex = 0;
  let currentGroup = 0;

  const updateControls = () => {
    if (!controlsContainer) return;

    if (projects.length <= cardsPerView) {
      controlsContainer.classList.add('controls-hidden');
      prevBtn?.setAttribute('disabled', 'true');
      nextBtn?.setAttribute('disabled', 'true');
    } else {
      controlsContainer.classList.remove('controls-hidden');
      prevBtn?.removeAttribute('disabled');
      nextBtn?.removeAttribute('disabled');
    }
  };

  updateControls();

  const updateTrackTransform = () => {
    track.style.transform = `translateX(-${currentGroup * 100}%)`;
  };

  const setActiveProject = (index, options = {}) => {
    activeIndex = index;
    const project = projects[activeIndex];
    if (project) {
      renderFeaturedProject({
        project,
        featuredImage,
        featuredTitle,
        featuredDescription,
        featuredImpact,
        featuredHighlights,
        featuredTags,
        featuredActions,
      });
    }

    cardButtons.forEach((card, cardIndex) => {
      const isActive = cardIndex === activeIndex;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (!options.skipScroll) {
      const targetGroup = Math.floor(activeIndex / cardsPerView);
      if (targetGroup !== currentGroup) {
        currentGroup = targetGroup;
        updateTrackTransform();
      }
    }
  };

  cardButtons.forEach((card, index) => {
    card.addEventListener('click', () => {
      setActiveProject(index);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveProject(index);
      }
    });
  });

  prevBtn?.addEventListener('click', () => {
    if (!groupCount) return;
    currentGroup = currentGroup === 0 ? groupCount : currentGroup - 1;
    updateTrackTransform();
  });

  nextBtn?.addEventListener('click', () => {
    if (!groupCount) return;
    currentGroup = currentGroup === groupCount ? 0 : currentGroup + 1;
    updateTrackTransform();
  });

  setActiveProject(0, { skipScroll: true });

  const handleResize = () => {
    const updatedCardsPerView = getCardsPerView();
    if (updatedCardsPerView === cardsPerView) {
      return;
    }

    cardsPerView = updatedCardsPerView;
    groupCount = Math.max(0, Math.ceil(projects.length / cardsPerView) - 1);
    updateControls();

    const targetGroup = Math.floor(activeIndex / cardsPerView);
    currentGroup = Math.min(targetGroup, groupCount);
    updateTrackTransform();
  };

  window.addEventListener('resize', handleResize);
}

function renderFeaturedProject({
  project,
  featuredImage,
  featuredTitle,
  featuredDescription,
  featuredImpact,
  featuredHighlights,
  featuredTags,
  featuredActions,
}) {
  featuredImage.src = project.image;
  featuredImage.alt = project.imageAlt;
  featuredTitle.textContent = project.title;
  featuredDescription.textContent = project.description;

  if (project.impact) {
    featuredImpact.innerHTML = `<strong>Impact:</strong> ${project.impact}`;
    featuredImpact.style.display = '';
  } else {
    featuredImpact.textContent = '';
    featuredImpact.style.display = 'none';
  }

  featuredHighlights.innerHTML = '';
  if (project.highlights?.length) {
    project.highlights.forEach((highlight) => {
      const item = document.createElement('li');
      item.innerHTML = highlight;
      featuredHighlights.appendChild(item);
    });
    featuredHighlights.style.display = '';
  } else {
    featuredHighlights.style.display = 'none';
  }

  featuredTags.innerHTML = '';
  if (project.tags?.length) {
    project.tags.forEach((tag) => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag';
      tagElement.textContent = tag;
      featuredTags.appendChild(tagElement);
    });
    featuredTags.style.display = '';
  } else {
    featuredTags.style.display = 'none';
  }

  featuredActions.innerHTML = '';
  if (project.links?.length) {
    project.links.forEach((link) => {
      const elementTag = link.disabled || !link.url ? 'span' : 'a';
      const element = document.createElement(elementTag);

      const baseClass =
        link.variant === 'primary'
          ? 'btn btn-primary'
          : link.variant === 'text'
          ? 'btn btn-text'
          : 'btn btn-outline';

      element.className = baseClass;
      if (link.disabled || !link.url) {
        element.classList.add('is-disabled');
        element.setAttribute('aria-disabled', 'true');
        element.setAttribute('tabindex', '-1');
      } else {
        element.href = link.url;
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
      }

      element.textContent = link.label;
      featuredActions.appendChild(element);
    });
    featuredActions.style.display = '';
  } else {
    featuredActions.style.display = 'none';
  }
}

function initScrollReveal() {
  const revealElements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
