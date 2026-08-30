/* =====================================================
   ZAMBIA STUDENT HUB 🇿🇲
   COMPLETE APP.JS
===================================================== */


/* =====================================================
   RESOURCE LIBRARY
===================================================== */

const resources = [

  /* GRADE 7 */

  {
    id: "g7math",
    grade: "Grade 7",
    subject: "Mathematics",
    icon: "📐",
    title: "Grade 7 Mathematics",
    description: "Numbers, fractions, decimals, geometry and problem solving."
  },

  {
    id: "g7english",
    grade: "Grade 7",
    subject: "English",
    icon: "📖",
    title: "Grade 7 English",
    description: "Grammar, comprehension, vocabulary and writing skills."
  },

  {
    id: "g7science",
    grade: "Grade 7",
    subject: "Science",
    icon: "🔬",
    title: "Grade 7 Science",
    description: "Basic scientific concepts, health and the environment."
  },

  {
    id: "g7history",
    grade: "Grade 7",
    subject: "History",
    icon: "🏛️",
    title: "Grade 7 History",
    description: "Introduction to history and important historical events."
  },

  {
    id: "g7geography",
    grade: "Grade 7",
    subject: "Geography",
    icon: "🌍",
    title: "Grade 7 Geography",
    description: "Maps, weather, environment and geographical features."
  },


  /* GRADE 8 */

  {
    id: "g8math",
    grade: "Grade 8",
    subject: "Mathematics",
    icon: "📐",
    title: "Grade 8 Mathematics",
    description: "Algebra, geometry, percentages and mathematical reasoning."
  },

  {
    id: "g8english",
    grade: "Grade 8",
    subject: "English",
    icon: "📖",
    title: "Grade 8 English",
    description: "Reading, grammar, vocabulary and composition."
  },

  {
    id: "g8science",
    grade: "Grade 8",
    subject: "Science",
    icon: "🔬",
    title: "Grade 8 Science",
    description: "Science concepts, experiments and everyday applications."
  },

  {
    id: "g8history",
    grade: "Grade 8",
    subject: "History",
    icon: "🏛️",
    title: "Grade 8 History",
    description: "Historical developments and important events."
  },

  {
    id: "g8geography",
    grade: "Grade 8",
    subject: "Geography",
    icon: "🌍",
    title: "Grade 8 Geography",
    description: "Physical and human geography concepts."
  },


  /* GRADE 9 */

  {
    id: "g9math",
    grade: "Grade 9",
    subject: "Mathematics",
    icon: "📊",
    title: "Grade 9 Mathematics",
    description: "Algebra, statistics, geometry and problem solving."
  },

  {
    id: "g9english",
    grade: "Grade 9",
    subject: "English",
    icon: "📚",
    title: "Grade 9 English",
    description: "Advanced comprehension, grammar and writing."
  },

  {
    id: "g9science",
    grade: "Grade 9",
    subject: "Science",
    icon: "🧪",
    title: "Grade 9 Science",
    description: "Energy, matter, living systems and scientific investigation."
  },

  {
    id: "g9history",
    grade: "Grade 9",
    subject: "History",
    icon: "🏛️",
    title: "Grade 9 History",
    description: "African and world history study materials."
  },

  {
    id: "g9geography",
    grade: "Grade 9",
    subject: "Geography",
    icon: "🌍",
    title: "Grade 9 Geography",
    description: "Population, resources, climate and geographical processes."
  },


  /* GRADE 10 */

  {
    id: "g10math",
    grade: "Grade 10",
    subject: "Mathematics",
    icon: "📐",
    title: "Grade 10 Mathematics",
    description: "Algebra, functions, geometry and statistics."
  },

  {
    id: "g10english",
    grade: "Grade 10",
    subject: "English",
    icon: "📖",
    title: "Grade 10 English",
    description: "Language, comprehension and communication skills."
  },

  {
    id: "g10biology",
    grade: "Grade 10",
    subject: "Biology",
    icon: "🧬",
    title: "Grade 10 Biology",
    description: "Cells, organisms, nutrition and biological processes."
  },

  {
    id: "g10chemistry",
    grade: "Grade 10",
    subject: "Chemistry",
    icon: "⚗️",
    title: "Grade 10 Chemistry",
    description: "Atoms, elements, compounds and chemical reactions."
  },

  {
    id: "g10physics",
    grade: "Grade 10",
    subject: "Physics",
    icon: "⚡",
    title: "Grade 10 Physics",
    description: "Motion, forces, energy and measurements."
  },

  {
    id: "g10ict",
    grade: "Grade 10",
    subject: "ICT",
    icon: "💻",
    title: "Grade 10 ICT",
    description: "Computer systems, software and digital technologies."
  },


  /* GRADE 11 */

  {
    id: "g11math",
    grade: "Grade 11",
    subject: "Mathematics",
    icon: "📊",
    title: "Grade 11 Mathematics",
    description: "Advanced algebra, functions, geometry and statistics."
  },

  {
    id: "g11biology",
    grade: "Grade 11",
    subject: "Biology",
    icon: "🧬",
    title: "Grade 11 Biology",
    description: "Genetics, physiology, ecology and biological systems."
  },

  {
    id: "g11chemistry",
    grade: "Grade 11",
    subject: "Chemistry",
    icon: "⚗️",
    title: "Grade 11 Chemistry",
    description: "Chemical bonding, reactions and quantitative chemistry."
  },

  {
    id: "g11physics",
    grade: "Grade 11",
    subject: "Physics",
    icon: "⚡",
    title: "Grade 11 Physics",
    description: "Mechanics, electricity, waves and energy."
  },

  {
    id: "g11ict",
    grade: "Grade 11",
    subject: "ICT",
    icon: "💻",
    title: "Grade 11 ICT",
    description: "Information systems, programming and digital technology."
  },

  {
    id: "g11business",
    grade: "Grade 11",
    subject: "Business Studies",
    icon: "💼",
    title: "Grade 11 Business Studies",
    description: "Business concepts, entrepreneurship and management."
  },


  /* GRADE 12 */

  {
    id: "g12math",
    grade: "Grade 12",
    subject: "Mathematics",
    icon: "📐",
    title: "Grade 12 Mathematics",
    description: "Exam preparation, algebra, geometry and statistics."
  },

  {
    id: "g12english",
    grade: "Grade 12",
    subject: "English",
    icon: "📖",
    title: "Grade 12 English",
    description: "Comprehension, writing, grammar and examination preparation."
  },

  {
    id: "g12biology",
    grade: "Grade 12",
    subject: "Biology",
    icon: "🧬",
    title: "Grade 12 Biology",
    description: "Advanced biology concepts and examination preparation."
  },

  {
    id: "g12chemistry",
    grade: "Grade 12",
    subject: "Chemistry",
    icon: "⚗️",
    title: "Grade 12 Chemistry",
    description: "Advanced chemistry concepts and exam revision."
  },

  {
    id: "g12physics",
    grade: "Grade 12",
    subject: "Physics",
    icon: "⚡",
    title: "Grade 12 Physics",
    description: "Advanced physics concepts and exam preparation."
  },

  {
    id: "g12geography",
    grade: "Grade 12",
    subject: "Geography",
    icon: "🌍",
    title: "Grade 12 Geography",
    description: "Physical, human and environmental geography."
  },

  {
    id: "g12economics",
    grade: "Grade 12",
    subject: "Economics",
    icon: "💰",
    title: "Grade 12 Economics",
    description: "Markets, production, national economy and development."
  },

  {
    id: "g12business",
    grade: "Grade 12",
    subject: "Business Studies",
    icon: "💼",
    title: "Grade 12 Business Studies",
    description: "Business management, finance and entrepreneurship."
  }

];


