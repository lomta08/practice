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
            question: "გამოთვალეთ $\\log_5 7 \\cdot \\log_{49} 125$.",
            options: ["$\\frac{3}{2}$", "5", "7", "$\\frac{5}{2}$", "3", "35"],
            correct: "0",
            tag: "logarithms"
        },
        {
            question: "გამოთვალეთ $\\log_{7+4\\sqrt{3}}(7-4\\sqrt{3})$.",
            options: ["2", "1", "7", "-2", "-1", "3"],
            correct: "4",
            tag: "logarithms"
        },
        {
            question: "რომელ მეოთხედშია $f(x) = \\log_{x^9}(x^2)$ ფუნქციის გრაფიკი?",
            options: ["II", "III", "I-II", "I", "III-IV", "II-IV"],
            correct: "3",
            tag: "functions"
        },
        {
            question: "იპოვეთ წესიერი სამკუთხა პირამიდის აპოთემა, თუ მისი ფუძის გვერდის სიგრძეა 6, ხოლო პირამიდის სიმაღლის სიგრძეა 7.",
            options: ["$\\sqrt{43}$", "$\\sqrt{52}$", "$\\sqrt{42}$", "9", "8", "$\\sqrt{61}$"],
            correct: "1",
            tag: "geometry"
        },
        {
            question: "დახრილი ოთხკუთხა პრიზმის მოცულობა 72-ის, ხოლო გვერდითი წიბო 4-ის ტოლია. რისი ტოლია იმ ოთხკუთხედის ფართობი, რომელიც მიიღება პრიზმის წიბოს მართობული სიბრტყის კვეთით?",
            options: ["12", "$4\\sqrt{6}$", "18", "9", "8", "36"],
            correct: "2",
            tag: "geometry"
        },
        {
            question: "ამოხსენით $\\log_{19}x + \\log_{19}(x^2) = 3$ განტოლება.",
            options: ["19", "361", "3", "2", "9.5", "4"],
            correct: "0",
            tag: "logarithms"
        },
        {
            question: "გამოთვალეთ $\\frac{1}{\\log_{\\sqrt{2}}\\sin\\frac{\\pi}{4}} + \\frac{1}{\\log_{\\sqrt{4}}\\sin\\frac{\\pi}{4}} + \\frac{1}{\\log_{\\sqrt{8}}\\sin\\frac{\\pi}{4}} + \\frac{1}{\\log_{\\sqrt{16}}\\sin\\frac{\\pi}{4}}$.",
            options: ["-10", "6", "$\\sqrt{2}$", "$\\sqrt{8}$", "2", "4"],
            correct: "0",
            tag: "logarithms"
        },
        {
            question: "ამოხსენით $\\log_2(\\cos 2x) = \\sin 8x$ განტოლება. $x\\in\\cdots$",
            options: ["$\\{0\\}$", "$\\emptyset$", "$\\{\\log_2 \\pi\\}$", "$\\{\\pi n\\}, n\\in\\mathbb{Z}$", "$\\left\\{\\frac{\\pi n}{2}\\right\\}, n\\in\\mathbb{Z}$", "$\\{1\\}$"],
            correct: "3",
            tag: "trigonometry"
        },
        {
            question: "ცნობილია, რომ $\\log_{10}3 = 0.4771\\ldots$. რამდენ ციფრს შეიცავს $3^{100}$ რიცხვის ათობითი ჩანაწერი?",
            options: ["100", "99", "477", "47", "48", "49"],
            correct: "4",
            tag: "logarithms"
        },
        {
            question: "მართი პარალელეპიპედში ფუძის გვერდებია 2 და 6, ხოლო მახვილი კუთხე $60^\\circ$. პარალელეპიპედის მცირე დიაგონალი უდრის $\\sqrt{31}$. იპოვეთ პარალელეპიპედის მოცულობა.",
            options: ["$8\\sqrt{3}$", "12", "18", "$6\\sqrt{3}$", "9", "24"],
            correct: "2",
            tag: "geometry"
        },
        {
            question: "ამოხსენით $x^{\\log_3 7} + 7^{\\log_3 x} = 14$ განტოლება.",
            options: ["$3^7$", "3", "5", "7", "$7^{\\log_3 5}$", "$7^5$"],
            correct: "1",
            tag: "logarithms"
        },
        {
            question: "გამოთვალეთ $\\log_4 15$, თუ $\\log_2 3 = a$, $\\log_2 5 = b$.",
            options: ["ა) $a + b$", "ბ) $2a + 3b$", "გ) $ab$", "დ) $\\frac{a+b}{5}$", "ე) $\\frac{3a+5b}{3}$", "ვ) $\\frac{a+b}{2}$"],
            correct: "5",
            tag: "logarithms"
        },
        {
            question: "თუ $f(x) = 3^x$ მაშინ, ქვემოთ მოცემულთაგან, ნებისმიერი $x$ და $y$ რიცხვებისათვის რომელია სამართლიანი?",
            options: [
                "$f(x-y) = f(x) - f(y)$",
                "$f(x+y) = f(x) + f(y)$",
                "$(x+y)(f(x) + f(y)) \\geq 0$",
                "$(x-y)(f(x) - f(y)) \\geq 0$",
                "$xf(x) + yf(y) = (x+y)(f(x) + f(y))$",
                "$(x+y)(f(x) + f(y)) = 0$"
            ],
            correct: "3",
            tag: "functions"
        },
        {
            question: "წაკვეთილი კონუსის ფუძეების რადიუსებია 12სმ და 7სმ, მსახველი დახრილია ფუძისადმი $45^\\circ$-იანი კუთხით. იპოვეთ ღერძული კვეთის ფართობი.",
            options: ["75 სმ$^2$", "80 სმ$^2$", "60 სმ$^2$", "100 სმ$^2$", "95 სმ$^2$", "70 სმ$^2$"],
            correct: "4",
            tag: "geometry"
        },
        {
            question: "წესიერი წაკვეთილი ოთკუთხა პირამიდის ფუძის გვერდებია 7სმ და 1სმ. გვერდითი წიბო დახრილია ფუძისადმი $45^\\circ$-იანი კუთხით. იპოვეთ ამ პირამიდაზე შემოხაზული სფეროს რადიუსი.",
            options: ["4", "5", "3", "$\\sqrt{5}$", "$\\sqrt{7}$", "$2\\sqrt{3}$"],
            correct: "1",
            tag: "geometry"
        },
        {
            question: "ამოხსენით $\\begin{cases} \\log_y x + \\log_x y = 2 \\\\ x^2 - y = 20 \\end{cases}$ განტოლებათა სისტემა.",
            options: ["(6;16)", "(5;5)", "(7; 2)", "(4;-2)", "(8:7)", "(5;7)"],
            correct: "1",
            tag: "systems"
        },
        {
            question: "იპოვეთ $\\log_2(7 + 2x - x^2) = 4 + x^4 - 2x^2$ განტოლების ამონახსნთა რაოდენობა.",
            options: ["0", "1", "2", "3", "4", "4-ზე მეტი"],
            correct: "1",
            tag: "equations"
        },
        {
            question: "რამდენ წერტილში იკვეთებიან $f(x) = -2x^2 + x - 1$ და $g(x) = 6^{-x} $ ფუნქციის გრაფიკები?",
            options: ["არცერთი", "1", "2", "3", "4", "4-ზე მეტი"],
            correct: "0",
            tag: "functions"
        },
        {
            question: "$ABCA_1B_1C_1$ ($AA_1$, $BB_1$, $CC_1$ გვერდითი წიბოებია) წესიერი სამკუთხა პრიზმის ფუძის გვერდი 8სმ-ია. ხოლო გვერდითი წიბო 4სმ. იპოვეთ $AB_1C$ სამკუთხედის ფართობი.",
            options: ["64", "48", "32", "$16\\sqrt{3}$", "$12\\sqrt{3}$", "$6\\sqrt{3}$"],
            correct: "2",
            tag: "geometry"
        },
        {
            question: "ცილინდრის ღერძული კვეთა კვადრატია, რომლის ფართობი 16სმ$^2$-ია. იპოვეთ იმ კვეთის ფართობი რომელიც ღერძის პარალელურია და მისგან დაშორებულია 1სმ-ით.",
            options: ["10 სმ$^2$", "14 სმ$^2$", "12 სმ$^2$", "$6\\sqrt{3}$ სმ$^2$", "$8\\sqrt{2}$ სმ$^2$", "$8\\sqrt{3}$ სმ$^2$"],
            correct: "5",
            tag: "geometry"
        },
        {
            question: "ჩამოთვლილთაგან რას უდრის $m + k$, თუ $2^m + 4^k = n^2$, სადაც $m, n, k \\in \\mathbb{N}$, ($m > 2k$)",
            options: ["7", "14", "8", "12", "10", "13"],
            correct: "3",
            tag: "number theory"
        },
        {
            question: "იპოვეთ $f(x) = \\log_3\\frac{x+9}{|x|-3}$ ფუნქციის განსაზღვრის არე.",
            options: [
                "$(-9; -3) \\cup (3; +\\infty)$",
                "$\\mathbb{R}\\backslash\\{-3,3\\}$",
                "$\\mathbb{R}\\backslash\\{-9,-3,3\\}$",
                "$(-\\infty; -3) \\cup (3; +\\infty)$",
                "$(-3; 3)$",
                "$(-9; 3)$"
            ],
            correct: "0",
            tag: "functions"
        },
        {
            question: "ამოხსენით $\\frac{(\\log_2 x)^3}{\\sqrt{18 - (\\log_2 x)^2}} + (\\log_2 x)^2 - 18 = 0$ განტოლება.",
            options: ["3", "$\\frac{1}{3}$", "8", "$\\frac{1}{8}$", "$8; \\frac{1}{8}$", "$3; -\\log_2 3$"],
            correct: "2",
            tag: "logarithms"
        },
        {
            question: "კონუსში ჩახაზულია ბირთვი. ბირთვის ზედაპირის ფართობი ისე შეეფარდება კონუსის ფუძის ფართობს, როგორც 4:3. იპოვეთ კონუსის მსახველსა და ფუძის სიბრტყეს შორის კუთხის კოსინუსი.",
            options: ["$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{4}$"],
            correct: "1",
            tag: "geometry"
        },
        {
            question: "სამკუთხა პირამიდის ფუძის გვერდებია 7, 8, 9. პირამიდის სიმაღლეა 5. რომელიღაც სფერო ეხება პირამიდის ყველა გვერდით წახნაგს წერტილებში, რომლებიც ფუძის გვერდებზე მდებარეობენ. იპოვეთ სფეროს რადიუსი.",
            options: ["5", "$\\sqrt{6}$", "$\\sqrt{5}$", "$\\sqrt{7}$", "6", "7"],
            correct: "1",
            tag: "geometry"
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
