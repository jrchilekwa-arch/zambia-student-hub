/* =========================================================
   🇿🇲 ZAMBIA STUDENT HUB
   COMPLETE APP.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
     DATA
     ========================================================= */

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
      description: "Introduction to important science concepts and experiments."
    },
    {
      grade: "Grade 8",
      subject: "Mathematics",
      icon: "📐",
      title: "Junior Mathematics",
      description: "Algebra, geometry, fractions and mathematical problem solving."
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
      description: "Cells, organisms, reproduction and basic biology concepts."
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
      description: "Physical geography, human geography and environmental topics."
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
      description: "Business concepts, entrepreneurship and examination revision."
    }
  ];


  /* =========================================================
     PAST PAPERS
     ========================================================= */

  const pastPapers = [
    {
      grade: "Grade 7",
      subject: "Mathematics",
      year: "2024",
      icon: "📐",
      title: "Grade 7 Mathematics",
      description: "Practice mathematics questions for Grade 7 learners."
    },
    {
      grade: "Grade 7",
      subject: "English",
      year: "2024",
      icon: "📖",
      title: "Grade 7 English",
      description: "Practice English questions covering language and comprehension."
    },
    {
      grade: "Grade 9",
      subject: "Mathematics",
      year: "2023",
      icon: "📊",
      title: "Grade 9 Mathematics",
      description: "Junior secondary mathematics examination practice."
    },
    {
      grade: "Grade 9",
      subject: "Science",
      year: "2023",
      icon: "🔬",
      title: "Grade 9 Science",
      description: "Science revision questions for examination preparation."
    },
    {
      grade: "Grade 12",
      subject: "Mathematics",
      year: "2024",
      icon: "📈",
      title: "Grade 12 Mathematics",
      description: "Senior secondary mathematics examination practice."
    },
    {
      grade: "Grade 12",
      subject: "Biology",
      year: "2024",
      icon: "🧬",
      title: "Grade 12 Biology",
      description: "Biology revision and examination practice questions."
    },
    {
      grade: "Grade 12",
      subject: "Physics",
      year: "2023",
      icon: "⚡",
      title: "Grade 12 Physics",
      description: "Physics examination practice covering major topics."
    },
    {
      grade: "Grade 12",
      subject: "Chemistry",
      year: "2023",
      icon: "⚗️",
      title: "Grade 12 Chemistry",
      description: "Chemistry revision questions and examination preparation."
    }
  ];


  /* =========================================================
     OPPORTUNITIES
     ========================================================= */

  const opportunities = [
    {
      icon: "🎓",
      title: "Scholarships",
      description: "Look for scholarships and education funding opportunities."
    },
    {
      icon: "🏫",
      title: "University Opportunities",
      description: "Explore opportunities for further education and university study."
    },
    {
      icon: "💼",
      title: "Student Jobs",
      description: "Discover useful work and skill-building opportunities for students."
    },
    {
      icon: "🌍",
      title: "International Opportunities",
      description: "Explore educational opportunities available beyond Zambia."
    }
  ];


  /* =========================================================
     ELEMENTS
     ========================================================= */

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


  /* =========================================================
     RENDER RESOURCES
     ========================================================= */

  function renderResources() {

    if (!resourceGrid) return;

    const selectedGrade = gradeFilter
      ? gradeFilter.value
      : "all";

    const selectedSubject = subjectFilter
      ? subjectFilter.value
      : "all";

    const filteredResources = resources.filter(function (item) {

      const gradeMatch =
        selectedGrade === "all" ||
        item.grade === selectedGrade;

      const subjectMatch =
        selectedSubject === "all" ||
        item.subject === selectedSubject;

      return gradeMatch && subjectMatch;
    });


    if (filteredResources.length === 0) {

      resourceGrid.innerHTML = `
        <div class="empty-state">
          <div>📚</div>
          <h3>No resources found</h3>
          <p>Try selecting another grade or subject.</p>
        </div>
      `;

      return;
    }


    resourceGrid.innerHTML = filteredResources.map(function (item) {

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


  /* =========================================================
     RENDER PAST PAPERS
     ========================================================= */

  function renderPastPapers() {

    if (!paperGrid) return;


    if (pastPapers.length === 0) {

      paperGrid.innerHTML = `
        <div class="empty-state">
          <div>📝</div>
          <h3>No past papers available</h3>
          <p>Past papers will appear here when they are added.</p>
        </div>
      `;

      return;
    }


    paperGrid.innerHTML = pastPapers.map(function (paper, index) {

      return `
        <article class="paper-card">

          <div class="card-icon">
            ${paper.icon}
          </div>

          <span class="card-tag">
            ${paper.grade}
          </span>

          <h3>
            ${paper.title}
          </h3>

          <p>
            ${paper.description}
          </p>

          <div class="paper-year">
            📅 ${paper.year}
          </div>

          <div class="card-footer">

            <button
              class="view-button"
              onclick="openPaper(${index})">
              📄 View Paper
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


  /* =========================================================
     RENDER OPPORTUNITIES
     ========================================================= */

  function renderOpportunities() {

    if (!opportunityGrid) return;


    opportunityGrid.innerHTML = opportunities.map(function (item) {

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


  /* =========================================================
     SEARCH
     ========================================================= */

  function performSearch() {

    if (!searchInput || !searchResults) return;

    const query = searchInput.value
      .trim()
      .toLowerCase();


    if (query === "") {

      searchResults.innerHTML = "";

      return;
    }


    const resourceMatches = resources.filter(function (item) {

      return (
        item.title.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query) ||
        item.grade.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );

    });


    const paperMatches = pastPapers.filter(function (item) {

      return (
        item.title.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query) ||
        item.grade.toLowerCase().includes(query) ||
        item.year.includes(query)
      );

    });


    const totalResults =
      resourceMatches.length +
      paperMatches.length;


    if (totalResults === 0) {

      searchResults.innerHTML = `
        <div class="empty-state">
          <div>🔎</div>
          <h3>No results found</h3>
          <p>Try searching for Mathematics, Grade 12, Biology, papers, etc.</p>
        </div>
      `;

      return;
    }


    let html = `
      <div class="search-result-header">
        <h3>🔎 Search Results</h3>
        <p>${totalResults} result(s) found.</p>
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
            <small>${item.grade} • ${item.subject}</small>
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
            <strong>${item.title} Past Paper</strong>
            <small>${item.grade} • ${item.subject} • ${item.year}</small>
          </div>

        </div>
      `;

    });


    searchResults.innerHTML = html;
  }


  /* =========================================================
     SAVE PAST PAPER
     ========================================================= */

  window.savePaper = function (index, button) {

    const paper = pastPapers[index];

    if (!paper) return;


    let savedPapers =
      JSON.parse(localStorage.getItem("zsh_saved_papers")) || [];


    const exists = savedPapers.some(function (item) {

      return (
        item.title === paper.title &&
        item.year === paper.year
      );

    });


    if (exists) {

      savedPapers = savedPapers.filter(function (item) {

        return !(
          item.title === paper.title &&
          item.year === paper.year
        );

      });

      localStorage.setItem(
        "zsh_saved_papers",
        JSON.stringify(savedPapers)
      );

      button.innerHTML = "☆ Save";

      return;
    }


    savedPapers.push(paper);


    localStorage.setItem(
      "zsh_saved_papers",
      JSON.stringify(savedPapers)
    );


    button.innerHTML = "⭐ Saved";
  };


  /* =========================================================
     VIEW PAPER
     ========================================================= */

  window.openPaper = function (index) {

    const paper = pastPapers[index];

    if (!paper) return;


    alert(
      "📄 " +
      paper.title +
      " — " +
      paper.year +
      "\n\n" +
      "This is a sample past-paper listing.\n\n" +
      "The actual PDF can be connected here later."
    );
  };


  /* =========================================================
     GENERAL MESSAGE
     ========================================================= */

  window.showMessage = function (title) {

    alert(
      "📚 " +
      title +
      "\n\n" +
      "This resource section is ready. " +
      "You can add the actual PDF, lesson or resource link later."
    );
  };


  /* =========================================================
     MOBILE MENU
     ========================================================= */

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

      mobileMenu.classList.toggle("active");

    });


    const mobileLinks =
      mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

      });

    });
  }


  /* =========================================================
     FILTER EVENTS
     ========================================================= */

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


  /* =========================================================
     SEARCH EVENTS
     ========================================================= */

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


    searchInput.addEventListener(
      "input",
      function () {

        if (searchInput.value.trim() === "") {

          searchResults.innerHTML = "";

        }

      }
    );
  }


  /* =========================================================
     FOOTER YEAR
     ========================================================= */

  const yearElement =
    document.getElementById("year");


  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =========================================================
     START WEBSITE
     ========================================================= */

  renderResources();

  renderPastPapers();

  renderOpportunities();

});
