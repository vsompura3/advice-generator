const adviceID = document.querySelector('.advice-id');
const adviceHolder = document.querySelector('blockquote');
const btn = document.querySelector('button');

async function fetchAdvice() {
  const res = await fetch(`https://api.adviceslip.com/advice`);
  const data = await res.json();
  return data.slip;
}

async function displayAdvice() {
  adviceHolder.textContent = 'Loading...';
  adviceID.textContent = '###';
  const { id, advice } = await fetchAdvice();
  console.log(id, advice);
  adviceHolder.textContent = advice;
  adviceID.textContent = `#${id}`;
}

btn.addEventListener('click', displayAdvice);
