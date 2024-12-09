const buttonContent = {
 //Update ButtonValues also when updating this 
 
 //ButtonValue Provides the data for backend json




 //driver, comment
    OpenBrowser:{
        "Browser Type": {"options":["Chrome","Edge"],"type":"select", "value":""},
        "Enter URL": {"value":""},
        "Browser Width": {"options":["Default","Full Width"],"type":"select", "value":""},
        "Delay (in Seconds)": {"value":""},
        "Comment": "",
        "Breakpoint": "",
    },
    ElementWait:{
        "driver": "driver",
        "Selector Type": {"options":["X Path","ID","Name","Class","Tag Name"],"type":"select", "value":""},
        "Enter Value": {"value":""},
        "Enter Timeout":{"value":""},
        "Output Variable": {"options":[],"type":"select", "value":""},
        "Description": {"value":""},
        "Comment": "",
        "Breakpoint": "",
    },
    Click:{
        "Selector Type": {"options":["X Path","ID","Name","Class","Tag Name"],"type":"select", "value":""},
        "Selector Tool": {"options":["X Path Selector"],"type":"select", "value":""},
        "Enter Text": {"value":""},
        "Delay (in Seconds)": {"value":""},
        "driver": "driver",
        "Description": {"value":""},
        "Comment": "",
        "Breakpoint": "",
    },
    TypeInto:{
        "Selector Type": {"options":["X Path","ID","Name","Class","Tag Name"],"type":"select", "value":""},
        "Selector Tool": {"options":["X Path Selector"],"type":"select", "value":""},
        "Enter Text": {"value":""},
        "Enter Send Key Value": {"value":""},
        "Delay (in Seconds)":  {"value":""},
        "driver": "driver",
        "Description":  {"value":""},
        "Comment": "",
        "Breakpoint": "",
    }
}


export default buttonContent
