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
    question: "1. $y = -x^3$ და $y = \\frac{1}{x^5}$ ფუნქციათა გრაფიკების გადაკვეთის წერტილთა რაოდენობაა?",
    options: [
      "უამრავი",
      "4",
      "3",
      "2",
      "1",
      "არცერთი"
    ]
  },
  {
    question: "2. ჩამოთვლილთაგან რომლის ტოლია $\\frac{\\sqrt[4]{9}}{\\sqrt[6]{81}}$?",
    options: [
      "$\\sqrt[3]{3}$",
      "$\\frac{\\sqrt[3]{243}}{6}$",
      "$\\frac{\\sqrt[3]{81}}{7}$",
      "$\\frac{\\sqrt[3]{27}}{4}$",
      "$\\frac{\\sqrt[3]{81}}{3}$",
      "$\\frac{\\sqrt[3]{243}}{12}$"
    ]
  },
  {
    question: "3. მოცემული ფუნქციებიდან $f(x) = \\{x\\} -1$; $g(x) = 2\\{x\\} + [x]$ და $h(x) = \\{\\frac{1}{2}x\\}$ რომელია პერიოდული? (აქ $[x]$ არის $x$-ის მთელი ნაწილი, ხოლო $\\{x\\}$ არის $x$-ის წილადი ნაწილი)",
    options: [
      "მხოლოდ $f(x)$",
      "მხოლოდ $g(x)$",
      "მხოლოდ $h(x)$",
      "$f(x)$ და $g(x)$",
      "$f(x)$ და $h(x)$",
      "$g(x)$ და $h(x)$"
    ]
  },
  {
    question: "4. $ABC$ სამკუთხედში $M$ და $N$ წერტილები შესაბამისად $BC$ და $AC$ გვერდებზე მდებარეობენ. ცნობილია, რომ $BM: MC= 1: 3$, ხოლო $MN$ მონაკვეთი $AB$ გვერდის პარალელურია. იპოვეთ $AMN$ და $ABC$ სამკუთხედების ფართობთა შეფარდება.",
    options: [
      "1:4",
      "2:9",
      "3:13",
      "3:16",
      "5:18",
      "1:3"
    ]
  },
  {
    question: "5. სამკუთხედის ორი გვერდის სიგრძე 10-ისა და 12-ის ტოლია. რისი ტოლია ამ სამკუთხედის ფართობი, თუ მესამე გვერდისადმი გავლებული მედიანის სიგრძე 5-ის ტოლია.",
    options: [
      "60",
      "56",
      "30",
      "72",
      "36",
      "48"
    ]
  },
  {
    question: "6. იპოვეთ $\\sqrt[4]{(x^2+ 6x+ 9)^2} \\leq 4.9$ უტოლობის მთელ ამონახსნთა რაოდენობა.",
    options: [
      "4",
      "10",
      "9",
      "5",
      "11",
      "7"
    ]
  },
  {
    question: "7. ჩამოთვლილთაგან რომლის ტოლია $\\frac{\\frac{1}{2-\\sqrt[3]{3}} - \\frac{6+3\\cdot\\sqrt[3]{3}}{5 \\cdot \\sqrt[3]{9}}$?",
    options: [
      "0.8",
      "0.8$\\sqrt[3]{3}$",
      "1",
      "0.4$\\sqrt[3]{9}$",
      "2",
      "0.8 $-$ 0.4$\\sqrt[3]{3}$"
    ]
  },
  {
    question: "8. იპოვეთ $[\\sqrt[5]{2023}] \\cdot \\{-\\frac{199}{4}\\}$. (აქ $[a]$ არის $a$-ს მთელი ნაწილი, ხოლო $\\{b\\}$ არის $b$-ს წილადური ნაწილი).",
    options: [
      "2",
      "1",
      "$1\\frac{1}{5}$",
      "$-1\\frac{1}{4}$",
      "$\\frac{3}{5}$",
      "$3\\frac{1}{4}$"
    ]
  },
  {
    question: "9. $ABCD$ ტრაპეციაში ($BC$ და $AD$ შესაბამისად პატარა და დიდი ფუძეებია) $AC$ და $BD$ დიაგონალები $K$ წერტილში იკვეთებიან. იპოვეთ $BC$ და $AD$ ფუძეთა შეფარდება, თუ $ABK$ სამკუთხედის ფართობი $ABCD$ ტრაპეციის ფართობის $\\frac{3}{16}$ ნაწილია.",
    options: [
      "1:2",
      "2:3",
      "1:3",
      "3:5",
      "2:5",
      "3:4"
    ]
  },
  {
    question: "10. $ABCD$ პარალელოგრამში $M$ წერტილი $BC$ გვერდზე მდებარეობს. იპოვეთ $ABM$ და $AMD$ სამკუთხედების ფართობთა შეფარდება, თუ $BM: MC= 2: 5$.",
    options: [
      "1:3",
      "3:11",
      "2:5",
      "2:7",
      "1:4",
      "1:6"
    ]
  },
  {
    question: "11. რისი ტოლია $x^2+ 4x-|x+ 2| -2> 0$ უტოლობის ამონახსნი?",
    options: [
      "$(-3; 2)$",
      "$(-\\infty; -1) \\cup (5; +\\infty)$",
      "$(-1; 4)$",
      "$(-\\infty; -2) \\cup (3; +\\infty)$",
      "$(-\\infty; -5) \\cup (1; +\\infty)$",
      "$\\emptyset$"
    ]
  },
  {
    question: "12. ჩამოთვლილთაგან რისი ტოლია $y= x^2+ 2x$, სადაც $x\\leq-1$, ფუნქციის შექცეული ფუნქციის გრაფიკისა და $y= -4$ ფუნქციის გადაკვეთის წერტილის აბსცისა?",
    options: [
      "4",
      "$-12$",
      "8",
      "$-6$",
      "16",
      "$-81$"
    ]
  },
  {
    question: "13. იპოვეთ $|\\frac{2x-1}{x+1}| \\geq 3$ უტოლობის მთელი ამონახსნების ჯამი?",
    options: [
      "0",
      "$-10$",
      "7",
      "$-9$",
      "11",
      "$-6$"
    ]
  },
  {
    question: "14. $ABCD$ ამოზნექილ ოთხკუთხედში $O$ წერტილი $AC$ და $BD$ დიაგონალების გადაკვეთის წერტილია. იპოვეთ $AO$ და $OC$ შეფარდება, თუ $BCD$ სამკუთხედის ფართობი $ABCD$ ოთხკუთხედის ფართობის $\\frac{5}{9}$ ნაწილია.",
    options: [
      "4:5",
      "3:4",
      "5:7",
      "3:5",
      "2:7",
      "2:3"
    ]
  },
  {
    question: "15. $ABCD$ ტრაპეციაში დიაგონალების გადაკვეთის წერტილზე გავლებულია $BC$ და $AD$ ფუძეების პარალელური წრფე, რომელიც $AB$ და $CD$ ფერდობებს შესაბამისად $E$ და $F$ წერტილებში კვეთს. იპოვეთ $EBCF$ და $AEFD$ ტრაპეციების ფართობთა შეფარდება, თუ $BC:AD= 1: 2$.",
    options: [
      "1:4",
      "5:16",
      "2:9",
      "3:16",
      "7:20",
      "3:16"
    ]
  },
  {
    question: "16. იპოვეთ $y= x^3+ 3x^2+ 3x-1$ ფუნქციის შექცეული ფუნქცია.",
    options: [
      "$y= -\\sqrt[3]{x+ 2} + 1$",
      "$y= \\sqrt[3]{x-2} + 1$",
      "$y= -\\sqrt[3]{x+ 1} -2$",
      "$y= \\sqrt[3]{x+ 2} -1$",
      "$y= -\\sqrt[3]{x-2} + 1$",
      "$y= \\sqrt[3]{x+ 1} -2$"
    ]
  },
  {
    question: "17. ჩამოთვლილთაგან რომლის ტოლია $\\frac{( \\sqrt{a}\\sqrt[3]{a} +\\sqrt{a} \\cdot\\sqrt[3]{a})\\cdot\\sqrt{a}}{1+ \\sqrt[6]{a}}$?",
    options: [
      "$a\\sqrt{a}$",
      "$\\sqrt[3]{a} + 1$",
      "$a\\sqrt[3]{a}$",
      "$(\\sqrt[6]{a}-1)\\sqrt{a}$",
      "$\\sqrt{a}\\sqrt[3]{a}$",
      "$a$"
    ]
  },
  {
    question: "18. თუ $f(x) = \\frac{5x-5}{2x+5}$, მაშინ ქვემოთ ჩამოთვლილი წინადადებებიდან რომელი ორია ჭეშმარიტი? I. $f(x)$ ფუნქციის გრაფიკის სიმეტრიის ცენტრია $K(-2.5; 2.5)$; II. $f(x)$ ფუნქცია სულ ზრდადია; III. $f(x)$ ფუნქციის მნიშვნელობათა სიმრავლეა $E(f) = R$; IV. $f(x)$ ფუნქციის გრაფიკს არ კვეთს $y= 2.5$",
    options: [
      "I და II",
      "II და III",
      "I და IV",
      "II და IV",
      "III და VI",
      "I და III"
    ]
  },
  {
    question: "19. $ABCD$ პარალელოგრამში $AC$ დიაგონალი 39-ის ტოლია. $M$ წერტილი $AD$ გვერდის შუაწერტილია. იპოვეთ $ABCD$ პარალელოგრამის ფართობი, თუ $BC$ გვერდის სიგრძე 26-ის, ხოლო $BM$ მონაკვეთის სიგრძე 30-ის ტოლია.",
    options: [
      "480",
      "720",
      "640",
      "780",
      "900",
      "420"
    ]
  },
  {
    question: "20. $ABCD$ კვადრატის $BC$ გვერდზე აღებულია $M$ წერტილი. $BD$ და $AM$ მონაკვეთები $O$ წერტილში იკვეთებიან. იპოვეთ $ABCD$ კვადრატის და $AOD$ სამკუთხედის ფართობთა შეფარდება, თუ $BO: OD= 1: 2$.",
    options: [
      "3:1",
      "12:5",
      "8:3",
      "9:4",
      "16:5",
      "10:3"
    ]
  },
  {
    question: "21. $f(x) = \\frac{1}{|x+4|+5}$, სადაც $x\\in[-5;1]$ ფუნქციის მნიშვნელობათა სიმრავლეა?",
    options: [
      "$(0; 0.2]$",
      "$(0; 1]$",
      "$[0.1; 1]$",
      "$[0.2; +\\infty)$",
      "$[0.1; 0.2]$",
      "$[0.1; +\\infty)$"
    ]
  },
  {
    question: "22. $\\sqrt[4]{x^2\\cdot\\sqrt[5]{x^2}} -\\sqrt[5]{x\\sqrt{x}} = 56$ განტოლებას ერთი ამონახსნი აქვს. ჩამოთვლილთაგან რომელ შუალედში იქნება ეს ამონახსნი?",
    options: [
      "$(1; 10)$",
      "$(10;30)$",
      "$(60; 100)$",
      "$(100; 300)$",
      "$(500; 1000)$",
      "$(1000; 5000)$"
    ]
  },
  {
    question: "23. იპოვეთ $a$ პარამეტრის ყველა შესაძლო მნიშვნელობა, თუ ცნობილია, რომ $|x+ 2| + |x-3| \\leq a$ და $\\sqrt[6]{-x^2+ x+ 6} > -1$ ტოლფასი უტოლობებია.",
    options: [
      "$a\\in\\{5\\}$",
      "$a\\in\\{0\\}$",
      "$a\\in[-2; 3]$",
      "$a\\in\\{1\\}$",
      "$a\\in\\{-2;3\\}$",
      "$a\\in\\emptyset$"
    ]
  },
  {
    question: "24. $ABCD$ ტრაპეციაში $AC$ და $BD$ დიაგონალები 13-ისა და 15-ის ტოლია. იპოვეთ ტრაპეციის ფართობი, თუ მისი ფუძეების შუაწერტილების შემაერთებელი მონაკვეთის სიგრძე 7-ის ტოლია.",
    options: [
      "80",
      "96",
      "72",
      "144",
      "84",
      "162"
    ]
  },
  {
    question: "25. $ABC$ სამკუთხედში $CK$ ბისექტრისა $BD$ მედიანას $E$ წერტილში მართობულად კვეთს და გადაკვეთის წერტილით მას შუაზე ყოფს ($BE= ED$; $CK\\perp BD$). იპოვეთ $KED$ და $ABC$ სამკუთხედების ფართობთა შეფარდება.",
    options: [
      "3:32",
      "1:16",
      "3:20",
      "1:12",
      "2:21",
      "1:24"
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
  