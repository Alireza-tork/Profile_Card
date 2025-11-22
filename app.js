function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// هنگام بارگذاری، تم ذخیره‌شده را فعال کن
window.onload = function () {
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
};
function contactMe() {
    alert('برای تماس: az.989939@gmail.com')
}