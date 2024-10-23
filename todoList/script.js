let todo = [];

let req = prompt("Enter your request");

while (true) {
  if (req == "quit") {
    console.log("quiting app");
    break;
  }
  if (req == "list") {
    if (todo != null) {
      console.log("--------");

      for (let i = 0; i < todo.length; i++) {
        console.log(i, todo[i]);
      }
      console.log("--------");
    } else {
      console.log("No task Remaining");
    }
  } else if (req == "add") {
    let task = prompt("Enter Task");
    todo.push(task);
    console.log("Task added");
  } else if (req == "del") {
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("Task deleted");
  } else {
    console.log("Wrong Request!!");
  }
  req = prompt("Enter your request");
}
