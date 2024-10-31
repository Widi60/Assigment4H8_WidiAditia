  function showEditForm() {
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
  }

  function saveChanges() {
    document.getElementById('profile-name').textContent = document.getElementById('name').value;
    document.getElementById('profile-role').textContent = document.getElementById('role').value;
    document.getElementById('availability').textContent = document.getElementById('edit-availability').value;
    document.getElementById('age').textContent = document.getElementById('edit-age').value;
    document.getElementById('location').textContent = document.getElementById('edit-location').value;
    document.getElementById('experience').textContent = document.getElementById('edit-experience').value;
    document.getElementById('email').textContent = document.getElementById('edit-email').value;
  }
