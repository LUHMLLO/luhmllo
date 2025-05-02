export function bindSidebarToggles() {
  document.querySelectorAll('[data-toggle-sidebar]').forEach(btn => {
    btn.addEventListener('click', () => {
      globalThis.dispatchEvent(new CustomEvent('sidebar:toggle'))
    })
  })
}

export function listenToSidebarToggle() {
  const sidebar = document.querySelector('#app__sidebar')
  if (!sidebar) return
  globalThis.addEventListener('sidebar:toggle', () => {
    sidebar.classList.toggle('float')
  })
}
