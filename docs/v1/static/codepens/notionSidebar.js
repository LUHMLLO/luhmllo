document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("notion__sidebar")
  const hideButton = document.getElementById("sidebar-hide")
  const showButton = document.getElementById("sidebar-show")

  if (hideButton && sidebar) {
    hideButton.addEventListener("click", () => {
      sidebar.classList.remove('expanded')
    })
  }

  if (showButton && sidebar) {
    showButton.addEventListener("click", () => {
      sidebar.classList.add('expanded')
    })
  }
})