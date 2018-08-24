const TODOS_KEY = 'todos_key';
export default {
  saveTodo(todo){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todo))
  },
  getTodo(){
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
