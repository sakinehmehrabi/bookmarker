document.getElementById('btn').addEventListener('click',savebookmarker);
//save bookmarker
function savebookmarker(e)
{
    //get from value
    var siteName =document.getElementById('siteName').value;
    var siteUrl =document.getElementById('siteUrl').value;
    var bookmark={
      name:siteName,
      url:siteUrl
    }
//console.log("sitename"+siteName);
console.log("bookmark"+bookmark.name);
// local storage test
   //consol.log(window.localStorage.setItem('bookmarkss',bookmark));
 if(window.localStorage.getItem('bookmarkss') ==  null){
   // console.log("if");
    //      //int Arry

    var bookmarkss=[];
       // push items
        bookmarkss.push(bookmark);
    //local save
  window.localStorage.setItem('bookmarkss',JSON.stringify(bookmarkss));
 } else{
   var bookmarkss =JSON.parse(window.localStorage.getItem('bookmarkss'));
   bookmarkss.push(bookmark);
   window.localStorage.setItem('bookmarkss',JSON.stringify(bookmarkss));
  }
}
//fech Bookmark
function fetchBookmark(){
    
    var bookmarkss =window.localStorage.getItem('bookmarkss');
    
    var a =JSON.parse(bookmarkss);
    console.log(a);
}