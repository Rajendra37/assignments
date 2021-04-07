class bookManager {
    show() {
        let addbook = JSON.parse(localStorage.getItem("myBooks") || "[]");
        let uiString = " ";
        for (var i = 0; i < addbook.length; i++) {
            uiString += `<tr>
                    <td>${addbook[i].bookid}</td>
                    <td>${addbook[i].bookname}</td>
                    <td>${addbook[i].bookauthor}</td>
                    <td>${addbook[i].bookprice}</td>
                    <td>${addbook[i].bookrating}</td>
                    <td><button id=${addbook[i].bookid} class="remove">Delete</button></i></td>
                    </tr>`;
        }
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = uiString;
    }
    search() {
        let searchbooks = document.getElementById('search');
        searchbooks === null || searchbooks === void 0 ? void 0 : searchbooks.addEventListener('click', searchBook);
        function searchBook() {
            console.log('click...');
            let addbook = JSON.parse(localStorage.getItem("myBooks") || "[]");
            let click = JSON.parse(localStorage.getItem("myBooks") || "[]");
            let uiString = " ";
            let text = document.getElementById('searchText');
            for (var i = 0; i < addbook.length; i++) {
                if (text.value == click[i].bookid || text.value == click[i].bookname || text.value == click[i].bookauthor) {
                    uiString += `<tr>
                                <td>${click[i].bookid}</td>
                                <td>${click[i].bookname}</td>
                                <td>${click[i].bookauthor}</td>
                                <td>${addbook[i].bookprice}</td>
                                <td>${addbook[i].bookrating}</td>
                                <td><button >Delete</button></i></td>
                                </tr>`;
                }
            }
            let tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = uiString;
        }
    }
    delete() {
        let remove = document.getElementById('mytable');
        remove === null || remove === void 0 ? void 0 : remove.addEventListener('click', deleteBook);
        function deleteBook(e) {
            console.log("delete");
            let del;
            if (e.target.className == "remove") {
                del = JSON.parse(localStorage.getItem("myBooks") || "[]");
                let d = e.target.getAttribute("bookid");
                for (let i = 0; i < del.length; i++) {
                    if (del[i].bookid == d) {
                        del.splice(i, 1);
                        break;
                    }
                }
                localStorage.setItem("myBooks", JSON.stringify(del));
                BM.show();
            }
        }
    }
}
var BM = new bookManager();
BM.show();
BM.search();
BM.delete();
export {};
