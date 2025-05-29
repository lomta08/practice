let timerInterval;
let timeLeft = 3 * 60 * 60;


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
        alert("დრო ამოიწურა! ქვიზი ავტომატურად დასრულდა.");
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
    question: "\\( y = f(x) \\) ფუნქციის გრაფიკზე მდებარე \\((a; f(a))\\) წერტილზე გავლებული ამ ფუნქციის მხები \\(x\\) ღერძის დადებით მიმართულებასთან ადგენს \\(60^\\circ\\)-ს. იპოვეთ \\(f'(a)\\).",
    options: ["$1$", "$\\sqrt{2}$", "$\\sqrt{3}$", "$2$", "$\\sqrt{5}$", "$\\sqrt{6}$"],
    correct: 2,
    tags: ["\\text{Derivatives}"]
  },
  {
    question: "იპოვეთ \\( f(x) = \\cos x \\) ფუნქციის ის პირველადი ფუნქცია, რომლის გრაფიკიც \\( K\\left(\\frac{\\pi}{6}; \\frac{5}{2}\\right) \\) წერტილზე გადის.",
    options: [
      "$F(x) = -\\sin x - 2$",
      "$F(x) = \\sin x + 2$",
      "$F(x) = -\\cos x - 2$",
      "$F(x) = \\cos x + 2$",
      "$F(x) = \\sin x$",
      "$F(x) = -\\sin x$"
    ],
    correct: 1,
    tags: ["\\text{Integrals}"]
  },
  {
    question: "მუდმივამდე სიზუსტით იპოვეთ \\( \\int e^{\\sin x} \\cdot \\cos x \\, dx \\) ინტეგრალი.",
    options: [
      "$-\\cos x$", "$\\sin x$", "$\\sin x \\cdot \\cos x$", "$e^{\\sin x}$", "$e^{\\sin x} \\cdot \\cos x$", "$e^x$"
    ],
    correct: 3,
    tags: ["\\text{Integrals}"]
  },
  {
    question: "იპოვეთ იმ ოთხკუთხედის ფართობი, რომლის ორი წვერო ემთხვევა \\( x^2 + 2y^2 = 32 \\) ტოლობით მოცემულ ელიფსის ფოკუსებს, ორი კი — ამ ელიფსის მცირე ღერძის ბოლოებს.",
    options: [
      "$32$", "$\\frac{16}{\\sqrt{3}}$", "$8\\sqrt{2}$", "$16\\sqrt{3}$", "$5\\sqrt{2}$", "$16$"
    ],
    correct: 0,
    tags: ["\\text{Conic Sections}"]
  },
  {
    question: "\\( Oxy \\) მართკუთხა საკოორდინატო სიბრტყეზე იპოვეთ \\(A\\) წერტილის კოორდინატები, თუ ცნობილია, რომ \\( y = x^2 \\) ფუნქციის გრაფიკზე მდებარე ყველა წერტილი თანაბრადაა დაშორებული \\(A\\) წერტილიდან და \\( y = -\\frac{1}{4} \\) წრფიდან.",
    options: [
      "$(1; 1)$",
      "$\\left(1; \\frac{1}{4}\\right)$",
      "$(0; 1)$",
      "$\\left(-\\frac{1}{4}; 0\\right)$",
      "$(0; -1)$",
      "$\\left(0; \\frac{1}{4}\\right)$"
    ],
    correct: 5,
    tags: ["\\text{Geometry}"]
  },
  {
    question: "იპოვეთ \\( f(x) = x^4 - 4x^3 + 4x^2 \\) ფუნქციის მაქსიმალური მნიშვნელობა \\([0; 2]\\) შუალედში.",
    options: [
      "$0.5$", "$12 - 8\\sqrt{2}$", "$3 - \\sqrt{3}$", "$1.5$", "$1$", "$21 - 3\\sqrt{3}$"
    ],
    correct: 4,
    tags: ["\\text{Extrema}"]
  },
  {
    question: "იპოვეთ \\( \\int \\cos^2 x \\, dx \\) ინტეგრალი.",
    options: [
      "$\\frac{2x + \\sin 2x}{4} + c$",
      "$\\frac{\\cos^3 x}{3} + c$",
      "$-\\sin^2 x + c$",
      "$\\sin^2 2x + c$",
      "$\\sin2x + c$",
      "$\\frac{x + \\sin x}{2} + c$"
    ],
    correct: 0,
    tags: ["\\text{Integrals}"]
  },
  {
    question: "იპოვეთ \\( y = x^2 \\) და \\( y = 4 \\) ფუნქციების გრაფიკებით შემოსაზღვრული ფიგურის ფართობი.",
    options: [
      "$11$", "$\\frac{32}{3}$", "$\\frac{21}{2}$", "$\\frac{8}{3}$", "$10$", "$\\frac{10}{3}$"
    ],
    correct: 1,
    tags: ["\\text{Area}"]
  },
  {
    question: "\\( Oxy \\) მართკუთხა საკოორდინატო სიბრტყეზე ჰომოთეტიას, ცენტრით \\( M \\) წერტილში და \\(\\frac{3}{2}\\)-ის ტოლი კოეფიციენტით, \\( A(5; -3) \\) წერტილი გადაყავს \\( B(-2; 4) \\) წერტილში. იპოვეთ \\( M \\) წერტილის კოორდინატები.",
    options: [
      "$(18; -18)$", "$(19; -17)$", "$(17; -18)$", "$(12; -10)$", "$(21; -19)$", "$(26; -24)$"
    ],
    correct: 1,
    tags: ["\\text{Transformations}"]
  },
  {
    question: "იპოვეთ ფუნქცია, რომლის გრაფიკიც \\( y = -x - 2 \\) ფუნქციის გრაფიკის სიმეტრიულია \\( A(5; 3) \\) წერტილის მიმართ.",
    options: [
      "$y = -x + 18$", "$y = x - 2$", "$y = x + 8$", "$y = -x + 20$", "$y = x - 18$", "$y = -x + 8$"
    ],
    correct: 0,
    tags: ["\\text{Symmetry}"]
  },
  {
    question: "ორი დადებითი \\(a\\) და \\(b\\) რიცხვის ჯამი $4$-ის ტოლია. იპოვეთ \\(a\\)-ს რომელი მნიშვნელობისათვის იქნება \\(a^3 + b^2\\) გამოსახულების მნიშვნელობა უმცირესი.",
    options: ["$\\frac{2}{3}$", "$1$", "$\\frac{4}{3}$", "$\\frac{5}{3}$", "$2$", "$\\frac{7}{3}$"],
    correct: 2,
    tags: ["Optimization"]
  },
  {
    question: "\\(Oxy\\) მართკუთხა საკოორდინატო სიბრტყეზე \\( y = \\frac{1}{x} \\), \\( y = 0 \\), \\( x = 1 \\) და \\( x = 3 \\) წირებით შემოსაზღვრული მრუდწირული ტრაპეციის ფართობი და \\( y = \\frac{1}{x} \\), \\( y = 0 \\), \\( x = 3 \\) და \\( x = a \\) წირებით შემოსაზღვრული მრუდწირული ტრაპეციის ფართობი ტოლია. იპოვეთ $1$-სგან განსხვავებული \\( a \\) პარამეტრი.",
    options: ["$a = 2$", "$a = \\ln 10$", "$a = \\ln 100$", "$a = 9$", "$a = 9 \\ln 10$", "$a = 27$"],
    correct: 3,
    tags: ["Area"]
  },
  {
    question: "გამოთვალეთ \\(\\int_{-2}^{2} |x + 1| \\, dx\\) ინტეგრალი.",
    options: ["$4$", "$3\\sqrt{2}$", "$2\\sqrt{6}$", "$5$", "$2\\sqrt{7}$", "$4\\sqrt{2}$"],
    correct: 3,
    tags: ["Integrals"]
  },
  {
    question: "ჩამოთვლილთაგან რომელი ვექტორის გასწვრივ პარალელური გადატანით აისახება \\(3x + 4y = 5\\) განტოლებით მოცემული წრფე თავის თავში?",
    options: ["$\\vec{a}(3; 4)$", "$\\vec{b}(8; 6)$", "$\\vec{c}(8; -6)$", "$\\vec{d}(-3; 4)$", "$\\vec{e}(4; 3)$", "$\\vec{f}(-8; -6)$"],
    correct: 2,
    tags: ["Vectors"]
  },
  {
    question: "რომელ \\(M_1\\) წერტილში აისახება \\(M(a, b)\\) წერტილი კოორდინატთა სათავის მიმართ საათის ისრის საწინააღმდეგო მიმართულებით \\(90^\\circ\\)-იანი კუთხით მობრუნებისას?",
    options: ["$M_1(-a; b)$", "$M_1(a; -b)$", "$M_1(-a; -b)$", "$M_1(b; a)$", "$M_1(-b; a)$", "$M_1(-b; -a)$"],
    correct: 4,
    tags: ["Transformations"]
  },
  {
    question: "იპოვეთ წრფივი ფუნქცია, რომლის გრაფიკი არის \\( y = x^3 + 2x - 2 \\) ფუნქციის მხები და \\( y = x + 3 \\) ფუნქციის გრაფიკის პარალელური.",
    options: ["$y = x$", "$y = x + 1$", "$y = x - 1$", "$y = x + 2$", "$y = x - 2$", "ასეთი არ არსებობს"],
    correct: 5,
    tags: ["Derivatives"]
  },
  {
    question: "იპოვეთ \\( y = \\frac{1}{\\cos x} \\), \\( y = 0 \\), \\( x = \\frac{\\pi}{6} \\) და \\( x = \\frac{\\pi}{3} \\) წირებით შემოსაზღვრული მრუდწირული ტრაპეციის \\(x\\) ღერძის გარშემო ბრუნვით მიღებული სივრცული სხეულის მოცულობა.",
    options: ["$3\\pi$", "$\\frac{3\\pi}{\\sqrt{2}}$", "$\\pi\\sqrt{3}$", "$2\\pi$", "$\\frac{3\\pi}{2}$", "$\\frac{2\\pi}{\\sqrt{3}}$"],
    correct: 5,
    tags: ["Volumes"]
  },
  {
    question: "იპოვეთ \\( x^2 + 2y^2 = 4 \\) განტოლებით მოცემული ელიფსის \\(x\\) ღერძის გარშემო ბრუნვით მიღებული სივრცული სხეულის მოცულობა.",
    options: ["$4\\pi$", "$16\\pi$", "$\\frac{15\\pi}{2}$", "$\\frac{11\\pi}{2}$", "$\\frac{16\\pi}{3}$", "$8\\pi$"],
    correct: 4,
    tags: ["Volumes"]
  },
  {
    question: "სავარაუდო პასუხებში ჩამოთვლილთაგან, რომელი განტოლებით მოცემული წირის ასიმპტოტები არ არიან ურთიერთმართობული?",
    options: ["$xy = 2$", "$x^2 - 2y^2 = 1$", "$y = \\frac{1}{x}$", "$x^2 - y^2 = 2$", "$y = -\\frac{3}{x}$", "$x^2 - y^2 = -2$"],
    correct: 1,
    tags: ["Asymptotes"]
  },
  {
    question: "მართკუთხა საკოორდინატო სივრცეში მოცემულია \\( A(1; 0; 3) \\), \\( B(3; -2; 1) \\) და \\( C(5; 1; 4) \\) წერტილები და \\( x - 2y + 3z = 10 \\) განტოლებით განსაზღვრული \\(\\omega\\) სიბრტყე. \\( AB \\), \\( AC \\) და \\( BC \\) მონაკვეთებიდან რომელი მდებარეობს სრულად \\(\\omega\\) სიბრტყეზე?",
    options: ["მხოლოდ \\(AB\\)", "მხოლოდ \\(AC\\)", "მხოლოდ \\(BC\\)", "მხოლოდ \\(AB\\) და \\(AC\\)", "არცერთი", "სამივე"],
    correct: 0,
    tags: ["Planes and Geometry"]
  },
  {
    question: "იპოვეთ \\( A(0; -1) \\) წერტილში გავლებული \\( y = x^2 \\) ფუნქციის გრაფიკის მხებებს შორის კუთხე.",
    options: ["$\\arctan 2$", "$45^\\circ$", "$\\arctan \\sqrt{2}$", "$\\arctan \\frac{4}{3}$", "$2 \\arctan \\frac{1}{4}$", "$60^\\circ$"],
    correct: 3,
    tags: ["Geometry"]
  },
  {
    question: " \\( A = \\int_{-1}^{1} \\frac{x + 3}{2} dx \\), \\( B = \\int_{-1}^{1} e^x dx \\) და \\( C = \\int_{-1}^{1} \\frac{dx}{\\sqrt{1 - x^2}} \\) სიდიდეები დაალაგეთ ზრდადობით.",
    options: ["$A, B, C$", "$A, C, B$", "$B, A, C$", "$B, C, A$", "$C, A, B$", "$C, B, A$"],
    correct: 2,
    tags: ["Integrals", "Ordering"]
  },
  {
    question: "იპოვეთ \\( a \\) პარამეტრის მნიშვნელობა, რომლისთვისაც \\( \\int_0^2 (x - a)^2 dx \\) ინტეგრალის მნიშვნელობა იქნება მინიმალური.",
    options: ["$a = 1$", "$a = \\sqrt{2}$", "$a = \\frac{3}{2}$", "$a = \\sqrt{3}$", "$a = 2$", "$a = \\frac{5}{2}$"],
    correct: 0,
    tags: ["Optimization", "Integrals"]
  },
  {
    question: "\\(Oxyz\\) საკოორდინატო სივრცეში მოცემულია \\( A(3, 0, 0) \\), \\( B(0, 3, 0) \\), \\( C(0, 0, 4) \\) და \\( D(0, 0, 0) \\) წერტილები. იპოვეთ \\(ABCD\\) პირამიდის მოცულობა.",
    options: ["$12$", "$6\\sqrt{3}$", "$6\\sqrt{2}$", "$15$", "$6\\sqrt{6}$", "$6$"],
    correct: 5,
    tags: ["Volumes", "3D Geometry"]
  },
  {
    question: "\\( \\frac{x^2}{2} - \\frac{y^2}{3} = 1 \\) $(I)$, \\( \\frac{x^2}{2} - \\frac{y^2}{3} = -1 \\) $(II)$ და \\( 3x^2 - 2y^2 = 7 \\) $(III)$ განტოლებებით მოცემული ჰიპერბოლებიდან რომლებია საერთო ფოკუსების მქონე?",
    options: ["არცერთი", "მხოლოდ \\(I\\) და \\(II\\)", "მხოლოდ \\(I\\) და \\(III\\)", "მხოლოდ \\(II\\) და \\(III\\)", "სამივე", "ყველა წინა პასუხი მცდარია"],
    correct: 0,
    tags: ["Conic Sections"]
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
