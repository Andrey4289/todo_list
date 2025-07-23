let todo_input = document.getElementById("add_todo_input");
let todo_btn = document.getElementById("add_todo_btn");

todo_btn.addEventListener("click", () => {

    let input_value = todo_input.value;
    let new_li = document.createElement("li");
    let new_p = document.createElement("p");
    let new_button = document.createElement("button");

    new_li.classList.add("todo_list_item");
    new_p.classList.add("todo_list_item_p");
    new_button.classList.add("todo_list_item_button");

    new_button.textContent = "Complete";

    new_p.innerHTML = input_value;
    new_li.appendChild(new_p);
    new_li.appendChild(new_button);
    todo_ul.appendChild(new_li);

    let li_buttons = document.querySelectorAll(".todo_list_item button");

    li_buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button.closest("li"));

            button.closest("li").classList.add("complited");
        });
    })
})
