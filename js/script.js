function checkAnswer(status) {
  if (status === 'correct') {
    const pages = ['index.html', 'second.html', 'third.html', 'fourth.html', 'birthday.html'];
    const current = window.location.pathname.split('/').pop();
    const next = pages[pages.indexOf(current) + 1];
    window.location.href = next;
  } else {
    window.location.href = 'no.html';
  }
}
