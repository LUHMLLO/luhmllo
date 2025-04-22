document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("menu-button")
  const dialog = document.getElementById("drawer")

  if (button && dialog instanceof HTMLDialogElement) {
    button.addEventListener("click", () => {
      dialog.open ? dialog.close() : dialog.show()
    })
  }
})