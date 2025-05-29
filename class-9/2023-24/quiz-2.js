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


const quizData =[
  {
    "question": "ფუნქციათა გრაფიკების გადაკვეთის წერტილთა რაოდენობაა $y = -x^3$ და $y = \\frac{1}{x^5}$?",
    "options": [
      "უამრავი",
      "4",
      "3",
      "2",
      "1",
      "არცერთი"
    ],
    "correct": 4,
    "tags": [
      "functions",
      "intersection"
    ]
  },
  {
    "question": "ჩამოთვლილთაგან რომლის ტოლია $\\frac{\\sqrt[4]{9}}{\\sqrt[6]{81}}$?",
    "options": [
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{\\sqrt[3]{243}}{6}$",
      "$\\frac{\\sqrt[7]{81}}{3}$",
      "$\\frac{\\sqrt[4]{27}}{3}$",
      "$\\frac{\\sqrt[3]{81}}{3}$",
      "$\\frac{\\sqrt[3]{243}}{12}$"
    ],
    "correct": 0,
    "tags": [
      "roots",
      "simplification"
    ]
  },
  {
    "question": "მოცემული ფუნქციებიდან რომელია პერიოდული?\n$f(x) = \\{x\\} - 1$;\n$g(x) = 2\\{x\\} + [x]$;\n$h(x) = \\left\\{ \\frac{1}{2}x \\right\\}$",
    "options": [
      "მხოლოდ $f(x)$",
      "მხოლოდ $g(x)$",
      "მხოლოდ $h(x)$",
      "$f(x)$ და $g(x)$",
      "$f(x)$ და $h(x)$",
      "$g(x)$ და $h(x)$"
    ],
    "correct": 4,
    "tags": [
      "functions",
      "periodicity"
    ]
  },
  {
    "question": "სამკუთხედში $BM:MC = 1:3$, $MN \\parallel AB$. იპოვეთ $\\triangle AMN$ და $\\triangle ABC$ სამკუთხედების ფართობთა შეფარდება.",
    "options": [
      "1:4",
      "2:9",
      "3:13",
      "3:16",
      "5:18",
      "1:3"
    ],
    "correct": 3,
    "tags": [
      "geometry",
      "similar triangles",
      "area ratio"
    ]
  },
  {
    "question": "სამკუთხედის ორი გვერდის სიგრძეა 10 და 12. ფართობი მედიანის სიგრძით 5-ის ტოლია. იპოვეთ ფართობი.",
    "options": [
      "60",
      "56",
      "30",
      "72",
      "36",
      "48"
    ],
    "correct": 0,
    "tags": [
      "geometry",
      "triangle",
      "area"
    ]
  },
  {
    "question": "იპოვეთ მთელ ამონახსნთა რაოდენობა: $\\sqrt{(x^2 + 6x + 9)^{24}} \\leq 4.9$",
    "options": [
      "4",
      "10",
      "9",
      "5",
      "11",
      "7"
    ],
    "correct": 2,
    "tags": [
      "inequality",
      "roots"
    ]
  },
  {
    "question": "გამოთვალეთ: $\\frac{1}{2 - \\frac{\\sqrt{3}}{3}} - \\frac{6 + 3\\sqrt{3}}{5\\cdot\\sqrt{9}}$",
    "options": [
      "0.8",
      "$\\frac{0.8\\sqrt{3}}{3}$",
      "1",
      "$\\frac{0.4\\sqrt{9}}{3}$",
      "2",
      "$0.8 - \\frac{0.4\\sqrt{3}}{3}$"
    ],
    "correct": 0,
    "tags": [
      "algebra",
      "simplification"
    ]
  },
  {
    "question": "გამოთვალეთ: $\\left[\\sqrt[5]{2023}\\right] \\cdot \\left\\{-\\frac{199}{4}\\right\\}$ (სადაც $[a]$ არის მთელი ნაწილი და $\\{b\\}$ წილადი ნაწილი)",
    "options": [
      "2",
      "1",
      "$1\\frac{1}{5}$",
      "$-1\\frac{1}{4}$",
      "$\\frac{3}{5}$",
      "$3\\frac{1}{4}$"
    ],
    "correct": 1,
    "tags": [
      "floor-ceiling",
      "algebra"
    ]
  },
  {
    "question": "ტრაპეციაში $ABCD$, $AC$ და $BD$ დიაგონალები იკვეთებიან წერტილ $K$-ში. თუ $\\triangle ABK$ ფართობია მთელი ტრაპეციის ფართობის $\\frac{3}{16}$ ნაწილი, იპოვეთ $BC:AD$ შეფარდება.",
    "options": [
      "1:2",
      "2:3",
      "1:3",
      "3:5",
      "2:5",
      "3:4"
    ],
    "correct": 2,
    "tags": [
      "geometry",
      "trapezoid",
      "area ratio"
    ]
  },
  {
    "question": "პარალელოგრამ $ABCD$-ში წერტილი $M$ მდებარეობს $BC$ გვერდზე. $BM:MC = 2:5$. იპოვეთ $\\triangle ABM$ და $\\triangle AMD$ ფართობთა შეფარდება.",
    "options": [
      "1:3",
      "3:11",
      "2:5",
      "2:7",
      "1:4",
      "1:6"
    ],
    "correct": 3,
    "tags": [
      "geometry",
      "parallelogram",
      "area"
    ]
  },
  {
    "question": "იპოვეთ $x^2 + 4x - |x + 2| - 2 > 0$ უტოლობის ამონახსენი.",
    "options": [
      "$(-3; 2)$",
      "$(-\\infty; -1) \\cup (5; +\\infty)$",
      "$(-1; 4)$",
      "$(-\\infty; -2) \\cup (3; +\\infty)$",
      "$(-\\infty; -5) \\cup (1; +\\infty)$",
      "$\\varnothing$"
    ],
    "correct": 3,
    "tags": [
      "inequality",
      "absolute value"
    ]
  },
  {
    "question": "იპოვეთ $\\{x \\leq -1\\}$ -ზე ფუნქცია $y = x^2 + 2x$-ის შექცეული ფუნქციის გრაფიკისა და $y = -4$ გრაფიკის გადაკვეთის წერტილის აბსცისა.",
    "options": [
      "4",
      "-12",
      "8",
      "-6",
      "16",
      "-81"
    ],
    "correct": 3,
    "tags": [
      "inverse function",
      "intersection"
    ]
  },
  {
    "question": "იპოვეთ $\\left|\\frac{2x - 1}{x + 1}\\right| \\geq 3$ უტოლობის მთელი ამონახსნების ჯამი.",
    "options": [
      "0",
      "-10",
      "7",
      "-9",
      "11",
      "-6"
    ],
    "correct": 1,
    "tags": [
      "inequality",
      "absolute value"
    ]
  },
  {
    "question": "ოთხკუთხედი $ABCD$-ში წერტილი $O$ არის დიაგონალების გადაკვეთის წერტილი. თუ $\\triangle BCD$ ფართობი წარმოადგენს $\\frac{5}{9}$ მთლიანისას, იპოვეთ $AO:OC$ შეფარდება.",
    "options": [
      "4:5",
      "3:4",
      "5:7",
      "3:5",
      "2:7",
      "2:3"
    ],
    "correct": 3,
    "tags": [
      "geometry",
      "ratios"
    ]
  },
  {
    "question": "ტრაპეცია $ABCD$-ში $BC$ და $AD$ ფუძეების პარალელური წრფე კვეთს $AB$ და $CD$ ფერდებს წერტილებში $E$ და $F$. იპოვეთ $EBCF$ და $AEFD$ ფართობთა შეფარდება, თუ $BC:AD = 1:2$.",
    "options": [
      "1:4",
      "5:16",
      "2:9",
      "3:16",
      "7:20",
      "3:16"
    ],
    "correct": 3,
    "tags": [
      "geometry",
      "area"
    ]
  },
  {
    "question": "იპოვეთ $y = x^3 + 3x^2 + 3x - 1$ ფუნქციის შექცეული ფუნქცია.",
    "options": [
      "$y = -\\sqrt[3]{x + 2} + 1$",
      "$y = \\sqrt[3]{x - 2} + 1$",
      "$y = -\\sqrt[3]{x + 1} - 2$",
      "$y = \\sqrt[3]{x + 2} - 1$",
      "$y = -\\sqrt[3]{x - 2} + 1$",
      "$y = \\sqrt[3]{x + 1} - 2$"
    ],
    "correct": 3,
    "tags": [
      "inverse function"
    ]
  },
  {
    "question": "გამოთვალეთ $(\\sqrt{a\\sqrt{a^3}} + \\sqrt{a} \\cdot \\sqrt{a^3}) \\cdot \\sqrt{a}$ $(1 + \\sqrt{a^6})^{-1}$",
    "options": [
      "$a\\sqrt{a}$",
      "$\\sqrt{a^3} + 1$",
      "$a\\sqrt{a^3}$",
      "$(\\sqrt{a^6} - 1)\\sqrt{a}$",
      "$\\sqrt{a}\\sqrt{a^3}$",
      "$a$"
    ],
    "correct": 0,
    "tags": [
      "algebra",
      "roots",
      "simplification"
    ]
  }
];


  
  const form = document.getElementById("quizForm");
  
  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.innerHTML = `<strong>${i + 1}.</strong><br>${q.question}`;
    fieldset.appendChild(legend);
  
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
  
    form.insertBefore(fieldset, form.querySelector("button"));
  });
  
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
  
