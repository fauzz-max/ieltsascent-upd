// ==========================================
// 1. DATA: CAMBRIDGE 21 (TEST 1)
// ==========================================
const testDatabase = {
  cam21_1: {
    listening: {
      title: "Cambridge 21 - Listening Test 1",
      audioRequired: true,
      questions: [
        {
          instruction: "Questions 1-10: Complete the table and notes. Write ONE WORD AND/OR A NUMBER.",
          items: [
            { id: "l1", text: "1. Taster day cost: £120 if booking one place (max _____ people)", type: "text", answer: ["10", "ten"] },
            { id: "l2", text: "2. Level 1 basic theory: understanding the _____", type: "text", answer: ["weather"] },
            { id: "l3", text: "3. basic sailing skills including _____", type: "text", answer: ["safety"] },
            { id: "l4", text: "4. a £200 course with a _____ available for club members", type: "text", answer: ["discount"] },
            { id: "l5", text: "5. all inclusive (plus a useful _____) ", type: "text", answer: ["dictionary"] },
            { id: "l6", text: "6. You get a _____ at the end of the course.", type: "text", answer: ["certificate"] },
            { id: "l7", text: "7. Bring suitable clothing, a _____ and toiletries.", type: "text", answer: ["towel"] },
            { id: "l8", text: "8. There is a _____ at the club.", type: "text", answer: ["cafe", "café"] },
            { id: "l9", text: "9. Online training _____ are recommended.", type: "text", answer: ["videos"] },
            { id: "l10", text: "10. _____ are available for course participants.", type: "text", answer: ["lockers"] }
          ]
        },
        {
          instruction: "Questions 11-20: Choose the correct letter A, B, or C / Match duties.",
          items: [
            { id: "l11", text: "11. What should trainees always expect to get when working on low budget short films?", type: "select", options: ["A. travel expenses", "B. a minimum wage", "C. meals"], answer: "A" },
            { id: "l12", text: "12. According to the speaker, on big budget films trainees may get experience of...", type: "select", options: ["A. makeup for special effects", "B. working with different ethnicities", "C. creating a variety of hair styles"], answer: "B" },
            { id: "l13", text: "13. The speaker says a problem for makeup artists is...", type: "select", options: ["A. dealing with difficult directors", "B. being shouted at by their supervisor", "C. waiting around for hours doing nothing"], answer: "A" },
            { id: "l14", text: "14. How did the speaker feel when she met famous actors for the first time?", type: "select", options: ["A. very shy", "B. very proud", "C. very disappointed"], answer: "A" },
            { id: "l15", text: "15. What advice does the speaker give about makeup kits?", type: "select", options: ["A. Always carry a basic kit with you", "B. Only buy the best products", "C. Ask other makeup artists to check your kit"], answer: "A" },
            { id: "l16", text: "16. What advice does the speaker give about creating a portfolio?", type: "select", options: ["A. Keep print and digital photos", "B. Only include a small selection of photos", "C. Get permission to use photos"], answer: "C" },
            { id: "l17", text: "17. Prepping an actor (Ability Required: A. well-organised, B. flexible, C. working quickly)", type: "select", options: ["A", "B", "C"], answer: "C" },
            { id: "l18", text: "18. Continuity", type: "select", options: ["A", "B", "C"], answer: "A" },
            { id: "l19", text: "19. General", type: "select", options: ["A", "B", "C"], answer: "B" },
            { id: "l20", text: "20. Applying makeup", type: "select", options: ["A", "B", "C"], answer: "C" }
          ]
        },
        {
          instruction: "Questions 21-30: Multiple Choice and Matching.",
          items: [
            { id: "l21", text: "21. Which TWO features of the lecture on ocean biodiversity had the greatest impact on the students? (Pick first)", type: "select", options: ["A", "B", "C", "D", "E"], answer: ["B", "D"] },
            { id: "l22", text: "22. (Pick second)", type: "select", options: ["A", "B", "C", "D", "E"], answer: ["B", "D"] },
            { id: "l23", text: "23. Which TWO details about the research project particularly impressed the students? (Pick first)", type: "select", options: ["A", "B", "C", "D", "E"], answer: ["C", "E"] },
            { id: "l24", text: "24. (Pick second)", type: "select", options: ["A", "B", "C", "D", "E"], answer: ["C", "E"] },
            { id: "l25", text: "25. Article on invasive lionfish (Match Opinion A-H)", type: "select", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "G" },
            { id: "l26", text: "26. Documentary on microplastics", type: "select", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "B" },
            { id: "l27", text: "27. Podcast on ocean pollution", type: "select", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "F" },
            { id: "l28", text: "28. Book on coastal ecosystems", type: "select", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "H" },
            { id: "l29", text: "29. Article on metal toxicity", type: "select", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "A" },
            { id: "l30", text: "30. Podcast on floating marine cities", type: "select", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "E" }
          ]
        },
        {
          instruction: "Questions 31-40: Complete the notes below. Write ONE WORD ONLY.",
          items: [
            { id: "l31", text: "31. Three resources essential for civilization: _____, fossil fuels, rubber.", type: "text", answer: ["metals", "metal"] },
            { id: "l32", text: "32. The supply is limited because the growth of the tree is _____.", type: "text", answer: ["slow"] },
            { id: "l33", text: "33. production cannot easily be adjusted because of increasing or decreasing _____.", type: "text", answer: ["demand"] },
            { id: "l34", text: "34. the tree only grows near the _____.", type: "text", answer: ["equator"] },
            { id: "l35", text: "35. it is very difficult to _____ rubber after production.", type: "text", answer: ["recycle"] },
            { id: "l36", text: "36. lack of genetic diversity, leading to danger of disease caused by a _____.", type: "text", answer: ["fungus"] },
            { id: "l37", text: "37. extreme _____ events.", type: "text", answer: ["weather"] },
            { id: "l38", text: "38. Synthetic rubber is less _____ than natural rubber.", type: "text", answer: ["strong"] },
            { id: "l39", text: "39. A wild flower (a type of dandelion) has rubber in its _____.", type: "text", answer: ["roots"] },
            { id: "l40", text: "40. It can be grown in many locations and does not require good _____.", type: "text", answer: ["soil"] }
          ]
        }
      ]
    },
    reading: {
      title: "Cambridge 21 - Reading Test 1",
      passages: [
        {
          id: "p1",
          title: "Passage 1: The Davies Sisters",
          text: `<h3>The Davies Sisters</h3>
                 <p>Between 1908 and 1924, Gwendoline and Margaret Davies amassed one of the largest collections of late-nineteenth and early-twentieth-century French paintings in Britain.</p>
                 <p>Gwendoline (1882–1951) and Margaret (1884–1963) Davies were the granddaughters of David Davies, a Welshman who amassed a fortune in the shipping and mining industries. In 1907, when Gwendoline came into her inheritance, the sisters were said to be the wealthiest unmarried women in Britain. Their religious upbringing in rural Wales gave them a deep sense of social responsibility and they chose to use their inheritance for cultural and philanthropic purposes.</p>
                 <p>While there was no real family history of art collecting, the sisters’ education was rigorously geared toward such pursuits. Their London school focused on cultural rather than academic study, and they travelled extensively with their governess, Jane Blaker, visiting art galleries and making extensive notes on the collections there.</p>
                 <p>The sisters' journals reveal their preference for Old Master paintings. Yet they initially made very few attempts to secure any such works. Instead, their early purchases were of the fashionable, safe variety. It was only a few years before their collecting took a new direction and they turned to the work of the French Impressionists. Whatever the precise reason for this change, their first purchases of Impressionist art, made in October 1912, were scenes of Venice.</p>
                 <p>The First World War (1914–1918) played a part in the development of the sisters’ collection. Later in the conflict, both sisters decided to volunteer at a canteen for troops at Troyes, in northern France.</p>
                 <p>Commentators have often described the sisters as unlikely pioneer collectors. Much is made of their isolation in rural Wales and the fact that they didn’t make friends with artists or gallery owners.</p>`
        },
        {
          id: "p2",
          title: "Passage 2: Why we need silence",
          text: `<h3>Why we need silence</h3>
                 <p><strong>A.</strong> Humans are finely attuned to noise, and for good reason. From an evolutionary perspective, sounds give us vital information, helping us navigate the world and avoid danger. Our blood pressure goes up, muscles tense and glands release hormones that prepare us for fight or flight.</p>
                 <p><strong>B.</strong> The World Health Organization has recently designated excessive noise as an 'underestimated threat' to public health. There are no "earlids" that can protect your brain from noise.</p>
                 <p><strong>C.</strong> The good news is that several cities have been working to turn the volume down. One of the first to do so was London. By providing recommendations for quieter buses, reducing noise from roads and also controlling noise from aircraft, they were able to make the city quieter.</p>
                 <p><strong>D.</strong> Researchers are also seeking to understand what aspects of silent experiences are most beneficial to our health. One of the best-researched is the flotation tank: a lightproof, soundproof tank of salt water in which a person floats as a form of deep relaxation.</p>
                 <p><strong>E.</strong> To further explore flotation tanks as a therapeutic tool, Feinstein and his colleagues recruited 50 people with a variety of conditions related to stress and had them answer a questionnaire. Participants reported decreases in muscle tension and pain alongside an increase in feelings of relaxation and overall wellbeing. Float sessions uniquely decreased activity in the default mode network (DMN), a collection of brain regions commonly linked with depression.</p>`
        },
        {
          id: "p3",
          title: "Passage 3: The World of Sugar",
          text: `<h3>Book review: The World of Sugar by Ulbe Bosma</h3>
                 <p>Ulbe Bosma’s The World of Sugar is a genuinely global history. Bosma discusses all the sugar-growing places of the world, beginning with Cuba and Java. But this is a history not just of cane sugar but also of beet sugar.</p>
                 <p>The book provides a global labour history, investigating the wide range of labour regimes associated with growing sugar. Contrary to popular belief, cane sugar production was never just restricted to large, dedicated plantations owned by rich men. For example, in Java, sugar cane was grown together with rice in an extraordinarily labour-intensive way by small farmers.</p>
                 <p>This is also a history of capitalists and sugar dynasties, as well as corporations that in some cases have remained influential over very long periods. Great firms and great interests have had profound influence on the policies of states.</p>
                 <p>Where once only tiny quantities of sugar could be produced, now new techniques, varieties, fertilisers, irrigation systems and much more have turned gleaming white sugar into a ubiquitous chemical. And the recent past has seen worrying new developments in mass sweetening. High-fructose corn syrup made from maize using an enzymatic process invented in Japan in the 1960s has a similar number of calories to table sugar but is far cheaper to produce.</p>
                 <p>This is a wonderfully rich book, a model of global history, the history of production and the history of capitalism. Bosma avoids outbursts of emotion, celebratory or critical.</p>`
        }
      ],
      questions: [
        {
          instruction: "Questions 1-7: Complete the notes below (ONE WORD ONLY).",
          items: [
            { id: "r1", text: "1. Their grandfather's wealth came from _____ and transportation businesses.", type: "text", answer: ["mining"] },
            { id: "r2", text: "2. Their _____ was designed to give them an interest in activities such as collecting art.", type: "text", answer: ["education"] },
            { id: "r3", text: "3. They took lengthy _____ about the things they saw in art galleries.", type: "text", answer: ["notes"] },
            { id: "r4", text: "4. Their _____ showed they liked Old Master paintings.", type: "text", answer: ["journals"] },
            { id: "r5", text: "5. The first Impressionist paintings they bought showed places in _____.", type: "text", answer: ["Venice"] },
            { id: "r6", text: "6. They worked in a _____ for soldiers in France.", type: "text", answer: ["canteen"] },
            { id: "r7", text: "7. They lived in isolation in the countryside and did not have any _____ who were artists.", type: "text", answer: ["friends"] }
          ]
        },
        {
          instruction: "Questions 8-13: TRUE / FALSE / NOT GIVEN.",
          items: [
            { id: "r8", text: "8. The Davies sisters' childhood influenced the way they decided to use their wealth.", type: "select", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "r9", text: "9. The Jean-Baptiste-Camille Corot paintings were purchased from a gallery in France.", type: "select", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "r10", text: "10. Hugh Blaker opposed the Davies sisters' decision to buy art by French Impressionists.", type: "select", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "r11", text: "11. The exhibition of Cezanne paintings at the Bath gallery was very popular with the public.", type: "select", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "r12", text: "12. The impact of the First World War encouraged Gwendoline to reconsider her interest in collecting art.", type: "select", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "r13", text: "13. The Davies sisters bought French Impressionist art during a period when very few people were doing so.", type: "select", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" }
          ]
        },
        {
          instruction: "Questions 14-17: Which section (A-G) contains the following information?",
          items: [
            { id: "r14", text: "14. examples of strategies to decrease the noise that the public are exposed to", type: "text", answer: ["C"] },
            { id: "r15", text: "15. data indicating the extent of the problem of excessive noise", type: "text", answer: ["B"] },
            { id: "r16", text: "16. a description of physiological changes in our bodies when we hear sudden noises", type: "text", answer: ["A"] },
            { id: "r17", text: "17. evidence that a relatively quiet environment can be more beneficial than a totally silent one", type: "text", answer: ["G"] }
          ]
        },
        {
          instruction: "Questions 18-21: Complete the summary (ONE WORD ONLY).",
          items: [
            { id: "r18", text: "18. Flotation tanks allow people to concentrate on their own _____, which helps them relax.", type: "text", answer: ["breath"] },
            { id: "r19", text: "19. 50 people were given a _____ to complete before and after using a flotation tank.", type: "text", answer: ["questionnaire"] },
            { id: "r20", text: "20. Participants reported a reduction in symptoms together with signs of relaxation and improved general _____.", type: "text", answer: ["wellbeing"] },
            { id: "r21", text: "21. Brain scans then revealed that those people had decreased activity in parts of the brain associated with _____.", type: "text", answer: ["depression"] }
          ]
        },
        {
          instruction: "Questions 22-26: Match each statement with the correct person (A, B, C or D).",
          items: [
            { id: "r22", text: "22. It is unpleasant and upsetting for people to be placed in a silent environment against their will.", type: "select", options: ["A", "B", "C", "D"], answer: "C" },
            { id: "r23", text: "23. The trend towards creating quieter urban locations is likely to increase in the coming years.", type: "select", options: ["A", "B", "C", "D"], answer: "A" },
            { id: "r24", text: "24. When our body's senses are completely deprived of input, our minds compensate for this by creating the illusion of images and sounds.", type: "select", options: ["A", "B", "C", "D"], answer: "B" },
            { id: "r25", text: "25. Even a short amount of silent time can have a positive impact.", type: "select", options: ["A", "B", "C", "D"], answer: "D" },
            { id: "r26", text: "26. External and internal quietness makes us more conscious of events occurring in our surroundings.", type: "select", options: ["A", "B", "C", "D"], answer: "C" }
          ]
        },
        {
          instruction: "Questions 27-30: Choose the correct letter A, B, C or D.",
          items: [
            { id: "r27", text: "27. What does the reviewer suggest about the cultivation and trading of sugar in the first paragraph?", type: "select", options: ["A. Sugar has played a major role in international relations.", "B. Beet sugar has been made more internationally competitive.", "C. Cane sugar is thought to be of superior quality to beet sugar.", "D. New locations for cultivating sugar have increased production."], answer: "B" },
            { id: "r28", text: "28. In the second paragraph, when discussing the sugar market in Britain, the reviewer stresses:", type: "select", options: ["A. how the sources used changed over time.", "B. how developments in agriculture affected trade.", "C. the increased demand for sugar over the years.", "D. the growing support for ethical methods of cultivation."], answer: "A" },
            { id: "r29", text: "29. What is the reviewer doing in the third paragraph?", type: "select", options: ["A. describing an efficient approach to sugar cultivation", "B. explaining why the use of sugar plantations declined", "C. addressing a misconception about the growing of sugar cane", "D. evaluating different approaches to the cultivation of sugar cane"], answer: "C" },
            { id: "r30", text: "30. In the final paragraph, what does the reviewer suggest is the overall message of Bosma's book?", type: "select", options: ["A. Sugar is a harmful and unnecessary product.", "B. Economic pressure is needed to control sugar production.", "C. Conditions for workers in sugar production should be improved.", "D. Intensive marketing of sugar has had disastrous consequences."], answer: "A" }
          ]
        },
        {
          instruction: "Questions 31-36: Complete the summary using the list of words A-I. (Input the letter).",
          items: [
            { id: "r31", text: "31. In the big industries in both Germany and the US, sugar farming depended on _____", type: "text", answer: ["H"] },
            { id: "r32", text: "32. However, in other parts of the world such as South Asia and Latin America, _____ continued.", type: "text", answer: ["E"] },
            { id: "r33", text: "33. Sugar production has also involved _____ who were eager to protect their markets.", type: "text", answer: ["I"] },
            { id: "r34", text: "34. In countries such as Cuba the sugar industry therefore had a major influence on _____.", type: "text", answer: ["A"] },
            { id: "r35", text: "35. To support the interests of sugar producers, _____ were established.", type: "text", answer: ["G"] },
            { id: "r36", text: "36. As a result of this, _____ were penalised.", type: "text", answer: ["C"] }
          ]
        },
        {
          instruction: "Questions 37-40: YES / NO / NOT GIVEN.",
          items: [
            { id: "r37", text: "37. Sugar has now become available in large quantities due to a range of agricultural developments.", type: "select", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" },
            { id: "r38", text: "38. Advertisers initially marketed sugar as a luxury product.", type: "select", options: ["YES", "NO", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "r39", text: "39. The invention of high-fructose corn syrup was a positive development.", type: "select", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
            { id: "r40", text: "40. High-fructose corn syrup is an ingredient in many processed foods.", type: "select", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" }
          ]
        }
      ]
    }
  }
};

let currentTestObj = null;

// ==========================================
// 2. MOBILE/DESKTOP COHESIVE CORE NAVIGATION
// ==========================================
function switchModule(moduleName, index) {
  const desktopBtns = document.querySelectorAll('.desktop-nav-btn');
  desktopBtns.forEach(btn => btn.classList.remove('active'));
  
  if (desktopBtns[index]) {
    desktopBtns[index].classList.add('active');
    document.getElementById('mainSlider').style.transform = `translateX(${index * 100}%)`;
  }

  const mobileBtns = document.querySelectorAll('.mobile-nav-btn');
  mobileBtns.forEach(btn => btn.classList.remove('active'));
  
  const activeMobileBtn = document.querySelector(`.mobile-nav-btn[data-mod="${moduleName}"]`);
  if (activeMobileBtn) {
    activeMobileBtn.classList.add('active');
    document.getElementById('currentSelection').innerHTML = activeMobileBtn.innerHTML;
  }

  const sections = document.querySelectorAll('.module-section');
  sections.forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = ''; 
  });
  document.getElementById('test-runner').style.display = 'none';
  
  const targetSection = document.getElementById(`mod-${moduleName}`);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  document.getElementById('expandMenu').classList.remove('open');
}

function toggleMenu() {
  const menu = document.getElementById('expandMenu');
  menu.classList.toggle('open');
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('expandMenu');
  if (menu && !menu.contains(event.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
  }
});

// ==========================================
// 3. SUB-TAB INNER NAVIGATION LOGIC
// ==========================================
function switchTab(tabId, btnElement, groupClass) {
  const btns = btnElement.parentElement.querySelectorAll('.sub-nav-btn');
  const subs = document.querySelectorAll(`.${groupClass}-sub`);

  btns.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  subs.forEach(sub => sub.style.display = 'none');
  const activeSub = document.getElementById(tabId);
  if (activeSub) {
    activeSub.style.display = 'block';
    activeSub.style.animation = 'none';
    activeSub.offsetHeight;
    activeSub.style.animation = 'fadeIn 0.3s ease-in-out';
  }
}

// ==========================================
// 4. SIDEBAR, AUTH, AND HISTORY
// ==========================================
function toggleSidebar() {
  const side = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  side.classList.toggle('open');
  overlay.style.display = side.classList.contains('open') ? 'block' : 'none';
}

function handleGoogleLogin() {
  const authBtn = document.getElementById('googleAuthBtn');
  const userInfo = document.getElementById('userInfo');
  
  authBtn.style.display = 'none';
  userInfo.style.display = 'block';
  
  document.getElementById('userName').innerText = "Islam Senbay";
  document.getElementById('userEmail').innerText = "islam.senbay@gmail.com";
  localStorage.setItem('ascent_auth', 'true');
}

function openHistoryModal() {
  document.getElementById('historyModal').style.display = 'flex';
  renderHistoryList();
}
function closeHistoryModal() {
  document.getElementById('historyModal').style.display = 'none';
}

function renderHistoryList() {
  const container = document.getElementById('historyListContainer');
  const data = JSON.parse(localStorage.getItem('ielts_mock_scores')) || [];
  container.innerHTML = '';

  if(data.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted); font-size:14px; text-align:center;">No tests taken yet.</p>';
    return;
  }

  [...data].reverse().forEach(item => {
    container.innerHTML += `
      <div class="history-item">
        <div class="history-item-left">
          <h4>${item.label}</h4>
          <p>${item.date || 'Completed recently'}</p>
        </div>
        <div class="history-score">${parseFloat(item.score).toFixed(1)}</div>
      </div>
    `;
  });
}

// ==========================================
// 5. TEST RUNNER LOGIC
// ==========================================
function startTest(moduleType, testId) {
  const testData = testDatabase[testId][moduleType];
  if(!testData) return;
  currentTestObj = { module: moduleType, data: testData, id: testId };

  document.querySelectorAll('.module-section').forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  
  const runner = document.getElementById('test-runner');
  runner.style.display = 'block';
  document.getElementById('tr-title').innerText = testData.title;
  document.getElementById('tr-module-badge').innerText = moduleType.toUpperCase();

  const audioCont = document.getElementById('tr-audio-container');
  const layout = document.getElementById('tr-layout');
  const passCol = document.getElementById('tr-passage-col');
  const passTabs = document.getElementById('tr-passage-tabs');
  const passContent = document.getElementById('tr-passage-content');
  const qContainer = document.getElementById('tr-questions-container');

  audioCont.style.display = testData.audioRequired ? 'block' : 'none';
  qContainer.innerHTML = '';
  passTabs.innerHTML = '';
  passContent.innerHTML = '';

  if(moduleType === 'reading') {
    layout.className = 'tr-layout-split';
    passCol.style.display = 'flex';
    
    testData.passages.forEach((p, idx) => {
      passTabs.innerHTML += `<button class="ptab-btn ${idx===0?'active':''}" onclick="switchPassage(${idx}, this)">Passage ${idx+1}</button>`;
      passContent.innerHTML += `<div id="pass-content-${idx}" style="display:${idx===0?'block':'none'}">${p.text}</div>`;
    });
  } else {
    layout.className = 'tr-layout-single';
    passCol.style.display = 'none';
  }

  testData.questions.forEach((block, bIdx) => {
    let html = `<div class="q-block"><div class="q-instruction">${block.instruction}</div>`;
    
    block.items.forEach(q => {
      html += `<div class="q-item" id="qitem-${q.id}">
                 <label>${q.text}</label>`;
      if(q.type === 'text') {
        html += `<input type="text" id="ans-${q.id}" placeholder="Your answer...">`;
      } else if (q.type === 'select') {
        html += `<select id="ans-${q.id}"><option value="">Select answer</option>`;
        q.options.forEach(opt => html += `<option value="${opt.charAt(0)}">${opt}</option>`);
        html += `</select>`;
      }
      html += `<div id="res-${q.id}" class="grade-answer-label" style="display:none;"></div></div>`;
    });
    html += `</div>`;
    qContainer.innerHTML += html;
  });
}

function exitTest() {
  document.getElementById('test-runner').style.display = 'none';
  const mod = currentTestObj ? currentTestObj.module : 'listening';
  
  const targetSection = document.getElementById(`mod-${mod}`);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

function submitTest() {
  if(!currentTestObj) return;
  let correctCount = 0;
  let totalCount = 0;

  currentTestObj.data.questions.forEach(block => {
    block.items.forEach(q => {
      totalCount++;
      const userVal = document.getElementById(`ans-${q.id}`).value.trim().toLowerCase();
      const resLabel = document.getElementById(`res-${q.id}`);
      const qContainer = document.getElementById(`qitem-${q.id}`);
      
      let isCorrect = false;
      let displayAns = "";

      if(Array.isArray(q.answer)) {
        displayAns = q.answer.join(" OR ");
        if(q.answer.map(a=>a.toLowerCase()).includes(userVal)) isCorrect = true;
      } else {
        displayAns = q.answer;
        if(userVal === q.answer.toLowerCase()) isCorrect = true;
      }

      resLabel.style.display = 'block';
      if(isCorrect) {
        correctCount++;
        qContainer.classList.add('grade-correct');
        resLabel.classList.add('txt-correct');
        resLabel.innerText = "Correct";
      } else {
        qContainer.classList.add('grade-wrong');
        resLabel.classList.add('txt-wrong');
        resLabel.innerText = `Incorrect. Answer: ${displayAns}`;
      }
    });
  });

  let band = 0;
  if(correctCount >= 39) band = 9.0;
  else if(correctCount >= 37) band = 8.5;
  else if(correctCount >= 35) band = 8.0;
  else if(correctCount >= 32) band = 7.5;
  else if(correctCount >= 30) band = 7.0;
  else if(correctCount >= 26) band = 6.5;
  else if(correctCount >= 23) band = 6.0;
  else if(correctCount >= 18) band = 5.5;
  else if(correctCount >= 15) band = 5.0;
  else if(correctCount >= 10) band = 4.0;
  else band = 3.0;

  alert(`Test Submitted! You scored ${correctCount}/${totalCount}. Estimated Band: ${band.toFixed(1)}`);
  
  const dateStr = new Date().toLocaleDateString();
  saveScoreToHistory(`${currentTestObj.data.title}`, band, dateStr);
  renderDynamicCharts(); 
  
  document.getElementById('tr-questions-col').scrollTop = 0;
}

// ==========================================
// 6. REAL-TIME INTERACTIVE AI MOCK CHAT & ESSAY
// ==========================================
async function sendChatMessage() {
  const inputEl = document.getElementById('chatInputField');[cite: 3]
  const logEl = document.getElementById('chatLog');[cite: 3]
  const userText = inputEl.value.trim();[cite: 3]

  if (!userText) return;[cite: 3]

  // Отображаем сообщение пользователя
  const userBubble = document.createElement('div');[cite: 3]
  userBubble.className = 'chat-msg user';[cite: 3]
  userBubble.innerText = userText;[cite: 3]
  logEl.appendChild(userBubble);[cite: 3]
  
  inputEl.value = '';[cite: 3]
  logEl.scrollTop = logEl.scrollHeight;[cite: 3]

  try {
    // Делаем реальный запрос к нашей функции на Vercel
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: userText, type: 'chat' })
    });
    
    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;

    const aiBubble = document.createElement('div');[cite: 3]
    aiBubble.className = 'chat-msg ai';[cite: 3]
    aiBubble.innerHTML = `<strong>Ascent AI:</strong> ${aiResponse}`;[cite: 3]
    logEl.appendChild(aiBubble);[cite: 3]
  } catch (err) {
    console.error(err);
  }
  logEl.scrollTop = logEl.scrollHeight;[cite: 3]
}

