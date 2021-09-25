

    var callback = function() {
        var menuItems = document.getElementById("menu").getElementsByTagName("ul")[0].getElementsByTagName("a");
        
        var pathname = window.location.pathname; 
        if(pathname[0] == '/')
            {
                
                pathname = pathname.substring(1, pathname.length);
            }
        
        for( let i = 0; i < menuItems.length; i++) {
            
            if( menuItems[i].getAttribute("href") == pathname) {
                 menuItems[i].classList.add("selected");
            }
        }
        
    }


  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
  
