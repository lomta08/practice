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
        question: "რისი ტოლია \\(\\log_{0.5}(\\log_2 \\sqrt{x + 1}) > 0\\) უტოლობის მთელი ამონახსნების ჯამი.",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 2,
        tags: ["Logarithm", "Inequality"]
    },
    {
        question: "რისი ტოლია \\(\\sqrt{\\log_{0.5}(x + 2)} > 1\\) უტოლობის მთელ ამონახსნთა რაოდენობა?",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 0,
        tags: ["Logarithm", "Inequality"]
    },
    {
        question: "იპოვეთ \\(\\log_{10}(2x + a) \\leq 0\\) უტოლობის უდიდესი ამონახსნი?",
        options: [
            "$\\frac{1}{2}$",
            "$\\frac{1}{3}$",
            "$\\frac{a}{2}$",
            "$\\frac{a}{3}$",
            "$\\frac{-a + 1}{2}$",
            "$\\frac{a + 1}{3}$"
        ],
        correct: 4,
        tags: ["Logarithm", "Inequality"]
    },
    {
        question: "ცილინდრი ჩახაზულია ბირთვში. ცილინდრის სიმაღლეა 3, ხოლო რადიუსია 2. იპოვეთ, რისი ტოლია ბირთვის რადიუსი?",
        options: [
            "$2$",
            "$1.5$",
            "$2.5$",
            "$3$",
            "$3.5$",
            "$4$"
        ],
        correct: 2,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "ცილინდრის ღერძული კვეთა მართკუთხედია, რომლის დიაგონალია 1, ხოლო დიაგონალებს შორის კუთხე \\(60^0\\)-ია. რისი ტოლია ცილინდრის მოცულობა თუ ფუძის დიამეტრი მეტია სიმაღლეზე?",
        options: [
            "$\\frac{5}{16}\\pi$",
            "$\\frac{1}{12}\\pi$",
            "$\\frac{4}{33}\\pi$",
            "$\\frac{11}{321}\\pi$",
            "$\\frac{13}{432}\\pi$",
            "$\\frac{3}{32}\\pi$"
        ],
        correct: 5,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "რისი ტოლია \\((\\log_x(x + 1) - 2)(2x + 3)(|x| + 1) > 0\\) უტოლობის ამონახსნთა სიმრავლე?",
        options: [
            "$x \\in (2; \\frac{\\sqrt{5} + 2}{2})$",
            "$x \\in (3; \\frac{\\sqrt{5} + 3}{2})$",
            "$x \\in (1; \\frac{\\sqrt{5} + 2}{2})$",
            "$x \\in (3; \\frac{\\sqrt{5} + 1}{2})$",
            "$x \\in (1; \\frac{\\\sqrt{5} + 1}{2})$",
            "$x \\in (1; \\frac{\\sqrt{5} + 2}{3})$"
        ],
        correct: 4,
        tags: ["Logarithm", "Inequality"]
    },
    {
        question: "ბირთვი გადაკვეთილია ცენტრიდან თანაბარი მანძილით დაშორებული ორი ურთიერთმართობული მკვეთი სიბრტყით. მკვეთი სიბრტყეების საერთო წიბო, ბირთვის ცენტრიდან 12 ერთეულითაა დაშორებული. ამ წიბოს ბირთვის შიგნით მოქცეული ნაწილის სიგრძეა 18-ის ტოლია. იპოვეთ რისი ტოლია ბირთვის მოცულობა?",
        options: [
            "$4400\\pi$",
            "$4500\\pi$",
            "$4000\\pi$",
            "$5000\\pi$",
            "$5500\\pi$",
            "$4800\\pi$"
        ],
        correct: 1,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "რისი ტოლია \\(\\sqrt{2x + 3} \\leq x\\) უტოლობის 8-ზე ნაკლები მთელი ამონახსნების რაოდენობა?",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 4,
        tags: ["Inequality"]
    },
    {
        question: "კონუსის ღერძული კვეთა ტოლგვერდა სამკუთხედია 6-ის ტოლი გვერდით. გავლებულია კონუსის ფუძის პარალელური ორი სიბრტყე, რომლებიც კონუსის სიმაღლეს 3 ტოლ ნაწილად ყოფენ. იპოვეთ, რისი ტოლია ამ ორ პარალელურ მკვეთ სიბრტყეს შორის მოქცეული კონუსის ნაწილის მოცულობა.",
        options: [
            "$\\frac{6 + 5\\sqrt{3}}{2}\\pi$",
            "$\\frac{6 + 5\\sqrt{3}}{3}\\pi$",
            "$\\frac{6 + 5\\sqrt{2}}{2}\\pi$",
            "$\\frac{7\\sqrt{3}}{3}\\pi$",
            "$\\frac{6 + 5\\sqrt{2}}{3}\\pi$",
            "$\\frac{5 + 6\\sqrt{3}}{2}\\pi$"
        ],
        correct: 3,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "წესიერი წაკვეთილი სამკუთხა პირამიდის გვერდითი წიბოა 4-ია და იგი ფუძის სიბრტყესთან ადგენს \\(60^0\\)-იან კუთხეს. რისი ტოლია წაკვეთილი პირამიდის მოცულობა თუ დიდი ფუძის გვერდია \\(4\\sqrt{3}\\).",
        options: [
            "24",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        correct: 4,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "რამდენი განსხვავებული ამონახსნი აქვს \\((x^2 - x)\\log_2 x - 2x(x - 1)^2 = (x - 1)\\log_2 x\\) განტოლებას?",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "უამრავი"
        ],
        correct: 0,
        tags: ["Logarithm", "Equation"]
    },
    {
        question: "რომელ მეოთხედს შეიძლება ეკუთვნოდეს \\(\\alpha\\) კუთხე, თუ \\(\\sqrt{\\sin \\alpha} \\geq \\cos \\alpha\\)?",
        options: [
            "მხოლოდ პირველი",
            "მხოლოდ მეორე",
            "პირველი ან მეორე",
            "მეორე ან მესამე",
            "მესამე ან მეოთხე",
            "პირველი ან მეოთხე"
        ],
        correct: 2,
        tags: ["Trigonometry"]
    },
    {
        question: "რისი ტოლია \\(a\\) თუ \\(4^x - 2^{x+2} + a = 0\\) განტოლების ამონახსნები ორი მოპირდაპირე რიცხვია.",
        options: [
            "3",
            "2",
            "4",
            "5",
            "1",
            "6"
        ],
        correct: 4,
        tags: ["Exponential", "Equation"]
    },
    {
        question: "პირამიდას ფუძეში აქვს ტოლფერდა, მართკუთხა სამკუთხედი 6√2-ის ტოლი კათეტებით. პირამიდის ყველა გვერდითი წიბო, ასევე 6√2-ია. პირამიდის სიმაღლის შუა წერტილზე გავლებულია ფუძის პარალელური სიბრტყე, რომელიც პირამიდას ორ ნაწილად ყოფს. იპოვეთ რისი ტოლია მიღებული წაკვეთილი პირამიდის გვერდითი ზედაპირის ფართობი?",
        options: [
            "$27(\\sqrt{3} + 1)$",
            "$21(\\sqrt{3} + 3)$",
            "$21(\\sqrt{2} + 1)$",
            "$24(\\sqrt{2} + 1)$",
            "$24(\\sqrt{3} + 2)$",
            "$22(\\sqrt{2} + 3)$"
        ],
        correct: 0,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "დახრილი ოთხკუთხა პრიზმის თითოეული გვერდითი წახნაგის დიაგონალები ურთიერთმართობულია. ფუძის დიაგონალებია 6 და 8. იპოვეთ პრიზმის მოცულობა, თუ თითოეული გვერდითი წიბო ფუძის სიბრტყისადმი \\(60^0\\)-იანი კუთხითაა დახრილი.",
        options: [
            "$120\\sqrt{3}$",
            "$80\\sqrt{3}$",
            "$100\\sqrt{3}$",
            "$30\\sqrt{3}$",
            "$60\\sqrt{3}$",
            "$90\\sqrt{3}$"
        ],
        correct: 4,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "რისი ტოლია \\(\\log_{10}(2\\sqrt{3} - \\sqrt{2})^x + \\log_{10}(2\\sqrt{3} + \\sqrt{2})^x = x\\) განტოლების ამონახსნთა სიმრავლე?",
        options: [
            "$x \\in \\{2; 5\\}$",
            "$x \\in (0; 10)$",
            "$x \\in [0; 10]$",
            "$x \\in [-10;10]$",
            "$x \\in [-10;+\\infty)$",
            "$x \\in (-\\infty; +\\infty)$"
        ],
        correct: 5,
        tags: ["Logarithm", "Equation"]
    },
    {
        question: "გვაქვს ორი ერთნაირი მართი სამკუთხა პრიზმა. ამ ორ პრიზმს ვადგამთ ერთმანეთს ისე, რომ მიღებული სხეული იყოს მართი სამკუთხა ან ოთხკუთხა პრიზმი. მაქსიმუმ რამდენი განსხვავებული მნიშვნელობა შეიძლება მივიღოთ, თუ დავთვლით მიღებული (ორი პრიზმის მიდგმით) პრიზმის გვერდითი ზედაპირის ფართობს?",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 3,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "რისი ტოლია \\(\\log_2(16x^2) + (\\log_2(-8x))^2 - 33 = 0\\) განტოლების ფესვების ნამრავლი?",
        options: [
            "$\\frac{256}{1024}$",
            "$\\frac{257}{1024}$",
            "$\\frac{255}{1024}$",
            "$-\\frac{256}{1024}$",
            "$\\frac{1}{256}$",
            "$-\\frac{255}{1024}$"
        ],
        correct: 4,
        tags: ["Logarithm", "Equation"]
    },
    {
        question: "ორ ერთნაირ კონუსს ღერძული კვეთა ერთნაირი ტოლგვერდა სამკუთხედი აქვს 3-ის ტოლი გვერდით. ამ კონუსებს ფუძეები ერთმანეთის პარალელურ სიბრტყეებში აქვთ, რომელთა შორის მანძილი \\(2\\sqrt{3}\\)-ია. ამ კონუსების ღერძების შემცველი წრფეები ერთმანეთს ემთხვევა და კონუსები კვეთენ ერთმანეთს. იპოვეთ, რისი ტოლია კონუსების გაერთიანებით მიღებული სხეულის მოცულობა?",
        options: [
            "$\\frac{13\\sqrt{3}\\pi}{6}$",
            "$6.5\\sqrt{3}\\pi$",
            "$\\frac{13\\sqrt{3}\\pi}{3}$",
            "$\\frac{13\\sqrt{3}\\pi}{12}$",
            "$\\sqrt{3}\\pi$",
            "$1.5\\sqrt{3}\\pi$"
        ],
        correct: 0,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "წესიერი ოთხკუთხა პირამიდის თითოეული აპოთემა დახრილია ფუძის სიბრტყისადმი \\(60^0\\)-იანი კუთხით. რისი ტოლია ამ პირამიდაში ჩახაზული ბირთვის მოცულობა თუ პირამიდის სიმაღლეა 3?",
        options: [
            "$\\pi$",
            "$\\frac{3}{4}\\pi$",
            "$\\frac{4}{3}\\pi$",
            "$\\frac{4}{5}\\pi$",
            "$\\frac{5}{4}\\pi$",
            "$\\frac{5}{6}\\pi$"
        ],
        correct: 2,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "\\(a\\) პარამეტრის რა მნიშვნელობებისათვის აქვს ამონახსნი \\(a\\cdot49^x + 6\\cdot7^x - 3 \\geq 0\\) უტოლობას?",
        options: [
            "$a \\in [-3;+\\infty)$",
            "$a \\in [-2; 4]$",
            "$a \\in [-2; 4)$",
            "$a \\in [-3; 0]$",
            "$a \\in [-3; 0)$",
            "$a \\in [0; +\\infty)$"
        ],
        correct: 0,
        tags: ["Exponential", "Inequality"]
    },
    {
        question: "იპოვეთ \\(b\\) პარამეტრის ყველა მნიშვნელობა, რომლისათვისაც \\((\\log_3 x)^2 + \\log_3 x + b \\geq 0\\) უტოლობას აქვს არა ცარიელი ამონახსნი?",
        options: [
            "$b \\in (-\\infty; +\\infty)$",
            "$b \\in (-\\infty; 0)$",
            "$b \\in (-\\infty; 0]$",
            "$b \\in (-\\infty; 3)$",
            "$b \\in (-\\infty; \\sqrt{2})$",
            "$b \\in (-\\infty; 0.25]$"
        ],
        correct: 0,
        tags: ["Logarithm", "Inequality"]
    },
    {
        question: "კონუსის ღერძული კვეთა მართკუთხა სამკუთხედია. ამ კონუსში ჩახაზულია ორი კუბი ისე, რომ დიდი კუბის ფუძე კონუსის ფუძეშია და კუბის ოთხივე წვერო ეხება კონუსის მსახველებს. რაც შეეხება მცირე კუბს, ქვედა ფუძე დიდი კუბის ზედა ფუძეშია, ხოლო მისი ზედა ფუძის ოთხივე წვერო ეხება კონუსის გვერდით ზედაპირს. რისი ტოლია ამ ორი კუბის წიბოების შეფარდება?",
        options: [
            "$\\sqrt{2}$",
            "$\\sqrt{3}$",
            "$\\sqrt{2} + 1$",
            "$2\\sqrt{2}$",
            "$2 + \\sqrt{2}$",
            "2"
        ],
        correct: 2,
        tags: ["Geometry", "Ratio"]
    },
    {
        question: "მოცემულია \\(ABCDA_1B_1C_1D_1\\) მართკუთხა პარალელეპიპედი. იპოვეთ პარალელეპიპედის იმ ნაწილის მოცულობა, რომელიც შემოსაზღვრულია \\(BA_1C_1\\), \\(BC_1D\\) და \\(BA_1D\\) სიბრტყეებით, თუ პარალელეპიპედის მოცულობაა 6.",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 2,
        tags: ["Geometry", "Volume"]
    },
    {
        question: "დადებით წევრებიანი, ზრდადი გეომეტრიული პროგრესიის პირველი სამი წევრის ჯამია 7. თუ გავალოგარითმებთ 2-ის ფუძით ამ სამ წევრს და ისე შევკრებთ, ჯამი 3-ის ტოლი იქნება. რისი ტოლია ამ პროგრესიის მე-3 წევრი?",
        options: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 3,
        tags: ["Geometric Progression", "Logarithm"]
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
