/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 * import * as bootstrap from 'bootstrap';
 */

console.log("probando");

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("consulta");
  // @ts-ignore
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData.toString()),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};


document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

