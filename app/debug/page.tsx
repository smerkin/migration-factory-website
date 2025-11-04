'use client';

export default function DebugPage() {
  return (
    <div style={{ padding: '20px', background: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#44ff44' }}>✓ Debug Page работает!</h1>
      <p>Если вы видите этот текст, значит Next.js работает правильно.</p>
      
      <h2>Проверка компонентов:</h2>
      <div style={{ marginTop: '20px' }}>
        <p>1. Откройте консоль браузера (F12)</p>
        <p>2. Проверьте вкладку "Console" на наличие ошибок</p>
        <p>3. Проверьте вкладку "Network" на наличие 404 ошибок</p>
        <p>4. Проверьте вкладку "Elements" - есть ли контент в DOM?</p>
      </div>

      <h2>Тест импорта компонентов:</h2>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => {
            try {
              import('@/components/Header').then(() => {
                alert('Header импортирован успешно!');
              }).catch(err => {
                alert('Ошибка импорта Header: ' + err.message);
              });
            } catch (err: any) {
              alert('Ошибка: ' + err.message);
            }
          }}
          style={{ padding: '10px 20px', margin: '10px', background: '#FF8A00', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Проверить Header
        </button>

        <button 
          onClick={() => {
            try {
              import('@/components/sections/Hero').then(() => {
                alert('Hero импортирован успешно!');
              }).catch(err => {
                alert('Ошибка импорта Hero: ' + err.message);
              });
            } catch (err: any) {
              alert('Ошибка: ' + err.message);
            }
          }}
          style={{ padding: '10px 20px', margin: '10px', background: '#FF8A00', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Проверить Hero
        </button>
      </div>
    </div>
  );
}

