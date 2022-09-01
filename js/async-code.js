/**
 * Request con promesas (then-catch)
 **********************************************
 */
fetch('https://random-words-api.vercel.app/word?ref=publicapis.dev')
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error('Here:', error));

/**
 * Request con async-await
 **********************************************
 */
(async () => {
  try {
    const response = await fetch('https://random-words-api.vercel.app/word?ref=publicapis.dev');
    const result = response.json();
    console.log(result);
  } catch (e) {
    console.error('Here async:', e)
  }
})()