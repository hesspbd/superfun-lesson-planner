
import React, { useState } from 'react';

const SuperFunLessonPlanner = () => {
  const [grade, setGrade] = useState('');
  const [topic, setTopic] = useState('');
  const [skill, setSkill] = useState('');
  const [duration, setDuration] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');

  const handleSubmit = () => {
    const prompt = `請幫我設計一份適合${grade}學生的英語課教案，主題是「${topic}」，教學重點是${skill}，課程時間為${duration}分鐘。`;
    // 這裡將來可與後端 GPT API 整合
    setLessonPlan("正在產生教案中...
" + prompt);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Super Fun 教案小幫手</h1>

      <label className="block mt-4">選擇年級：
        <select className="block w-full border mt-1 p-2" onChange={(e) => setGrade(e.target.value)}>
          <option>請選擇</option>
          <option>一年級</option>
          <option>二年級</option>
          <option>三年級</option>
          <option>四年級</option>
          <option>五年級</option>
          <option>六年級</option>
        </select>
      </label>

      <label className="block mt-4">選擇主題：
        <input className="block w-full border mt-1 p-2" placeholder="例如：天氣、動物" onChange={(e) => setTopic(e.target.value)} />
      </label>

      <label className="block mt-4">語言技能目標：
        <select className="block w-full border mt-1 p-2" onChange={(e) => setSkill(e.target.value)}>
          <option>請選擇</option>
          <option>單字認讀</option>
          <option>基本句型應用</option>
          <option>會話練習</option>
          <option>閱讀理解</option>
          <option>聽力訓練</option>
          <option>寫作練習</option>
        </select>
      </label>

      <label className="block mt-4">課程時間（分鐘）：
        <input type="number" className="block w-full border mt-1 p-2" onChange={(e) => setDuration(e.target.value)} />
      </label>

      <button onClick={handleSubmit} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">生成教案</button>

      {lessonPlan && (
        <div className="mt-6 whitespace-pre-line bg-gray-100 p-4 rounded">
          {lessonPlan}
        </div>
      )}
    </div>
  );
};

export default SuperFunLessonPlanner;
