//LAB 1-1: LOCATION OBJECT & ROUTING
window.onload = function() {
    //STEP #1 - store documents location as a variable
    var myLocInfo = window.location;
    //STEP #2 - Store the page's body as a variable
    var backColor = document.body;
    //STEP #3 - Store the main information area as a variable
    var infoArea = document.getElementById('mainContent');

    setWhite();
    checkQueryString();

    //STEP #4 - Check the page's query string, act accordingly
    function checkQueryString() {
        //IF it's the 'about' page, fire the setGreen() function
        if(myLocInfo.search === "?about") {
            setGreen();
            //If it's the product's page, fire the setRed() function
        } else if(myLocInfo.search === "?products") {
            setRed();
            //Otherwise, assume it's the 'Home' page and fire the setWhite() function
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
