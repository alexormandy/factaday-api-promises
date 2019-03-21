const submitButton = document.getElementById("submitButton");
const monthInput = document.getElementById("monthInput");
const dayInput = document.getElementById("dayInput");
const messageOne = document.getElementById("one");
const messageTwo = document.getElementById("two");
const messageThree = document.getElementById("three");

submitButton.addEventListener("click", e => {
  e.preventDefault();

  let month = monthInput.value;
  let day = dayInput.value;

  messageOne.textContent = "Loading...";
  // messageTwo.textContent = "";
  // messageThree.textContent = "";

  fetch(`/fact?month=${month}&day=${day}`).then(response => {
    response.json().then(data => {
      console.log(data);
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = `On ${data.date} in the year ${data.year}, ${
          data.text
        }`;
        // messageTwo.textContent = data.year;
        // messageThree.textContent = data.text;
      }
    });
  });
});
