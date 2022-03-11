const closeBtnListener = (popupContainer) => {
  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer || e.target === popupContainer.querySelector('.close-button img')) {
      popupContainer.remove();
    }
  });
};

export default closeBtnListener;