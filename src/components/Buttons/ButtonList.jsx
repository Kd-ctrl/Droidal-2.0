import { Height } from "@mui/icons-material";
import buttonContent from "./ButtonContent";
import buttonValue from "./ButtonValues";

const buttonProperties = {
  "Web Activities":{
    addNode1: {
      label: 'Assign',
      nodeProps: {
        data: { label: 'Assign',image: "Assign.svg",...buttonContent.Assign},
        type:'bidirectional',
        style: { backgroundColor: 'lightblue'},
        values:{ ...buttonValue.Assign },
        backgroundColor: 'lightblue' ,
      },
      
    },
    addNode2: {
      label: 'Open Browser',
      nodeProps: {
        type:'computational',
        data: { label: 'Open Browser',image: "OpenBrowser.svg",variableNodes : ["Enter URL=string","Delay (in Seconds)=integer"],...buttonContent.OpenBrowser },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.OpenBrowser },
        backgroundColor: 'lightblue',
      },
    },
      addNode3: {
        label: 'Openbroweser_V1',
        nodeProps: {
          type:'computational',
          data: { label: 'Openbroweser_V1',image: "OpenBrowser.svg",variableNodes : ["Enter URL=string","Delay (in Seconds)=integer"],...buttonContent.Openbroweser_V1 },
          style: {backgroundColor: 'lightblue'},
          values:{ ...buttonValue.Openbroweser_V1 },
          backgroundColor: 'lightblue',
        },
    },
    addNode4: {
      label: 'OpenBrowserProfile',
      nodeProps: {
        type:'computational',
        data: { label: 'OpenBrowserProfile',image: "profile.svg",variableNodes : ["Enter URL=string","Delay (in Seconds)=integer"],...buttonContent.Openbroweser_V1 },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.Openbroweser_V1 },
        backgroundColor: 'lightblue',
      },
  },
  addNode5: {
    label: 'Openbrowser With Extension',
    nodeProps: {
      type:'computational',
      data: { label: 'Openbrowser With Extension',image: "extension.svg",variableNodes : ["Extension Path=string","Enter URL=string","Delay (in Seconds)=integer"],...buttonContent.Openbrowser_with_extension },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Openbrowser_with_extension },
      backgroundColor: 'lightblue',
    },
},
addNode6: {
  label: 'Browser_Debugging',
  nodeProps: {
    type:'computational',
    data: { label: 'Browser_Debugging',image: "bug.svg",variableNodes : ["Enter URL=string","Delay (in Seconds)=integer"],...buttonContent.Browser_Debugging },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.Browser_Debugging },
    backgroundColor: 'lightblue',
  },
},
addNode7: {
  label: 'Get_Text',
  nodeProps: {
    type:'computational',
    data: { label: 'Get_Text',image: "text-size-svgrepo-com.svg",variableNodes : ["Enter Text=string","Delay (in Seconds)=integer"],output:["Output Variable=string"],...buttonContent.Get_Text },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.Get_Text },
    backgroundColor: 'lightblue',
  },
},
addNode8: {
  label: 'Type Into',
  nodeProps: {
    type:'computational',
    data: { label: 'Type Into',image: "typing-svgrepo-com.svg",variableNodes : ["Enter Text=string","Enter Send Key Value=string","Delay (in Seconds)=integer"],...buttonContent.TypeInto },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.TypeInto },
    backgroundColor: 'lightblue'
  },
},
addNode9: {
  label: 'Click',
  nodeProps: {
    type:'computational',
    data: { label: 'Click',image: "click-svgrepo-com.svg",variableNodes : ["Enter Text=string","Delay (in Seconds)=integer"],...buttonContent.Click },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.Click },
    backgroundColor: 'lightblue'
  },
},
  addNode10: {
    label: 'MouseHover',
    nodeProps: {
      type:'computational',
      data: { label: 'MouseHover',image: "mouse-circle-svgrepo-com.svg",variableNodes : ["Enter Text=string","Delay (in Seconds)=integer"],...buttonContent.MouseHover },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.MouseHover },
      backgroundColor: 'lightblue'
    },
  },
  addNode11: {
    label: 'TimeDelay',
    nodeProps: {
      type:'computational',
      data: { label: 'TimeDelay',image: "time-quarter-to-svgrepo-com.svg",variableNodes : ["Delay (in Seconds)=integer"],...buttonContent.TimeDelay },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.TimeDelay },
      backgroundColor: 'lightblue'
    },
  },
  addNode12: {
    label: 'Hightlight',
    nodeProps: {
      type:'computational',
      data: { label: 'Hightlight',image: "highlight-svgrepo-com.svg",variableNodes : ["Enter Text=string","Delay (in Seconds)=integer"],...buttonContent.Hightlight },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Hightlight },
      backgroundColor: 'lightblue'
    },
  },
  addNode13: {
    label: 'WindowHandle',
    nodeProps: {
      type:'computational',
      data: { label: 'WindowHandle',image: "windows-174-svgrepo-com.svg",variableNodes : ["index=string"],...buttonContent.WindowHandle },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.WindowHandle },
      backgroundColor: 'lightblue'
    },
  },
  addNode14: {
    label: 'Element Wait',
    nodeProps: {
      type:'computational',
      data: { label: 'Element Wait',image: "element-plus-svgrepo-com.svg",variableNodes : ["Enter Value=string","Enter Timeout=string"],output:[],...buttonContent.ElementWait },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.ElementWait },
      backgroundColor: 'lightblue',
    },
    
  }, 
   addNode15: {
    label: 'Element Exist',
    nodeProps: {
      type:'computational',
      data: { label: 'Element Exist',image: "elementexist.png",variableNodes : ["Enter Text=string","Delay (in Seconds)=integer"],output:[],...buttonContent.ElementExist },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.ElementExist },
      backgroundColor: 'lightblue',
    },
    
  },   
  addNode16: {
    label: 'Browser Close',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Browser Close', image: "close-ellipse-svgrepo-com.svg",...buttonContent.BrowserClose },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.BrowserClose },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode17: {
    label: 'Go Back',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Go Back',image: "back-square-svgrepo-com.svg",...buttonContent.GoBack },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.GoBack },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode18: {
    label: 'Maximize',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Maximize',image: "maximize-square-3-svgrepo-com.svg",...buttonContent.Maximize },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Maximize },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode19: {
    label: 'Dropdown Selection',
    nodeProps: {
      type:'computational',
      data: { label: 'Dropdown Selection',image: "dropdown-svgrepo-com.svg",variableNodes : ["Enter Text=string","Enter Send Key Value=string","Delay (in Seconds)=integer"],...buttonContent.DropdownSelection },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.DropdownSelection },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode20: {
    label: 'CheckBox',
    nodeProps: {
      type:'computational',
      data: { label: 'CheckBox',image: "checkbox-active-svgrepo-com.svg",variableNodes : ["Value=string","Delay (in Seconds)=integer"],output:[],...buttonContent.CheckBox },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.CheckBox },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode21: {
    label: 'Find Elements',
    nodeProps: {
      type:'computational',
      data: { label: 'Find Elements',image: "find-svgrepo-com.svg",variableNodes : ["Value=string","Delay (in Seconds)=integer"],output:[],...buttonContent.FindElements },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.FindElements },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode22: {
    label: 'Iframe',
    nodeProps: {
      type:'computational',
      data: { label: 'Iframe',image: "iframe.svg",variableNodes : ["Index=string"],...buttonContent.Iframe },//to check 
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Iframe },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode23: {
    label: 'OpenNewTab',
    nodeProps: {
      type:'computational',
      data: { label: 'OpenNewTab',image: "tab-new-svgrepo-com.svg",variableNodes : ["Enter URL=string"],...buttonContent.OpenNewTab },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.OpenNewTab },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode24: {
    label: 'GetUrl',
    nodeProps: {
      type:'computational',
      data: { label: 'GetUrl',image: "url-1423-svgrepo-com.svg",variableNodes : ["Enter URL=string"],...buttonContent.GetUrl },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.GetUrl },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode25: {
    label: 'Empty Element',
    nodeProps: {
      type:'computational',
      data: { label: 'Empty Element',image: "empty-box-svgrepo-com.svg",variableNodes : ["Enter Xpath=string","Delay (in Seconds)=integer"],...buttonContent.EmptyElement },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.EmptyElement },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode26: {
    label: 'Select Element',
    nodeProps: {
      type:'computational',
      data: { label: 'Select Element', image: "select-svgrepo-com.svg",variableNodes : ["Enter Xpath=string","Delay (in Seconds)=integer"], ...buttonContent.SelectElement },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.SelectElement },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode27: {
    label: 'Table to DataTable',
    nodeProps: {
      type:'computational',
      data: { label: 'Table to DT', image: "table-add-svgrepo-com.svg",variableNodes : ["Enter Xpath=string","Delay (in Seconds)=integer"],output:[],...buttonContent.tabletodt },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.tabletodt },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode28: {
    label: 'Table to DataTable V1',
    nodeProps: {
      type:'computational',
      data: { label: 'Table to DT V1',image: "table-add-svgrepo-com.svg",variableNodes : ["Enter Xpath=string","Next Button xpath=string","Modify Column=string","Disable Element=string","Attribute Name=string","Attribute Value=string","Delay (in Seconds)=integer"],output:[],...buttonContent.tabletodtv1 },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.tabletodtv1 },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode29: {
    label: 'Keyboard Hot Key',
    nodeProps: {
      type:'computational',
      data: { label: 'Keyboard Hot Key', image: "keyboard-svgrepo-com.svg",variableNodes : ["Value=string"],...buttonContent.Keyboardhotkey },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Keyboardhotkey },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode30: {
    label: 'String Case Conversion',
    nodeProps: {
      type:'computational',
      data: { label: 'String Case Conversion', image: "stringcase.png",variableNodes : ["Input String=string"],output:[],...buttonContent.Stringcaseconversion },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Stringcaseconversion },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode31: {
    label: 'Dropdown',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Dropdown',image: "dropdown-menu-svgrepo-com.svg",variableNode:["Inner Html=string","Outer Html=string","Value=string","Name=string","Id=string"],...buttonContent.Dropdown },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Dropdown },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode32: {
    label: 'Get Attribute',
    nodeProps: {
      type:'computational',
      data: { label: 'Get Attribute',image: "attributes.png",variableNodes : ["Value=string","Delay (in Seconds)=integer"],output:[],...buttonContent.Getattribute },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Getattribute },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode33: {
    label: 'Modify Attribute',
    nodeProps: {
      type:'computational',
      data: { label: 'Modify Attribute',variableNodes : ["Value=string"],image: "modify-poly-o-svgrepo-com.svg",...buttonContent.Modifyattribute },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Modifyattribute },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode34: {
    label: 'Href File Download',
    nodeProps: {
      type:'computational',
      data: { label: 'Href File Download',image: "href.png",variableNodes : ["URL=string","Save Path=string"],...buttonContent.Hreffiledownload },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Hreffiledownload },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode35: {
    label: 'Checkbox Active Inactive',
    nodeProps: {
      type:'computational',
      data: { label: 'Checkbox Active Inactive',variableNodes : ["Value=string","Output Message=string,","Delay (in Seconds)=integer"],image: "checkbox-active-svgrepo-com.svg",...buttonContent.Checkboxactiveinactive },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Checkboxactiveinactive },
      backgroundColor: 'lightblue',
    },
  },
  addNode36: {
    label: 'Dropdown Child',
    nodeProps: {
      type:'computational',
      data: { label: 'Dropdown Child',image: "dropdown-checklist-enumeration-svgrepo-com.svg",variableNodes : ["Value=string", "Output Message=string"],output:[],...buttonContent.Dropdownchild },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Dropdownchild },
      backgroundColor: 'lightblue',
    },
  },
  addNode37: {
    label: 'Chrome Driver Downloader',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Chrome Driver Downloader',image: "chrome-filled-svgrepo-com.svg",...buttonContent.Chromedriverdownloader },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Chromedriverdownloader },
      backgroundColor: 'lightblue',
    },
  },
  addNode38: {
    label: 'Dashboard Status',
    nodeProps: {
      type:'computational',
      data: { label: 'Dashboard Status',image: "dashboard-svgrepo-com.svg",variableNodes : ["Task Id=string", "Output Message=string"],...buttonContent.Dashboardstatus},
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Dashboardstatus },
      backgroundColor: 'lightblue',
    },
  },
  addNode39 : {
    label: 'Add',
    nodeProps: {
      type:'arithop',
      data: {variableNodes : ["Variable1","Variable2","Variable3","Variable4"],label: 'Add',image:"Plus-sign.png",...buttonContent.Add},
      style: {backgroundColor: 'white', width: "25px", height: "25px"},
      values:{ ...buttonValue.Add },
      backgroundColor: 'transparent',
    },
  },
},

  "System Activities":{
    addNode1 : {
      label: 'Create File',
      nodeProps: {
        type:'computational',
        data: {variableNodes : ["File Path=string","File Name=string"],label: 'Create File',image:"createfile.png",...buttonContent.Createfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Createfile },
        backgroundColor: 'transparent',
      },
    },
    addNode2 : {
      label: 'Text File Read',
      nodeProps: {
        type:'computational',
        data: {variableNodes : ["File Path=string"],label: 'Text File Read',image:"textfileread.png",output:["Output Variable=string"],...buttonContent.Textfileread},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Textfileread },
        backgroundColor: 'transparent',
      },
    },
    addNode3 : {
      label: 'Open File',
      nodeProps: {
        type:'computational',
        data: {variableNodes : ["Path=string"],label: 'Open File',image:"openfile.png",...buttonContent.Openfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Openfile },
        backgroundColor: 'transparent',
      },
    },
    addNode4 : {
      label: 'Msg Box',
      nodeProps: {
        type:'computational',
        data: {image:"message-square-dots-svgrepo-com.svg",output:["Output Variable=string"],label: 'Msg Box',...buttonContent.Msgbox},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Msgbox },
        backgroundColor: 'transparent',
      },
    },
    addNode5 : {
      label: 'Msg Box Timer',
      nodeProps: {
        type:'computational',
        data: {image:"msgbox_timer.png",label: 'Msg Box Timer',output:["Output Variable=string"],variableNodes : ["Delay (in Seconds)=integer"],...buttonContent.Msgboxtimer},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Msgboxtimer},
        backgroundColor: 'transparent',
      },
    },
    addNode6 : {
      label: 'MFA Code',
      nodeProps: {
        type:'computational',
        data: {image:"mfa.png",label: 'MFA Code',variableNodes : ["Tokens=string"],output:["Output Variable=string"],...buttonContent.Mfacode},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Mfacode },
        backgroundColor: 'transparent',
      },
    },
    addNode7 : {
      label: 'Copy File',
      nodeProps: {
        type:'computational',
        data: {image:"copyfile.png",variableNodes : ["Source Path=string","Destination Path=string"],label: 'Copy File',...buttonContent.Copyfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Copyfile },
        backgroundColor: 'transparent',
      },
    },
    addNodes8 : {
      label: 'Move File',
      nodeProps: {
        type:'computational',
        data: {image:"move-to-folder-svgrepo-com.svg",variableNodes : ["Source Path=string","Destination Path=string"],label: 'Move File',...buttonContent.Movefile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Movefile },
        backgroundColor: 'transparent',
      },
    }, 
    addNodes9 : {
      label: 'Click Coordinate',
      nodeProps: {
        type:'computational',
        data: {image:"click-810-svgrepo-com.svg",variableNodes : ["X Coordinate=string","Y Coordinate=string"],label: 'Click Coordinate',...buttonContent.Clickcoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Clickcoordinate },
        backgroundColor: 'transparent',
      },
    }, 
    addNodes10 : {
      label: 'Click Coordinate simulate',
      nodeProps: {
        type:'computational',
        data: {image:"coordinate-system-svgrepo-com.svg",label: 'Click Coordinate simulate',variableNodes : ["X Coordinate=string","Y Coordinate=string"],...buttonContent.Clickcoordinatesimulate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Clickcoordinatesimulate },
        backgroundColor: 'transparent',
      },
    },
    addNodes11 : {
      label: 'Hover Coordinate',
      nodeProps: {
        type:'computational',
        data: {image:"hover_coordinator.png",label: 'Hover Coordinate',variableNodes : ["X Coordinate=string","Y Coordinate=string"],...buttonContent.Hovercoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Hovercoordinate },
        backgroundColor: 'transparent',
      },
    },
    addNodes12 : {
      label: 'Type Coordinate',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Type Coordinate',variableNodes : ["X Coordinate=string","Y Coordinate=string","Send Key=string"],...buttonContent.Typecoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Typecoordinate },
        backgroundColor: 'transparent',
      },
    },
    addNodes13 : {
      label: 'Double Click Coordinate',
      nodeProps: {
        type:'computational',
        data: {image:"doubleclick.png",label: 'Double Click Coordinate',variableNodes : ["X Coordinate=string","Y Coordinate=string"],...buttonContent.Doubleclickcoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Doubleclickcoordinate },
        backgroundColor: 'transparent',
      },
    },
    addNodes14 : {
      label: 'File Exist',
      nodeProps: {
        type:'computational',
        data: {image:"fileexist.png",label: 'File Exist',variableNodes : ["File Path=string"],output :["Output Variable=string"],...buttonContent.Fileexist},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Fileexist},
        backgroundColor: 'transparent',
      },
    },
    addNodes15 : {
      label: 'Min Active Window',
      nodeProps: {
        type:'bidirectional',
        data: {image:"minactive.png",label: 'Min Active Window',...buttonContent.Minactivewindow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Minactivewindow },
        backgroundColor: 'transparent',
      },
    },
    addNodes16 : {
      label: 'Max Active Window',
      nodeProps: {
        type:'bidirectional',
        data: {image:"maxactive.png",label: 'Max Active Window',...buttonContent.Maxactivewindow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Maxactivewindow },
        backgroundColor: 'transparent',
      },
    },
    addNodes17 : {
      label: 'Move previous Window',
      nodeProps: {
        type:'bidirectional',
        data: {image:"moveprevious.png",label: 'Move previous Window',...buttonContent.Movepreviouswindow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Movepreviouswindow },
        backgroundColor: 'transparent',
      },
    },
    addNodes18 : {
      label: 'Date Time',
      nodeProps: {
        type:'computational',
        data: {image:"datetime.png",label: 'Date Time',variableNodes : ["Expression=string","Type=string","Value=string"],output:["Output Variable=string"],...buttonContent.Datetime},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Datetime },
        backgroundColor: 'transparent',
      },
    },
    addNodes19 : {
      label: 'Get Latest File',
      nodeProps: {
        type:'computational',
        data: {image:"getlatestfile.png",label: 'Get Latest File',variableNodes : ["File Path=string"],output:["Output Variable=string"],...buttonContent.Getlastestfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getlastestfile },
        backgroundColor: 'transparent',
      },
    },
    addNodes20 : {
      label: 'Write Text File',
      nodeProps: {
        type:'computational',
        data: {image:"writetextfile.png",label: 'Write Text File',variableNodes : ["File Path=string","Content=string"],...buttonContent.writetextfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.writetextfile },
        backgroundColor: 'transparent',
      },
    },
    addNodes21 : {
      label: 'Keyboard Activity',
      nodeProps: {
        type:'computational',
        data: {image:"keyboard.png",label: 'Keyboard Activity',variableNodes : ["Value=string"],...buttonContent.Keyboardactivity},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Keyboardactivity },
        backgroundColor: 'transparent',
      },
    },
    addNodes22 : {
      label: 'Get list of Files',
      nodeProps: {
        type:'computational',
        data: {image:"getlatestfile.png",label: 'Get list of Files',variableNodes : ["Folder Path=string"],output:["Output Variable=string"],...buttonContent.Getlistoffiles},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getlistoffiles },
        backgroundColor: 'transparent',
      },
    },
    addNodes23 : {
      label: 'Rename File',
      nodeProps: {
        type:'computational',
        data: {image:"renameicon.png",label: 'Rename File',variableNodes : ["Source Path=string","Destination Path=string"],...buttonContent.Renamefile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Renamefile},
        backgroundColor: 'transparent',
      },
    },
    addNodes24 : {
      label: 'Kill Process',
      nodeProps: {
        type:'computational',
        data: {image:"wrongprocess.png",label: 'Kill Process',variableNodes : ["Process Name=string"],...buttonContent.Killprocess},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Killprocess },
        backgroundColor: 'transparent',
      },
    },
    addNodes25 : {
      label: 'Excel Configuration',
      nodeProps: {
        type:'computational',
        data: {image:"excelconfig.png",label: 'Excel Configuration',variableNodes : ["Excel Path=string"],output:["Output Variable=string"],...buttonContent.Excelconfig},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelconfig },
        backgroundColor: 'transparent',
      },
    },
    addNodes26 : {
      label: 'Get File Line',
      nodeProps: {
        type:'computational',
        data: {image:"fileline.png",label: 'Get File Line',variableNodes : ["File Path=string","Line=string"],output:["Output Variable=string"],...buttonContent.Getfileline},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getfileline},
        backgroundColor: 'transparent',
      },
    },
  },
  "Excel":{
    addNodes1 : {
      label: 'Excel Read Range',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Read Range',variableNodes : ["File Path=string","Sheet Name=string","Read Range=string"],output:["Output Variable=string"],...buttonContent.Excelreadrange},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelreadrange},
        backgroundColor: 'transparent',
      },
    },
    addNodes2 : {
      label: 'Excel Write Range',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Write Range',variableNodes : ["File Path=string","Data=string","Sheet Name=string","Start Cell=string"],...buttonContent.Excelwriterange},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelwriterange},
        backgroundColor: 'transparent',
      },
    },
    addNodes3 : {
      label: 'Excel Write Cell',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Write Cell',variableNodes : ["File Path=string","Sheet Name=string","Write Cell=string","Write Value=string"],...buttonContent.Excelwriterange},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelappendrange},
        backgroundColor: 'transparent',
      },
    },
    addNodes4 : {
      label: 'Excel Read Sheet',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Read Sheet',variableNodes : ["File Path=string","Sheet Name=string"],output:["Output Variable=string"],...buttonContent.Readexcelsheet},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Readexcelsheet},
        backgroundColor: 'transparent',
      },
    },
    addNodes5 : {
      label: 'Excel Append Row',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Append Row',variableNodes : ["File Path=string","Sheet Name=string","Sheet Name=string"],...buttonContent.Excelappendrow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelappendrow},
        backgroundColor: 'transparent',
      },
    },  
    addNodes6 : {
      label: 'Add Sheet in Excel',
      nodeProps: {
        type:'computational',
        data: {image:"file-add-svgrepo-com.svg",label: 'Add Sheet in Excel',variableNodes : ["Data=string","Existing File Path=string","New Sheet Name=string"],...buttonContent.Addsheetintoexcel},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Addsheetintoexcel},
        backgroundColor: 'transparent',
      },
    },
    addNodes7 : {
      label: 'Excel Unhide Rows',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel unhide rows',variableNodes : ["Excel Path=string"],...buttonContent.Excelunhiderows},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelunhiderows},
        backgroundColor: 'transparent',
      },
    },
    addNodes8 : {
      label: 'Get Cell Number By Values',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Get Cell Number By Values',variableNodes : ["Excel Path=string","Sheet Name=string","Search String=string","Cell Number=string","Column Letter=string","Row Number=string"],...buttonContent.Getcellnumberbyvalue},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getcellnumberbyvalue},
        backgroundColor: 'transparent',
      },
    },
    addNodes9 : {
      label: 'Get Sheet Names',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Get Sheet Names',variableNodes : ["Excel Path=string"],output:["Output Variable=string"],...buttonContent.Getsheetname},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getsheetname},
        backgroundColor: 'transparent',
      },
    },
    addNodes10 : {
      label: 'Convert Dt to Json',
      nodeProps: {
        type:'computational',
        data: {image:"gui-file-text-svgrepo-com.svg",label: 'Convert Dt to Json',variableNodes : ["Input DataTable=string"],output:["Output Variable=string"],...buttonContent.Conver_dt_json},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Conver_dt_json},
        backgroundColor: 'transparent',
      },
    },
    addNodes11 : {
      label: 'Excel Row Count',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Row Count',variableNodes : ["File Path=string","Sheet Name=string","Start Index=string"],output:["Output Variable=string"],...buttonContent.Excelrowcount},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelrowcount},
        backgroundColor: 'transparent',
      },
    },
    addNodes12 : {
      label: 'Xlx to Xlsx',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Xlx to Xlsx',variableNodes : ["XLS File Path=string","XLSX File Path=string"],...buttonContent.Xlstoxlsx},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Xlstoxlsx},
        backgroundColor: 'transparent',
      },
    },
    addNodes13 : {
      label: 'Excel Header modify',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Header modify',variableNodes : ["File Path=string","Sheet Name=string","New Header=string"],output:["Output Variable=string"],...buttonContent.Excelheadermodify},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelheadermodify},
        backgroundColor: 'transparent',
      },
    },
    addNodes14 : {
      label: 'Excel Colour Code Filter',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Colour Code Filter',variableNodes : ["File Path=string","Sheet Name=string","Column Index=string","Color Code=string"],...buttonContent.Excelcolorcodefilter},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelcolorcodefilter},
        backgroundColor: 'transparent',
      },
    },
    addNodes15 : {
      label: 'Excel Write Cell Depricated',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label: 'Excel Write Cell Depricated',variableNodes : ["File Path=string","Data=string","Write Value=string","Check Value=string","Check Column Value=string","Write Column=string"],...buttonContent.Excelwritecelldepricated},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelwritecelldepricated},
        backgroundColor: 'transparent',
      },
    },
    addNodes16 : {
      label: 'Excel Read Cell',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label:'Excel Read Cell',variableNodes : ["File Path=string","Cell Ref=string","Sheet Name=string"],output:["Output Variable=string"],...buttonContent.Excelreadcell},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelreadcell},
        backgroundColor: 'transparent',
      },
    }, 
    addNodes17 : {
      label: 'Csv to Excel',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label:'Csv to Excel',variableNodes : ["CSV File Path=string","Excel File Path=string"],...buttonContent.Csvtoexcel},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Csvtoexcel},
        backgroundColor: 'transparent',
      },
    },  
    addNodes18 : {
      label: 'Excel Checkbox Check',
      nodeProps: {
        type:'computational',
        data: {image:"Plus-sign.png",label:'Excel Checkbox Check',variableNodes : ["File Path=string","Sheet Name=string","Cell Address=string"],output:["Output Variable=string"],...buttonContent.Excelcheckboxcheck},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelcheckboxcheck},
        backgroundColor: 'transparent',
      },
    }, 
  }
    };



  export default buttonProperties