async function sendEssayForAiCheck() {
  const essayText = document.getElementById('essayInputField').value.trim();
  const resultDiv = document.getElementById('essayResult');
  const btn = document.getElementById('checkEssayBtn');

  if (!essayText) {
    alert("Please write or paste an essay first!");
    return;
  }

  btn.innerText = "Analyzing Essay...";
  btn.disabled = true;
  resultDiv.style.display = 'block';
  resultDiv.innerText = "Ascent AI is evaluating your response against official descriptors...";

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: essayText, type: 'essay_check' })
    });
    
    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;
    resultDiv.innerText = aiResponse;
  } catch (err) {
    resultDiv.innerText = "Error analyzing essay. Check your API configuration.";
    console.error(err);
  } finally {
    btn.innerText = "Check Essay with AI";
    btn.disabled = false;
  }
}

// ==========================================
// 7. LOCALSTORAGE POWERED REAL PROGRESS TRACKING
// ==========================================
const DEFAULT_MOCKS = [
  { label: 'Mock 1', score: 6.5, date: '2026-05-12' },
  { label: 'Mock 2', score: 7.0, date: '2026-05-20' },
  { label: 'Mock 3', score: 7.0, date: '2026-06-01' }
];

function initProgressTracker() {
  if (!localStorage.getItem('ielts_mock_scores')) {
    localStorage.setItem('ielts_mock_scores', JSON.stringify(DEFAULT_MOCKS));
  }
  if(localStorage.getItem('ascent_auth') === 'true') {
     document.getElementById('googleAuthBtn').style.display = 'none';
     document.getElementById('userInfo').style.display = 'block';
     document.getElementById('userName').innerText = "Islam Senbay";
     document.getElementById('userEmail').innerText = "islam.senbay@gmail.com";
  }
  renderDynamicCharts();
}

