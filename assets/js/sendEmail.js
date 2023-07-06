// Declares a new function called "sendMail" which takes one argument called "contactForm".
// The "contactForm" argument represents the form in your HTML where the user enters their details.
function sendMail(contactForm) {
  // The emailjs.send function is called with three arguments.
  // 'service_5mdbwon' - this is the ID of the email service to use (Gmail, in your case).
  // 'rosie' - this is the ID of the email template to use.
  // The third argument is an object that contains the data from the form that you want to include in your email.
  emailjs
    .send('service_5mdbwon', 'rosie', {
      // The 'from_name' property will be the user's name, taken from the form input field with name attribute "name".
      from_name: contactForm.name.value,
      // The 'from_email' property will be the user's email, taken from the form input field with name attribute "emailaddress".
      from_email: contactForm.emailaddress.value,
      // The 'project_request' property will be the user's project description, taken from the form textarea field with name attribute "projectsummary".
      project_request: contactForm.projectsummary.value,
    })
    // The 'then' function is called when the email has been attempted to be sent.
    // It takes two functions as arguments, the first is called if the email was sent successfully, the second is called if there was an error.
    .then(
      function (response) {
        // If the email was sent successfully, this function will be called.
        // The 'response' argument contains the details of the successful request.
        // Logs 'SUCCESS' and the response details to the console.
        console.log('SUCCESS', response);
      },
      function (error) {
        // If there was an error sending the email, this function will be called.
        // The 'error' argument contains the details of the error.
        // Logs 'FAILED' and the error details to the console.
        console.log('FAILED', error);
      },
    );
  // The 'return false' statement prevents the browser from executing the default action of the submit event.
  // This is to prevent the page from refreshing when the form is submitted.
  return false; // To block from loading a new page
}
