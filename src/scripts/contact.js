console.log("API_URL:", import.meta.env.PUBLIC_API_URL);
const BASE_BACKEND_URL = import.meta.env.PUBLIC_API_URL;
const form = document.getElementById('contactForm');
const messageBox = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent normal form submit
  const formData = new FormData(form);

  // Send form data to Django backend
  try {
    const res = await fetch(BASE_BACKEND_URL+"contacts/contact/", {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) throw new Error('Network response was not ok');
    // Show success message
    messageBox.style.display = 'block';
    messageBox.style.color = 'green';
    messageBox.textContent = "Thanks! Your message has been sent. We'll get back to you soon.";
    form.reset(); // clear the form
  } catch (err) {
    // Show error
    messageBox.style.display = 'block';
    messageBox.style.color = 'red';
    messageBox.textContent = "Oops! Something went wrong. Please try again.";
    console.error(err);
  }
});