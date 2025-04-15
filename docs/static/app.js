// Make sure to run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const buttonOpen = document.getElementById("chaptersOpen")
  const buttonClose = document.getElementById("chaptersClose")
  const modalDialog = document.getElementById("chaptersModal")

  // Check if elements exist
  if (buttonOpen && buttonClose && modalDialog instanceof HTMLDialogElement) {
    buttonOpen.addEventListener("click", () => {
      console.count()
      modalDialog.show()
    })

    buttonClose.addEventListener("click", () => {
      modalDialog.close()
    })
  } else {
    console.error("Missing one or more required elements:",
      { buttonOpen, buttonClose, modalDialog })
  }
})