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
        question: "იპოვეთ $\\lim\\limits_{x\\to\\infty}\\frac{2x^3+3x^2}{x^3}$ ზღვარი.",
        options: [
            "5",
            "-1",
            "0",
            "$\\frac{5}{3}$",
            "2",
            "3"
        ],
        correct: 4,
        tags: ["Calculus", "Limits"]
    },
    {
        question: "იპოვეთ $\\lim\\limits_{n\\to\\infty}\\frac{5+9+13+\\cdots+(4n+1)}{n^2}$ ზღვარი.",
        options: [
            "1",
            "13",
            "2",
            "27",
            "4",
            "6"
        ],
        correct: 2,
        tags: ["Calculus", "Series"]
    },
    {
        question: "იპოვეთ $\\lim\\limits_{x\\to 0}\\frac{2\\sin 7x}{3x}$ ზღვარი.",
        options: [
            "$\\frac{7}{3}$",
            "$\\frac{2}{3}$",
            "$\\frac{2}{7}$",
            "$\\frac{14}{3}$",
            "2",
            "7"
        ],
        correct: 3,
        tags: ["Trigonometry", "Limits"]
    },
    {
        question: "1) მართკუთხა სამკუთხედი; 2) წრეწირი; 3) ტოლგვერდა სამკუთხედი; 4) ტოლფერდა სამკუთხედი; 5) სხვადასხვაგვერდა სამკუთხედი; 6) ბლაგვკუთხა სამკუთხედი. ჩამოთვლილი 6 ცალი ფიგურიდან რამდენის მიიღებაა შეუძლებელი კონუსის და სიბრტყის გადაკვეთის შედეგად?",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 0,
        tags: ["Geometry", "Conic Sections"]
    },
    {
        question: "იპოვეთ მანძილი $A(1;3)$ წერტილსა და $3x-2y=4$ წრფეს შორის.",
        options: [
            "7",
            "$-\\frac{3}{\\sqrt{13}}$",
            "$\\frac{3}{\\sqrt{13}}$",
            "$\\frac{11}{\\sqrt{13}}$",
            "$\\frac{2}{\\sqrt{13}}$",
            "$\\frac{7}{\\sqrt{13}}$"
        ],
        correct: 5,
        tags: ["Geometry", "Distance"]
    },
    {
        question: "იპოვეთ $\\lim\\limits_{x\\to+\\infty}\\left(\\frac{x+2}{x-3}\\right)^x$ ზღვარი.",
        options: [
            "$e^5$",
            "$e^2$",
            "$e^3$",
            "$\\frac{2}{3}$",
            "$-\\frac{2}{3}$",
            "1"
        ],
        correct: 0,
        tags: ["Calculus", "Limits"]
    },
    {
        question: "იპოვეთ $\\lim\\limits_{x\\to1^+} \\arctan\\frac{1}{1-x}$ მარჯვენა ზღვარი ($x$ მიისწრაფის 1-სკენ მარჯვნიდან).",
        options: [
            "$-\\infty$",
            "$-\\frac{\\pi}{2}$",
            "0",
            "$\\frac{1}{2}$",
            "$\\pi$",
            "$+\\infty$"
        ],
        correct: 1,
        tags: ["Trigonometry", "Limits"]
    },
    {
        question: "იპოვეთ $\\lim\\limits_{n\\to\\infty}\\frac{(n+5)!-(n+2)!}{n^3(n+2)!}$ ზღვარი.",
        options: [
            "1",
            "2",
            "3",
            "0",
            "-1",
            "-2"
        ],
        correct: 0,
        tags: ["Calculus", "Factorials"]
    },
    {
        question: "კონუსის გვერდითი ზედაპირის ფართობი უდრის 20 სმ²-ს. მისი გვერდითი ზედაპირის (სექტორის) შლილის ცენტრალური კუთხე 72°-ია. იპოვეთ კონუსის სრული ზედაპირის ფართობი.",
        options: [
            "25",
            "24",
            "30",
            "21",
            "27",
            "32"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "იპოვეთ სფეროზე შემოხაზული წაკვეთილი კონუსის გვერდითი ზედაპირის ფართობი, თუ მისი მსახველი 13 სმ-ია, სფეროს რადიუსი კი 6სმ-ია.",
        options: [
            "$130\\pi$",
            "$78\\pi$",
            "$156\\pi$",
            "$180\\pi$",
            "$169\\pi$",
            "$210\\pi$"
        ],
        correct: 4,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "იპოვეთ $f'\\left(\\frac{\\pi}{12}\\right)$, თუ $f(x) = \\sin^3\\left(4x+\\frac{\\pi}{3}\\right)$.",
        options: [
            "$-\\frac{5}{3}$",
            "$-\\frac{9}{2}$",
            "$\\frac{5}{2}$",
            "-1",
            "0",
            "1"
        ],
        correct: 1,
        tags: ["Trigonometry", "Derivatives"]
    },
    {
        question: "იპოვეთ $\\lim\\limits_{x\\to0^+} \\left(\\frac{1}{x}\\right)^{\\sin x}$ მარჯვენა ზღვარი ($x$ მიისწრაფის 0-სკენ მარჯვნიდან).",
        options: [
            "-1",
            "1",
            "0",
            "$\\infty$",
            "$\\pi$",
            "$-\\pi$"
        ],
        correct: 1,
        tags: ["Calculus", "Limits"]
    },
    {
        question: "გამოთვალეთ $f'(1)$, თუ $f(x) = (3x^4-10x+8)^3 + x^5$.",
        options: [
            "0",
            "1",
            "2",
            "5",
            "7",
            "11"
        ],
        correct: 5,
        tags: ["Calculus", "Derivatives"]
    },
    {
        question: "იპოვეთ ზედაპირის ფართობი სხეულისა, რომელიც მიღებულია $a$-გვერდიანი წესიერი ექვსკუთხედის ბრუნვით დიდი დიაგონალის გარშემო.",
        options: [
            "$2\\pi a^2$",
            "$2\\pi a^2\\sqrt{3}$",
            "$\\frac{\\pi a^2\\sqrt{3}}{2}$",
            "$4\\pi a^2$",
            "$4\\pi a^2\\sqrt{3}$",
            "$\\frac{4\\pi a^2\\sqrt{3}}{3}$"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "იპოვეთ $ABC$ სამკუთხედის ფართობი, თუ მისი წვეროების კოორდინატებია $A(3;5)$, $B(7;8)$ და $C(6;1)$.",
        options: [
            "15",
            "7",
            "16",
            "9.5",
            "14.5",
            "12.5"
        ],
        correct: 5,
        tags: ["Geometry", "Area"]
    },
    {
        question: "იპოვეთ $\\lim\\limits_{n\\to\\infty} \\frac{\\sqrt{n}\\cdot\\cos n}{n+1}$ ზღვარი.",
        options: [
            "$\\pi$",
            "$-\\infty$",
            "$\\frac{\\pi}{2}$",
            "-1",
            "0",
            "1"
        ],
        correct: 4,
        tags: ["Calculus", "Limits"]
    },
    {
        question: "გამოთვალეთ $f'(1)$, თუ $f(x) = \\arctan\\sqrt{4x-1}$.",
        options: [
            "4",
            "1",
            "3",
            "$\\frac{1}{2\\sqrt{3}}$",
            "$\\frac{\\sqrt{3}}{3}$",
            "$\\sqrt{3}$"
        ],
        correct: 3,
        tags: ["Trigonometry", "Derivatives"]
    },
    {
        question: "თუ $1000^2$, $1001^2$, $1002^2$, ... მიმდევრობის ყოველი წევრის ბოლო ორ ციფრს წავშლით მივიღებთ მიმდევრობას, რომლის პირველი $n$ წევრი წარმოადგენს არითმეტიკულ პროგრესიას. იპოვეთ $n$-ის უდიდესი მნიშვნელობა.",
        options: [
            "3",
            "9",
            "10",
            "100",
            "1000",
            "1000-ზე მეტი"
        ],
        correct: 2,
        tags: ["Algebra", "Sequences"]
    },
    {
        question: "იპოვეთ კუთხე $y=5-3x$ და $y=2x-1$ წრფეებს შორის.",
        options: [
            "$\\frac{\\pi}{3}$",
            "$\\frac{2\\pi}{3}$",
            "$\\arctan 2$",
            "$\\arcsin\\frac{1}{3}$",
            "$\\frac{3\\pi}{4}$",
            "$\\frac{\\pi}{4}$"
        ],
        correct: 5,
        tags: ["Geometry", "Angles"]
    },
    {
        question: "$XOY$ საკოორდინატო სიბრტყეზე მოცემულია $A(0;0)$, $B(5;1)$, $C(6;3)$ და $D(-1;4)$ ოთხი წერტილი. იპოვეთ ამ სიბრტყეზე მდებარე ისეთი $K$ წერტილის კოორდინატები, რომ $K$ წერტილიდან $A$, $B$, $C$ და $D$ წერტილებამდე მანძილების ჯამი იყოს მინიმალური.",
        options: [
            "$(-1;4)$",
            "$(2;5)$",
            "$(-\\frac{9}{6};\\frac{7}{4})$",
            "$(\\frac{7}{2};\\frac{7}{4})$",
            "$(\\frac{16}{3};\\frac{5}{4})$",
            "$(-\\frac{12}{5};\\frac{5}{4})$"
        ],
        correct: 3,
        tags: ["Geometry", "Optimization"]
    },
    {
        question: "ჩამოთვლილთაგან რისი ტოლია $a$ და $b$ პარამეტრების ჯამი, თუ $f(x) = \\begin{cases} \\frac{x^4-x^2}{x^2-1}, & x\\neq\\pm1 \\\\ \\log_3 a, & x=1 \\\\ \\sqrt{b}, & x=-1 \\end{cases}$ ფუნქცია უწყვეტია მთელ რიცხვთა ღერძზე.",
        options: [
            "6",
            "4",
            "13",
            "8",
            "16",
            "შეუძლებელია განსაზღვრა"
        ],
        correct: 1,
        tags: ["Calculus", "Continuity"]
    },
    {
        question: "$f'(x)=0$ გატოლების ფესვებია $a$, $b$ და $c$. იპოვეთ $a-b+c$ გამოსახულების უდიდესი შესაძლო მნიშვნელობა, თუ $f(x)=\\frac{x^4}{4}+2x^3+\\frac{3}{2}x^2-10x$.",
        options: [
            "-2",
            "0",
            "2",
            "3",
            "4",
            "7"
        ],
        correct: 4,
        tags: ["Calculus", "Extrema"]
    },
    {
        question: "იპოვეთ ჩამოთვლილთაგან რისი ტოლი შეიძლება იყოს $x+y$, თუ $x=\\log(\\log(\\log\\ldots27)27)27$, ხოლო $y=\\log_2 8$.",
        options: [
            "$3 + \\log_2 27$",
            "9",
            "27",
            "$3+ \\log_{27} 3$",
            "6",
            "$3 + e^{27}$"
        ],
        correct: 4,
        tags: ["Algebra", "Logarithms"]
    },
    {
        question: "კონუსის ღერძული კვეთა წესიერი სამკუთხედია, რომლის გვერდია 6სმ. სფერო ეხება კონუსის გვერდით ზედაპირს, ხოლო კონუსის ფუძის სიბრტყეს ეხება $A$ წერტილში, რომელიც 4 სმ-ით არის დაშორებული კონუსის ღერძიდან. იპოვეთ კონუსის ზედაპირის ფართობის შეფარდება სფეროს ზედაპრის ფართობთან.",
        options: [
            "$\\pi$",
            "$\\frac{3\\pi}{2}$",
            "$\\frac{9}{4}$",
            "$\\frac{3}{2}$",
            "$\\frac{11}{3}$",
            "2"
        ],
        correct: 2,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "ორი ტოლი $R$ რადიუსიანი სფერო და სხვა ორი ტოლი $r$ რადიუსიანი სფერო ისე არიან განლაგებულები, რომ ყოველი მათგანი ეხება დანარჩენ სამს და $\\alpha$ სიბრტყეს. იპოვეთ დიდი სფეროს ზედაპირის ფართობის შეფარდება პატარა სფეროს ზედაპირის ფართობთან.",
        options: [
            "$7 -3\\sqrt{5}$",
            "$6 + 2\\sqrt{5}$",
            "$2 -\\sqrt{3}$",
            "$7 + 4\\sqrt{3}$",
            "$5 -3\\sqrt{2}$",
            "$5 + 2\\sqrt{2}$"
        ],
        correct: 3,
        tags: ["Geometry", "Surface Area"]
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
