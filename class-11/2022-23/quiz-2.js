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
    "question": "რამდენი მთელი რიცხვი აკმაყოფილებს $\\log_3(x - 3) \\leq 2 $ უტოლობას?",
    "options": ["$3$", "$4$", "$6$", "$5$", "$9$", "$12$"],
    "correct": 4,
    "tags": ["logarithms", "inequality", "integer"]
  },
  {
    "question": "ამოხსენით $\\left(\\sin \\frac{\\pi}{9}\\right)^{|x|} > \\left(\\sin \\frac{\\pi}{9}\\right)^{2}$ უტოლობა.",
    "options": ["$(1; \\infty)$", "$(-2; 2)$", "$(2; +\\infty)$", "$(-1; 1)$", "$(- \\frac{\\pi}{9}; \\frac{\pi}{9})$", "$(- \\pi; \\pi)$"],
    "correct": 1,
    "tags": ["inequality", "trigonometry", "absolute value"]
  },
  {
    "question": "ამოხსენით $\\log _{\\frac{3}{5}}(x+7)<\\log _{\\sqrt[3]{\\frac{3}{5}}} 2$ უტოლობა.",
    "options": ["$(-7; 2)$", "$(-7; 0)$", "$(-7; 1)$", "$(0; +\\infty)$", "$(1; +\\infty)$", "$(1; 7)$"],
    "correct": 4,
    "tags": ["logarithms", "inequality"]
  },
  {
    "question": "ბირთვის ზედაპირზე მოცემულია სამი წერტილი. მათ შორის მანძილებია $6$სმ, $8$სმ და $10$სმ. ბირთვის რადიუსი $13$სმ-ია. იპოვეთ მანძილი ბირთვის ცენტრიდან ამ სამ წერტილზე გამავალ სიბრტყემდე.",
    "options": ["$4$", "$12$", "$9$", "$6$", "$8$", "$7$"],
    "correct": 1,
    "tags": ["geometry", "sphere", "distance"]
  },
  {
    "question": "წაკვეთილი კონუსის ფუძის რადიუსებია $3$სმ და $4$ სმ, ხოლო მსახველი $7$სმ. იპოვეთ ამ კონუსში ჩახაზული სფეროს რადიუსი.",
    "options": ["$5$", "$2$", "$2.5$", "$2\\sqrt{3}$", "$3\\sqrt{2}$", "$2\\sqrt{7}$"],
    "correct": 3,
    "tags": ["geometry", "cone", "sphere", "inscribed"]
  },
  {
    "question": "ამოხსენით $\\log_a(2x - 1) > \\log_a(x + 7)$ უტოლობა, თუ $x_0 = 5$ ეკუთვნის ამ უტოლობის ამონახსნთა სიმრავლეს.",
    "options": ["$(8; +\\infty)$", "$(0.5; 8)$", "$(- \\infty; 8)$", "$(1.5; 7)$", "$(2; 8)$", "$(\\frac{1}{2}; +\\infty)$"],
    "correct": 1,
    "tags": ["logarithms", "inequality", "parameter"]
  },
  {
    "question": "ამოხსენით $\\log_x(6 - x) \\geq 2$ უტოლობა.",
    "options": ["$(0; 6)$", "$(0; 5)$", "$(1; 2]$", "$(0; 3]$", "$(1; 6)$", "$(1; 3)$"],
    "correct": 2,
    "tags": ["logarithms", "inequality"]
  },
  {
    "question": "იპოვეთ $\\sqrt{2x + 3} \\geq x $ უტოლობის მთელ ამონახსნთა ჯამი.",
    "options": ["$5$", "$4$", "$3$", "$2$", "$1$", "$0$"],
    "correct": 0,
    "tags": ["inequality", "radical", "integer"]
  },
  {
    "question": "ცილინდრის სიმაღლე $6$სმ, ფუძის რადიუსია $5$სმ. მოცემული $10$ სმ სიგრძის მონაკვეთის ბოლოები ორივე ფუძის წრეწირებზე ძევს. იპოვეთ უმოკლესი მანძილი ამ მონაკვეთიდან ღერძამდე.",
    "options": ["$1$", "$4$", "$6$", "$5$", "$3$", "$2$"],
    "correct": 4,
    "tags": ["geometry", "cylinder", "distance"]
  },
  {
    "question": "კონუსის წვეროდან ფუძისადმი $45^\\circ$-იანი კუთხით გავლებულია სიბრტყე, რომელიც კვეთს ფუძის წრეწირის მეოთხედს. კონუსის სიმაღლე უდრის $10$ სმ-ს. იპოვეთ კვეთის ფართობი.",
    "options": ["$100$", "$120$", "$96$", "$80\\sqrt{3}$", "$100\\sqrt{2}$", "$96\\sqrt{2}$"],
    "correct": 4,
    "tags": ["geometry", "cone", "plane section", "area"]
  },
  {
    "question": "ამოხსნეთ $\\sqrt{2x - 8} \\geq \\cos x - 2$ უტოლობა.",
    "options": ["$(3; 8)$", "$[3; +\\infty)$", "$(3; \\frac{8\\pi}{3})$", "$(\\pi; 2\\pi)$", "$R$", "$\\emptyset$"],
    "correct": 1,
    "tags": ["inequality", "radical", "trigonometry"]
  },
  {
    "question": "ჩამოთვლილთაგან რისი ტოლია $a$, თუ $f(x) = \\log_{x+a}{\\frac{1-9x}{x+15}}$ ფუნქციის განსაზღვრის არეა $(n; p)$ სახის ინტერვალი? ($n < p$)",
    "options": ["$-7$", "$-5$", "$5$", "$9$", "$12$", "$18$"],
    "correct": 5,
    "tags": ["function", "domain", "logarithms", "parameter"]
  },
  {
    "question": "რამდენი მთელი რიცხვი აკმაყოფილებს $(x^2 - 4x + 3)\\sqrt{9x - 14 - x^2} \\geq 0$ უტოლობას?",
    "options": ["$2$", "$3$", "$4$", "$5$", "$6$", "$7$"],
    "correct": 4,
    "tags": ["inequality", "radical", "quadratic", "integer"]
  },
  {
    "question": "წესიერ სამკუთა პრიზმაში, რომლის მოცულობა $9$-ის ტოლია, ჩახაზულია ცილინდრი. ჩამოთვლილთაგან რომელ შუალედს ეკუთვნის ცილინდრის მოცულობა?",
    "options": ["$(2; 3)$", "$(3; 4)$", "$(4; 5)$", "$(5; 6)$", "$(6; 7)$", "$(7; 8)$"],
    "correct": 3,
    "tags": ["geometry", "prism", "cylinder", "volume", "inscribed"]
  },
  {
    "question": "მართკუთხა პარალელეპიპედის წიბოებია $4$სმ, $6$სმ და $12$სმ. იპოვეთ შემოხაზული სფეროს რადიუსი.",
    "options": ["$2$", "$4$", "$5$", "$6$", "$7$", "$9$"],
    "correct": 4,
    "tags": ["geometry", "parallelepiped", "sphere", "circumscribed"]
  },
  {
    "question": "ამოხსენით $\\log_4(x + 11) < 7 - x $ უტოლობა.",
    "options": ["$(-11; 7)$", "$(-11; 5)$", "$(0; \\log_4{11})$", "$(-11; \\log_4{11})$", "$(4; 7)$", "$(-7; 4)$"],
    "correct": 1,
    "tags": ["logarithms", "inequality"]
  },
  {
    "question": "რამდენი მთელი ამონახსნი აქვს $ 3x + 12 \\cdot 3^{\\sqrt{x}} \\geq 4x \\cdot 3^{\\sqrt{x}} + 9 $ უტოლობას?",
    "options": ["$0$", "$2$", "$4$", "$8$", "$15$", "$32$"],
    "correct": 2,
    "tags": ["inequality", "exponential", "radical", "integer"]
  },
  {
    "question": "ამოხსენით $\\log_7(\\sqrt{x - 2} + 7) \\cdot \\log_3(x^2 + x + 3) \\geq 2$ უტოლობა.",
    "options": ["$[2; 7]$", "$[2; 2\\log_3{7}]$", "$[2; +\\infty)$", "$[2; 7\\log_7{3}]$", "$[2; 4\\log_7{3}]$", "$[2; 49\\log_7{3}]$"],
    "correct": 2,
    "tags": ["logarithms", "inequality", "radical"]
  },
  {
    "question": "პირამიდის თითოეული გვერდითი წიბო $6$-ის, ხოლო სიმაღლე $3$-ის ტოლია. ჩამოთვლილთაგან რისი ტოლია პირამიდაზე შემოხაზული ბირთვის მოცულობა?",
    "options": ["$124\\pi$", "$96\\pi$", "$288\\pi$", "$164\\pi$", "$216\\pi$", "დადგენა შეუძლებელია"],
    "correct": 2,
    "tags": ["geometry", "piramid", "sphere", "circumscribed", "volume"]
  },
  {
    "question": "კონუსში, რომლის ფუძის რადიუსია $3$, ხოლო სიმაღლე $4$, ჩახაზულია სფერო. იპოვეთ სფეროს რადიუსი.",
    "options": ["$1$", "$1.5$", "$2$", "$2.5$", "$3$", "$\\sqrt{2}$"],
    "correct": 1,
    "tags": ["geometry", "cone", "sphere", "inscribed"]
  },
  {
    "question": "$A = \\{\\log_2{2}; \\log_2{4}; \\log_2{8}; \\log_2{16}; \\log_2{32}; \\log_2{64}\\}$ სიმრავლის ყოველი ელემენტი მრავლდება $B = \\{\\log_3{9}; \\log_3{27}; \\log_3{81}\\}$ სიმრავლის ყოველ ელემენტზე. მიღებულ $18$ რიცხვს (რომელთაგან ზოგიერთი ტოლია) თითოეულს წინ ნებისმიერად ეწერება პლიუსი ან მინუს ნიშანი და მიღებული რიცხვები იკრიბება. იპოვეთ ამ ჯამის მოდულის უმცირესი და უდიდესი მნიშვნელობა.",
    "options": ["$0$ და $189$", "$0$ და $199$", "$2$ და $378$", "$1$ და $189$", "$1$ და $2^{12}$", "$2$ და $2^{11}$"],
    "correct": 3,
    "tags": ["set theory", "logarithms", "summation", "minmax"]
  },
  {
    "question": "$a$ პარამეტრის რა მნიშვნელობისათვის იქნება $ \\begin{cases} \\log_3(x + 5) + y^2 = 2 \\\\ \\log_5(2x - 3) - y^4 = a \\end{cases} $ სისტემის $(x; y)$ ამონახსნთა რაოდენობა კენტი?",
    "options": ["$-2$", "$0$", "$1$", "$4$", "$25$", "ასეთი $a$ არ არსებობს"],
    "correct": 2,
    "tags": ["system of equations", "logarithms", "parameter"]
  },
  {
    "question": "საკოორდინატო სიბრტყეზე დაშტრიხეს $ \\begin{cases} \\log_{0.8-|x|}(x^2 + 1) \\geq \\log_{0.8-|x|}(9 - 2x) \\\\ y \\leq 5x \\\\ y^2 \\leq 16 \\end{cases} $ სისტემის ამონახსნთა სიმრავლე. იპოვეთ დაშტრიხული არის ფართობი.",
    "options": ["$1.9$", "$3.5$", "$4.8$", "$6.4$", "$8.5$", "$19.9$"],
    "correct": 3,
    "tags": ["system of inequalities", "logarithms", "area"]
  },
  {
    "question": "მართკუთხა ტრაპეცია, რომლის ფუძეებია $10$სმ და $8$სმ, ბრუნავს მცირე ფუძის გარშემო. იპოვეთ ბრუნვით მიღებული სხეულის მოცულობა, თუ ტრაპეციის ფართობია $36\\text{სმ}^2$სმ.",
    "options": ["$\\frac{448\\pi}{3}$", "$\\frac{640\\pi}{3}$", "$\\frac{224\\pi}{3}$", "$124\\pi$", "$144\\pi$", "$164\\pi$"],
    "correct": 0,
    "tags": ["geometry", "trapezoid", "volume of revolution"]
  },
  {
    "question": "$ABCD$ წესიერ ტეტრაედზე (ყველა წიბო ტოლია) შემოხაზულია სფერო. ყველა წახნაგზე როგორც ფუძეზე გარედან აგებულია $ABCD_1$, $ABDC_1$, $ACDB_1$ და $BCDA_1$ წესიერი პირამიდები, რომელთა წვეროები მდებარეობენ იგივე სფეროზე. იპოვეთ კუთხე $ABC_1$ და $ACD_1$ სიბრტყეებს შორის.",
    "options": ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "$120^\\circ$", "$150^\\circ$"],
    "correct": 3,
    "tags": ["geometry", "tetrahedron", "piramid", "sphere", "angle between planes"]
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
