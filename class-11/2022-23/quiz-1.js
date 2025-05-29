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
    "question": "მოცემულია $(-1; 1)$ ინტერვალში განსაზღვრული $F(x) = x^2$, $G(x) = x^3$, $T(x) = 3^x$, $L(x) = \\sin x$, $K(x) = \\cos x$ ფუნქციები. ჩამოთვლილთაგან რამდენ ფუნქციას გააჩნია შექცეული ფუნქცია?",
    "options": ["არცერთს", "$1$", "$2$", "$3$", "$4$", "$5$"],
    "correct": 3, // Please add the correct option index here (0 for 'a', 1 for 'b', etc.)
    "tags": [] // Please add relevant tags here
  },
  {
    "question": "რამდენი დადებითი ამონახსნი აქვს $3^x = \\sin \\frac{1}{3} x$ განტოლებას?",
    "options": ["არცერთი", "ერთი", "ორი", "სამი", "ოთხი", "ოთხზე მეტი"],
    "correct": 0,
    "tags": []
  },
  {
    "question": "იპოვეთ $\\log_8(x^2 - 6x + 10) + 2$ გამოსახულების უმცირესი მნიშვნელობა.",
    "options": ["$-1$", "$0$", "$1$", "$2$", "$\\log_8 3$", "$\\log_8 10$"],
    "correct": 3,
    "tags": []
  },
  {
    "question": "მოცემულია $ABCDA_1B_1C_1D_1$ კუბი. იპოვეთ კუთხე $BCA_1$ და $B_1C_1D$ სიბრტყეებს შორის.",
    "options": ["30°", "45°", "60°", "90°", "120°", "150°"],
    "correct": 3,
    "tags": []
  },
  {
    "question": "წესიერი ექვსკუთხა პირამიდის სიმაღლეა $\\sqrt{32}$, ხოლო ფუძის გვერდი 8. იპოვეთ მცირედიაგონალური კვეთის ფართობი.",
    "options": ["$4\\sqrt{6}$", "$3\\sqrt{6}$", "$24$", "$32$", "$48$", "$64$"],
    "correct": 4,
    "tags": []
  },
  {
    "question": "ამოხსენით განტოლება $3^{\\cos x} \\cdot 5^{\\sin x} = 15^{\\cos x}$ (პასუხებში ყველგან $n \\in \\mathbb{Z}$.) ",
    "options": ["$x = \\frac{\\pi}{2} + \\pi n$", "$x = \\pi + \\pi n$", "$x = \\frac{\\pi}{4} + \\pi n$", "$x = \\frac{\\pi}{4} + 2\\pi n; x = \\frac{\\pi}{2} + 2\\pi n$", "$x = \\pi n$", "$x = \\frac{\\pi}{4} + 4\\pi n$"],
    "correct": 2,
    "tags": []
  },
  {
    "question": "რომელ მეოთხედში მდებარეობს $f(x) = 5^{-|x|} - 5$ ფუნქციის გრაფიკი?",
    "options": ["I", "I-II", "I-II-III", "III-IV", "II-IV", "I-II-III-IV"],
    "correct": 3,
    "tags": []
  },
  {
    "question": "შემდეგი რიცხვები $a = 25^{\\frac{1}{\\log_6 5}}$ ; $b = 2^{\\log_{\\sqrt{2}}{2\\sqrt{5}}}$ ; $c = 3^{\\log_9{121}}$ ; $d = (\\frac{1}{2})^{\\log_{\\frac{1}{3}}{81}}$ დაალაგეთ ზრდის მიხედვით.",
    "options": ["a;c;b;d", "c;d;b;a", "c;d;a;b", "d;c;a;b", "b;d;c;a", "c;b;d;a"],
    "correct": 1,
    "tags": []
  },
  {
    "question": "წესიერი სამკუთხა პირამიდის სიმაღლე $2\\sqrt{3}$-ია, ხოლო გვერდითი წახნაგი ფუძის სიბრტყესთან $60°$-იან კუთხეს ქმნის. იპოვეთ პირამიდის მოცულობა.",
    "options": ["$12\\sqrt{3}$", "16", "$8\\sqrt{3}$", "$18$", "$24$", "$32$"],
    "correct": 4,
    "tags": []
  },
  {
    "question": "წესირი სამკუთხა პირამიდის წვეროსთან მდებარე ბრტყელი კუთხეა $90°$. იპოვეთ ამ პირამიდის გვერდითი ზედაპირის ფართობის შეფარდება ფუძის ფართობთან.",
    "options": ["$\\sqrt{2}$", "2", "$\\sqrt{3}$", "1", "3", "$\\sqrt{5}$"],
    "correct": 4,
    "tags": []
  },
  {
    "question": "იპოვეთ $2^{x^2 - 4x + 5} = 1 + \\sin^2 \\frac{\\pi x}{4}$ განტოლების ამონახსნთა რაოდენობა?",
    "options": ["$0$", "$1$", "$2$", "$3$", "$4$", "$5$"],
    "correct": 2,
    "tags": []
  },
  {
    "question": "იპოვეთ $\\frac{f(x+2)}{f(x-7)}$ გამოსახულების მნიშვნელობა , თუ $f(x) = 8^{x+1}$.",
    "options": ["$8^{12}$", "$8^{17}$", "$8^5$", "$2^{22}$", "$2^{27}$", "$2^{30}$"],
    "correct": 4,
    "tags": []
  },
  {
    "question": "გამოთვალეთ $6 \\cdot \\log_3 2 \\cdot \\log_4 3 \\cdot \\log_5 4 \\cdot \\log_6 5 \\cdot \\log_7 6 \\cdot \\log_8 7$.",
    "options": ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    "correct": 1,
    "tags": []
  },
  {
    "question": "იპოვეთ წესიერი სამკუთხა პირამიდის გვერდითი ზედაპირის ფართობი, თუ მისი სიმაღლე უდრის 4სმ-ს და აპოთემა 8სმ-ია.",
    "options": ["144 სმ$^2$", "124 სმ$^2$", "96 სმ$^2$", "248 სმ$^2$", "288 სმ$^2$", "324 სმ$^2$"],
    "correct": 4,
    "tags": []
  },
  {
    "question": "პირამიდის ფუძეა რომბი, რომლის გვერდია 6 და მახვილი კუთხე $30°$ ფუძესთან მდებარე ყველა ორწახნაგა კუთხე ტოლია. პირამიდის გვერდითი ზედაპირის ფართობია 36. იპოვეთ ფუძესთან მდებარე ორწახნაგა კუთხის სიდიდე.",
    "options": ["$10°$", "$20°$", "$30°$", "$40°$", "$45°$", "$60°$"],
    "correct": 5,
    "tags": []
  },
  {
    "question": "იპოვეთ $199^{|x+6|} - 199^{|x^2+4x-12|} = \\log_{199} (\\cot 225°)$ განტოლების ფესვთა ჯამი.",
    "options": ["$-2$", "$-1$", "$0$", "$1$", "$3$", "$19$"],
    "correct": 0,
    "tags": []
  },
  {
    "question": "გამოთვალეთ $\\log_{10} 45$, თუ $\\log_5 3 = a$ და $\\log_5 2 = b$.",
    "options": ["$\\frac{a+1}{b-1}$", "$\\frac{2a+1}{b+1}$", "$\\frac{5a-b}{a-1}$", "$\\frac{a+b}{2b+1}$", "$\\frac{3a}{5b}$", "$\\frac{3a+1}{5b}$"],
    "correct": 1,
    "tags": []
  },
  {
    "question": "ამოხსენით $\\log_2^2(3x - 1) + \\log_{(3x-1)}^2 2 - \\log_2(3x - 1)^2 - \\log_{(3x-1)} 4 + 2 = 0$ განტოლება.",
    "options": ["$1$", "$1$; $\\log_2 3$", "$1$; $\\log_3 2$", "$1$; $\\log_2 3$ ; $\\log_3 4$", "$1$; $2 + \\log_2 3$", "1; $\\log_3 2 + 1$"],
    "correct": 0,
    "tags": []
  },
  {
    "question": "პირამიდის ფუძეა $ABC$ ტოლგვერდა სამკუთხედი, რომლის გვერდია 2. $ACD$ წახნაგი ფუძის მართობულია, ამასთან $AD = CD = \\sqrt{6}$. იპოვეთ $BD$ წიბოს სიგრძე.",
    "options": ["$\\sqrt{6}$", "$\\sqrt{8}$", "$\\sqrt{10}$", "$3$", "$4$", "$3\\sqrt{2}$"],
    "correct": 1,
    "tags": []
  },
  {
    "question": "წესიერი ოთხკუთხა პრიზმის გვერდითი წახნაგები კვადრატებია. მისი გვერდითი ზედაპირის ფართობი არის 144. იპოვეთ იმ მრავალწახნაგას მოცულობა რომლის წვეროები პრიზმის ყველა წახნაგში ჩახაზული წრეწირების ცენტრებშია .",
    "options": ["$12$", "$16$", "$16\\sqrt{2}$", "$18\\sqrt{2}$", "$24$", "$36$"],
    "correct": 5,
    "tags": []
  },
  {
    "question": "ჩამოთვლილთაგან რომელია $\\log_3(x^{x^4}) = \\log_{\\frac{1}{3}} 0.25$ განტოლების ამონახსნი?",
    "options": ["$2$", "$\\sqrt{2}$", "$2\\sqrt{2}$", "$\\sqrt[4]{3}$", "$4$", "$6$"],
    "correct": 1,
    "tags": []
  },
  {
  "question": "ჩამოთვლილთაგან რისი ტოლი შეიძლება იყოს $x + y$, თუ $\\left\\{\\begin{array}{c}3^x \\cdot 2^y=576 \\\\ \\log _{\\sqrt{2}}(y-x)=4\\end{array}\\right.$",
  "options": [
      "$8$",
      "$6$",
      "$0$",
      "$4$",
      "$1$",
      "$10$"
  ],
  "correct": 0,
    "tags": []
  },  
  {
    id: 23,
    question: "ჩამოთვლილთაგან რომელი აკმაყოფილებს $2^{\\log_x 2} = x^{\\frac{1}{\\log_4 x}}$ განტოლებას",
    options: [
      "$\\sqrt{2}$",
      "$4^{\\sqrt{2}}$",
      "$\\log_2 3$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$2^{\\sqrt{2}-1}$",
      "$\\frac{2}{\\sqrt{2} + 1}$"
    ],
    correct: 4,
    tag: []
  },
  {
    id: 24,
    question: "სამკუთხა პირამიდის გვერდითი წიბოები უდრის $a$-ს. ამ წიბოებით შექმნილი წვეროსთან მდებარე ბრტყელი კუთხეებია $45^{\\circ}, 45^{\\circ}$ და $60^{\\circ}$. იპოვეთ პირამიდის მოცულობა.",
    options: [
      "$2a^3$",
      "$a^3$",
      "$\\frac{1}{2}a^3$",
      "$\\frac{3}{2}a^3$",
      "$\\frac{1}{12}a^3$"
    ],
    correct: 5,
    tag: []
  },
  {
    id: 25,
    question: "$ABCDA_1B_1C_1D_1$ მართი პარალელეპიპედის მოცულობაა 6 სმ$^3$ . ($ABCD$ და $A_1B_1C_1D_1$ ფუძეებია $AA_1;BB_1$; $CC_1;DD_1$ გვედითი წიბოებია). იპოვეთ $AD_1CB_1$ პირამიდის მოცულობა .",
    options: [
      "$2სმ^3$",
      "$3სმ^3$",
      "$4სმ^3$",
      "$\\frac{10}{3}სმ^3$",
      "$\\frac{11}{3}სმ^3$",
      "$\\frac{13}{3}სმ^3$"
    ],
    correct: 0,
    tag: []
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
