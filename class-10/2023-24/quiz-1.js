let timerInterval;
let timeLeft = 3 * 60 * 60; // 5 minutes


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
  // Question 1
  {
    question: "\\(\\alpha\\) პარამეტრი \\([0; 199]\\) შუალედიდან იღებს მნიშვნელობებს, \\(\\beta\\) კი − \\([0; 19.9]\\) შუალედიდან და მართკუთხა სააკოორდინატო სიბრტყეზე განხილულია \\(A(3\\cos\\alpha; 3\\sin\\alpha)\\) და \\(B(4\\cos\\beta; 4\\sin\\beta)\\) წერტილები. იპოვეთ \\(AB\\) მონაკვეთის სიგრძის უდიდესი შესაძლო მნიშვნელობა.",
    options: ["$4$", "$5$", "$6$", "$7$", "$8$", "$9$"],
    correct: 3,
    tags: ["Geometry"]
  },
  // Question 2
  {
    question: "ჩამოთვლილთაგან რომელი ფუნქციის მნიშვნელობები იქნება ტოლი არგუმენტის შემდეგი სამივე მნიშვნელობისათვის: \\(x_1 = \\frac{11\\pi}{5}, \\quad x_2 = -\\frac{6\\pi}{5}, \\quad x_3 = \\frac{4\\pi}{5}\\)?",
    options: ["$f(x) = \\cos x$", "$f(x) = \\cos 5x$", "$f(x) = \\sin x$", "$f(x) = \\sin(0.5x)$", "$f(x) = \\tan x$", "$f(x) = \\cot x$"],
    correct: 2,
    tags: ["Trigonometry"]
  },
  // Question 3
  {
    question: "რისი ტოლია \\(\\sin\\alpha \\cdot |\\sin\\alpha| + \\cos\\alpha \\cdot |\\cos\\alpha|\\) გამოსახულების მნიშვნელობა ნებისმიერი \\(\\alpha\\)-სთვის \\((1.5\\pi; 2\\pi)\\) შუალედიდან?",
    options: ["$0$", "$\\tan^{2}\\alpha$", "$1$", "$-1$", "$\\cos 2\\alpha$", "$-\\cos 2\\alpha$"],
    correct: 4,
    tags: ["Trigonometry"]
  },
  // Question 4
  {
    question: "წერტილიდან სიბრტყისადმი გავლებულია ორი დახრილი, რომელთა სიგრძეთა სხვაობა 7-ის ტოლია. მათი გეგმილების სიგრძეებია 15 და 6. იპოვეთ მანძილი მოცემული წერტილიდან მოცემულ სიბრტყემდე.",
    options: ["$5.5$", "$6$", "$6.5$", "$7$", "$7.5$", "$8$"],
    correct: 5,
    tags: ["Geometry", "3D"]
  },
  // Question 5
  {
    question: "\\(ABCD\\) პარალელოგრამის წვეროებიდან მის არაგადამკვეთ სიბრტყეზე დაშვებულია \\(AA_1\\), \\(BB_1\\), \\(CC_1\\) და \\(DD_1\\) მართობები. იპოვეთ \\(DD_1\\), თუ \\(AA_1 = 1\\), \\(BB_1 = 2\\) და \\(CC_1 = 3\\).",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 1,
    tags: ["Solid Geometry"]
  },
  // Question 6
  {
    question: "ჩამოთვლილთაგან რომელი \\(f(x)\\) ფუნქციისთვისაა \\( f(x + y) = \\frac{f(x) + f(y)}{1 - f(x)f(y)} \\) ტოლობა სამართლიანი \\(x\\) და \\(y\\) ცვლადების ყველა დასაშვები მნიშვნელობისათვის?",
    options: ["$f(x) = \\tan x$", "$f(x) = \cot x$", "$f(x) = \sin x$", "$f(x) = \cos x$", "$f(x) = x^2$", "$f(x) = \\frac{1}{x}$"],
    correct: 0,
    tags: ["Trigonometry"]
  },

  // Question 7
  {
    question: "\\(a = \sin \\frac{\\pi}{6}\\), \\(b = \\frac{\\pi}{6}\\) და \\(c = \\tan \\frac{\\pi}{6}\\) რიცხვები დაალაგეთ ზრდადობით.",
    options: ["$a < b < c$", "$a < c < b$", "$b < a < c$", "$b < c < a$", "$c < a < b$", "$c < b < a$"],
    correct: 0,
    tags: ["Comparison"]
  },

  // Question 8
  {
    question: "ჩამოთვლილთაგან რომლის ტოლია \\( \\frac{4\sin^{3}x - 3\sin x}{4\cos^{3}x - 3\cos x} \\) გამოსახულების მნიშვნელობა \\(x\\) ცვლადის ყველა დასაშვები მნიშვნელობისათვის?",
    options: ["$\\tan 2x$", "$-\\tan 3x$", "$\\cot 3x$", "$-\\cot 2x$", "$3\\tan x$", "$-2\\cot x$"],
    correct: 1,
    tags: ["Trigonometric Identities"]
  },

  // Question 9
  {
    question: "სამკუთხედის გვერდების სიგრძეებია \\(\\sqrt{10}, \\sqrt{6}\\) და \\(4\\). \\(K\\) წერტილი სამკუთხედის სამივე წვეროდან დაშორებულია 3-ით. იპოვეთ მანძილი \\(K\\) წერტილიდან სამკუთხედის სიბრტყემდე.",
    options: ["$\\sqrt{5}$", "$2$", "$\\sqrt{6}$", "$\\sqrt{3}$", "$2\\sqrt{2}$", "$\\sqrt{7}$"],
    correct: 0,
    tags: ["Geometry"]
  },

  // Question 10
  {
    question: "\\(AB\\) მონაკვეთი \\(\\alpha\\) სიბრტყის პარალელურია და მისგან 2-ის ტოლი მანძილითაა დაშორებული. \\(B\\) წერტილიდან \\(\\alpha\\) სიბრტყისადმი გავლებულია \\(AB\\)-ს მართობული \\(BC\\) დახრილი, რომელიც \\(\\alpha\\) სიბრტყესთან 30°-იან კუთხეს ადგენს. იპოვეთ \\(AC\\) დახრილის \\(\\alpha\\) სიბრტყეზე გეგმილის სიგრძე, თუ \\(AB = 2\\).",
    options: ["$2\\sqrt{2}$", "$3$", "$2\\sqrt{3}$", "$4$", "$2\\sqrt{5}$", "$5$"],
    correct: 3,
    tags: ["3D Geometry"]
  },
  // Question 11
  {
    question: "ცნობილია, რომ \\(\\sin x = \\frac{1}{\\sqrt{5}}\\) და \\(\\sin y = \\frac{1}{\\sqrt{10}}\\) და \\(x \\in (0; 0.5\\pi), y \\in (0; 0.5\\pi)\\). იპოვეთ \\(x + y\\).",
    options: ["$\\frac{\\pi}{3}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "$\\frac{3\\pi}{4}$", "დადგენა შეუძლებელია"],
    correct: 2,
    tags: ["Trigonometry"]
  },

  // Question 12
  {
    question: "იპოვეთ გამოსახულების \\(\\frac{\\sin 2\\alpha + \\tan 2\\alpha}{\\cos 2\\alpha - \\tan 2\\alpha}\\) მნიშვნელობა, თუ \\(\\tan \\alpha = 2\\).",
    options: ["$\\frac{2}{11}$", "$-\\frac{4}{11}$", "$\\frac{6}{11}$", "$-\\frac{8}{11}$", "$\\frac{10}{11}$", "$-\\frac{12}{11}$"],
    correct: 3,
    tags: ["Trigonometry"]
  },

  // Question 13
  {
    question: "იპოვეთ \\(4(\\sin^6\\alpha + \\cos^6\\alpha)\\) გამოსახულების მნიშვნელობა, თუ \\(\\sin\\alpha + \\cos\\alpha = k\\).",
    options: ["$-k^6 - 2k^4 + k^2$", "$-2k^6 - k^2$", "$k^6 + 2k^4 - k^2$", "$k^4 - 3k^2 + 2$", "$4k^4 + 5k^2$", "$-3k^4 + 6k^2 + 1$"],
    correct: 5,
    tags: ["Algebra"]
  },

  // Question 14
  {
    question: "რომბის გვერდზე გავლებულია სიბრტყე, რომელიც რომბის დიაგონალებთან ადგენს 30°-ისა და 60°-ის ტოლ კუთხეებს. იპოვეთ რომბის მახვილი კუთხის კოსინუსი.",
    options: ["$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{2}{3}$", "$\\frac{\\sqrt{3}}{3}$"],
    correct: 1,
    tags: ["Geometry"]
  },

  // Question 15
  {
    question: "საერთო \\(AB\\) კათეტის მქონე \\(ABK\\) და \\(ABP\\) მართკუთხა სამკუთხედები 45°-იან ორწახნაგა კუთხეს ქმნიან (ორივე სამკუთხედში \\(B\\) კუთხეა მართი). იპოვეთ ჰიპოტენუზების შემცველ წრფეებს შორის კუთხე, თუ ჰიპოტენუზების სიგრძეებია 3 და \\(\\sqrt{2}\\) და \\(AB = 1\\).",
    options: ["$15°$", "$30°$", "$45°$", "$60°$", "$75°$", "$90°$"],
    correct: 2,
    tags: ["Geometry"]
  },
  // Question 16
  {
    question: "\\(a\\) პარამეტრის რამდენი მნიშვნელობისთვისაა \\(f(x) = \\sin \\left(\\frac{x}{|a^2 - 4|}\\right)\\) ფუნქციის უმცირესი დადებითი პერიოდი \\(8\\pi\\)-ის ტოლი?",
    options: ["არცერთი", "ერთი", "ორი", "სამი", "ოთხი", "ოთხზე მეტი"],
    correct: 3,
    tags: ["Functions"]
  },

  // Question 17
  {
    question: "ჩამოთვლილთაგან რომლის ტოლია \\(\\frac{\\sin(\\frac{\\pi}{2}+\\alpha) \\cdot \\tan(\\pi-\\alpha)}{\\cos(\\frac{3\\pi}{2}+\\alpha) \\cdot \\cot(2\\pi-\\alpha)}\\) გამოსახულების მნიშვნელობა ცვლადის ყველა დასაშვები მნიშვნელობისათვის?",
    options: ["$-\\tan\\alpha$", "$\\tan\\alpha$", "$-\\cot\\alpha$", "$\\cot\\alpha$", "$-1$", "$1$"],
    correct: 1,
    tags: ["Trigonometric Identities"]
  },

  // Question 18
  {
    question: "ჩამოთვლილთაგან რომლის ტოლია \\(\\cos^2(\\alpha - \\beta) - \\sin^2(\\alpha + \\beta)\\) გამოსახულების მნიშვნელობა?",
    options: ["$\\cos2\\alpha \\cdot \\cos2\\beta$", "$\\sin2\\alpha \\cdot \\sin2\\beta$", "$\\cos(2\\alpha + 2\\beta)$", "$\\sin(2\\alpha - 2\\beta)$", "$\\cos^2\\alpha \\cdot \\cos^2\\beta$", "$\\sin^2\\alpha \\cdot \\sin^2\\beta$"],
    correct: 0,
    tags: ["Trigonometry"]
  },

  // Question 19
  {
    question: "120°-იანი ორწახნაგა კუთხის სხვადასხვა წახნაგებზე მდებარე \\(A\\) და \\(B\\) წერტილებიდან წიბოზე დაშვებულია \\(AA_1\\) და \\(BB_1\\) მართობები. იპოვეთ \\(\\angle AB_1B\\) კუთხის კოსინუსი, თუ \\(AA_1 = 1\\), \\(BB_1 = x\\) და \\(A_1B_1 = y\\).",
    options: ["$\\frac{-1}{2\\sqrt{1 + x^2}}$", "$\\frac{-1}{2(1 + x^2)}$", "$\\frac{-1}{2(1 + x^2 + y^2)}$", "$\\frac{-1}{2\\sqrt{1 + x^2 + y^2}}$", "$\\frac{-1}{2\\sqrt{1 + y^2}}$", "დადგენა შეუძლებელია"],
    correct: 4,
    tags: ["3D Geometry"]
  },

  // Question 20
  {
    question: "შემდეგი სამი დებულებიდან რომელია ჭეშმარიტი? (A) თუ სივრცეში არსებული წრფეებიდან ყოველი ორი იკვეთება და არცერთი სამი ერთ წერტილში არ იკვეთება, მაშინ ყველა მათგანი ერთ სიბრტყეშია. (B) თუ სივრცეში არსებული წრფეებიდან ყოველი ორი იკვეთება და არცერთი სამი ერთ სიბრტყეში არ მდებარეობს, მაშინ ყველა მათგანი ერთ წერტილში იკვეთება. (C) თუ სივრცეში არსებული წრფეებიდან ყოველი ორი იკვეთება, მაშინ ან ყველა მათგანი ერთ წერტილში იკვეთება, ან ყველა მათგანი ერთ სიბრტყეშია.",
    options: ["არცერთი", "მხოლოდ A", "მხოლოდ B", "მხოლოდ A და C", "მხოლოდ B და C", "სამივე"],
    correct: 5,
    tags: ["Logic"]
  },
  // Question 21
  {
    question: "საკოორდინატო სიბრტყეზე მოცემულია \\(A(\\cos t; \\sin t)\\), \\(B(-\\cos t; -\\sin t)\\) და \\(C(\\cos(2 - t); \\sin(2 - t))\\) წერტილები. \\(t \\in (0; 1)\\) პარამეტრის რომელი მნიშვნელობისათვის იქნება \\(ABC\\) სამკუთხხედის ფართობი უდიდესი?",
    options: ["$\\frac{1}{4}$", "$\\frac{4 - \\pi}{4}$", "$\\frac{\\pi}{4}$", "$\\frac{\\pi}{6}$", "$\\frac{6 - \\pi}{6}$", "$\\frac{1}{6}$"],
    correct: 1,
    tags: ["Geometry"]
  },

  // Question 22
  {
    question: "\\(\\frac{\\pi}{2}\\)-ის არაჯერადი არგუმენტებისთვის \\(f(x)\\) ფუნქცია შემდეგი უსასრულო ჯამით განისაზღვრება: \\(f(x) = \\cos x + \\sin^ 2x + \\cos^ 3x + \\sin^ 4x + \\cos^ 5x + \\sin^ 6x + \\cos^ 7x + \\sin^ 8x + \\cos^ 9x + \\sin^{10}x + \\dots\\). იპოვეთ \\(f\\left(\\frac{2\\pi}{3}\\right)\\).",
    options: ["$\\frac{\\sqrt{3} - 1}{4}$", "$\\frac{2}{3}$", "$\\frac{\\sqrt{3} + 1}{4}$", "$\\frac{\\sqrt{3}}{4}$", "$\\frac{7}{3}$", "$\\frac{\\sqrt{3} - 1}{2}$"],
    correct: 4,
    tags: ["Series"]
  },

  // Question 23
  {
    question: "იპოვეთ \\(f^2(x) - f(x) + 1\\) გამოსახულების მინიმალური მნიშვნელობა, თუ \\(f(x) = |\\sin x|\\).",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$1$", "$\\frac{5}{4}$", "$\\frac{3}{2}$"],
    correct: 2,
    tags: ["Functions"]
  },

  // Question 24
  {
    question: "სივრცეში მდებარე ოთხი \\(A\\), \\(B\\), \\(C\\) და \\(K\\) წერტილისთვის სრულდება შემდეგი: \\(\\angle AKB = \\angle AKC = 90^\\circ\\), \\(\\angle BAC = \\gamma\\), \\(\\angle ABK = \\angle ACK = \\alpha\\) და \\(ABC\\) და \\(KBC\\) სიბრტყეებს შორის კუთხე \\(\\beta\\)-ს ტოლია. ჩამოთვლილთაგან რომელი ტოლობაა \\(\\alpha\\), \\(\\beta\\) და \\(\\gamma\\) მახვილი კუთხეებისათვის აუცილებლად ჭეშმარიტი?",
    options: ["$\\cos^2 \\beta = \\sin^2 \\alpha + \\sin^2 \\gamma$", "$\\sin^2 \\gamma = \\cos^2 \\alpha + \\cos^2 \\beta$", "$\\cos \\beta = \\sin \\alpha \\cdot \\sin \\gamma$", "$\\sin \\gamma = \\cos \\alpha \\cdot \\cos \\beta$", "$\\cos \\beta = 2\\cos \\alpha \\cdot \\tan \\frac{\\gamma}{2}$", "$\\cos \\frac{\\gamma}{2} = \\frac{\\sin \\alpha}{\\sin \\beta}$"],
    correct: 5,
    tags: ["3D Geometry"]
  },

  // Question 25
  {
    question: "მახვილი ორწახნაგა კუთხის პირველ წახნაგზე მდებარე \\(A\\) წერტილიდან მეორე წახნაგზე დაშვებულია \\(AO\\) მართობი, წიბოზე კი — \\(AB\\) მართობი. \\(C\\) წერტილი წიბოზე მდებარე (\\(C \\ne B\\)) წერტილია. ცნობილია, რომ \\(\\angle ACB = \\alpha\\), \\(\\angle ACO = \\beta\\) და \\(\\angle OCB = \\angle ABO\\). ჩამოთვლილთაგან რომელი ტოლობაა აუცილებლად ჭეშმარიტი?",
    options: ["$\\sin \\beta = \\cos \\alpha$", "$\\sin^2 \\alpha + \\cos^2 \\beta = \\frac{1}{2}$", "$\\tan^2 \\alpha + \\cot^2 \\beta = 2$", "$\\frac{\\cos^2 \\alpha}{\\cos^2 \\beta} + \\frac{\\sin^2 \\beta}{\\sin^2 \\alpha} = 1$", "$1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\beta}$", "$\\cos^2 \\alpha + \\sin^2 \\beta = \\frac{3}{4}$"],
    correct: 3,
    tags: ["3D Geometry"]
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
