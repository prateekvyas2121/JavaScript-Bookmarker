//listen to the form submit 
document.getElementById('myForm').addEventListener('submit',save_bookmarks)
var n = 0;
function save_bookmarks(e) {
	var siteName = document.getElementById("siteName").value
	var siteUrl = document.getElementById("siteUrl").value

	var bookmark = {
		name: siteName,
		url: siteUrl,
	}

	// console.log(bookmark);
//local storage testing
	// localStorage.setItem('test key','test value')
	// console.log(localStorage.getItem('test key'))
	// console.log(localStorage.removeItem('test key'))
	// console.log(localStorage.getItem('test key'))
//check if bookmarks are empty
	if(localStorage.getItem("bookmarks") == null){
		var bookmarks = []
		bookmarks.push(bookmark)
		localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
		// console.log(localStorage.getItem("bookmarks"))
	}
	else{

		//GET bookmarks from local storage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
		// ADD bookmark to array
		bookmarks.push(bookmark)
		// Reset back to back to localstorage
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks))

	}
	// console.log(n);
	n++;

e.preventDefault();
}
//delete bookmarks
function deleteBookmark(url){
 	console.log(url);
}	
//fetch bookmarks
function fetchBookmarks(){
	//GET bookmarks from local storage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
	// console.log("bookmarks => ",bookmarks)
	//bookmarksResults

	var bookmarksResults = document.getElementById("bookmarksResults")

	bookmarksResults.innerHTML = "";
	 //loop through bookmarks
	 for (var i = 0; i < bookmarks.length ; i++) {
	 	var name = bookmarks[i].name;
	 	var url = bookmarks[i].url;
	 	// alert(url)
	 	var on_click= "deleteBookmark('\'"+url+"'\')" 
	 	console.log(on_click)
	 	bookmarksResults.innerHTML += "<div class='well'><h3>"+name+"<a class='btn btn-default' href="+url+" target='_blank'>visit</a> "+"<a"+" onclick="+on_click+" class='btn btn-danger' href="+'#'+" >delete</a> "+"</h3></div>";
	 	// bookmarksResults.innerHTML += "<div class='well'>";
	 
	 }
}
