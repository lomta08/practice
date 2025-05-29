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
        question: "იპოვეთ $y= \\sqrt[3]{0.5x-1}$ ფუნქციის შექცეული ფუნქცია.",
        options: [
            "$y= x^3 + 1$",
            "$y= \\sqrt[3]{2x-2}$",
            "$y= \\sqrt[3]{2x+ 2}$",
            "$y= 2x^3 + 2$",
            "$y= 2x^3 -2$",
            "$y= 2x^3 + 1$"
        ],
        correct: 3,
        tags: ["Functions", "Inverse Functions"]
    },
    {
        question: "რამდენი მთელი რიცხვი ეკუთვნის $[2\\sqrt{2}-1; 3^{1.5}]$ სეგმენტს?",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 3,
        tags: ["Algebra", "Intervals"]
    },
    {
        question: "ცნობილია, რომ $y= 9 \cdot a^x$ და $y= a^{x+2}$ მაჩვენებლიანი ფუნქციები ერთმანეთს კვეთენ ორდინატთა ღერძზე. იპოვეთ $y= 2 \\cdot a^{x+1}$ ფუნქციის OY ღერძთან გადაკვეთის წერტილის კოორდინატები.",
        options: [
            "$(0;1)$",
            "$(0;2)$",
            "$(0;3)$",
            "$(0;4)$",
            "$(0;5)$",
            "$(0;6)$"
        ],
        correct: 5,
        tags: ["Exponential Functions", "Coordinate Geometry"]
    },
    {
        question: "ცილინდრის სიმაღლე 4-ჯერ მეტია მის რადიუსზე. რისი ტოლია ამ ცილინდრის ღერძული კვეთის დიაგონალებს შორის კუთხის სინუსი?",
        options: [
            "$0.3$",
            "$0.8$",
            "$0.4$",
            "$0.5$",
            "$0.7$",
            "$0.6$"
        ],
        correct: 1,
        tags: ["Geometry", "Cylinder"]
    },
    {
        question: "ბირთვი გადაკვეთილია სიბრტყით და კვეთაში მიღებული წრის დიამეტრის და ბირთვის დიამეტრის ჯამია 32, ხოლო ბირთვის რადიუსისა და კვეთის რადიუსის სხვაობაა 4. რა მანძილითაა დაშორებული მკვეთი სიბრტყე ბირთვის ცენტრიდან?",
        options: [
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ],
        correct: 5,
        tags: ["Geometry", "Sphere"]
    },
    {
        question: "რისი ტოლია $(\\sqrt{2} -1)^{2x-1} -(\\sqrt{2} + 1)^{1-2x}$ გამოსახულების მნიშვნელობა?",
        options: [
            "0",
            "1",
            "$\\sqrt{2}$",
            "$\\sqrt{2}^x$",
            "$2(\\sqrt{2} -1)^{2x-1}$",
            "არცერთი წინა პასუხი არაა სწორი."
        ],
        correct: 0,
        tags: ["Algebra", "Exponents"]
    },
    {
        question: "დაალაგეთ ზრდადობით $a= \\log_2(\\sqrt{2} + 1); b= \\log_3(2^{-1}); c= \\log_{\\sqrt{3}}(\\sqrt{6} -2)$",
        options: [
            "$a; b; c$",
            "$a; c; b$",
            "$b; c; a$",
            "$b; a; c$",
            "$c; b; a$",
            "$c; a; b$"
        ],
        correct: 4,
        tags: ["Logarithms", "Comparison"]
    },
    {
        question: "მოცემულია $x+ 3 + \\log_2 x= 0$ განტოლება. ჩამოთვლილთაგან რომელი წინადადებაა სამართლიანი?",
        options: [
            "განტოლებას აქვს ერთი უარყოფითი ამონახსნი",
            "განტოლებას აქვს ერთი დადებითი ამონახსნი",
            "განტოლებას არ აქვს ამონახსნი",
            "განტოლებას აქვს ორი დადებითი ამონახსნი",
            "განტოლებას აქვს ორი უარყოფითი ამონახსნი",
            "განტოლებას აქვს ორი სხვადასხვა ნიშნიანი ამონახსნი."
        ],
        correct: 1,
        tags: ["Logarithmic Equations"]
    },
    {
        question: "მართი სამკუთხა პრიზმის ფუძეა მართკუთხა სამკუთხედი 12-ის ტოლი ჰიპოტენუზით და $60^0$-იანი მახვილი კუთხით. რისი ტოლია პრიზმის მოცულობა, თუ მისი სიმაღლეა 5.",
        options: [
            "$80\\sqrt{3}$",
            "$90\\sqrt{3}$",
            "$70\\sqrt{3}$",
            "80",
            "90",
            "70"
        ],
        correct: 1,
        tags: ["Geometry", "Prism"]
    },
    {
        question: "პრიზმის ფუძეა მართკუთხა ტრაპეცია, რომელშიც ჩახაზული წრეწირის რადიუსია 1 და მახვილი კუთხე კი $30^0$-ია. რისი ტოლია პრიზმის მოცულობა, თუ მისი სიმაღლეა 5.",
        options: [
            "20",
            "40",
            "25",
            "15",
            "30",
            "35"
        ],
        correct: 4,
        tags: ["Geometry", "Prism"]
    },
    {
        question: "რისი ტოლია $(\\log_a b + \\log_b a + 2) \\cdot (\\log_a b - \\log_{a \\cdot b} b) \\cdot \\log_b a$ გამოსახულება?",
        options: [
            "$\\log_b a$",
            "$\\log_a b$",
            "$\\log_a (a \\cdot b)$",
            "$\\log_b a + 2$",
            "$\\log_a b -1$",
            "$\\log_b a + 2 \\log_a b$"
        ],
        correct: 2,
        tags: ["Logarithms", "Algebra"]
    },
    {
        question: "ცნობილია, რომ $(a; b)$ წყვილი, წარმოადგენს $2 \\log_a b + 0.5 \\cdot \\log_b a = 2$ განტოლების ამონახსნთა წყვილს. რისი ტოლია $b^2 - a$ გამოსახულების მნიშვნელობა?",
        options: [
            "5",
            "4",
            "3",
            "2",
            "1",
            "0"
        ],
        correct: 5,
        tags: ["Logarithmic Equations"]
    },
    {
        question: "რისი ტოლია $3^{2x-15} = 9 \\cdot 3^{x-10} + 2$ განტოლების ამონახსნის 6-ზე გაყოფის ნაშთი?",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 2,
        tags: ["Exponential Equations"]
    },
    {
        question: "წესიერი ოთხკუთხა პრიზმის ყველა წვერო სფეროს ზედაპირზე მდებარეობს. რისი ტოლია ამ პრიზმის მოცულობა, თუ მისი სიმაღლეა $4\\sqrt{17}$ და სფეროს რადიუსია 10?",
        options: [
            "$324\\sqrt{17}$",
            "289",
            "578",
            "$256\\sqrt{17}$",
            "$128\\sqrt{17}$",
            "$234\\sqrt{17}$"
        ],
        correct: 3,
        tags: ["Geometry", "Prism"]
    },
    {
        question: "$ABCDEFA_1B_1C_1D_1E_1F_1$ წარმოადგენს წესიერ ექვსკუთხა პრიზმას, რომლის თითოეული წიბო 1-ის ტოლია. რისი ტოლია მანძილი $F_1D$ და $AC$ აცდენილ წრფეებს შორის.",
        options: [
            "$\\sqrt{2}$",
            "1",
            "$\\sqrt{3}-1$",
            "$\\sqrt{3}$",
            "2",
            "$\\sqrt{3}-\\sqrt{2}$"
        ],
        correct: 1,
        tags: ["Geometry", "Prism"]
    },
    {
        question: "რისი ტოლია $\\log_{(\\sqrt{3}-1)} 7 \\cdot \\log_7 (4 -2\\sqrt{3}) - \\log_{(\\sqrt{3}-\\sqrt{2})}(\\sqrt{3} + \\sqrt{2})$ გამოსახულება?",
        options: [
            "3",
            "2",
            "5",
            "4",
            "7",
            "6"
        ],
        correct: 0,
        tags: ["Logarithms", "Algebra"]
    },
    {
        question: "რისი ტოლია $\log_{10} 56$, თუ ცნობილია, რომ $\\log_{10} 2 = a$ და $\\log_2 7 = b$?",
        options: [
            "$2a + b$",
            "$2a + 3b$",
            "$3a + ab$",
            "$3a + 2b$",
            "$ab + b$",
            "$2ab + 3b$"
        ],
        correct: 2,
        tags: ["Logarithms", "Algebra"]
    },
    {
        question: "მართი პარალელეპიპედის ფუძის გვერდებია 4 და 5. ჩამოთვლილთაგან რისი ტოლი შეიძლება იყოს ამ პარალელეპიპედის უდიდეს და უმცირეს დიაგონალებს შორის კუთხის კოსინუსი, თუ პრიზმის სიმაღლეა 3?",
        options: [
            "0.3",
            "0.4",
            "0.6",
            "0",
            "0.8",
            "1"
        ],
        correct: 1,
        tags: ["Geometry", "Parallelepiped"]
    },
    {
        question: "წესიერი სამკუთხა პირამიდის თითოეული გვერდითი წახნაგი ტოლგვერდა სამკუთხედია 4-ის ტოლი გვერდით. იპოვეთ იმ სიბრტყით მიღებული კვეთის ფართობი, რომელიც გავლებულია პირამიდის ფუძის გვერდზე და პირამიდის სიმაღლის შუა წერტილზე.",
        options: [
            "2",
            "4",
            "6",
            "8",
            "10",
            "12"
        ],
        correct: 2,
        tags: ["Geometry", "Pyramid"]
    },
    {
        question: "კონუსის ფუძის რადიუსია 6, ხოლო მისი სიმაღლეა 4. იპოვეთ მანძილი კონუსის ფუძის ცენტრიდან იმ სიბრტყემდე, რომელიც გადის კონუსის წვეროზე და ფუძის წრეწირიდან ჩამოკვეთს $120^0$-იან რკალს.",
        options: [
            "1.8",
            "2.4",
            "2",
            "2.8",
            "3",
            "2.6"
        ],
        correct: 1,
        tags: ["Geometry", "Cone"]
    },
    {
        question: "რისი ტოლია $4 \\cdot 9^{\\sqrt[6]{x}} - 9 \\cdot 4^{\\sqrt[6]{x}} = 5 \\cdot 6^{\\sqrt[6]{x}}$ განტოლების ამონახსნის ციფრთა ჯამი?",
        options: [
            "7",
            "5",
            "8",
            "9",
            "10",
            "6"
        ],
        correct: 4,
        tags: ["Exponential Equations"]
    },
    {
        question: "იპოვეთ $(\\log_{10}(x-1)^2)^4 + (\\log_{10}(x-1)^3)^2 = 25$ განტოლების ნამდვილი ამონახსნების ჯამი?",
        options: [
            "13.2",
            "21",
            "23.6",
            "12.1",
            "21.4",
            "18"
        ],
        correct: 3,
        tags: ["Logarithmic Equations"]
    },
    {
        question: "რისი ტოლია $a \\cdot b$ ნამრავლი, თუ $(a; b)$ წარმოადგენს $\\begin{cases} 8 \\cdot (\\sqrt{2})^{x+3} = 0.5^{y-3} \\\\ \\log_3(x-2y) + \\log_3(3x+2y) = 3 \\end{cases}$ სისტემის ამონახსნს?",
        options: [
            "-14",
            "-17",
            "-12",
            "-10",
            "-16",
            "-9"
        ],
        correct: 5,
        tags: ["System of Equations", "Logarithms"]
    },
    {
        question: "$ABCDA_1B_1C_1D_1$ კუბია. $M$ წერტილი $AD$ წიბოს შუაწერტილია, ხოლო $N$ კი $DD_1$ წიბოს შუაწერტილი. რისი ტოლია ორწახნაგა კუთხის კოსინუსი $MNC$ სიბრტყესა და $A_1B_1C_1D_1$ სიბრტყეს შორის?",
        options: [
            "$\\frac{\\sqrt{3}}{\\sqrt{2}+1}$",
            "$\\frac{2\\sqrt{2}}{3\\sqrt{3}}$",
            "$\\frac{\\sqrt{2}}{\\sqrt{3}}$",
            "$\\frac{2}{3}$",
            "$\\frac{\\sqrt{2}}{2}$",
            "$\\frac{\\sqrt{3}}{2}$"
        ],
        correct: 3,
        tags: ["Geometry", "Cube"]
    },
    {
        question: "დახრილი სამკუთხა პრიზმის ფუძე ტოლგვერდა სამკუთხედია 4-ის ტოლი გვერდით. გვერდითი წიბოები ფუძის სიბრტყესთან $60^0$-იან კუთხეს ადგენენ და თითოეული მათგანი $\\sqrt{13}$-ის ტოლია. ერთ-ერთი გვერდითი წახნაგი მართკუთხედს წარმოადგენს. დათვალეთ რისი ტოლია დანარჩენი ორი გვერდითი წახნაგის ფართობების ჯამი.",
        options: [
            "$2\\sqrt{13}$",
            "$4\\sqrt{13}$",
            "$8\\sqrt{13}$",
            "39",
            "26",
            "52"
        ],
        correct: 4,
        tags: ["Geometry", "Prism", "Surface Area"]
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
