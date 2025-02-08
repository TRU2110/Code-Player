function updateOutput() {
		$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val()+"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");
		document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
		
	}
	
	$(".toggleButton").hover(function(){
		$(this).addClass("highlightedButton");
	}, function(){
		$(this).removeClass("highlightedButton");
	});

	$(".toggleButton").click(function(){
		$(this).toggleClass("active");

		$(this).removeClass("highlightedButton");

		var panelId = $(this).attr("id")+"Panel";
		$("#"+panelId).toggleClass("hidden");
		var noOfActivePanels=4-$(".hidden").length;
		$(".panel").width(($(window).width()/noOfActivePanels)-10);
	})

	$(".panel").height($(window).height()-$("#header").height());

	$(".panel").width(($(window).width()/2)-10);

	updateOutput();
""+
	$("textarea").on('change keyup paste', function(){
		updateOutput();
	});

	function download(){
		var text = "<html>\n"+"<head>\n"+"<link rel='stylesheet' type='text/css' href='style.css'>"+"\n</head>\n\n<body>\n\n"+document.getElementById("htmlPanel").value+"\n\n<script type='text/javascript' src='script.js'></script>"+"\n</body>\n</html>";
	    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
	    var blob = new Blob([text], { type: "text/plain"});
	    var anchor = document.createElement("a");
	    anchor.download = "index.html";
	    anchor.href = window.URL.createObjectURL(blob);
	    anchor.target ="_blank";
	    anchor.style.display = "none"; // just to be safe!
	    document.body.appendChild(anchor);
	    anchor.click();
	    document.body.removeChild(anchor);

	    var text1 = document.getElementById("cssPanel").value;
	    text1 = text1.replace(/\n/g, "\r\n"); // To retain the Line breaks.
	    var blob1 = new Blob([text1], { type: "text/css"});
	    var anchor1 = document.createElement("a");
	    anchor1.download = "style.css";
	    anchor1.href = window.URL.createObjectURL(blob1);
	    anchor1.target ="_blank";
	    anchor1.style.display = "none"; // just to be safe!
	    document.body.appendChild(anchor1);
	    anchor1.click();
	    document.body.removeChild(anchor1);

	    var text2 = document.getElementById("javascriptPanel").value;
	    text2 = text2.replace(/\n/g, "\r\n"); // To retain the Line breaks.
	    var blob2 = new Blob([text2], { type: "text/javascript"});
	    var anchor2 = document.createElement("a");
	    anchor2.download = "script.js";
	    anchor2.href = window.URL.createObjectURL(blob2);
	    anchor2.target ="_blank";
	    anchor2.style.display = "none"; // just to be safe!
	    document.body.appendChild(anchor2);
	    anchor2.click();
	    document.body.removeChild(anchor2);
	}
	

/*	function download(){
    
 }

 function saveTextAsFile(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
    }*/