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
    question: 'იპოვეთ \\( y = -10x^2 - 30x - 5 \\) ფუნქციის გრაფიკი საკორდინატო სიბრტყის რომელ მეოთხედში არ გადის.',
    options: ['I', 'II', 'III', 'IV', 'I და II', 'ასეთი მეოთხედი არ არსებობს'],
    correct: 0,
    tags: ['ფუნქცია']
  },
  {
    question: 'იპოვეთ \\( y = -x^2 + 5x - 2 \\), სადაც \\( x ∈ [-1; 2] \\) ფუნქციის უდიდესი და უმცირესი მნიშვნელობების ჯამი.',
    options: ['$−4$', '$6.25$', '$−8$', '$2.5$', '$−4.25$', 'შეუძლებელია დადგენა'],
    correct: 0,
    tags: ['ფუნქცია']
  },
  {
    question: `ქვემოთ ჩამოთვლილი ფუნქციებიდან რომელი ფუნქცია არის ლუწი ან კენტი?\n\nI. \\( y = -x^2 - 3|x| + 2 \\)\nII. \\( y = -2x + 1 \\)\nIII. \\( y = |x^2 - 3x| \\)\nIV. \\( y = -x^2 + |x - 2| \\)`,
    options: ['I და II', 'I და III', 'მხოლოდ I', 'I და IV', 'II და III', 'ოთხივე'],
    correct: 2,
    tags: ['ფუნქცია']
  },
  {
    question: 'იპოვეთ რისი ტოლია ტოლგვერდა სამკუთხედის ფართობი, თუ შემოხაზული და ჩახაზული წრეწირთა რადიუსების სხვაობა 1-ის ტოლია.',
    options: ['$\\sqrt{6}$', '$2\\sqrt{3}', '$6$', '$ 2\\sqrt{6} $', '\\3\\sqrt{3} $', '$4 \\sqrt{3} $'],
    correct: 4,
    tags: ['სამკუთხედი']
  },
  {
    question: 'ოთხკუთხედში დიაგონალების გატარებისას მიღებული ოთხი სამკუთხედიდან რომელიღაც სამის ფართობია 80; 32 და 128. იპოვეთ რა უმცირესი ფართობი შეიძლება ქონდეს ამ ოთკუთხედს?',
    options: ['$560$', '$256$', '$291.2$', '$300$', '$250$', '$260$'],
    correct: 5,
    tags: ['გეომეტრია']
  },
  {
    question: 'იპოვეთ \\(x\\)-ის ყველა მნიშვნელობა, რომლისთვისაც \\( -x^2 - 2x + 3 \\) და \\( x^2 + x + 1 \\) გამოსახულებას ერთნაირი ნიშანი აქვს.',
    options: ['\\(R\\) ', '\\(R ∖ [−3; 1]\\) ', '(−1; 3) ', ' \\(R ∖ [2; 3]\\) ', ' (−3; 1) ', ' ∅ '],
    correct: 4,
    tags: ['ფუნქცია']
  },
  {
    question: 'იპოვეთ \\( c \\) პარამეტრის ყველა შესაძლო მნიშვნელობა, თუ \\( y = -x^2 + 4x + c \\), სადაც \\( x ∈ (−∞; −1] \\) ფუნქციის მნიშვნელობათა სიმრავლეა \\((-∞; −8]\\).',
    options: ['$ 4 $', '$ 2 $', '$ −8 $', '$ −3 $', '$ −12 $', '$ 3 $'],
    correct: 3,
    tags: ['ფუნქცია']
  },
  {
    question: 'იპოვეთ \\( a \\) პარამეტრის მნიშვნელობა, რომლისთვისაც \\( x^2 − (a + 2)x + a + 1 = 0 \\) განტოლება აქვს ორი ამონახსნი და მათი კვადრატების ჯამი აღწევს უმცირეს მნიშვნელობას.',
    options: ['$ 2 $', '$ −1 $', '$ 3 $', '$ −2 $', '$ 1 $', '$ −3 $'],
    correct: 1,
    tags: ['პარამეტრი']
  },
  {
    question: '𝑨𝑩𝑪 სამკუთხედში 𝑩 კუთხე 𝟑𝟎°-ის ტოლია. გავლებულია 𝑨𝑴 და 𝑪𝑵 სამაღლეები. იპოვეთ 𝑵𝑩𝑴 სამკუთხედის ფართობი, თუ 𝑨𝑩𝑪 სამკუთხედის ფართობი 24-ის ტოლია.',
    options: ['$12$', '$8 \\sqrt{3}$', '$16$', '$ 9 $', '$ 12 \\sqrt{3} $', '$ 18 $'],
    correct: 5,
    tags: ['სამკუთხედი']
  },
  {
    question: 'სამკუთხედის ორი გვერდის სიგრძე 12-ისა და 13-ის ტოლია. რისი ტოლია ამ სამკუთხედის მესამე გვერდის სიგრძე, თუ შემოხაზული და ჩახაზული წრეწირთა რადიუსების ნამრავლი 28-ის ტოლია?',
    options: ['$7\\sqrt{3}$', '$15$', '$14$', ' $7\\sqrt{5}$', '$11.5$', '$21$'],
    correct: 5,
    tags: ['სამკუთხედი']
  },
  {
    question: 'იპოვეთ რისი ტოლია \\(f(x) = ax^2 + bx + c\\) ფუნქციის ზრდადობის შუალედი, თუ ცნობილია, რომ \\(f(x) ≥ 0\\) უტოლობის ამონახსნია \\(x ∈ [−5; 1]\\).',
    options: ['$[−3; +\\infty)$', '$(−\\infty; −2]$', '$[−1; +\\infty)$', '$(−\\infty; 0]$', '$[−2; +\\infty)$', '$(−\\infty; −3]$'],
    correct: 1,
    tags: ['ფუნქცია']
  },
  {
    question: 'რამდენი არადადებითი მთელი ამონახსნი აქვს \\(\\frac{(x^2+5x−14)(9−x^2)}{(x^2−2x+10)(x^3+3x^2)} ≤ 0\\) უტოლობას?',
    options: ['$5$', '$7$', '$4$', '$6$', '$9$', 'ყველა წინა პასუხი მცდარია'],
    correct: 3,
    tags: ['ალგებრა']
  },
  {
    question: 'იპოვეთ \\(f(f(x)) ≤ f(x)\\) უტოლობის მთელ ამონახსნთა რაოდენობა, თუ \\(f(x) = x^2 − x\\).',
    options: ['$4$', '$6$', '$7$', '$5$', '$9$', 'არცერთი'],
    correct: 0,
    tags: ['შემდგენილი ფუნქცია']
  },
  {
    question: 'სამკუთხედის ორი კუთხე 𝟑𝟎°-ისა და 𝟏𝟎𝟓°-ის ტოლია, უმცირესი გვერდის სიგრძე 2-ის ტოლია. იპოვეთ ამ სამკუთხედის ფართობი.',
    options: ['$ \\sqrt{3} − 1 $', '$ \\sqrt{3} $', '$ \\sqrt{3} + 1 $', '$ 2\\sqrt{3} $', '$ 2\\sqrt{3} + 1 $', '$2\\sqrt{6} $'],
    correct: 2,
    tags: ['გეომეტრია']
  },
  {
    question: 'მართკუთხა სამკუთხედის ფართობი 30-ის ტოლია. იპოვეთ ამ სამკუთხედის ჰიპოტენუზის სიგრძე, თუ მასში ჩახაზული წრეწირის რადიუსი 2-ის ტოლია.',
    options: ['$12$', '$15$', '$6\\sqrt{3}$', '$13$', '$2\\sqrt{15}$', '$9$'],
    correct: 3,
    tags: ['სამკუთხედი']
  },
  {
    question: '$𝒚 = 𝒇(𝒙)$ ფუნქცია $𝒐𝒙$ ღერძს კვეთს 12 წერტილში, მათ შორის კორდინატთა სათავეში. კვეთის წერტილებიდან 7 წერტილს 𝒙 კორდინატი უარყოფითი აქვთ. იპოვეთ \\(f(|x|) = 0\\) განტოლების ამონახსნთა რაოდენობა.',
    options: ['$11$', '$7$', '$8$', '$10$', '$9$', 'შეუძლებელია დადგენა'],
    correct: 4,
    tags: ['მოდული']
  },
  {
    question: '$𝒇(𝒙) = 𝒂𝒙^2 + 𝒃𝒙 + 𝒄 $ ფუნქციის გრაფიკი მიიღება $𝒈(𝒙) = −𝒙^2 + 𝟒𝒙 − 𝟑$ ფუნქციის გრაფიკის ორი პარალელური გადატანით. კერძოდ აბცისათა ღერძის გასწვრივ უარყოფითი მიმართულებით 3 ერთეულით გადატანით და ორდინატთა ღერძის გასწვრივ დადებითი მიმართულებით 4 ერთეულით გადატანით. იპოვეთ 𝒂 + 𝒃 + 𝒄 მნიშვნელობა.',
    options: ['$1$', '$2$', '$0$', '$−3$', '$2$', '$ −1$'],
    correct: 0,
    tags: ['ფუნქცია', 'გრაფიკი']
  },
  {
    question: 'იპოვეთ \\(y = (x − 1)(x − 2)(x − 3)(x − 4) + 10\\) ფუნქციის უმცირესი მნიშვნელობა.',
    options: ['$8$', '$0$', '$9$', '$10$', '$ −2$', '$ 1$'],
    correct: 2,
    tags: ['ფუნქცია']
  },
  {
    question: 'ABC სამკუთხედში, რომლის AC გვერდის სიგრძეა 4 და BK სიმაღლე 3, ჩახაზულია მართკუთხედი, რომლის ერთ-ერთი გვერდი სამკუთხედის AC გვერდზეა. რა უდიდესი ფართობი შეიძლება ჰქონდეს ამ მართკუთხედს?',
    options: ['ა)$ \\sqrt{7} $', '$3$', '$2.5$', '$ 2\\sqrt{3} $', '$ 3.5 $', '$ 4 $'],
    correct: 1,
    tags: ['გეომეტრია']
  },
  {
    question: 'ABCD რომბში დიაგონალების სიგრძეები აკმაყოფილებს ტოლობას 3AC + 4BC = 96. იპოვეთ რომბის ფართობის უდიდესი მნიშვნელობა.',
    options: ['$48$', '$144$', '$120$', '$96$', '$80$', '$ 160 $'],
    correct: 3,
    tags: ['რომბი']
  },
  {
    question: 'იპოვეთ \\(f(g(x))\\) ფუნქციის უდიდესი მნიშვნელობა, თუ \\(f(x) = \\frac{1}{x}\\) და \\(g(x) = x^2 + 2x + 199\\).',
    options: ['\\(\\frac{1}{26}\\)', '$15$', '$ 1 $', '$ 0 $', ' \\(\\frac{1}{199}\\)', ' \\(\\frac{1}{198}\\)'],
    correct: 5,
    tags: ['შემადგენლობა']
  },
  {
    question: 'იპოვეთ \\(a\\) პარამეტრის ყველა მნიშვნელობა, რომლისთვისაც \\(|−x^2 + 2|x| + 3| − 1 = a\\) განტოლებას აქვს ზუსტად ხუთი ამონახსნი.',
    options: ['$−3$', '$2$', '$−4$', '$5$', '$0$', '$ 1$'],
    correct: 1,
    tags: ['მოდული', 'პარამეტრი']
  },
  {
    question: 'იპოვეთ \\(p\\) პარამეტრის რამდენი ნატურალური მნიშვნელობა არსებობს, რომელთათვისაც კვადრატული \\(x^2 − (2p + 1)x + p + p^2 = 0\\) განტოლების \\(x_1\\) და \\(x_2\\) ამონახსნები აკმაყოფილებენ \\(x_1^3 + x_2^3 − 7x_1 − 7x_2 ≤ 0\\) პირობას.',
    options: ['$5$', '$1$', 'არცერთი', '$ 7 $', '$ 2 $', ' უამრავი'],
    correct: 4,
    tags: ['პარამეტრი']
  },
  {
    question: 'სამკუთხედში ჩახაზული წრეწირი შეხების წერტილით ერთ-ერთ გვერდს ყოფს 4-ისა და 6-ის ტოლ მონაკვეთებად. იპოვეთ ამ სამკუთხედის უდიდესი კუთხის სინუსი, თუ ამ სამკუთხედის ფართობი \\(24\\sqrt{6}\\)-ის ტოლია.',
    options: ['\\(\\frac{3}{5}\\)', '\\(\\frac{2\\sqrt{6}}{5}\\)', '\\(\\frac{2}{3}\\)', '\\(\\frac{3\\sqrt{2}}{8}\\)', '\\(\\frac{4}{5}\\)', '\\(\\frac{2\\sqrt{3}}{7}\\)'],
    correct: 1,
    tags: ['სამკუთხედი']
  },
  {
    question: 'პარალელოგრამში, რომლის დიაგონალების სიგრძეები 24-ის და 18-ის ტოლია, რომბი ისეა ჩახაზული, რომ მისი გვერდები პარალელოგრამის დიაგონალების პარალელურია. იპოვეთ პარალელოგრამის ფართობი, თუ რომბის ფართობი 48-ის ტოლია.',
    options: ['$72$', '$120$', '$80$', '$112$', '$144$', '$98$'],
    correct: 5,
    tags: ['პარალელოგრამი']
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
