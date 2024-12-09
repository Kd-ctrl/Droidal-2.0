const onNodeDoubleClickHandler = ( node) => { 
    if (node.data.Comment == "True" && node.data.Breakpoint == "True"){
        node.data.Comment= "";
        node.values.Comment = "";
        node.style.backgroundColor = "red";
    } 
    else if (node.data.Comment == "" && node.data.Breakpoint == "True"){
        node.data.Comment= "True";
        node.values.Comment = "True";
        node.style.backgroundColor = "grey";
        node.style.border = "2px solid red"
    }
    else if (node.data.Comment == "True" && node.data.Breakpoint == "" ){
        node.data.Comment = "";
        node.values.Comment = "";
        node.style.backgroundColor = node.backgroundColor;
        node.style.border = ""
    }
    else if (node.data.Comment == "" && node.data.Breakpoint == ""){
        node.data.Comment = "True";
        node.values.Comment = "True";
        node.style.backgroundColor = "grey";
        node.style.border = ""
    }
    else{
console.log("all the above are false, error at NodeDoubleclick ie, comment")
    }
}
  
  export default onNodeDoubleClickHandler;