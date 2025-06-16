// script.js

document.getElementById("strokeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    gender: gender.value,
    age: parseFloat(age.value),
    hypertension: parseInt(hypertension.value),
    heart_disease: parseInt(heart_disease.value),
    ever_married: ever_married.value,
    work_type: work_type.value,
    Residence_type: Residence_type.value,
    bmi: parseFloat(bmi.value),
    avg_glucose_level: parseFloat(avg_glucose_level.value),
    cholesterol_level: parseFloat(cholesterol_level.value),
    smoking_status: smoking_status.value,
  };

  // Basic rule-based prediction logic (to simulate ML model)
  let riskScore = 0;
  if (data.age > 60) riskScore++;
  if (data.hypertension === 1) riskScore++;
  if (data.heart_disease === 1) riskScore++;
  if (data.avg_glucose_level > 140) riskScore++;
  if (data.bmi > 30) riskScore++;
  if (data.cholesterol_level > 200) riskScore++;

  const isStroke = riskScore >= 3;
  const resultBox = document.getElementById("resultBox");

  resultBox.textContent = isStroke ? "⚠️ Stroke Risk Detected!" : "✅ No Stroke Risk";
  resultBox.className = isStroke ? "positive" : "negative";

  // Store to localStorage
  const records = JSON.parse(localStorage.getItem("patients") || "[]");
  records.push({ ...data, result: isStroke ? "Positive" : "Negative", timestamp: new Date().toLocaleString() });
  localStorage.setItem("patients", JSON.stringify(records));
});
