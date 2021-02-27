// Get the 1st paragraph
    function GetParagraph1() 
    { 
        var inputs = [];
        for ( var i = 1; i <= 6; i++ ) 
        { 
            inputs.push(document.getElementById("leftInputBox" + i).value);
        }
        inputs.join(". ");
        document.getElementById("showParagraph1").innerHTML = inputs.join(". ")
    }

// Get the 2nd paragraph
    function GetParagraph2() 
    { 
        var inputs = [];
        for ( var i = 1; i <= 6; i++ ) 
        { 
            inputs.push(document.getElementById("rightInputBox" + i).value);
        }
        inputs.join(". ");
        document.getElementById("showParagraph2").innerHTML = inputs.join(". ")
    }