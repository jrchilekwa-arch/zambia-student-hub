document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     RESOURCES
  ========================= */

  const resources = [
    {
      grade: "Grade 7",
      subject: "Mathematics",
      icon: "📐",
      title: "Mathematics Basics",
      description: "Numbers, fractions, algebra and problem-solving practice."
    },
    {
      grade: "Grade 7",
      subject: "English",
      icon: "📖",
      title: "English Language Skills",
      description: "Grammar, comprehension, vocabulary and writing practice."
    },
    {
      grade: "Grade 7",
      subject: "Science",
      icon: "🔬",
      title: "Integrated Science",
      description: "Important science concepts and examination preparation."
    },
    {
      grade: "Grade 8",
      subject: "Mathematics",
      icon: "📐",
      title: "Junior Mathematics",
      description: "Algebra, geometry, fractions and problem solving."
    },
    {
      grade: "Grade 8",
      subject: "English",
      icon: "📚",
      title: "English Study Guide",
      description: "Improve grammar, reading comprehension and writing."
    },
    {
      grade: "Grade 9",
      subject: "Mathematics",
      icon: "📊",
      title: "Junior Secondary Mathematics",
      description: "Algebra, geometry, statistics and examination preparation."
    },
    {
      grade: "Grade 9",
      subject: "Science",
      icon: "🧪",
      title: "Science Revision",
      description: "Review important science topics and practice questions."
    },
    {
      grade: "Grade 10",
      subject: "Biology",
      icon: "🧬",
      title: "Biology Fundamentals",
      description: "Cells, organisms, reproduction and biology concepts."
    },
    {
      grade: "Grade 10",
      subject: "Chemistry",
      icon: "⚗️",
      title: "Chemistry Basics",
      description: "Atoms, elements, compounds and chemical reactions."
    },
    {
      grade: "Grade 11",
      subject: "Physics",
      icon: "⚡",
      title: "Physics Revision",
      description: "Motion, forces, energy, electricity and waves."
    },
    {
      grade: "Grade 11",
      subject: "Geography",
      icon: "🌍",
      title: "Geography Study Guide",
      description: "Physical geography, human geography and environment."
    },
    {
      grade: "Grade 12",
      subject: "Mathematics",
      icon: "📈",
      title: "Senior Mathematics",
      description: "Advanced mathematics revision and examination preparation."
    },
    {
      grade: "Grade 12",
      subject: "ICT",
      icon: "💻",
      title: "ICT Revision",
      description: "Computer studies, information systems and technology."
    },
    {
      grade: "Grade 12",
      subject: "Business Studies",
      icon: "💼",
      title: "Business Studies Guide",
      description: "Business concepts and examination revision."
    }
  ];


  /* =========================
     PAST PAPERS
  ========================= */

  const pastPapers = [
    {
      grade: "Grade 9",
      subject: "Specimen Papers",
      year: "2020 & Beyond",
      icon: "📝",
      title: "Grade 9 ECZ Specimen Papers",
      description: "Official Grade 9 specimen papers provided by the Examinations Council of Zambia."
    },
    {
      grade: "Grade 12",
      subject: "Specimen Papers",
      year: "2020 & Beyond",
      icon: "📝",
      title: "Grade 12 ECZ Specimen Papers",
      description: "Official Grade 12 specimen papers provided by the Examinations Council of Zambia."
    }
  ];


  /* =========================
     OPPORTUNITIES
  ========================= */

  const opportunities = [
    {
      icon: "🎓",
      title: "Scholarships",
      description: "Look for scholarships and education funding opportunities."
    },
    {
      icon: "🏫",
      title: "University Opportunities",
      description: "Explore opportunities for further education."
    },
    {
      icon: "💼",
      title: "Student Jobs",
      description: "Discover work and skill-building opportunities."
    },
    {
      icon: "🌍",
      title: "International Opportunities",
      description: "Explore educational opportunities outside Zambia."
    }
  ];


  /* =========================
     ELEMENTS
  ========================= */

  const resourceGrid = document.getElementById("resourceGrid");
  const paperGrid = document.getElementById("paperGrid");
  const opportunityGrid = document.getElementById("opportunityGrid");

  const gradeFilter = document.getElementById("gradeFilter");
  const subjectFilter = document.getElementById("subjectFilter");

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");


  /* =========================
     RESOURCES
  ========================= */

  function renderResources() {

    if (!resourceGrid) return;

    const selectedGrade =
      gradeFilter ? gradeFilter.value : "all";

    const selectedSubject =
      subjectFilter ? subjectFilter.value : "all";

    const filtered = resources.filter(function (item) {

      const gradeMatch =
        selectedGrade === "all" ||
        item.grade === selectedGrade;

      const subjectMatch =
        selectedSubject === "all" ||
        item.subject === selectedSubject;

      return gradeMatch && subjectMatch;
    });


    if (filtered.length === 0) {

      resourceGrid.innerHTML = `
        <div class="empty-state">
          <div>📚</div>
          <h3>No resources found</h3>
          <p>Try another grade or subject.</p>
        </div>
      `;

      return;
    }


    resourceGrid.innerHTML = filtered.map(function (item) {

      return `
        <article class="resource-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <span class="card-tag">
            ${item.grade}
          </span>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

          <div class="card-footer">

            <span class="subject-name">
              ${item.subject}
            </span>

            <button
              class="view-button"
              onclick="showMessage('${item.title}')">
              View
            </button>

          </div>

        </article>
      `;

    }).join("");
  }


  /* =========================
     PAST PAPERS
  ========================= */

  function renderPastPapers() {

    if (!paperGrid) return;


    paperGrid.innerHTML = pastPapers.map(function (paper, index) {

      return `
        <article class="paper-card">

          <div class="card-icon">
            ${paper.icon}
          </div>

          <span class="card-tag">
            ${paper.grade}
          </span>

          <h3>${paper.title}</h3>

          <p>${paper.description}</p>

          <div class="paper-year">
            📅 ${paper.year}
          </div>

          <div class="card-footer">

            <button
              class="view-button"
              onclick="openPaper(${index})">
              📄 View Papers
            </button>

            <button
              class="save-button"
              onclick="savePaper(${index}, this)">
              ☆ Save
            </button>

          </div>

        </article>
      `;

    }).join("");
  }


  /* =========================
     OPEN OFFICIAL ECZ PAPERS
  ========================= */

  window.openPaper = function (index) {

    const paper = pastPapers[index];

    if (!paper) return;

    const eczUrl =
      "https://www.exams-council.org.zm/guidlines/";

    window.open(eczUrl, "_blank");
  };


  /* =========================
     SAVE PAPERS
  ========================= */

  window.savePaper = function (index, button) {

    const paper = pastPapers[index];

    if (!paper) return;


    let saved =
      JSON.parse(
        localStorage.getItem("zsh_saved_papers")
      ) || [];


    const exists = saved.some(function (item) {

      return (
        item.title === paper.title &&
        item.year === paper.year
      );

    });


    if (exists) {

      saved = saved.filter(function (item) {

        return !(
          item.title === paper.title &&
          item.year === paper.year
        );

      });

      button.innerHTML = "☆ Save";

    } else {

      saved.push(paper);

      button.innerHTML = "⭐ Saved";
    }


    localStorage.setItem(
      "zsh_saved_papers",
      JSON.stringify(saved)
    );
  };


  /* =========================
     OPPORTUNITIES
  ========================= */

  function renderOpportunities() {

    if (!opportunityGrid) return;

    opportunityGrid.innerHTML =
      opportunities.map(function (item) {

        return `
          <article class="opportunity-card">

            <div class="card-icon">
              ${item.icon}
            </div>

            <h3>${item.title}</h3>

            <p>${item.description}</p>

            <button
              class="view-button"
              onclick="showMessage('${item.title}')">
              Explore
            </button>

          </article>
        `;

      }).join("");
  }


  /* =========================
     MESSAGE
  ========================= */

  window.showMessage = function (title) {

    alert(
      "📚 " +
      title +
      "\n\n" +
      "This section is ready for additional learning materials."
    );
  };


  /* =========================
     SEARCH
  ========================= */

  function performSearch() {

    if (!searchInput || !searchResults) return;

    const query =
      searchInput.value.trim().toLowerCase();


    if (!query) {

      searchResults.innerHTML = "";

      return;
    }


    const resourceMatches =
      resources.filter(function (item) {

        return (
          item.title.toLowerCase().includes(query) ||
          item.subject.toLowerCase().includes(query) ||
          item.grade.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );

      });


    const paperMatches =
      pastPapers.filter(function (item) {

        return (
          item.title.toLowerCase().includes(query) ||
          item.subject.toLowerCase().includes(query) ||
          item.grade.toLowerCase().includes(query) ||
          item.year.toLowerCase().includes(query)
        );

      });


    const total =
      resourceMatches.length +
      paperMatches.length;


    if (total === 0) {

      searchResults.innerHTML = `
        <div class="empty-state">
          <div>🔎</div>
          <h3>No results found</h3>
          <p>Try Mathematics, Grade 12, Biology or papers.</p>
        </div>
      `;

      return;
    }


    let html = `
      <div class="search-result-header">
        <h3>🔎 Search Results</h3>
        <p>${total} result(s) found.</p>
      </div>
    `;


    resourceMatches.forEach(function (item) {

      html += `
        <div class="search-result-item">

          <span class="search-result-icon">
            ${item.icon}
          </span>

          <div>
            <strong>${item.title}</strong>
            <small>
              ${item.grade} • ${item.subject}
            </small>
          </div>

        </div>
      `;

    });


    paperMatches.forEach(function (item) {

      html += `
        <div class="search-result-item">

          <span class="search-result-icon">
            📝
          </span>

          <div>
            <strong>${item.title}</strong>
            <small>
              ${item.grade} • ${item.year}
            </small>
          </div>

        </div>
      `;

    });


    searchResults.innerHTML = html;
  }


  /* =========================
     SEARCH EVENTS
  ========================= */

  if (searchButton) {

    searchButton.addEventListener(
      "click",
      performSearch
    );
  }


  if (searchInput) {

    searchInput.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {
          performSearch();
        }

      }
    );
  }


  /* =========================
     FILTERS
  ========================= */

  if (gradeFilter) {

    gradeFilter.addEventListener(
      "change",
      renderResources
    );
  }


  if (subjectFilter) {

    subjectFilter.addEventListener(
      "change",
      renderResources
    );
  }


  /* =========================
     MOBILE MENU
  ========================= */

  if (menuButton && mobileMenu) {

    menuButton.addEventListener(
      "click",
      function () {

        mobileMenu.classList.toggle("active");

      }
    );


    mobileMenu
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener(
          "click",
          function () {

            mobileMenu.classList.remove("active");

          }
        );

      });
  }


  /* =========================
     YEAR
  ========================= */

  const yearElement =
    document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =========================
     START
  ========================= */

  renderResources();
  renderPastPapers();
  renderOpportunities();

});
