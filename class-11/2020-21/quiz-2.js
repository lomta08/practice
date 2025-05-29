let timerInterval;
let timeLeft = 3 * 60 * 60; // 3 Hours 

function startQuiz(withTimer) {
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";

  if (withTimer) {
    document.getElementById("timer").style.display = "block";
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("დრო ამოიწურა! ქვიზი დასრულებულია.");
        quizForm.requestSubmit(); // safely submits even if clicked from code
      }
    }, 1000);
  }
}

function updateTimerDisplay() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}


const quizData = [
  {
    question: "იპოვეთ კუთხე \\( y = 5x - 2 \\) და \\( y = 3x + 1 \\) ფუნქციების გრაფიკებს შორის.",
    options: ["$arcsin\\frac{3}{5}$", "$arccos\\frac{3}{5}$", "$arctan\\frac{1}{8}$", "$arccot\\frac{2}{7}$", "$15^\\circ$", "$22.5^\\circ$"],
    correct: 2,
    tags: ["Trigonometry", "Graphs"]
  },
  {
    question: "წრფე აბსცისთა ღერძს კვეთს (1; 0) წერტილში და \\( y = f(x) \\) ფუნქციის გრაფიკს ეხება წერტილში, რომლის აბსცისაა 3. იპოვეთ \\( \\frac{f(3)}{f'(3)} \\).",
    options: ["$1$", "$-\\frac{2}{3}$", "$\\frac{3}{2}$", "$2$", "$-\\frac{1}{2}$", "$3$"],
    correct: 3,
    tags: ["Derivative", "Tangent"]
  },
  {
    question: "\\( y \\)-ღერძის A წერტილიდან \\( y = \\frac{\\sqrt{3}}{2}x^2 + \\frac{\\sqrt{3}}{2} \\) ფუნქციის გრაფიკისადმი გავლებულია ორი მხები, რომლებიც ერთმანეთთან 60° კუთხეს ადგენენ. იპოვეთ A კოორდინატები.",
    options: ["$A(0; 0.5)$", "$A(0; -2)$", "$A(0; -1)$", "$A(0; 1)$", "$A(0; 0)$", "$A(0; -0.5)$"],
    correct: 4,
    tags: ["Geometry", "Tangents"]
  },
  {
    question: "იპოვეთ \\( f(x) = x^4 - 6x^2 \\) ფუნქციის მინიმალური მნიშვნელობა.",
    options: ["$-9$", "$-5$", "$-14$", "$18$", "$0$", "$-15$"],
    correct: 0,
    tags: ["Functions", "Extrema"]
  },
  {
    question: "წესიერი ოთხკუთხა პრიზმის თორმეტივე წიბოს ჯამი 12-ის ტოლია. იპოვეთ გვერდითი ზედაპირის ფართობისა და ერთი ფუძის ფართობის ჯამის უდიდესი მნიშვნელობა.",
    options: ["$\\frac{11}{2}$", "$5$", "$2\\sqrt{7}$", "$6$", "$2\\sqrt{6}$", "$\\frac{36}{7}$"],
    correct: 5,
    tags: ["Solid Geometry", "Optimization"]
  },
  {
    question: "მართკუთხა საკოორდინატო სიბრტყის \\( f \\) გარდაქმნა წარმოადგენს ღერძულ სიმეტრიას \\( y = 2x + 1 \\) წრფის მიმართ. ჩამოთვლილთაგან რომელი წრფის მიმართ უნდა წარმოადგენდეს ღერძულ სიმეტრიას \\( g \\) გარდაქმნა, რომ \\( h = g \\circ f \\) კომპოზიცია აღმოჩნდეს იგივური გარდაქმნა?",
    options: ["$y = 2x + 1$", "$y = \\frac{1}{2}x - 1$", "$y = -2x$", "$y = 2x - 1$", "$y = -\\frac{1}{2}x$", "$y = -\\frac{1}{2}x - 1$"],
    correct: 0,
    tags: ["Transformations", "Symmetry"]
  },
  {
    question: "\\( y = x^4 + x^3 + x^2 + 7 \\) ფუნქციის გრაფიკზე რამდენი ისეთი წერტილია, რომელშის გავლებული მხები აბსცისათა ღერძის პარალელურია?",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$უმრავლესობა$"],
    correct: 1,
    tags: ["Functions", "Tangents"]
  },
  {
    question: "ჩამოთვლილთაგან რომელია \\( y = e^x \\) ფუნქციის გრაფიკის \\( (1; e) \\) წერტილში გამავალი მხები?",
    options: ["$y = -x + e + 1$", "$y = e^x$", "$y = -e^x + e$", "$y = e^x - e$", "$y = x + e - 1$", "$y = -e^x + 2e$"],
    correct: 1,
    tags: ["Exponential Functions", "Tangents"]
  },
  {
    question: "OxOy მართკუთხა საკოორდინატო სიბრტყეზე ჰომოთეტიას, ცენტრით K წერტილში და 2-ის ტოლი კოეფიციენტით, A(2; 2) წერტილი გადაყავს A1(3; 3) წერტილში. იპოვეთ K წერტილის კოორდინატები.",
    options: ["$(2; 3)$", "$(2; -3)$", "$(1; 1)$", "$(-2; 3)$", "$(2.5; 2.5)$", "$(0; 0)$"],
    correct: 1,
    tags: ["Homothety", "Coordinates"]
  },
  {
    question: "ჩამოთვლილთაგან რომელი არგუმენტია \\( y = x + \\frac{4}{x} + 2 \\) ფუნქციის კლებადობის შუალედიდან?",
    options: ["$x = -9$", "$x = -5$", "$x = -1$", "$x = 3$", "$x = 7$", "$ყველა წინა პასუხი მცდარია$"],
    correct: 2,
    tags: ["Functions", "Monotonicity"]
  },
  {
    question: "იპოვეთ \\( y = x + \\frac{4}{x} + 2 \\) ფუნქციის მინიმალური მნიშვნელობა \\( x \\)-ის დადებითი მნიშვნელობებისთვის.",
    options: ["$3$", "$4$", "$5$", "$6$", "$7$", "$8$"],
    correct: 3,
    tags: ["Functions", "Extrema"]
  },
  {
    question: "ჩამოთვლილთაგან რომელია ფუნქციის \\( y = x + \\frac{4}{x} + 2 \\) დახრილი ასიმპტოტი?",
    options: ["$y = 4x + 2$", "$y = x + 2$", "$y = 2x + 4$", "$y = -x + 4$", "$y = -x + 2$", "$y = x + 4$"],
    correct: 1,
    tags: ["Functions", "Asymptotes"]
  },
  {
    question: "კოორდინატთა სათავის გარშემო საათის ისრის მოძრაობის საწინააღმდეგო მიმართულებით 120°-ის ტოლი კუთხით მობრუნებისას რომელ წერტილში აისახება P(1; \\(\\sqrt{3}\\))?",
    options: ["$A(1; \\sqrt{3})$", "$B(-2; 0)$", "$C(-1; \\sqrt{3})$", "$D(-\\sqrt{3}; 1)$", "$E(-\\sqrt{3}; 0)$", "$F(-\\sqrt{3}; -\\sqrt{3})$"],
    correct: 1,
    tags: ["Rotation", "Coordinates"]
  },
  {
    question: "იპოვეთ კუთხე \\( 5x - 2y + 3z + 2 = 0 \\) და \\( x + y - z = 0 \\) განტოლებებით მოცემულ სიბრტყეებს შორის.",
    options: ["$\\arccos\\frac{3}{5}$", "$\\arctan 1$", "$\\arcsin\\frac{1}{2}$", "$60^\\circ$", "$90^\\circ$", "$\\arccos\\frac{4}{5}$"],
    correct: 4,
    tags: ["3D Geometry", "Planes"]
  },
  {
    question: "3-ის ტოლი მსახველის მქონე კონუსებიდან იპოვეთ იმ კონუსის სიმაღლე, რომელსაც უდიდესი მოცულობა აქვს.",
    options: ["$\\frac{3\\sqrt{2}}{2}$", "$\\frac{3}{2}$", "$2$", "$\\sqrt{3}$", "$1$", "$\\frac{3\\sqrt{3}}{2}$"],
    correct: 3,
    tags: ["Geometry", "Optimization"]
  },
  {
    question: "პარამეტრ \\( p \\) რა მნიშვნელობისთვის გაივლის \\( y = x^3 - px \\) ფუნქციის გრაფიკის \\( x=1 \\) აბსცისიან წერტილში გამავალი მხები (2; 3) წერტილზე?",
    options: ["$-2$", "$-3$", "$0$", "$-0.5$", "$0.5$", "$2$"],
    correct: 4,
    tags: ["Functions", "Tangents"]
  },
  {
    question: "ჩამოთვლილთაგან რომელია \\( \\log_2(-x) + \\log_2(x^2) = 1 \\) განტოლების ამონახსნი?",
    options: ["$-\\sqrt{2}$", "$-2$", "$\\sqrt{2}$", "$-1$", "$1$", "$-\\frac{\\sqrt{2}}{3}$"],
    correct: 5,
    tags: ["Logarithmic Equations"]
  },
  {
    question: "საკოორდინატო სივრცეში იპოვეთ იმ პირამიდის მოცულობა, რომელიც შემოსაზღვრულია საკოორდინატო სიბრტყეებითა და \\( 6x - 5y + 10z - 30 = 0 \\) სიბრტყით.",
    options: ["$60$", "$\\sqrt{161}$", "$9000$", "$300$", "$30$", "$15$"],
    correct: 5,
    tags: ["3D Geometry", "Volume"]
  },
  {
    question: "საკოორდინატო სივრცეში იპოვეთ მანძილი \\( 6x - 2y + 3z - 1 = 0 \\) და \\( 6x - 2y + 3z + 20 = 0 \\) პარალელურ სიბრტყეებს შორის.",
    options: ["$3$", "$19$", "$7$", "$21$", "$36$", "$4\\sqrt{3}$"],
    correct: 0,
    tags: ["3D Geometry", "Distance"]
  },
  {
    question: "რამდენი მთელი \\( x \\) აკმაყოფილებს \\( 1.99 < 2x < 199 \\) უტოლობას?",
    options: ["$2$", "$4$", "$5$", "$7$", "$8$", "$10$"],
    correct: 3,
    tags: ["Inequalities", "Integers"]
  },
  {
    question: "იპოვეთ \\( a + b \\), თუ \\( 9^a = 63 \\) და \\( 3^b = \\frac{1}{\\sqrt{7}} \\).",
    options: ["$37$", "$-12$", "$\\log 32$", "$73$", "$1$", "$\\log 21$"],
    correct: 4,
    tags: ["Algebra"]
  },
  {
    question: "\\( a = \\log_2 5 \\), \\( b = \\log_5 2 \\) და \\( c = 199 - 199 \\) რიცხვები დაალაგეთ ზრდის მიხედვით.",
    options: ["$a, b, c$", "$a, c, b$", "$b, a, c$", "$b, c, a$", "$c, a, b$", "$c, b, a$"],
    correct: 5,
    tags: ["Logarithms", "Ordering"]
  },
  {
    question: "საკოორდინატო სიბრტყეზე მოცემულია A(1; 1), B(3; 7) და C(5; 5) წერტილები. იპოვეთ ABC სამკუთხედის B წვეროდან გატარებული სიმაღლის სიგრძე.",
    options: ["$4$", "$4\\sqrt{3}$", "$2\\sqrt{2}$", "$12$", "$3$", "$6$"],
    correct: 2,
    tags: ["Coordinate Geometry", "Triangles"]
  },
  {
    question: "ცილინდრის მოცულობაა \\( 36\\pi \\) და ღერძული კვეთის ფართობია 8. იპოვეთ ცილინდრის ფუძის რადიუსი.",
    options: ["$5.2$", "$2$", "$3\\sqrt{10}$", "$3\\pi$", "$8$", "$9$"],
    correct: 5,
    tags: ["Cylinder", "Volume", "Surface Area"]
  },
  {
    question: "\\( y = x^3 - 2x^2 + 2x - 4 \\) ფუნქციის გრაფიკზე მდებარე A წერტილზე გავლებული გრაფიკის მხები x ღერძის დადებით მიმართულებასთან ადგენს 45°-ს. ჩამოთვლილთაგან რომელი შეიძლება იყოს A წერტილის x კოორდინატი?",
    options: ["$1$", "$-\\frac{1}{\\sqrt{3}}$", "$2$", "$\\frac{1}{\\sqrt{3}}$", "$-2$", "$\\sqrt{3}$"],
    correct: 0,
    tags: ["Functions", "Tangents"]
  }
];

