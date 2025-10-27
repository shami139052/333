const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const suggestions = data.filter(item => item.title.includes(query));
  showSuggestions(suggestions);
});
