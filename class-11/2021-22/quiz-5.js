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
    question: "\\( y = x^3 \\), \\( y = ax^2 \\), \\( y = \\tan x \\), \\( y = e^{3x} \\), \\( y = \\log_3(x+2) \\), \\( y = \\frac{1}{x} \\) ამ ექვსი ფუნქციიდან რამდენის გრაფიკს გააჩნია საერთო წერტილი საკოორდინატო სიბრტყეზე მდებარე ნებისმიერ წრფესთან? ",
    options: ["ერთს", "ორს", "სამს", "ოთხს", "ხუთს", "ექვს"],
    correct: 0,
    tags: ["ფუნქციები"]
  },
  {
    question: "იპოვეთ \\( f(x) = x^2 - 3x + 2 \\) ფუნქციის იმ წერტილის აბსცისა, რომელზეც ამ ფუნქციისადმი გავლებული მხები \\( 2x + y = 5 \\) წრფის პარალელურია.",
    options: ["\\( \\frac{1}{3} \\)", "\\( \\frac{3}{4} \\)", "\\( \\frac{1}{2} \\)", "$1$", "$2$", "$3$"],
    correct: 2,
    tags: ["წარმოებული"]
  },
  {
    question: "იპოვეთ \\( A(\\sqrt{7}; \\frac{12\\sqrt{2}}{5}) \\) წერტილიდან \\( \\frac{x^2}{25} + \\frac{y^2}{16} = 1 \\) ელიფსის ფოკუსებამდე მანძილების ჯამი.",
    options: ["\\( 7\\sqrt{2} \\)", "\\( \\frac{12}{49} \\)", "50", "10", "25", "\\( \\sqrt{7} + 16\\sqrt{2} \\)"],
    correct: 3,
    tags: ["ელიფსი"]
  },
  {
    question: "კონუსის მსახველია 5, ხოლო ფუძის რადიუსი 3. იპოვეთ კონუსში ჩახაზული სფეროს ზედაპირის ფართობი.",
    options: ["\\( 5\\pi \\)", "\\( 9\\pi \\)", "\\( 2\\sqrt{3}\\pi \\)", "\\( 6\\pi \\)", "\\( \\sqrt{10}\\pi \\)", "\\( 3\\sqrt{3}\\pi \\)"],
    correct: 1,
    tags: ["სტერეომეტრია"]
  },
  {
    question: "მოცემულია ორი სფერო რადიუსებით 2 და 3 და ცენტრებით \\( O_1 \\) და \\( O_2 \\). ცენტრებს შორის მანძილია \\( O_1O_2 = 7 \\). სიბრტყე რომელიც ორივე სფეროს ეხება, \\( O_1O_2 \\) წრფეს გადაკვეთს \\( A \\) წერტილში. იპოვეთ \\( AO_1 \\).",
    options: ["$2$", "$4$", "$6$", "$10$", "$14$", "\\( 3\\sqrt{6} \\)"],
    correct: 4,
    tags: ["სტერეომეტრია"]
  },
  {
    question: "ჩამოთვლილთაგან რომელია \\( y = \\frac{2x^2 + 3x - 1}{x - 3} \\) ფუნქციის დახრილი ასიმტოტი?",
    options: ["\\( y = x - 3 \\)", "\\( y = x + 7 \\)", "\\( y = 3x + 1 \\)", "\\( y = 2x - 5 \\)", "\\( y = 2x + 9 \\)", "\\( y = x - 1 \\)"],
    correct: 4,
    tags: ["ასიმტოტები"]
  },
  {
    question: "გამოთვალეთ \\( (\\arcsin x)' \\cdot \\sqrt{1 - x^2} - (\\arccos x)' \\cdot \\sqrt{1 - x^2} \\).",
    options: ["$2$", "\\( 2\\sqrt{1 - x^2} \\)", "\\( \\frac{2}{\\sqrt{1 - x^2}} \\)", "$0$", "\\( 2x \\)", "$1$"],
    correct: 0,
    tags: ["წარმოებული"]
  },
  {
    question: "გამოთვალეთ \\( f'(1) \\), თუ \\( f(x) = \\cos^2(x^3) \\).",
    options: ["\\( \\cos 1 \\)", "3", "\\( 2\\sin 1 \\)", "\\( -3\\sin 2 \\)", "\\( -\\sin 2 \\)", "1"],
    correct: 3,
    tags: ["წარმოებული"]
  },
  {
    question: "ცილინდრში ჩახაზულია სფერო. იპოვეთ სფეროს ზედაპირის ფართობი, თუ ცილინდრის გვერდითი ზედაპირის ფართობია 64.",
    options: ["\\( 64\\pi \\)", "\\( 32\\pi \\)", "\\( 16\\pi^2 \\)", "$64$", "$27$", "$15$"],
    correct: 3,
    tags: ["სტერეომეტრია"]
  },
  {
    question: "ჰიპერბოლაზე \\( \\frac{x^2}{9} - \\frac{y^2}{16} = 1 \\) აღებულია წერტილი, რომლის აბსცისაა 3. ჩამოთვლილთაგან რისი ტოლია მანძილი ამ წერტილიდან ფოკუსამდე.",
    options: ["$3$", "$4$", "$8$", "$1$", "$6$", "$12$"],
    correct: 2,
    tags: ["ჰიპერბოლა"]
  },
  {
    question: "Oxy საკოორდინატო სიბრტყეზე აღნიშნეს ყველა იმ (x;y) კოორდინატებიანი წერტილთა სიმრავლე რომლებისთვისაც log<sub>(3-|y|)</sub>(2-|x|) გამოსახულება განსაზღვრულია. იპოვეთ მიღებული ფიგურის ფართობი.",
    options: ["$24$","$6$","$12$","$23$","$(24 - \\log_32)$","$36$"],
    correct: 0, // გ) 12 is the correct answer
    tags: ["კოორდინატთა სიბრტყე", "ლოგარითმული ფუნქცია", "ფართობი"],
    explanation: "გამოსახულება განსაზღვრულია, როცა: 1) 3-|y| > 0 და 3-|y| ≠ 1, 2) 2-|x| > 0. ეს იძლევა: |y| < 3 და |y| ≠ 2, |x| < 2. ფართობია მართკუთხედის ფართობი (4×6) გამოკლებული ორი ხაზის ფართობი (2×4×1) = 24-12 = 12."
  },
  {
    question: "იპოვეთ იმ წერტილის კოორდინატები, რომელიც მდებარეობს \\( 4x + 3y + 25 = 0 \\) წრფეზე და რომელიც კოორდინატთა სათავიდან დაშორებულია უმოკლესი მანძილით.",
    options: ["\\( (-4; -3) \\)", "\\( (1; -\\frac{29}{3}) \\)", "\\( (-1; -\\frac{21}{3}) \\)", "\\( (0; -\\frac{25}{3}) \\)", "\\( (4; -\\frac{41}{3}) \\)", "\\( (3; -7) \\)"],
    correct: 0,
    tags: ["ანალიტიკური გეომეტრია"]
  },
  {
    question: "ამოხსენით განტოლება \\( \\log_{\\sin x} \\cos x = 2 - \\log_{\\cos x} \\sin x \\) (ყველგან \\( n \\in \\mathbb{Z} \\)).",
    options: ["\\( \\frac{\\pi}{6} + 2\\pi n \\)", "\\( 2 + 2\\pi n \\)", "\\( \\frac{\\pi}{3} + \\pi n \\)", "\\( \\frac{\\pi}{4} + \\frac{\\pi n}{2} \\)", "\\( \\frac{\\pi}{4} + \\pi n \\)", "\\( \\frac{\\pi}{4} + 2\\pi n \\)"],
    correct: 5,
    tags: ["ტრიგონომეტრია"]
  },
  {
    question: "ჩამოთვლილთაგან რომელია სიბრტყის განტოლება, რომელიც მართობულია \\( Oz \\) ღერძის და გადის \\( K(1; -2; 3) \\) წერტილზე?",
    options: ["\\( 2x - 3y + z - 11 = 0 \\)", "\\( x + 5z - 8 = 0 \\)", "\\( x + z - 5 = 0 \\)", "\\( y = 7 \\)", "\\( z = 3 \\)", "\\( x - 2y = 8 \\)"],
    correct: 4,
    tags: ["ანალიტიკური გეომეტრია"]
  },
  {
    question: "\\(ABCD\\) პირამიდის ABC წახნაგის ფართობი 4-ჯერ მეტია \\(ABD\\) წახნაგის ფართობზე. \\(CD\\) წიბოზე აღებულია \\(M\\) წერტილი ისე, რომ \\(CM:MD=2\\). \\(M\\) წერტილზე გავლებულია \\(ABC\\) წახნაგის პარალელური α სიბრტყე და \\(ABD\\)-ს პარალელური β სიბრტყე. ვიპოვოთ შესაბამისად α და β სიბრტყეში მიღებული კვეთების ფართობების შეფარდება.",
    options: ["$(1:4)$", "$(1:2)$", "$(2:1)$", "$(1:\\sqrt{2})$", "$(1:1)$", "$(3:1)$"],
    correct: 4,
    tags: ["გეომეტრია", "პირამიდა"]
  },
  {
    question: "სავარაუდო პასუხებში ჩამოთვლილთაგან a პარამეტრის რომელი მნიშვნელობისთვის იქნება \\({x}^{3}-2a{x}^{2}+(2{a}^{2}-6a+8)x=0\\) განტოლების განსხვავებული ფესვების კვადრატების ჯამი უდიდესი?",
    options: ["$0$", "$2$", "$1$", "$-1$", "$3$", "$4$"],
    correct: 4,
    tags: ["ალგებრა", "განტოლებები"]
  },
  {
    question: "იპოვეთ \\(f(x)=4{x}^{4}-2{x}^{2}-5\\) ფუნქციის უმცირესი მნიშვნელობა \\([0;2]\\) შუალედში.",
    options: ["$-5$", "\\(\\frac{-21}{4}\\)", "$-7$", "$51$", "$13$", "\\(\\frac{17}{3}\\)"],
    correct: 1,
    tags: ["ფუნქციები", "ოპტიმიზაცია"]
  },
  {
    question: "იპოვეთ \\((x-10)(x-4)\\sqrt{log_3x -2} = 0\\) განტოლების ამონახსნთა ჯამი.",
    options: ["$14$", "$4$", "$10$", "$23$", "$19$", "$9$"],
    correct: 4,
    tags: ["განტოლებები", "ლოგარითმები"]
  },
  {
    question: "ჩამოთვლილთაგან რომელია სიბრტყის განტოლება, რომელიც M(3;-2;1) და N(2;4;3) წერტილებზე \\(\\vec{n}(2;1;3)\\) ვექტორის პარალელურად გადის?",
    options: [
      "15x+4y-7z-30=0",
      "16x+7y-13z-21=0",
      "6x+y-16=0",
      "10x+7y-16z=0",
      "2x+y-2z-2=0",
      "2x+3y-8z+8=0"
    ],
    correct: 1,
    tags: ["ანალიტიკური გეომეტრია"]
  },
  {
    question: "ცილინდრის ფუძეში ჩახაზულია მართკუთხა ABC სამკუთხედი \\(AC=2\\sqrt{6}\\) ჰიპოტენუზითა და \\(AB=\\sqrt{6}\\) კათეტით. მსახველი \\(CC_1=2\\sqrt{3}\\). იპოვეთ მანძილი B წერტილიდან \\(AC_1\\) წრფემდე.",
    options: ["2", "3", "\\(\\sqrt{5}\\)", "\\(2\\sqrt{3}\\)", "\\(\\sqrt{6}\\)", "\\(2\\sqrt{5}\\)"],
    correct: 2,
    tags: ["სტერეომეტრია", "ცილინდრი"]
  },
  {
    question: "იპოვეთ a-ს ყველა მნიშვნელობა, რომლისთვისაც \\(f(x)=2{x}^{3}-3(a+2){x}^{2}+48ax+6x-3\\) ფუნქცია ზრდადია მთელ რიცხვთა ღერძზე.",
    options: [
      "[1; 48]",
      "[-5; 0]",
      "[-1; 11]",
      "[3;12]",
      "[0; 28]",
      "[2; 32]"
    ],
    correct: 4,
    tags: ["ფუნქციები", "წარმოებული"]
  },
  {
    question: "იპოვეთ \\(f(x)=6{x}^{3}-3|x-1|\\) ფუნქციის ზრდადობის შუალედი.",
    options: [
      "\\((-\\infty;+\\infty)\\)",
      "\\((-\\infty;1)\\)",
      "\\((\\frac{1}{\\sqrt{6}};+\\infty)\\)",
      "\\((\\frac{-1}{\\sqrt{6}};\\frac{1}{\\sqrt{6}})\\)",
      "\\((-\\infty;1)∪(\\frac{1}{\\sqrt{6}};+\\infty)\\)",
      "$(1;3)∪(5;6)$"
    ],
    correct: 0,
    tags: ["ფუნქციები", "მონოტონურობა"]
  },
  {
    question: "ჩამოთვლილთაგან a-ს რომელი მნიშვნელობისთვის ღებულობს \\(y=\\frac{{x}^{3}}{3}-\\frac{(a+3)}{2}\\cdot{x}^{2}+3ax\\) ფუნქციის მაქსიმუმი [0;2] შუალედში, უმცირეს მნიშვნელობას?",
    options: ["$-3$", "$5$", "\\frac{1}{2}", "\\frac{3}{4}", "$1$", "$4$"],
    correct: 0,
    tags: ["ფუნქციები", "ექსტრემუმი"]
  },
  {
    question: "\\(R\\) რადიუსიან სფეროში ჩახაზულია უდიდესი გვერდითი ზედაპირის მქონე ცილინდრი. იპოვეთ ცილინდრის მოცულობა.",
    options: [
      "ა) \\( 2\\pi R^3 \\)",
      "ბ) \\( \\frac{\\pi R^3}{3} \\)",
      "გ) \\( \\frac{\\pi R^3}{\\sqrt{3}} \\)",
      "დ) \\( \\frac{2\\pi R^3}{3} \\)",
      "ე) \\( \\frac{\\pi R^3}{\\sqrt{2}} \\)",
      "ვ) \\( \\frac{\\pi R^3}{6} \\)"
    ],
    correct: 4, // ე) πR³/√2 is the correct answer
    tags: ["სტერეომეტრია", "ცილინდრი"]
  },
  {
    question: "მოცემულია ოთხი A(3;5;0), B(-2;1;3), C(2;4;-6) და D(5;7;12) წერტილი. ჩამოთვლილთაგან რომელია K წერტილზე გამავალი AB წრფის მართობული სიბრტყის განტოლება, სადაც K წერტილი CD მონაკვეთს 1:2 შეფარდებით (C წერტილის მხრიდან) ყოფს.",
    options: [
      "ა) 10x+8y+4z-35=0",
      "ბ) -5x-4y+7z+35=0",
      "გ) 5x+6y-45=0",
      "დ) x+3y-z-7=0",
      "ე) 5x+4y-3z-35=0",
      "ვ) -5x-4y+3z-26=0"
    ],
    correct: 4, // ე) 5x+4y-3z-35=0 is the correct answer
    tags: ["ანალიტიკური გეომეტრია", "სიბრტყის განტოლება"]
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
