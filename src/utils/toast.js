export function showSnack(msg, type = 'info') {
  let container = document.getElementById('snackbar');
  if (!container) {
    container = document.createElement('div');
    container.id = 'snackbar';
    container.className = 'snackbar';
    document.body.appendChild(container);
  }
  const div = document.createElement('div');
  div.className = `snack ${type}`;
  const icon = type === 'success' ? 'bi-check-circle' : type === 'error' ? 'bi-x-circle' : 'bi-info-circle';
  div.innerHTML = `<i class="bi ${icon}"></i> ${msg}`;
  container.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}