/* =====================================================
   PAST PAPERS
===================================================== */

const papers = [

  {
    id: "paper-math",
    grade: "Grade 12",
    subject: "Mathematics",
    icon: "📝",
    title: "Mathematics Practice Paper",
    description: "Practice mathematics questions before your examination."
  },

  {
    id: "paper-english",
    grade: "Grade 12",
    subject: "English",
    icon: "📄",
    title: "English Practice Paper",
    description: "Practice comprehension and writing questions."
  },

  {
    id: "paper-biology",
    grade: "Grade 12",
    subject: "Biology",
    icon: "🧬",
    title: "Biology Practice Paper",
    description: "Review important biology concepts."
  },

  {
    id: "paper-chemistry",
    grade: "Grade 12",
    subject: "Chemistry",
    icon: "⚗️",
    title: "Chemistry Practice Paper",
    description: "Practice chemistry questions and calculations."
  },

  {
    id: "paper-physics",
    grade: "Grade 12",
    subject: "Physics",
    icon: "⚡",
    title: "Physics Practice Paper",
    description: "Test your physics knowledge and problem solving."
  }

];


/* =====================================================
   OPPORTUNITIES
===================================================== */

const opportunities = [

  {
    id: "scholarships",
    icon: "🎓",
    type: "Scholarship",
    title: "Scholarship Opportunities",
    description: "Explore scholarships and financial support opportunities."
  },

  {
    id: "university",
    icon: "🏫",
    type: "Education",
    title: "University Opportunities",
    description: "Explore higher education and university opportunities."
  },

  {
    id: "skills",
    icon: "💻",
    type: "Skills",
    title: "Skills & Training",
    description: "Develop useful academic and digital skills."
  },

  {
    id: "careers",
    icon: "💼",
    type: "Career",
    title: "Career Opportunities",
    description: "Explore internships and career development resources."
  }

];


