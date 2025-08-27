document.getElementById('complaintForm').addEventListener('submit', function (e) {
  e.preventDefault();

   // Clear success message
  document.getElementById('successMessage').textContent = '';

  // Get values from inputs
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const detail = document.getElementById('detail').value.trim();
  const complaint = document.getElementById('complaint').value.trim();

  // Clear old error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('detailError').textContent = '';
  document.getElementById('complaintError').textContent = '';

  let hasError = false;

  // Basic validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Full Name is required.';
    hasError = true;
  }

  if (!/^\d{10}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
    hasError = true;
  }

 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  document.getElementById('emailError').textContent = 'Please enter a valid email.';
  hasError = true;
  }


  if (detail === '') {
    document.getElementById('detailError').textContent = 'Vehicle details are required.';
    hasError = true;
  }

  if (complaint === '') {
    document.getElementById('complaintError').textContent = 'Please describe your complaint.';
    hasError = true;
  }

  // If there's any error will not allow to move ahead
  if (hasError) return;

  // Save data to localStorage
  const newEntry = { name, phone, email, detail, complaint };
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
  submissions.push(newEntry);
  localStorage.setItem('submissions', JSON.stringify(submissions));

  // Show success message
  document.getElementById('successMessage').textContent = 'Submitted successfully!';
  document.getElementById('complaintForm').reset();

});