const form = document.getElementById("quizForm");
form.innerHTML = ""; // Clear previous content

quizData.forEach((q, i) => {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.innerHTML = `<strong>${i + 1}.</strong><br>${q.question}`;
  fieldset.appendChild(legend);

  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.style.marginTop = "8px";

  q.options.forEach((opt, j) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question${i}`;
    radio.value = j;
    label.appendChild(radio);
    label.append(` ${opt}`);
    fieldset.appendChild(label);
  });

  // Add Check button for individual question
  const checkBtn = document.createElement("button");
  checkBtn.type = "button";
  checkBtn.textContent = "შეამოწე";
  checkBtn.style.marginTop = "8px";

  checkBtn.addEventListener("click", () => {
    const selected = form.querySelector(`input[name="question${i}"]:checked`);
    if (!selected) {
      feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
    } else {
      const isCorrect = parseInt(selected.value) === q.correct;
      feedback.innerHTML = isCorrect
        ? `<span style="color: green;">✔️ სწორი პასუხია</span>`
        : `<span style="color: red;">❌ არასწორია</span> – სწორი პასუხია: <strong>${q.options[q.correct]}</strong>`;
    }
    if (window.MathJax) MathJax.typeset(); // Re-render MathJax
  });

  fieldset.appendChild(checkBtn);
  fieldset.appendChild(feedback);
  form.appendChild(fieldset);
});

// Submit button and score display container
const submitBtn = document.createElement("button");
submitBtn.type = "button";
submitBtn.textContent = "შეამოწმე ყველა";
submitBtn.style.marginTop = "20px";
submitBtn.style.display = "block";

const scoreDisplay = document.createElement("div");
scoreDisplay.style.marginTop = "12px";
scoreDisplay.style.fontWeight = "bold";

submitBtn.addEventListener("click", () => {
  let score = 0;

  quizData.forEach((q, i) => {
    const selected = form.querySelector(`input[name="question${i}"]:checked`);
    const feedback = form.querySelectorAll(".feedback")[i];

    if (!selected) {
      feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
    } else {
      const isCorrect = parseInt(selected.value) === q.correct;
      if (isCorrect) score++;
      feedback.innerHTML = isCorrect
        ? `<span style="color: green;">✔️ სწორი პასუხია</span>`
        : `<span style="color: red;">❌ არასწორია</span> – სწორი პასუხია: <strong>${q.options[q.correct]}</strong>`;
    }
  });

  scoreDisplay.innerHTML = `თქვენ დააგროვეთ ${score} სწორი პასუხი ${quizData.length}-დან`;
  if (window.MathJax) MathJax.typeset();
});

form.appendChild(submitBtn);
form.appendChild(scoreDisplay);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  let score = 0;
  const result = document.getElementById("result");
  result.innerHTML = "";

  const tagStats = {};

  quizData.forEach((q, i) => {
    const answer = form.querySelector(`input[name="question${i}"]:checked`);
    const fieldset = form.querySelectorAll("fieldset")[i];
    const explanation = document.createElement("div");

    const isCorrect = answer && parseInt(answer.value) === q.correct;
    if (isCorrect) score++;
    explanation.innerHTML = isCorrect
      ? `<span style="color: green;">Correct ✔️</span>`
      : `<span style="color: red;">Wrong ❌</span> – Correct answer: <strong>${q.options[q.correct]}</strong>`;
    q.tags.forEach(tag => {
      if (!tagStats[tag]) tagStats[tag] = { correct: 0, total: 0 };
      tagStats[tag].total++;
      if (isCorrect) tagStats[tag].correct++;
    });

    explanation.style.marginTop = "8px";
    fieldset.appendChild(explanation);
  });

  result.innerHTML = `<strong>Total Score: ${score} / ${quizData.length}</strong><br><h3>Score by Topic:</h3>`;
  for (let tag in tagStats) {
    const { correct, total } = tagStats[tag];
    const percentage = ((correct / total) * 100).toFixed(1);
    result.innerHTML += `<p>${tag}: ${correct} / ${total} (${percentage}%)</p>`;
  }

  form.querySelector("button").disabled = true;

  // Re-render math after result is shown
  if (window.MathJax) MathJax.typeset();
});