/* =====================================================
   PAGE ELEMENTS
===================================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const resourceGrid = document.getElementById("resourceGrid");
const paperGrid = document.getElementById("paperGrid");
const opportunityGrid = document.getElementById("opportunityGrid");

const gradeFilter = document.getElementById("gradeFilter");
const subjectFilter = document.getElementById("subjectFilter");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

const year = document.getElementById("year");


/* =====================================================
   MOBILE MENU
===================================================== */

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    const open = mobileMenu.classList.toggle("open");

    menuButton.textContent = open ? "✕" : "☰";

  });

}


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }

    if (menuButton) {
      menuButton.textContent = "☰";
    }

  });

});


/* =====================================================
   SAVED ITEMS
===================================================== */

function getSaved() {

  try {

    return JSON.parse(
      localStorage.getItem("zsh_saved") || "[]"
    );

  } catch (error) {

    return [];

  }

}


function isSaved(id) {

  return getSaved().includes(id);

}


function toggleSave(id) {

  let saved = getSaved();

  if (saved.includes(id)) {

    saved = saved.filter(item => item !== id);

  } else {

    saved.push(id);

  }

  localStorage.setItem(
    "zsh_saved",
    JSON.stringify(saved)
  );

  renderResources();
  renderPapers();

}


/* =====================================================
   RESOURCE RENDERING
===================================================== */

function renderResources() {

  if (!resourceGrid) return;

  const grade = gradeFilter
    ? gradeFilter.value
    : "all";

  const subject = subjectFilter
    ? subjectFilter.value
    : "all";


  const filtered = resources.filter(item => {

    const gradeOK =
      grade === "all" ||
      item.grade === grade;

    const subjectOK =
      subject === "all" ||
      item.subject === subject;

    return gradeOK && subjectOK;

  });


  if (!filtered.length) {

    resourceGrid.innerHTML = `
      <div class="empty-state">

        <h3>No resources found</h3>

        <p>
          Try selecting another grade or subject.
        </p>

      </div>
    `;

    return;

  }


  resourceGrid.innerHTML = filtered.map(item => {

    const saved = isSaved(item.id);

    return `

      <article class="resource-card">

        <div class="card-icon">
          ${item.icon}
        </div>

        <span class="card-meta">
          ${item.grade} • ${item.subject}
        </span>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

        <div class="card-actions">

          <button
            class="view-button"
            onclick="viewResource('${item.id}')">
            View
          </button>

          <button
            class="save-button ${saved ? "saved" : ""}"
            onclick="toggleSave('${item.id}')">

            ${saved ? "⭐ Saved" : "☆ Save"}

          </button>

        </div>

      </article>

    `;

  }).join("");

}


/* =====================================================
   PAST PAPER RENDERING
===================================================== */

function renderPapers() {

  if (!paperGrid) return;


  paperGrid.innerHTML = papers.map(item => {

    const saved = isSaved(item.id);

    return `

      <article class="paper-card">

        <div class="card-icon">
          ${item.icon}
        </div>

        <span class="card-meta">
          ${item.grade} • ${item.subject}
        </span>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

        <div class="card-actions">

          <button
            class="view-button"
            onclick="viewPaper('${item.id}')">
            View Paper
          </button>

          <button
            class="save-button ${saved ? "saved" : ""}"
            onclick="toggleSave('${item.id}')">

            ${saved ? "⭐ Saved" : "☆ Save"}

          </button>

        </div>

      </article>

    `;

  }).join("");

}


