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
        question: "იპოვეთ შემდეგი ინტეგრალები: $\\int\\left(x^{-0.5} + \\sin x - \\frac{2}{x}\\right) dx$",
        options:[],
        correct: {},
        tags:[]

    },
    {
        question: "იპოვეთ შემდეგი ინტეგრალები: $\\int\\left(\\frac{1}{\\cos^2x} + \\frac{2}{\\sqrt{1-x^2}} - 2x\\right) dx$",
        options:[],
        correct: {},
        tags:[]

    },
    {
        question: "იპოვეთ შემდეგი ინტეგრალები: $\\int\\frac{2x dx}{1+x^4}$",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "გამოთვალეთ ინტეგრალი: $\\int_{1}^{2} \\frac{4x^4 + 3x^3 + 2x^2 + x + 1}{x} dx$",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "გამოთვალეთ ინტეგრალი: $\\int_{\\pi/6}^{\\pi/4} \\cos^3x dx$",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "გამოთვალეთ ინტეგრალი: $\\int_{0}^{1} \\frac{3 dx}{x^2 + 11x + 28}$",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "გამოიკვლიეთ ფუნქცია $f(x) = x + \\frac{4}{x} + 2$ და ააგეთ მისი გრაფიკი. (იპოვეთ: განსაზღვრის არე, მნიშვნელობათა სიმრავლე, ღერძებთან კვეთის წერტილების კოორდინატები, ზრდადობისა და კლებადობის შუალედები, ექსტრემუმის წერტილები, ნიშანმუდმივობის შუალედები, დახრილი და ვერტიკალური ასიმპტოტები)",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "$Oxy$ მართკუთხა საკოორდინატო სიბრტყეზე იპოვეთ $f(x) = x^2 - 10x + 12$ და $g(x) = -x^2 + 4x - 8$ ფუნქციების გრაფიკებით შემოსაზღვრული არის ფართობი.",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "გამოთვალეთ ინტეგრალი: $\\int_{\\pi/6}^{\\pi/3} \\frac{dx}{\\sin^2x \\cdot \\cos^2x}$",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "იპოვეთ $f(x) = e^x$ ფუნქციის გრაფიკით, $Ox$ და $Oy$ ღერძებითა და $x=2$ წრფით შემოსაზღვრული ფიგურის $Ox$ ღერძის გარშემო ბრუნვით მიღებული სივრცული სხეულის მოცულობა.",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "$Oxyz$ მართკუთხა საკოორდინატო სივრცეში მოცემულია $3x - 2y + z = 2$ ტოლობით განსაზღვრული $\\omega$ სიბრტყე, $2x + 6y - 3z = 6$ ტოლობით განსაზღვრული $\\varphi$ სიბრტყე და $A(1; 1; 2)$ წერტილი. იპოვეთ: ა) $\\omega$ სიბრტყეზე მდებარე რომელიმე წერტილის კოორდინატები; ბ) $\\omega$ და $\\varphi$ სიბრტყეებს შორის კუთხის კოსინუსი; გ) მანძილი $A$ წერტილიდან $\\omega$ სიბრტყემდე; დ) $A$ წერტილზე გამავალი $\\omega$ სიბრტყის პარალელური სიბრტყის განტოლება.",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "$Oxy$ მართკუთხა საკოორდინატო სიბრტყეზე იპოვეთ $A$ წერტილის კოორდინატები და $b$ წრფის განტოლება, თუ ცნობილია, რომ $y = x^2$ ფუნქციის გრაფიკზე მდებარე ყველა წერტილი თანაბრადაა დაშორებული $A$ წერტილიდან და $b$ წრფიდან.",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "შეადგინეთ იმ ჰიპერბოლის განტოლება, რომლის ფოკუსები ემთხვევა $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ ელიფსის ფოკუსებს და რომლის ექსცენტრისიტეტი 2-ის ტოლია.",
        options:[],
        correct: {},
        tags:[]
    },
    {
        question: "$Oxy$ მართკუთხა საკოორდინატო სიბრტყეში $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ ტოლობით განსაზღვრული ჰიპერბოლაზე აღებულია ისეთი $A$ წერტილი, რომელიც ამ ჰიპერბოლის ერთი ფოკუსიდან დაშორებულია 3-ჯერ მეტი მანძილით, ვიდრე მეორე ფოკუსიდან. იპოვეთ $A$ წერტილიდან ფოკუსებამდე მანძილები და $A$ წერტილის აბსცისის შესაძლო დადებითი მნიშვნელობა.",
        options:[],
        correct: {},
        tags:[]
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
  