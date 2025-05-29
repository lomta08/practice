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
        question: "რა მაქსიმალური ფართობი შეიძლება ჰქონდეს მართკუთხედს, რომლის სამი გვერდის ჯამია 30მ?",
        options: [
            "100მ²",
            "125მ²",
            "200მ²",
            "175მ²",
            "112,5მ²",
            "225მ²"
        ],
        correct: 4,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "გამოთვალეთ განსაზღვრული ინტეგრალის მნიშვნელობა $\\int_{0}^{0.5e} \\frac{1}{e-x} dx$",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$ln 2$",
            "$ln 3$",
            "$-ln 3$"
        ]
        ,
        correct: 3,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "ჩამოთვლილთაგან რომელია $f(x) = (\\tan x)^2$ ფუნქციის პირველადი?",
        options: [
            "$ 2 tan x$",
            "$\\frac{1}{3}(\\tan x)^3$",
            "$-x + \\tan x$",
            "$\\frac{(\\tan x)^3}{3\\cos x}$",
            "$\\frac{(\\tan x)^3}{3(\\cos x)^2}$",
            "$\\frac{(\\tan x)^3}{3(\\cos x)^4}$"
        ],
        correct: 2,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "დაწერეთ იმ სიბრტყის განტოლება, რომელიც გადის სივრცის (1;2;2) წერტილზე და რომლის მართობული ვექტორია $\\vec{m}(2; -3; -1)$.",
        options: [
            "$2x + 6 + 3y + 4z = 0$",
            "$x - 6 + 2y + 2z = 0$",
            "$2x + 2y - z = 4$",
            "$x + y + z = 5$",
            "$x + y + z = 5$",
            "$2x + 6 = 3y + z$"
        ],
        correct: 5,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "ელიფსის წვეროს კოორდინატებია (-3;0), (3;0), (0;-2), (0;2). ეს ელიფსი გადაიტანეს პარალელურად $\\vec{a}(-2; 3)$ ვექტორის გასწვრივ. დაწერეთ როგორია მიღებული ელიფსის გატოლება?",
        options: [
            "$4(x+2)^2 + 9(y-3)^2 = 36$",
            "$9(x+2)^2 + 4(y-3)^2 = 36$",
            "$4(x+2)^2 + 9(y-3)^2 = 1$",
            "დ) $9(x+2)^2 + 4(y-3)^2 = 1$",
            "ე) $4(x-2)^2 + 9(y+3)^2 = 36$",
            "ვ) $9(x-2)^2 + 4(y+3)^2 = 36$"
        ],
        correct: 0,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "რამდენი გადაღუნვის წერტილი აქვს $f(x) = x^3 \\cdot e^x$ ფუნქციას?",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$",
            "$6$"
        ],
        correct: 2,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "სიბრტყეზე დაშტრიხულია $\\begin{cases} y > x^2 \\\\ y < \\sqrt{x} \\end{cases}$ ორ უცნობიან უტოლობათა სისტემის ამონახსნი. იპოვეთ რისი ტოლია დაშტრიხული არის ფართობი?",
        options: [
            "$\\frac{1}{3}$",
            "$\\frac{2}{3}$",
            "$\\frac{3}{5}$",
            "$1$",
            "$2$",
            "$3$"
        ],
        correct: 0,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "$y = \\frac{\\sqrt{7}x^3}{\\sqrt{\\pi}}$; $y = \\frac{\\sqrt{5}x^2}{\\sqrt{\\pi}}$; $x = 1$; $x = 2$ ფუნქციების გრაფიკებით შემოსაზღვრული ფიგურა ბრუნავს აბცისთა ღერძის გარშემო. იპოვეთ რისი ტოლია ბრუნვით მიღებული სხულის მოცულობა?",
        options: [
            "$62$",
            "$86$",
            "$76$",
            "$80$",
            "$100$",
            "$96$"
        ],
        correct: 5,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "ჰიპერბოლის ერთერთი ასიმპტოტია $y = 0.75x$ წრფე, ხოლო ამ ჰიპერბოლის ერთერთი ფოკუსია $F(-5; 0)$ წერტილი. იპოვეთ, რისი ტოლია ჰიპერბოლის წვეროებს შორის მანძილი?",
        options: [
            "$2$",
            "$4$",
            "$6$",
            "$8$",
            "$10$",
            "$12$"
        ],
        correct: 3,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "პარაბოლის ფოკუსია F(-2;1) წერტილი. ხოლო ამ პარაბოლის დირექტრისაა x=4 წრფე. დაწერეთ როგორია ამ პარაბოლის განტოლება?",
        options: [
            "$y^2 + 2y + 12x + 13 = 0$",
            "$y^2 + 12y + 2x + 13 = 0$",
            "$y^2 - 2y + 12x - 11 = 0$",
            "$y^2 - 2y + 12x + 13 = 0$",
            "$y^2 - 12y + 2x + 11 = 0$",
            "$y^2 - 2y + 12x - 13 = 0$"
        ],
        correct: 2,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "დაადგინეთ $x$-ის რა მნიშვნელობებისთვისაა $f(x) = 2x - \\sin x$ ფუნქცია ზრდადი?",
        options: [
            "$x \\in [0; +\\infty)$",
            "$x \\in (-\\infty; 0]$",
            "$x \\in [2; +\\infty)$",
            "$x \\in (-\\infty; 2]$",
            "$x \\in [1; 2]$",
            "$x \\in \\mathbb{R}$"
        ],
        correct: 5,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "დაწერეთ იმ წრეწირის განტოლება, რომელიც ჩახაზულია სამკუთხედში, რომლის წვეროები საკოორდინატო სიბრტყის O(0;0), A(6;0), B(0;8) წერტილებია.",
        options: [
            "$x^2 + y^2 = 4(x + y - 1)$",
            "$x^2 + y^2 = 4x + 4y + 4$",
            "$x^2 + y^2 = 2x + 2y + 4$",
            "$x^2 + y^2 = 2x + 2y$",
            "$x^2 + y^2 = 4x + 4y$",
            "$x^2 + y^2 = 2x + 2y + 2$"
        ],
        correct: 0,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "დათვალეთ $\\int_{0}^{\\pi} x \\cdot \\sin x dx$ განსაზღვრული ინტეგრალის მნიშვნელობა?",
        options: [
            "$0.5\\pi$",
            "$2\\pi$",
            "$3\\pi$",
            "$\\pi$",
            "$1.5\\pi$",
            "$2.5\\pi$"
        ],
        correct: 3,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "$(4m; 1; 3m-1) m \\in \\mathbb{R}$ წარმოადგენს სივრცეში წრფის განტოლებას. იპოვეთ, რისი ტოლია იმ კუთხის კოსინუსი, რომელსაც ადგენს მოცემული წრფე OX საკოორდინატო ღერძთან?",
        options: [
            "$0.6$",
            "$0.8$",
            "$0.25$",
            "$0.75$",
            "$0.5$",
            "$1$"
        ],
        correct: 1,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "სივრცეში მოცემულია სამი წერტილი A(1;2;0), B(0;1;2), C(1;0;1). დაწერეთ იმ სიბრტყის განტოლება, რომელიც ამ სამ წერტილზე გამავალი სიბრტყის პარალელურია და გადის კოორდინატთა სათავეზე.",
        options: [
            "$2x - y - z = 0$",
            "$x + y + z = 0$",
            "$2x - 3y + 4z = 0$",
            "$3x + y + 2z = 0$",
            "$2x - y + 5z = 0$",
            "$x + 3y - 4z = 0$"
        ],
        correct: 3,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "სად კვეთს ორდინატთა ღერძს $y = 2x + 2 + \\frac{1}{x}$ ფუნქციის დახრილი ასიმპტოტი?",
        options: [
            "$(0;1)$",
            "$(0;-2)$",
            "$(0;0)$",
            "$(0;-1)$",
            "$(0;2)$",
            "$(0;0,5)$"
        ],
        correct: 4,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "ტრაპეცია ჩახაზულია წრეწირში ისე, რომ ტრაპეციის ერთი ფუძე დიამეტრია. იპოვეთ ყველა ასეთი ტრაპეციებიდან უდიდესი ფართოვის მქონე ტრაპეციის პართობი, თუ წრეწრისი რადიუსია $R = \\frac{\\sqrt{3}}{4}$ მ.",
        options: [
            "1მ²",
            "1,25მ²",
            "1,5მ²",
            "1,75მ²",
            "2მ²",
            "2,25მ²"
        ],
        correct: 5,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "საკოორდინარო სიბრტყერზე მოცემულია ორი ელიფსი: $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ და $\\frac{x^2}{16} + \\frac{y^2}{25} = 1$. იპოვეთ რისი ტოლია იმ წრეწირის დიამეტრი, რომელიც შემოხაზულია ამ ორი ელიფსის გადაკვეთის წერტილებზე?",
        options: [
            "$\\frac{12\\sqrt{3}}{\\sqrt{17}}$",
            "$2\\sqrt{41}$",
            "$2\\sqrt{51}$",
            "$\\frac{40\\sqrt{82}}{41}$",
            "$\\frac{10\\sqrt{62}}{43}$",
            "$\\frac{40\\sqrt{2}}{11}$"
        ],
        correct: 3,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "რამდენი $(x; y)$ წყვილია $\\begin{cases} 9(x-1)^2 + 4(y-1)^2 = 36 \\\\ 4(x-4)^2 + 9(y-2)^2 = 36 \\end{cases}$ განტოლებათა სისტემის ამონახსნი?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correct: 2,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "სივრცეში მოცემულია ორი სიბრტყე $x - y + 5z = 0$ და $2x + 3y + 7z = 10$. იპოვეთ მანძილი ამ ორი სიბრტყის და XOY საკოორდინატო სიბრტყის გადაკვეთის წერტილიდან (სამივე სიბრტყის საერთო წერტილი) კოორდინათთა სათავემდე?",
        options: [
            "$\\sqrt{2}$",
            "$\\sqrt{3}$",
            "$\\sqrt{5}$",
            "$\\sqrt{6}$",
            "$\\sqrt{7}$",
            "$\\sqrt{8}$"
        ],
        correct: 5,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "ცილინრის მოცულობაა $2\\pi$. იპოვეთ რისი ტოლია ყველა ასეთ ცილინდრებს შორის უმცირესი ზედაპირის ფართობის მქონე ცილინდრის სიმაღლე.",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$",
            "$6$"
        ],
        correct: 1,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "იპოვეთ რისი ტოლია $f(x) = \\frac{1}{x-1} + \\frac{1}{2-x}$ ფუნქციის მინიმალური მნიშვნელობა (1;2) შუალედში?",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$",
            "$6$"
        ],
        correct: 3,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "$X$ და $Y$ შემთხვევით შერჩეული (თითოეული თანაბრადაა განაწილებული მთელ მონაკვეთზე) ორი ნამდვილი რიცხვია $[0; e]$ სიმრავლიდან. იპოვეთ რისი ტოლია ალბათობა იმისა, რომ $X \\cdot Y \\leq 1$?",
        options: [
            "$\\frac{2}{e^2}$",
            "$\\frac{3}{4e^2}$",
            "$\\frac{4}{e^2}$",
            "$\\frac{5}{e^2}$",
            "$\\frac{3}{e^2}$",
            "$\\frac{3}{2e^2}$"
        ],
        correct: 4,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "რა მაქსიმალური ფართობი შეიძლება ჰქონდეს მართკუთხა სამკუთხედს, რომლის ჰიპოტენუზისა და მასზე დაშვებული სიმაღლის ჯამია 30მ?",
        options: [
            "100მ²",
            "125მ²",
            "12,5მ²",
            "112,5მ²",
            "200მ²",
            "225მ²"
        ],
        correct: 0,
        tags: ["Inequalities", "Exponential"]
    },
    {
        question: "რამდენი ამონახსნი აქვს $\\frac{1}{5}x^5 - \\frac{13}{3}x^3 + 36x + 1 = 0$ განტოლებას ნამდვილ რიცხვებში?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correct: 1,
        tags: ["Inequalities", "Exponential"]
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