function renderDynamicCharts() {
  const chartArea = document.getElementById('dynamicChartArea');
  if (!chartArea) return;

  const data = JSON.parse(localStorage.getItem('ielts_mock_scores')) || [];
  chartArea.innerHTML = '';

  if (data.length === 0) {
    chartArea.innerHTML = `<p style="color:var(--text-muted); font-size:14px; margin:auto;">No logged scores.</p>`;
    document.getElementById('overallBandDisplay').innerText = "Overall Band: 0.0";
    return;
  }

  let totalScore = 0;
  let highestScore = 0;
  
  data.forEach(item => {
    const num = parseFloat(item.score);
    totalScore += num;
    if (num > highestScore) highestScore = num;
  });

  let rawAvg = totalScore / data.length;
  let roundedAvg = Math.round(rawAvg * 2) / 2;
  document.getElementById('overallBandDisplay').innerText = `Overall Band: ${roundedAvg.toFixed(1)}`;

  const displayData = data.slice(-6);

  displayData.forEach(item => {
    const barGroup = document.createElement('div');
    barGroup.className = 'bar-group';
    const percentHeight = (parseFloat(item.score) / 9.0) * 100;
    const isTop = parseFloat(item.score) === highestScore;

    barGroup.innerHTML = `
      <div class="bar ${isTop ? 'top-score' : ''}" style="height: ${percentHeight}%;">
        ${parseFloat(item.score).toFixed(1)}
      </div>
      <div class="bar-label">${item.label.substring(0, 10)}</div>
    `;
    chartArea.appendChild(barGroup);
  });
}

function saveScoreToHistory(label, score, date) {
  const currentData = JSON.parse(localStorage.getItem('ielts_mock_scores')) || [];
  currentData.push({ label: label, score: score, date: date });
  localStorage.setItem('ielts_mock_scores', JSON.stringify(currentData));
}

function addNewMockResult() {
  const labelInput = document.getElementById('newMockLabel');
  const scoreInput = document.getElementById('newMockScore');
  const label = labelInput.value.trim();
  const score = parseFloat(scoreInput.value.trim());

  if (!label || isNaN(score) || score < 0 || score > 9.0) {
    alert("Please enter a valid mock name and an IELTS score between 0 and 9.0");
    return;
  }

  saveScoreToHistory(label, score, new Date().toLocaleDateString());
  labelInput.value = '';
  scoreInput.value = '';
  renderDynamicCharts();
}

function resetMockScores() {
  if (confirm("Are you sure you want to clear all progress history?")) {
    localStorage.setItem('ielts_mock_scores', JSON.stringify([]));
    renderDynamicCharts();
    renderHistoryList();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initProgressTracker();
});