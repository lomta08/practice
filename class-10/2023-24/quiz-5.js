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
    {
        question: "იპოვეთ \\( \\frac{A_{199}^4}{C_{199}^4} \\). (\\(P_n = n!\\), \\(A_n^k = \\frac{n!}{(n−k)!}\\), \\(C_n^k = \\frac{n!}{k!(n−k)!}\\))",
        options: ["$P_{199}$", "$\\frac{1}{𝑃_{199}}$", "$\\frac{𝑃_4}{𝑃_{199}}$", "$\\frac{𝑃_{199}}{𝑃_4}$", "$𝑃_4$", "ყველა წინა პასუხი მცდარია"],
        correct: 4,
        tags: ["Combinatorics"]
      },
      {
        question: "ბანქოს დასტაში 52 ბარათია, რომელთაგან ზუსტად 13 აგურია. იპოვეთ ალბათობა იმისა, რომ ამ დასტიდან შემთხვევით შერჩეულ 13 ბარათში ზუსტად 12 აგური იქნება.",
        options: [
          "$\\frac{13\\cdot39}{C_{52}^{13}}$",
          "$\\frac{{13}^{4}}{C_{52}^{13}}$",
          "$\\frac{13}{C_{52}^{13}}$",
          "$\\frac{13\\cdot C_{39}^{12}}{C_{52}^{13}}$",
          "$\\frac{39}{C_{52}^{13}}$",
          "$\\frac{{13}^{12}}{C_{52}^{13}}$"
        ],
        correct: 0,
        tags: ["Probability"]
      },
      {
        question: "იპოვეთ \\(x + y\\) ჯამის მაქსიმალური შესაძლო მნიშვნელობა, თუ \\(x\\) და \\(y\\) აკმაყოფილებენ პირობებს  \\(2x + 3y \\leq 10\\) და \\(3x + 2y \\leq 10\\) პირობებს?",
        options: ["$2,5$", "$3$", "$3,5$", "$4$", "$4,5$", "$5$"],
        correct: 3,
        tags: ["Linear Programming"]
      },
      {
        question: "რომელი ფუნქციის გრაფიკის წერტილებში აისახება \\(y = (x - 1)^2 + 1\\) ფუნქციის გრაფიკის წერტილები \\(Oy\\) ღერძის მიმართ ღერძული სიმეტრიისას?",
        options: [
          "$y = {x}^{2} − 2x + 1$",
          "$y = {x}^{2} + 2x + 1$",
          "$y = {x}^{2} + 1$",
          "$y = {(x + 1)}^{2} − 1$",
          "$y = {(x − 1)}^{2} − 1$",
          "$y = {(x + 1)}^{2} + 1$"
        ],
        correct: 5,
        tags: ["Functions", "Symmetry"]
      },
      {
        question: "\\(𝑨𝑩𝑪𝑫\\) ტრაპეციის \\(𝑨𝑫\\) ფუძის სიგრძე \\(𝑩𝑪\\) ფუძის სიგრძეზე 2-ჯერ მეტია. როგორ გამოისახება \\(\\vec{AD}\\) ვექტორი \\( \\vec{AB}\\) = \\(\\vec{a}\\) და \\( \\vec{AC}\\) = \\(\\vec{b}\\) ვექტორების საშუალებით?",
        options: [
          "\\(\\vec{AD} = \\vec{a} + 2\\vec{b}\\)",
          "\\(\\vec{AD} = 2\\vec{b} - 2\\vec{a}\\)",
          "\\(\\vec{AD} = 2\\vec{a} + \\vec{b}\\)",
          "\\(\\vec{AD} = 4\\vec{b} - 3\\vec{a}\\)",    
          "\\(\\vec{AD} = \\vec{a} + \\vec{b}\\)",
          "\\(\\vec{AD} = 4\\vec{b} + 3\\vec{a}\\)"
        ],
        correct: 1,
        tags: ["Vectors"]
      },
      {
        question: "იპოვეთ \\(\\sqrt{x} \\ge x\\) და \\(\\sqrt{x} \\le x\\) უტოლობების ამონახსნთა სიმრავლეების გაერთიანება.",
        options: ["$∅$", "$[0; 2]$", "$[0;+\\infty)$", "$R\\backslash[0; 1]$", "$R\\backslash(0; 1)$", "$R$"],
        correct: 2,
        tags: ["Inequality"]
      },
      {
        question: `\\((x; y)\\) წყვილი \\(  
    \\begin{cases}
      sinx=0,5  \\\\
      cosx=0,5  \\\\
    \\end{cases}
  \\) სისტემის ამონახსნია. იპოვეთ \\(xy\\) ნამრავლის უმცირესი შესაძლო დადებითი მნიშვნელობა.`,
        options: ["$\\frac{1}{2}$", "$\\frac{\\pi^2}{18}$", "$\\frac{5}{9}$", "$\\frac{2\\pi}{9}$", "$\\frac{\\pi^2}{16}$", "$\\frac{\\pi\\sqrt{2}}{6}$"],
        correct: 1,
        tags: ["Trigonometry"]
      },
      {
        question: "დათვალეთ რისი ტოლია \\((2a − 3b)^{10}\\) გამოსახულების სტანდარტულ მრავალწევრად გარდაქმნისას მიღებული მრავალწევრის რიცხვითი კოეფიციენტების ჯამი?",
        options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
        correct: 0,
        tags: ["Binomial Theorem"]
      },
      {
        question: "წესიერი ექვსკუთხა პირამიდის ფუძის გვერდის სიგრძე 4-ის ტოლია. გავლებულია ფუძის პარალელური სიბრტყე, რომელიც ერთ-ერთ გვერდით წიბოს შუაწერტილში კვეთს. იპოვეთ კვეთაში მიღებული მრავალკუთხედის ფართობი.",
        options: ["$4\\sqrt{2}$", "$4\\sqrt{3}$", "$6\\sqrt{2}$", "$6\\sqrt{3}$", "$8\\sqrt{2}$", "$8\\sqrt{3}$"],
        correct: 3,
        tags: ["Geometry", "Solids"]
      },
      {
        question: "მოცემულია \\(\\vec{a} = (2; 1; 0)\\) და \\(\\vec{b} = (1; −2; 3)\\) ვექტორები. იპოვეთ \\(\\vec{a} \\times \\vec{b}\\) და \\(\\vec{b} \\times \\vec{a}\\) ვექტორებს შორის კუთხის კოსინუსი.",
        options: ["$−1$", "−\\(\\frac{\\sqrt{3}}{2}\\)", "−\\(\\frac{\\sqrt{2}}{2}\\)", "−\\(\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)"],
        correct: 0,
        tags: ["Vectors", "3D Geometry"]
      },
      {
        question: "გვაქვს ჭიკარტების სამი ყუთი. პირველ ყუთში არის 15 წითელი და 25 ყვითელი ჭიკარტი. მეორეში არის 10 წითელი და 10 ყვითელი, ხოლო მესამეში 15 წითელი და 5 ყვითელი ჭიკარტი. შემთხვევით ვირჩევ ყუთს (ყუთების არჩევა თანაბრადაა მოსალოდნელი) და შემთხვევით ვიღებთ ერთ ჭიკარტს ყუთიდან. იპოვეთ ალბათობა იმისა, რომ ამოღებული ჭიკარტი ყვითელი აღმოჩნდება?",
        options: ["$\\frac{4}{7}$", "$\\frac{5}{18}$", "$\\frac{7}{15}$", "$\\frac{13}{27}$", "$\\frac{11}{24}$", "$\\frac{10}{21}$"],
        correct: 4,
        tags: ["Probability"]
      },
      {
        question: "რამდენი განსხვავებული სამნიშნა რიცხვი არსებობს, რომელშიც ციფრები არ მეორდება და ციფრები კლებადობითაა დალაგებული? (მომდევნო ციფრი წინაზე ნაკლებია)",
        options: ["$504$", "$120$", "$144$", "$78$", "$88$", "$96$"],
        correct: 1,
        tags: ["Combinatorics"]
      },
      {
        question: "სტანდარტულ სათამაშო კამათელს აგორებენ 7-ჯერ. დათვალეთ რისი ტოლია ალბათობა იმისა, რომ ზუსტად 4-ჯერ მოვა რიცხვი ,,3’’?",
        options: ["$\\frac{{5}^{4}}{{6}^{7}}$", "$\\frac{7 \\cdot {5}^{4}}{{6}^{7}}$", "$\\frac{2 \\cdot {5}^{3}}{{6}^{7}}$", "$\\frac{2 \\cdot {5}^{4}}{{6}^{7}}$", "$\\frac{2 \\cdot {5}^{5}}{{6}^{7}}$", "$\\frac{{5}^{5}}{{6}^{7}}$"],
        correct: 1,
        tags: ["Probability"]
      },
      {
        question: "𝟏𝟐𝟎°-იანი ორწახნაგა კუთხის სხვადასხვა წახნაგებზე აღებული \\(A\\) და \\(B\\) წერტილებიდან წიბოზე დაშვებული მართობების სიგრძეებია \\(AA_1=a\\)  და \\(BB_1=b\\) . იპოვეთ \\(AB\\) მონაკვეთის სიგრძე, თუ \\(A_1B_1=c\\) .",
        options: [
          "$\\frac{a + b + 2c}{4}$",
          "$\\frac{a + b + 2c}{3}$",
          "$\\frac{a + b + 2c}{2}$",
          "$\\sqrt{a^2 + b^2 + c^2 + ab}$",
          "$\\sqrt{(a + b)^2 + c^2}$",
          "$\\sqrt{a^2 + b^2 + c^2}$"
        ],
        correct: 3,
        tags: ["Geometry"]
      },
      {
        question: "სამკუთხა პირამიდის ორი წახნაგი 1-ის ტოლი გვერდის მქონე წესიერი სამკუთხედია და ამ სამკუთხედების სიბრტყეები ურთიერთმართობულია. იპოვეთ ამ პირამიდის უდიდესი წიბოს სიგრძე.",
        options: ["$\\frac{\\sqrt{5}}{2}$", "$\\frac{\\sqrt{6}}{2}$", "$\\frac{\\sqrt{7}}{2}$", "$\\sqrt{2}$", "$\\frac{3}{2}$", "$\\frac{\\sqrt{10}}{2}$"],
        correct: 1,
        tags: ["Solid Geometry"]
      },
      {
        question: "ჩამოთვლილთაგან რომლის ტოლია \\(\\sin^2 \\alpha - \\sin^2 \\beta\\) გამოსახულების მნიშვნელობა, \\(\\alpha\\) და \\(\\beta\\) ცვლადების ყველა მნიშვნელობისათვის?",
        options: [
          "$\\sin^2(\\alpha + \\beta) + \\sin^2(\\alpha - \\beta)$",
          "$\\sin^2(\\alpha + \\beta) \\cdot \\sin^2(\\alpha - \\beta)$",
          "$\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)$",
          "$\\sin(\\alpha + \\beta) \\cdot \\sin(\\alpha - \\beta)$",
          "$\\sin^2 \\alpha + \\sin^2 \\beta$",
          "$\\sin^2 \\alpha \\cdot \\sin^2 \\beta$"
        ],
        correct: 3,
        tags: ["Trig Identities"]
      },
      {
        question: "მართკუთხა საკოორდინატო სიბრტყეზე მოცემულია \\(A(\\cos x; \\sin x)\\) და \\(B(\\cos(x + \\frac{\\pi}{2}); \\sin(x + \\frac{\\pi}{2}))\\) წერტილები. ნებისმიერი \\(x\\) ცვლადისთვის იპოვეთ \\(AB\\) მონაკვეთის სიგრძე.",
        options: [
          "$\\sqrt{2 - 2\\sin x}$",
          "$\\sqrt{(\\sin x - \\cos x)^2}$",
          "$2|\\cos x - \\sin x|$",
          "4",
          "1",
          "$\\sqrt{2}$"
        ],
        correct: 5,
        tags: ["Coordinate Geometry", "Trig"]
      },
      {
        question: "იპოვეთ \\(\\frac{1 + \\sin 2\\alpha}{\\cos 2\\alpha}\\) გამოსახულების მნიშვნელობა, თუ \\(\\tan(\\alpha + 45^\\circ) = 6\\).",
        options: ["$3$", "$2$", "$4$", "$9$", "$6$", "$12$"],
        correct: 4,
        tags: ["Trig", "Identities"]
      },
      {
        question: "პირამიდის ფუძე წესიერი ხუთკუთხედია. ამ პირამიდის ხუთი დიაგონალური კვეთიდან, რა უდიდესი რაოდენობა შეიძლება იყოს პირამიდის ფუძის მართობული? (პირამიდა აუცილებლად წესიერი არ არის)",
        options: ["არცერთი", "ერთი", "ორი", "სამი", "ოთხი", "ხუთი"],
        correct: 2,
        tags: ["Solid Geometry", "Planes"]
      },
      {
        question: "სიბრტყეზე არამდებარე \\(A\\) წერტილიდან გავლებულია სიბრტყისადმი \\(\\alpha\\) კუთხით დახრილი ორი ტოლი \\(AB\\) და \\(AC\\) დახრილი და გავლებულია \\(AO\\) მართობი. იპოვეთ კუთხე \\(BAC\\)  კოსინუსი, თუ \\(∠BOC= 90°\\) .",
        options: ["\\(\\sin^2 \\alpha\\)", "\\(\\cos^2 \\alpha\\)", "\\(\\tan^2 \\alpha\\)", "\\(\\cot^2 \\alpha\\)", "\\(\\sin \\alpha\\)", "\\(\\cos \\alpha\\)"],
        correct: 0,
        tags: ["3D Geometry", "Trig"]
      },
      {
        question: "\\(f(x) = \\arcsin x + \\arccos x\\) ფუნქციის განსაზღვრის არიდან აიღეს ორი \\(a\\) და \\(b\\) რიცხვი, ხოლო მნიშვნელობათა სიმრავლიდან ერთი \\(c\\) რიცხვი. აღმოჩნდა, რომ \\(a\\), \\(b\\) და \\(c\\) რიცხვები რაღაც თანმიმდევრობით არითმეტიკულ პროგრესიას ადგენენ. იპოვეთ \\(a\\) და \\(b\\) რიცხვებს შორის უმცირესის უდიდესი შესაძლო მნიშვნელობა.",
        options: ["$\\frac{2}{3}$", "$\\frac{2}{\\pi}$", "$\\frac{4 - \\pi}{2}$", "$\\frac{3}{4}$", "$\\frac{\\pi - 3}{\\pi}$", "$\\frac{\\pi}{4}$"],
        correct: 2,
        tags: ["Functions", "Arcsin", "Arccos"]
      },
      {
        question: "იპოვეთ \\(a\\) პარამეტრის ყველა იმ დადებითი მნიშვნელობათა სიმრავლე, რომელთათვისაც \\(f(x) = (a − 2)\\sin x + (a − 1)\\cos x\\) ფუნქციის მნიშვნელობათა სიმრავლეა \\([−a; a]\\) შუალედი.",
        options: ["\\(\\text{{1, 3}}\\)", "\\(\\text{{1, 5}}\\)", "\\(\\text{{3, 5}}\\)", "\\(\\text{{1}}\\)", "\\(\\text{{3}}\\)", "\\(\\text{{5}}\\)"],
        correct: 1,
        tags: ["Trig", "Parameters"]
      },
      {
        question: "იპოვეთ a პარამეტრის ყველა იმ მნიშვნელობათა სიმრავლე, რომელთათვისაც \\(\\sin x = a\\) განტოლებას აქვს ამონახსნი და მისი ყველა ამონახსნი ეკუთვნის \\(f(x) = \\cos x\\) ფუნქციის კლებადობის შუალედს.",
        options: ["\\([−1;\\frac{1}{2}]\\)", "\\([−1;−\\frac{1}{2}]\\)", "\\([−\\frac{1}{2}; 1]\\)", "\\([0;\\frac{1}{2}]\\)", "\\([0; 1]\\)", "\\([\\frac{1}{2}; 1]\\)"],
        correct: 4,
        tags: ["Trig", "Domain"]
      },
      {
        question: "მრავალწახნაგას 14 წახნაგი და 36 წიბო აქვს. რამდენი წვერო აქვს ამ მრავალწახნაგას?",
        options: ["$18$", "$20$", "$28$", "$26$", "$12$", "$24$"],
        correct: 5,
        tags: ["Polyhedra", "Euler's Formula"]
      },
      {
        question: "მოცემულია \\(ABCDA_1B_1C_1D_1\\) დახრილი პარალელეპიპედი. სივრცის რამდენი ისეთი \\(O\\) წერტილი არსებობს, რომლისთვისაც სამართლიანია \\(\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} + \\vec{OA_1} + \\vec{OB_1} + \\vec{OC_1} + \\vec{OD_1} = \\vec{0}\\) ტოლობა.",
        options: ["არცერთი", "ერთი", "ორი", "ოთხი", "რვა", "რვაზე მეტი"],
        correct: 1,
        tags: ["Vectors", "3D Geometry"]
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
