// api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();[cite: 1]
  
  const { prompt, type } = req.body;
  
  // Динамически меняем системные требования к ИИ
  let systemInstruction = "You are a top-tier expert IELTS tutor. Provide actionable, high-quality advice, vocabulary boosts, and structures.";
  
  if (type === 'essay_check') {
    systemInstruction = "You are an official IELTS Writing Examiner. Analyze the submitted essay. Provide a detailed Band Score breakdown under the 4 official criteria: Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy. Give explicit inline corrections for mistakes.";
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {[cite: 1]
    method: 'POST',[cite: 1]
    headers: { 'Content-Type': 'application/json' },[cite: 1]
    body: JSON.stringify({ 
      contents: [{ parts: [{ text: `${systemInstruction}\n\nUser Input:\n${prompt}` }] }] 
    })[cite: 1]
  });
  
  const data = await response.json();[cite: 1]
  res.status(200).json(data);[cite: 1]
}