/* =====================================================
   OPPORTUNITY RENDERING
===================================================== */

function renderOpportunities() {

  if (!opportunityGrid) return;


  opportunityGrid.innerHTML =
    opportunities.map(item => {

      return `

        <article class="opportunity-card">

          <div class="card-icon">
            ${item.icon}
          </div>

          <span class="card-meta">
            ${item.type}
          </span>

          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.description}
          </p>

          <div class="card-actions">

            <button
              class="view-button"
              onclick="viewOpportunity('${item.id}')">
              Explore
            </button>

          </div>

        </article>

      `;

    }).join("");

}


/* =====================================================
   VIEW RESOURCE
===================================================== */

function viewResource(id) {

  const item = resources.find(
    x => x.id === id
  );

  if (!item) return;


  /* =================================================
     GRADE 7 MATHEMATICS — FRACTIONS
  ================================================= */

  if (id === "g7math") {

    const existing =
      document.getElementById("lessonModal");

    if (existing) {
      existing.remove();
    }


    document.body.insertAdjacentHTML(
      "beforeend",
      `

      <div id="lessonModal" class="lesson-modal">

        <div class="lesson-container">

          <button
            class="lesson-close"
            onclick="closeLesson()">
            ✕
          </button>


          <div class="lesson-header">

            <span>
              📐 Grade 7 Mathematics
            </span>

            <h1>
              Fractions
            </h1>

            <p>
              Learn the basics, practise and test yourself.
            </p>

          </div>


          <div class="lesson-content">


            <!-- INTRODUCTION -->

            <div class="lesson-section">

              <h2>
                📖 What is a Fraction?
              </h2>

              <p>
                A fraction shows a part of a whole.
              </p>


              <div class="fraction-example">

                <strong>3</strong>

                <span>―</span>

                <strong>4</strong>

              </div>


              <p>
                The <strong>numerator</strong>
                is the top number.
                It tells us how many parts we have.
              </p>


              <p>
                The <strong>denominator</strong>
                is the bottom number.
                It tells us how many equal parts
                make the whole.
              </p>

            </div>


            <!-- TYPES -->

            <div class="lesson-section">

              <h2>
                📚 Types of Fractions
              </h2>


              <div class="lesson-card">

                <h3>
                  1️⃣ Proper Fraction
                </h3>

                <p>
                  The numerator is smaller
                  than the denominator.
                </p>

                <strong>
                  Example: 3/5
                </strong>

              </div>


              <div class="lesson-card">

                <h3>
                  2️⃣ Improper Fraction
                </h3>

                <p>
                  The numerator is equal to
                  or greater than the denominator.
                </p>

                <strong>
                  Example: 7/4
                </strong>

              </div>


              <div class="lesson-card">

                <h3>
                  3️⃣ Mixed Number
                </h3>

                <p>
                  A whole number together
                  with a fraction.
                </p>

                <strong>
                  Example: 1 3/4
                </strong>

              </div>

            </div>


            <!-- ADDITION -->

            <div class="lesson-section">

              <h2>
                ➕ Adding Fractions
              </h2>

              <p>
                When the denominators are the same,
                add the numerators.
              </p>


              <div class="math-box">

                2/7 + 3/7 =
                <strong>5/7</strong>

              </div>


              <div class="math-box">

                1/5 + 2/5 =
                <strong>3/5</strong>

              </div>

            </div>


            <!-- SUBTRACTION -->

            <div class="lesson-section">

              <h2>
                ➖ Subtracting Fractions
              </h2>

              <p>
                When the denominators are the same,
                subtract the numerators.
              </p>


              <div class="math-box">

                5/8 − 2/8 =
                <strong>3/8</strong>

              </div>

            </div>


            <!-- MULTIPLICATION -->

            <div class="lesson-section">

              <h2>
                ✖️ Multiplying Fractions
              </h2>

              <p>
                Multiply the numerators together,
                then multiply the denominators together.
              </p>


              <div class="math-box">

                2/3 × 4/5 =
                <strong>8/15</strong>

              </div>

            </div>


            <!-- DIVISION -->

            <div class="lesson-section">

              <h2>
                ➗ Dividing Fractions
              </h2>

              <p>
                Keep the first fraction,
                change ÷ to ×,
                then turn the second fraction upside down.
              </p>


              <div class="math-box">

                2/3 ÷ 4/5

    
