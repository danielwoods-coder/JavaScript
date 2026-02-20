let questions = [];

async function loadQuestions(){
  try{
    const res = await fetch('quiz-questions.json', {cache: 'no-store'});
    if(!res.ok) throw new Error('无法加载题库: ' + res.status);
    questions = await res.json();
  }catch(err){
    console.error(err);
    const questionEl = document.getElementById('question');
    questionEl.textContent = '加载题库失败，请稍后重试。';
    throw err;
  }
}

let current = 0;
let score = 0;
let timer = null;
const timePerQuestion = 30;
let timeLeft = timePerQuestion;

const el = id => document.getElementById(id);
const choicesEl = el('choices');
const questionEl = el('question');
const nextBtn = el('next');
const submitBtn = el('submit');
const restartBtn = el('restart');
const resultEl = el('result');
const currentEl = el('current');
const totalEl = el('total');
const timeEl = el('time');

function startQuiz(){
  current = 0; score = 0; totalEl.textContent = questions.length; currentEl.textContent = 1; resultEl.style.display='none'; restartBtn.style.display='none'; nextBtn.disabled = true; submitBtn.disabled = true; submitBtn.style.display = 'inline-block';
  renderQuestion();
}

function clearTimer(){
  if(timer) { clearInterval(timer); timer = null; }
}

function startTimer(){
  timeLeft = timePerQuestion; updateTimerDisplay();
  timer = setInterval(()=>{
    timeLeft--; updateTimerDisplay();
    if(timeLeft<=0){
      clearTimer();
      // time up: disable choices, show correct, enable next
      disableChoices();
      submitBtn.disabled = true;
      const q = questions[current];
      const correctBtn = Array.from(choicesEl.children).find(b=>Number(b.dataset.idx)===q.answer);
      if(correctBtn) correctBtn.classList.add('correct');
      nextBtn.disabled=false;
    }
  },1000);
}

function updateTimerDisplay(){ timeEl.textContent = timeLeft; }

function disableChoices(){
  Array.from(choicesEl.children).forEach(btn=>btn.disabled=true);
}

function renderQuestion(){
  const q = questions[current];
  questionEl.textContent = q.q;
  choicesEl.innerHTML = '';
  q.choices.forEach((c, idx)=>{
    const b = document.createElement('button');
    b.className = 'choice-btn';
    b.textContent = c;
    b.dataset.idx = idx;
    b.addEventListener('click', onSelect);
    choicesEl.appendChild(b);
  });
  // reset controls
  nextBtn.disabled = true;
  submitBtn.disabled = true;
  Array.from(choicesEl.children).forEach(btn=>btn.classList.remove('selected','correct','wrong'));
  currentEl.textContent = current+1;
  startTimer();
}
function onSelect(e){
  // allow changing selection until submit
  Array.from(choicesEl.children).forEach(btn=>btn.classList.remove('selected'));
  e.currentTarget.classList.add('selected');
  submitBtn.disabled = false;
}

function onSubmit(){
  clearTimer();
  const q = questions[current];
  const selectedBtn = Array.from(choicesEl.children).find(b=>b.classList.contains('selected'));
  Array.from(choicesEl.children).forEach(btn=>btn.disabled=true);
  if(selectedBtn){
    const idx = Number(selectedBtn.dataset.idx);
    if(idx === q.answer){
      selectedBtn.classList.add('correct');
      score++;
    } else {
      selectedBtn.classList.add('wrong');
      const correctBtn = Array.from(choicesEl.children).find(b=>Number(b.dataset.idx)===q.answer);
      if(correctBtn) correctBtn.classList.add('correct');
    }
  } else {
    const correctBtn = Array.from(choicesEl.children).find(b=>Number(b.dataset.idx)===q.answer);
    if(correctBtn) correctBtn.classList.add('correct');
  }
  submitBtn.disabled = true;
  // short delay so user perceives the result, then auto-advance
  setTimeout(()=>{
    current++;
    if(current < questions.length){ renderQuestion(); }
    else { finishQuiz(); }
  }, 500);
}

nextBtn.addEventListener('click', ()=>{
  current++;
  if(current < questions.length){ renderQuestion(); }
  else { finishQuiz(); }
});

restartBtn.addEventListener('click', ()=>{ startQuiz(); });

submitBtn.addEventListener('click', onSubmit);

function finishQuiz(){
  clearTimer();
  choicesEl.innerHTML='';
  questionEl.textContent = '测验完成';
  resultEl.style.display='block';
  resultEl.textContent = `得分：${score} / ${questions.length}`;
  restartBtn.style.display='inline-block';
  nextBtn.disabled = true;
}

// 初始化：先加载题库后启动测验
async function init(){
  try{
    await loadQuestions();
    startQuiz();
  }catch(e){
    // load error handled in loadQuestions
  }
}

init();
