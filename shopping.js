unordered = document.querySelector("ul");
inputs = document.querySelector("input");
btn= document.querySelector("button");

const heading = document.querySelector("h1");
const form = document.querySelector("form");
const label = document.querySelector("label");


btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const store = inputs.value
    console.log(store)
    inputs.value= ""
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button= document.createElement("button");

    list.append(span , button);
    span.textContent = store;
    button.textContent = "delete";

    unordered.appendChild(list);

    button.addEventListener("click", (e)=>{
        e.target.parentNode.remove() // OR list.remove()
        });
    focus();
});


Object.assign(document.body.style, {
  fontFamily: "system-ui, sans-serif",
  background: "#f3f4f6",
  color: "#1f2937",
  margin: "0",
  padding: "40px 16px",
});
 
Object.assign(heading.style, {
  textAlign: "center",
  marginBottom: "24px",
});
 
Object.assign(form.style, {
  maxWidth: "480px",
  margin: "0 auto 20px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  alignItems: "center",
});
 
Object.assign(label.style, {
  width: "100%",
  fontWeight: "600",
});
 
Object.assign(inputs.style, {
  flex: "1",
  padding: "10px 12px",
  fontSize: "1rem",
  border: "2px solid #d1d5db",
  borderRadius: "8px",
});
 
Object.assign(btn.style, {
  padding: "10px 16px",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#fff",
  background: "#6366f1",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
});
 
Object.assign(unordered.style, {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "0",
  listStyle: "none",
});