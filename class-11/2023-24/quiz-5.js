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
    question: "რამდენი ნამდვილი ამონახსნი აქვს \\( \\ln(x^4) - 2\\ln(-x) = 1 \\) განტოლებას?",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$5$"],
    correct: 1,
    tags: ["Logarithmic Equations"]
  },
  {
    question: "რამდენი მთელი ამონახსნი აქვს \\( 2^{2x} - 3 \\cdot 2^{x+1} + 5 \\leq 0 \\) უტოლობას?",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$5$"],
    correct: 3,
    tags: ["Inequalities", "Exponential"]
  },
  {
    question: "კონუსის გვერდითი ზედაპირის ფართობი $2$-ჯერ მეტია მისი ფუძის ფართობზე. იპოვეთ სრული ზედაპირის ფართობი, თუ სიმაღლეა \\( 2\\sqrt{3} \\).",
    options: ["$2π$", "$4π$", "$8π$", "$12π$", "$16π$", "$20π$"],
    correct: 3,
    tags: ["Geometry", "Surface Area"]
  },
  {
    question: "ბირთვში ჩახაზულია კონუსი ისე, რომ კონუსის ფუძის წრეწირი და წვერო ეხება სფეროს ზედაპირს. იპოვეთ ბირთვის მოცულობა თუ კონუსის ღერძული კვეთა ისეთი მართკუთხა სამკუთხედია, რომლის ფართობია $9$.",
    options: ["$12π$", "$21π$", "$36π$", "$24π$", "$42π$", "$72π$"],
    correct: 2,
    tags: ["Solid Geometry"]
  },
  {
    question: "იპოვეთ რისი ტოლია \\( \\sqrt{\\log_2 x} \\geq \\log_2 x \\) უტოლობის ამონახსნთა სიმრავლე.",
    options: ["$x ∈ (1; 2)$", "$x ∈ (−∞; 2)$", "$x ∈ (0; 2]$", "$x ∈ [0; 2)$", "$x ∈ [0; 2]$", "$x ∈ [1; 2]$"],
    correct: 5,
    tags: ["Logarithmic Inequalities"]
  },
  {
    question: "რისი ტოლია \\( \\lim\\limits_{n \\to \\infty} {\\left(\\frac{\\log_7(7n)}{\\log_7 n}\\right)}^ {\\log_7 n} \\) , \\(n>1\\) მიმდებრობის ზღვრის მნიშვნელობა?",
    options: ["$7e$", "$e$", "$0.1e$", "$\\frac{1}{2}e$", "$\\frac{1}{7}e$", "$2e$"],
    correct: 1,
    tags: ["Limits", "Logarithms"]
  },
  {
    question: "რამდენ განსხვავებულ წერტილში კვეთს \\( y = |\\log_3 |x|| \\) და \\( y = {3}^{|x|} \\) ფუნქციების გრაფიკები ერთმანეთს?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 1,
    tags: ["Graphing", "Functions"]
  },
  {
    question: "იპოვეთ რისი ტოლია \\( y = 3x - 4 \\) და \\( y = 2x + 5 \\) წრფეებს შორის კუთხის ტანგენსის მნიშვნელობა?",
    options: ["$\\frac{1}{7}$", "$\\frac{1}{5}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{1}{4}$", "$\\frac{1}{6}$"],
    correct: 0,
    tags: ["Trigonometry", "Lines"]
  },
  {
    question: "ცილინდრის ერთ-ერთი კვეთაა ელიფსი, რომლის მცირე ნახევარღერძია $1$. იპოვეთ რისი ტოლია ცილინდრის მოცულობა თუ მისი ღერძული კვეთა კვადრატია?",
    options: ["$2π$", "$4π$", "$8π$", "$12π$", "$16π$", "$20π$"],
    correct: 0,
    tags: ["Solid Geometry", "Volume"]
  },
  {
    question: "მოცემულია \\( y = \\sin x \\), ფუნქცია \\( x ∈ [0; \\pi] \\)  სიმრავლეზე. იპოვეთ რისი ტოლია იმ ფიგურის ფართობი,რომელიც შემოსაზღვრულია ამ ფუნქციის გრაფიკით და აბცისთა ღერძით? ",
    options: ["$0.5$", "$1$", "$1.5$", "$2$", "$2.5$", "$3$"],
    correct: 3,
    tags: ["Integration", "Area"]
  },
  {
    question: "დათვალეთ \\( x^2 - y^2 = 2 \\) ჰიპერბოლის ფოკუსებს შორის მანძილი.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    tags: ["Conic Sections"]
  },
  {
    question: "დათვალეთ რისი ტოლია მანძილი \\(M(10; 5; 0)\\)-წერტილიდან \\( 2x - 3y + 2\\sqrt{3}z + 5 = 0 \\) სიბრტყემდე.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 1,
    tags: ["3D Geometry"]
  },
  {
    question: "რისი ტოლია \\( y^2 = -4x \\) და \\( y^2 = 8x \\) პარაბოლის დირექტრისებს შორის მანძილი?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 2,
    tags: ["Conic Sections"]
  },
  {
    question: "\\( y = \\frac{\\sqrt{3}}{x^2}, y = 0, x = \\sqrt[3]{\\pi}, x = \\sqrt[3]{2\\pi} \\) გრაფიკებით შემოსაზღვრული ფიგურა ბრუნავს აბცისთა ღერძის გარშემო. დათვალეთ რისი ტოლია ბრუნვით მიღებული სხეულის მოცულობა?",
    options: ["$\\frac{2}{\\sqrt[3]{3}}$", "$\\frac{2}{\\sqrt[3]{2}}$", "$\\frac{1}{\\sqrt[3]{3}}$", "$\\frac{2}{\\sqrt{3}}$", "$\\frac{1}{2}$", "$\\frac{1}{\\sqrt{2}}$"],
    correct: 4,
    tags: ["Solids of Revolution"]
  },
  {
    question: "იპოვეთ, რისი ტოლია კუთხის კოსინუსი სივრცეში \\( 2x - 3y + 2z + 1 = 0 \\) და \\( 3x + 2y + 2z + 5 = 0 \\) განტოლებებით მოცემულ სიბრტყეებს შორის?",
    options: ["$\\frac{10}{21}$", "$\\frac{6}{19}$", "$\\frac{4}{17}$", "$\\sqrt{\\frac{6}{13}}$", "$\\frac{\\sqrt{5}}{8}$", "$\\frac{\\sqrt{7}}{23}$"],
    correct: 2,
    tags: ["3D Geometry"]
  },
  {
    question: "\\( f(x) \\) ლუწი ფუნქციის მხები, რომელიც გრაფიკს ეხება წერტილში, რომლის აბსცისაა \\( x_0 \\) არის \\( y = -3x + 5 \\) წრფე. იპოვეთ იმ წრფის განტოლება, რომელიც \\(y = f(x)\\) ფუნქციის გრაფიკს ეხება ისეთ წერტილში, რომლის აბსცისაც \\(x_0\\)-ის მოპირდაპირე რიცხვია.",
    options: ["$y = -5x + 3$", "$y = -3x - 5$", "$y = 3x + 5$", "$y = -3x + 5$", "$y = 5x + 3$", "$y = -5x - 3$"],
    correct: 2,
    tags: ["Functions"]
  },
  {
    question:  "\\( x = -5 \\), \\( x = 15 \\), \\( y = -6 \\) და \\( y = 10 \\) წრფეებით შემოსაზღვრულ მართკუთხედში ჩახაზულია ელიფსი ისე, რომ ელიფსი ეხება მართკუთხედის ოთხივე გვერდს. დათვალეთ ფოკუსებს შორის მანძილი?",
    options: ["$8$", "$14$", "$12$", "$16$", "$10$", "$4\\sqrt{41}$"],
    correct: 2,
    tags: ["Conic Sections"]
  },
  {
    question: "\\( y = ax^2 + 7x + 2 \\) პარაბოლის \\( x = 3 \\) წერტილში გავლებული მხები ორდინატთა ღერძს კვეთს $(0;11)$ წერტილში. იპოვეთ \\( a \\) პარამეტრი?",
    options: ["$a = 2$", "$a = 3$", "$a = -3$", "$a = -1$", "$a = 1$", "$a = -2$"],
    correct: 3,
    tags: ["Derivatives"]
  },
  {
    question: "დათვალეთ იმ სხეულის მოცულობა, რომელიც შემოსაზღვრულია \\( XOY \\), \\( YOZ \\), \\( XOZ \\) სიბრტყეებით და \\( 2x + 3y + z = 6 \\) სიბრტყით?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 5,
    tags: ["3D Geometry"]
  },
  {
    question: "გამოთვალეთ რისი ტოლია \\( \\int_{\\ln 2}^{\\ln 3} x \\cdot e^x dx \\) განსაზღვრული ინტეგრალის მნიშვნელობა?",
    options: ["$ln\\frac{27}{4e}$", "$ln\\frac{41}{5e}$", "$ln\\frac{37}{2e}$", "$ln\\frac{31}{3e}$", "$ln\\frac{15}{e}$", "$ln\\frac{33}{2e}$"],
    correct: 0,
    tags: ["Integration"]
  },
  {
    question: "ცნობილია, რომ \\( f(0) = 3 \\) და \\( f'(0) \\neq 0 \\). გამოთვალეთ \\( \\lim\\limits_{x \\to 0} \\frac{3 \\log_3 f(x) - 3}{(f(x))^2 - 9} \\) ზღვრის მნიშვნელობა?",
    options: ["$ln 3$", "$\\frac{1}{6ln 3}$", "$\\frac{1}{ln 3}$", "$3 ln 3$", "$3 ln 6$", "$6 ln 3$"],
    correct: 1,
    tags: ["Limits"]
  },
  {
    question: "დათვალეთ რისი ტოლია ფუნქციის \\( y = x^2 - 2|x| + 4 \\) მაქსიმალური და მინიმალური მნიშვნელობების სხვაობა თუ \\( x ∈ [-2; 3] \\)?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    tags: ["Piecewise Functions"]
  },
  {
    question: "დათვალეთ რისი ტოლია \\( y = \\log_{(x^2 + 1)}{(x^2)} \\) ფუნქციის წარმოებულის მნიშვნელობა წერტილში \\( x_0 = 1 \\)?",
    options: ["$2log_{2}{1}$", "$log_{2}{3}$", "$1$", "$2log_{2}{e}$", "$2$", "$3$"],
    correct: 3,
    tags: ["Derivatives"]
  },
  {
    question: "პირამიდის ფუძეა კვადრატი, ხოლო მისი სიმაღლე გადის კვადრატის ერთ-ერთ წვეროზე. დათვალეთ სრული ზედაპირის ფართობი, თუ ორი განსხვავებული გვერდითი წახნაგის ფართობებია $2$ და $2.5$?",
    options: ["$10$", "$11$", "$12$", "$13$", "$14$", "$15$"],
    correct: 2,
    tags: ["Geometry"]
  },
  {
    question: "სიბრტყეზე განვიხილოთ ყველა ტოლფერდა ტრაპეცია, რომელთა მახვილი კუთხეა \\( \\alpha \\) და ფართობია $10$. ამ ტრაპეციების პერიმეტრებს შორის იპოვეთ უმცირესი, თუ \\( \\sin \\alpha = \\frac{1}{5} \\)?",
    options: ["$15\\sqrt{5}$", "$12\\sqrt{6}$", "$7\\sqrt{10}$", "$11\\sqrt{7}$", "$20\\sqrt{2}$", "$10\\sqrt{3}$"],
    correct: 4,
    tags: ["Optimization", "Trigonometry"]
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
