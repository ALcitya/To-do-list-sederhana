const listTodo = document.getElementById("list_todo")

// ? - fitur yang harus ada
// ? - 1. menambahkan todo baru
// ? - 2. mencoret todo yang sudah selesai
// ? - 3. Menghapus todo

function tambahkan(){
    // todo - Ambil nilai dari input
    let newTodo = document.getElementById("new_todo");
    
    // todo - dan tambahkan list baru ke #list_todo
    let newList = "<li> <span onclick='toggle(this)' >" + newTodo.value +"</span>"
                    +"<button onclick='removeItem(this)'> [X] </button>"+
                "</li>"
    listTodo.insertAdjacentHTML('afterbegin', newList)

    // ! - lalu kosongkan input setelah user selesai menginput
    newTodo.value=""
    console.log(newList)
}
function toggle(element){
    element.classList.toggle("done")
}

function removeItem(elementDelete){
    elementDelete.parentElement.remove()
}