const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };
  
  function containsForbiddenWords(value) {
    return forbiddenWords.some(word => value.toLowerCase().includes(word.toLowerCase()));
  }
  
  function updateUI(target) {
    const containsForbiddenWord = containsForbiddenWords(target.value);
    const sendButton = target.nextElementSibling;
    const parentDiv = target.parentElement;
  
    if (containsForbiddenWord) {
      sendButton.disabled = true;
      parentDiv.classList.add('forbidden-div');
    } else {
      sendButton.disabled = false;
      parentDiv.classList.remove('forbidden-div');
    }
  }
  
  document.body.addEventListener('keyup', debounce((event) => {
    if (event.target.id === 'prompt-textarea') updateUI(event.target);
  }, 300));
  
  document.addEventListener('keydown', (e) => {
    if (e.target.id === 'prompt-textarea' && e.key === 'Enter') {
      if (containsForbiddenWords(e.target.value)) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }, true);