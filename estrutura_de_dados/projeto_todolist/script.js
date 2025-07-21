let user_value_task;
let user_tasks = []

function onClick(){
   user_value_task = document.getElementById('input-task').value
   push_task_to_usertasks(user_value_task)
   console.log(user_tasks)
}

function push_task_to_usertasks(task){
    user_tasks.push(task)
}
// async cria uma promise que quando recebe um valor ele resolve essa promise.resolve(valor_recebido) retornando o valor, que pode ser capturado usando .then

 function pop_task_to_usertasks(index){
  if(user_tasks.length <= 0) return;
  user_tasks.splice(index)
}