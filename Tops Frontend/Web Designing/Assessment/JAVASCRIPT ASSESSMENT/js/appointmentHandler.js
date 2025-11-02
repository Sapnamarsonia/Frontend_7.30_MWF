class AppointmentHandler {
  constructor(formId, messageId) {
    this.form = document.getElementById(formId);
    this.messageBox = document.getElementById(messageId);
    this.addEventListeners();
  }

  addEventListeners() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validateForm();
    });
  }

  validateForm() {
    const name = this.form.querySelector('#name').value.trim();
    const email = this.form.querySelector('#email').value.trim();
    const phone = this.form.querySelector('#phone').value.trim();
    const date = this.form.querySelector('#date').value;
    const time = this.form.querySelector('#time').value;
    const comment = this.form.querySelector('#comment').value.trim();

    // Validation rules
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = new Date();
    const appointmentDate = new Date(`${date}T${time}`);

    if (name.length < 3) return this.showMessage('error', 'Name must be at least 3 characters.');
    if (!emailReg.test(email)) return this.showMessage('error', 'Enter a valid email.');
    if (phone.length !== 10) return this.showMessage('error', 'Phone number must be 10 digits.');
    if (appointmentDate <= today) return this.showMessage('error', 'Appointment must be in the future.');
    if (comment.length > 50) return this.showMessage('error', 'Comment must be less than 50 characters.');

    this.showMessage('success', 'Appointment booked successfully!');
  }

  // to clear the form
  clearForm() {
    this.form.reset();
  }
}

