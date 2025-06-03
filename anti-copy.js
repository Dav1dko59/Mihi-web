// Zákaz pravého tlačítka
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Zákaz vývojářských kláves
document.addEventListener('keydown', function (e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
  }

  // Ctrl+Shift+I nebo Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
    e.preventDefault();
  }

  // Ctrl+U – zobrazit zdroj → jen varování (nejde stopnout ve všech prohlížečích)
  if (e.ctrlKey && e.key === 'u') {
    alert('Zobrazení zdrojového kódu je zakázáno.');
    e.preventDefault();
  }
});
