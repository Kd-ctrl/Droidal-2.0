const onBreakpointClickHandler = (node) => { 
    if (node.data.Comment == "True" && node.data.Breakpoint == "True"){
        node.data.Breakpoint= "";
        node.values.Breakpoint = "";
        node.style.backgroundColor = "grey";
        node.style.border = "2px solid grey";
        node.style.color = "white";
    } 
    else if (node.data.Comment == "" && node.data.Breakpoint == "True"){
        node.data.Breakpoint= "";
        node.values.Breakpoint = "";
        node.style.backgroundColor = node.backgroundColor;
        node.style.border = ""
        node.style.color = "black";
    }
    else if (node.data.Comment == "True" && node.data.Breakpoint == "" ){
        node.data.Breakpoint = "True";
        node.values.Breakpoint = "True";
        node.style.backgroundColor = "grey";
        node.style.border = "2px solid red";
        node.style.color = "white";
    }
    else if (node.data.Comment == "" && node.data.Breakpoint == ""){
        node.data.Breakpoint = "True";
        node.values.Breakpoint = "True";
        node.style.backgroundColor = "red";
        node.style.border = "2px solid red";
        node.style.color = "white";
    }
    else{
console.log("all the above are false, error at NodeDoubleclick or DeubgclickHandler ie, comment")
    }

  };
  
  export default onBreakpointClickHandler;