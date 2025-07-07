document.getElementById("cadastroForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const values = Object.fromEntries(data.entries());

  const sheetURL = 'https://script.google.com/macros/s/AKfycby9DJT4jzLb41YktkAKPkqZGk9B6yAC0_HR3r6J_1Qilhzc8o3SQsH4upVjPYf33572TA/exec';

  try {
    await fetch(sheetURL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(values),
    });
    document.getElementById("popup").style.display = 'block';
    setTimeout(() => document.getElementById("popup").style.display = 'none', 3000);
    form.reset();
  } catch (error) {
    alert("Erro ao cadastrar produto.");
  }
});
