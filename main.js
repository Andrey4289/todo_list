let todo_input = document.getElementById("add_todo_input");
let todo_btn = document.getElementById("add_todo_btn");
let todo_ul = document.getElementById("todo_ul");

todo_btn.addEventListener("click", () => {

    let input_value = todo_input.value;
    let new_li = document.createElement("li");
    let new_p = document.createElement("p");
    let new_button = document.createElement("button");
    new_p.innerHTML = input_value;
    new_li.appendChild(new_p);
    new_li.appendChild(new_button)
    todo_ul.appendChild(new_li);
})
