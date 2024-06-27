function validateForm() {
  let formInput = document.getElementById("searchInput").value.trim();
  if (formInput == "") {
    alert("Name must be filled out");
    return false;
  }
}
