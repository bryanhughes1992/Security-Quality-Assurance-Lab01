//LAB 1-1: LOCATION OBJECT & ROUTING
window.onload = function() {
    //STEP #1 - store documents location as a variable
    var myLocInfo = window.location;
    var backColor = document.body;
    var infoArea = document.getElementById('mainContent');
    setWhite();
    checkQueryString();

    //STEP #2 - while the pages location is '?home', use the function setWhite();
    function checkQueryString() {
        if(myLocInfo.search === "?about") {
            setGreen();
        } else if(myLocInfo.search === "?products") {
            setRed();
        } else {
            setWhite();
        }
    }


    function setWhite() {
        //CONTENT FOR HOME PAGE - BACKGROUND IS white
        var contentHome = "<h3>Welcome to our website!</h3>";
        contentHome += "<p>We have many wonderful products that you might be interested in.</p>";
        //END OF CONTENT FOR HOME PAGE
        infoArea.innerHTML = contentHome;
        backColor.style.backgroundColor = "white";
    }

    //STEP #3 - Store the product btn as a variable


    function setRed() {
        //#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
        var contentProducts = "<h3>Our Top 5 Products</h3>";
        contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
        infoArea.innerHTML = contentProducts;
        backColor.style.backgroundColor = "red";
        //==== END OF CONTENT FOR PRODUCTS PAGE ####
    }

    function setGreen() {
        //#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
        var contentAbout = "<h3>About Computer Corp</h3>";
        contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
        contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
        infoArea.innerHTML = contentAbout;
        backColor.style.backgroundColor = "green";
        //==== END OF CONTENT FOR ABOUT US PAGE ####
    }


    //STEP #2 - check to see if the .
};
