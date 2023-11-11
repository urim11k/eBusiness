
// 在頁面加載完成後執行的函數
window.onload = function() {
    // 確保登錄表單是隱藏的
    closeLoginForm();
  };
  
  // 打開登錄表單懸浮層
  function openLoginForm() {
      document.getElementById('loginForm').style.display = 'block';
  }
  
  // 關閉登錄表單懸浮層
  function closeLoginForm() {
      document.getElementById('loginForm').style.display = 'none';
  }
  