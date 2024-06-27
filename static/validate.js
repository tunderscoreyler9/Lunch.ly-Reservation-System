function validateForm() {
  let formInput = $('#searchInput').val().trim();
  if (formInput == "") {
    alert("Name must be filled out");
    return false;
  }
}