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
        question: "გამოთვალეთ $f'\\left(\\frac{\\pi}{4}\\right)$, თუ $f(x) = \\sin2x$.",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$\\frac{\\sqrt{2}}{2}$",
            "$3$",
            "$4$"
        ],
        correct: 0,
        tags: ["Math"]
    },
    {
        question: "გამოთვალეთ $\\int_{0}^{2} (3x^2 + x) dx$.",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$4$",
            "$8$",
            "$10$"
        ],
        correct: 5,
        tags: ["Math"]
    },
    {
        question: "ჩამოთვლილთაგან $a$-ს რომელი მნიშვნელობისთვის მოიძებნება ისეთი $F(x)$ ფუნქცია, რომლისთვისაც $F(x) + x^8 + a = 0$ განტოლებას ექნება ამონახსნი ნამდვილ რიცხვთა სიმრავლეში, თუ $F'(x) = g(x)$, ხოლო $g(x) = 2x$? I. $a=5$ II. $a=3$ III. $a=-8$",
        options: [
            "მხოლოდ I",
            "მხოლოდ II",
            "მხოლოდ III",
            "მხოლოდ I და III",
            "მხოლოდ II და III",
            "სამივე"
        ],
        correct: 5,
        tags: ["Math"]
    },
    {
        question: "იპოვეთ $\\frac{x^2}{8^2} - \\frac{y^2}{6^2} = 1$ ჰიპერბოლის ექსცენტრისიტეტი.",
        options: [
            "$\\frac{3}{4}$",
            "$\\frac{5}{4}$",
            "$\\frac{\\sqrt{7}}{4}$",
            "$\\frac{\\sqrt{5}}{2}$",
            "$\\frac{4}{3}$",
            "$\\frac{2}{3}$"
        ],
        correct: 1,
        tags: ["Math"]
    },
    {
        question: "მოცემულია $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ელიფსის განტოლება. ჩამოთვლილთაგან რისი ტოლია $a + b$, თუ დიდი ღერძის სიგრძე 34-ის, ხოლო ექსცენტრისიტეტი $\\frac{15}{17}$-ის ტოლია.",
        options: [
            "$32$",
            "$68$",
            "$25$",
            "$49$",
            "$353$",
            "$16$"
        ],
        correct: 2,
        tags: ["Math"]
    },
    {
        question: "$\\alpha(x)$ და $\\beta(x)$ ფუნქციებისთვის სრულდება $\\tan(\\alpha(x)) = x$ და $\\cot(\\beta(x)) = x$ ტოლობები. გამოთვალეთ $(\\alpha(x) + \\beta(x))'$.",
        options: [
            "$0$",
            "$1$",
            "$\\frac{1}{\\sqrt{1-x^2}}$",
            "$-\\frac{1}{\\sqrt{1-x^2}}$",
            "$x$",
            "$\\sqrt{1 - x^2}$"
        ],
        correct: 0,
        tags: ["Math"]
    },
    {
        question: "მოცემულია $f(x) = (x^2 + \\sin^2x)^4$ და $g(x) = \\frac{f'(x)}{8(x^2+\\sin^2x)^3}$. იპოვეთ $g'\\left(\\frac{\\pi}{4}\\right)$.",
        options: [
            "$1$",
            "$\\pi$",
            "$\\frac{1}{4}$",
            "$\\frac{\\pi+2}{4}$",
            "$\\frac{\\sqrt{2}}{8}$",
            "$\\frac{\\pi}{8}$"
        ],
        correct: 0,
        tags: ["Math"]
    },
    {
        question: "ჩამოთვლილთაგან რომელ შუალედშია $y = \\frac{x^4}{4} - x^3 - \\frac{x^2}{2} + 3x$ ფუნქცია ზრდადი?",
        options: [
            "$[-4;-2]$",
            "$(-2;0)$",
            "$[0; 1]$",
            "$(1; 2)$",
            "$(2; 4)$",
            "$(1;5)$"
        ],
        correct: 2,
        tags: ["Math"]
    },
    {
        question: "რამდენი მხები გაივლება $A(4; 6)$ წერტილიდან $y^2 = 9x$ პარაბოლისადმი?",
        options: [
            "$1$",
            "$2$",
            "$4$",
            "$6$",
            "$3$",
            "არცერთი"
        ],
        correct: 0,
        tags: ["Math"]
    },
    {
        question: "ჩამოთვლილთაგან, რომელია $\\frac{x^2}{45} - \\frac{y^2}{20} = 1$ ჰიპერბოლას ასიმპტოტი?",
        options: [
            "$y=\\frac{2}{5}x$",
            "$y=\\frac{2}{3}x$",
            "$y=\\frac{1}{5}x$",
            "$y=\\frac{4}{9}x$",
            "$y=-\\frac{3}{2}x$",
            "$y=-\\frac{9}{4}x$"
        ],
        correct: 1,
        tags: ["Math"]
    },
    {
        question: "გამოთვალეთ $\\int_{0}^{\\frac{\\pi}{4}} \\left(2\\cos^2\\left(\\frac{\\pi}{4} - \\frac{x}{2}\\right) + \\cos x\\right) dx$.",
        options: [
            "$1$",
            "$\\pi$",
            "$0$",
            "$\\frac{3\\pi}{4} + 3$",
            "$\\frac{\\pi}{4} -2$",
            "$\\frac{\\pi}{4} + 1$"
        ],
        correct: 5,
        tags: ["Math"]
    },
    {
        question: "ჩამოთვლილთაგან $f(x) = x^3 + 2x^2$ ფუნქციის გრაფიკზე მდებარე რომელ წერტილზე გაივლება მხები, რომელიც $y = -x + 7$ წრფის პარალელურია?",
        options: [
            "$(-1;1)$",
            "$(-2;0)$",
            "$(-3;-9)$",
            "$(0;0)$",
            "$(2;16)$",
            "$(1;3)$"
        ],
        correct: 0,
        tags: ["Math"]
    },
    {
        question: "იპოვეთ $\\frac{x^2}{25} + \\frac{y^2}{21} = 1$ ელიფსის დირექტრისებს შორის მანძილი.",
        options: [
            "$4$",
            "$25$",
            "$21$",
            "$\\sqrt{21}$",
            "$5$",
            "$8$"
        ],
        correct: 1,
        tags: ["Math"]
    },
    {
        question: "$Ax + By + Cz + D = 0$ სიბრტყე $OZ$ ღერძის მართობულია და გადის $N(3;5;1)$ წერტილზე. გამოთვალეთ $A + B + C + D$ ჯამი.",
        options: [
            "$1$",
            "$0$",
            "$9$",
            "$1$",
            "$-9$",
            "$-1$"
        ],
        correct: 1,
        tags: ["Math"]
    },
    {
        question: "ჩამოთვლილთაგან რისი ტოლია $a$ პარამეტრი, თუ $f(x) = \\frac{a}{3}x^3 + 4x^2 + ax + 7a^2 - 11$ ფუნქცია კლებადია მთელ რიცხვთა ღერძზე?",
        options: [
            "$-8$",
            "$-3$",
            "$-2$",
            "$0$",
            "$4$",
            "$7$"
        ],
        correct: 0,
        tags: ["Math"]
    },
    {
        question: "იპოვეთ რა უმცირესი სიგრძე შეიძლება ჰქონდეს $N(0;0)$ წერტილისა და $f(x) = \\sqrt{10 + x - 2x^2}$ ფუნქციის გრაფიკზე მდებარე წერტილის შემაერთებელ მონაკვეთს.",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$\\sqrt{3}$",
            "$3\\sqrt{2}$",
            "$\\sqrt{5}$"
        ],
        correct: 1,
        tags: ["Math"]
    },
    {
        question: "რამდენი $y = kx + b$ სახის ასიმპტოტი გააჩნია $f(x) = \\frac{x}{\\sqrt{x^2 + x}}$ ფუნქციას?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$6$"
        ],
        correct: 2,
        tags: ["Math"]
    },
    {
        question: "იპოვეთ იმ ოთხკუთხედის ფართობი, რომლის ორი წვერო ემთხვევა $\\frac{x^2}{13} - \\frac{y^2}{36} = 1$ ჰიპერბოლის ფოკუსებს, ხოლო დანაჩენი ორი მისი წარმოსახვითი ღერძის ბოლოებს.",
        options: [
            "$42$",
            "$36$",
            "$64$",
            "$84$",
            "$56$",
            "$18$"
        ],
        correct: 3,
        tags: ["Math"]
    },
    {
        question: "გამოთვალეთ იმ სხეულის მოცულობა, რომელიც მიიღება $y = 2x + 1$, $x = 1$, $x = 4$ და $y = 0$ წირებით შემოსაზღვრული ფიგურის ბრუნვით $Ox$ ღერძის გარშემო.",
        options: [
            "$98\\pi$",
            "$146\\pi$",
            "$238\\pi$",
            "$176\\pi$",
            "$128\\pi$",
            "$117\\pi$"
        ],
        correct: 5,
        tags: ["Math"]
    },
    {
        question: "სხეულის გავლილი მანძილის დროზე დამოკიდებულება $S(t) = 18t + 9t^2 - t^3$ ტოლობით გამოისახება. იპოვეთ სხეულის მაქსიმალური სიჩქარე ($V(t) = S'(t)$).",
        options: [
            "$36$",
            "$45$",
            "$60$",
            "$64$",
            "$72$",
            "$90$"
        ],
        correct: 1,
        tags: ["Math"]
    },
    {
        question: "ჩამოთვლილთაგან რისი ტოლია იმ $A$ წერტილის კოორდინატები, რომლიდანაც $f(x) = x^4 - x^3$ ფუნქციის გრაფიკზე მდებარე რომელიმე $M$ წერტილისთვის და $g(x) = 5x^2 - 12$ ფუნქციის გრაფიკზე მდებარე რომელიმე $N$ წერტილისთვის $AM + AN$ ჯამი იქნება უმცირესი?",
        options: [
            "$(0; 0)$",
            "$(0; 6)$",
            "$(6; 0)$",
            "$(-3;4)$",
            "$(2; 8)$",
            "$(4;6)$"
        ],
        correct: 4,
        tags: ["Math"]
    },
    {
        question: "რამდენი ამონახსნი აქვს $f(f(x)) = f(x)$ განტოლებას, თუ $f(x) = \\sqrt[5]{3 - x^3} - x$ ნამდვილ რიცხვთა სიმრავლიდან?",
        options: [
            "არცერთი",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correct: 0,
        tags: ["Math"]
    },
    {
        question: "გამოთვალეთ მანძილი $A(1;3;7)$ წერტილიდან იმ სიბრტყემდე, რომელიც $Ox$, $Oy$ და $Oz$ ღერძების დადებითი მიმართულებებიდან მოკვეთს შესაბამისად 2, 1 და 2 სიგრძის მონაკვეთებს.",
        options: [
            "$\\sqrt{5}$",
            "$\\sqrt{11}$",
            "$\\sqrt{59}$",
            "$2\\sqrt{6}$",
            "$12$",
            "$11$"
        ],
        correct: 3,
        tags: ["Math"]
    },
    {
        question: "$Ax + By + Cz + D = 0$ სიბრტყე გადის კოორდინატთა სათავეზე და $M(0;1;2)$ წერტილზე და ეს სიბრტყე $3x - 4y + 5z - 12 = 0$ სიბრტყის მართობულია. ჩამოთვლითაგან რისი ტოლია $\\frac{A}{C}$?",
        options: [
            "$-4$",
            "$3$",
            "$-\\frac{13}{3}$",
            "$-\\frac{11}{3}$",
            "$\\frac{1}{3}$",
            "ყველა წინა პასუხი მცდარია"
        ],
        correct: 2,
        tags: ["Math"]
    },
    {
        question: "იპოვეთ $y^2 = x$, $y^2 = 2x$ და $y = \\frac{x}{2}$ წირებით შემოსაზღვრული ფიგურის ფართობი.",
        options: [
            "$3$",
            "$3\\sqrt{2}$",
            "$\\sqrt{5} + 2$",
            "$3\\sqrt{6} -2$",
            "$4$",
            "$6$"
        ],
        correct: 5,
        tags: ["Math"]
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

  