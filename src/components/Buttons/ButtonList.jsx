import { Height } from "@mui/icons-material";
import buttonContent from "./ButtonContent";
import buttonValue from "./ButtonValues";

const buttonProperties = {
  "Web Activities":{
    addNode1: {
      label: 'Assign',
      nodeProps: {
        data: { label: 'Assign',image: "Droidal.png",...buttonContent.Assign},
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
        data: { label: 'Open Browser',variableNodes : ["Enter URL=string"],...buttonContent.OpenBrowser },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.OpenBrowser },
        backgroundColor: 'lightblue',
      },
    },
      addNode3: {
        label: 'Openbroweser_V1',
        nodeProps: {
          type:'bidirectional',
          data: { label: 'Openbroweser_V1',...buttonContent.Openbroweser_V1 },
          style: {backgroundColor: 'lightblue'},
          values:{ ...buttonValue.Openbroweser_V1 },
          backgroundColor: 'lightblue',
        },
    },
    addNode4: {
      label: 'OpenBrowserProfile',
      nodeProps: {
        type:'bidirectional',
        data: { label: 'OpenBrowserProfile',...buttonContent.Openbroweser_V1 },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.Openbroweser_V1 },
        backgroundColor: 'lightblue',
      },
  },
  addNode5: {
    label: 'Openbrowser With Extension',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Openbrowser With Extension',...buttonContent.Openbrowser_with_extension },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Openbrowser_with_extension },
      backgroundColor: 'lightblue',
    },
},
addNode6: {
  label: 'Browser_Debugging',
  nodeProps: {
    type:'bidirectional',
    data: { label: 'Browser_Debugging',...buttonContent.Browser_Debugging },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.Browser_Debugging },
    backgroundColor: 'lightblue',
  },
},
addNode7: {
  label: 'Get_Text',
  nodeProps: {
    type:'bidirectional',
    data: { label: 'Get_Text',...buttonContent.Get_Text },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.Get_Text },
    backgroundColor: 'lightblue',
  },
},
addNode8: {
  label: 'Type Into',
  nodeProps: {
    type:'bidirectional',
    data: { label: 'Type Into',...buttonContent.TypeInto },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.TypeInto },
    backgroundColor: 'lightblue'
  },
},
addNode9: {
  label: 'Click',
  nodeProps: {
    type:'bidirectional',
    data: { label: 'Click',...buttonContent.Click },
    style: {backgroundColor: 'lightblue'},
    values:{ ...buttonValue.Click },
    backgroundColor: 'lightblue'
  },
},
  addNode10: {
    label: 'MouseHover',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'MouseHover',...buttonContent.MouseHover },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.MouseHover },
      backgroundColor: 'lightblue'
    },
  },
  addNode11: {
    label: 'TimeDelay',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'TimeDelay',...buttonContent.TimeDelay },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.TimeDelay },
      backgroundColor: 'lightblue'
    },
  },
  addNode12: {
    label: 'Hightlight',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Hightlight',...buttonContent.Hightlight },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Hightlight },
      backgroundColor: 'lightblue'
    },
  },
  addNode13: {
    label: 'WindowHandle',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'WindowHandle',...buttonContent.WindowHandle },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.WindowHandle },
      backgroundColor: 'lightblue'
    },
  },
  addNode14: {
    label: 'Element Wait',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Element Wait',...buttonContent.ElementWait },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.ElementWait },
      backgroundColor: 'lightblue',
    },
    
  }, 
   addNode15: {
    label: 'Element Exist',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Element Exist',...buttonContent.ElementExist },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.ElementExist },
      backgroundColor: 'lightblue',
    },
    
  },   
  addNode16: {
    label: 'Browser Close',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Browser Close',...buttonContent.BrowserClose },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.BrowserClose },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode17: {
    label: 'Go Back',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Go Back',...buttonContent.GoBack },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.GoBack },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode18: {
    label: 'Maximize',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Maximize',...buttonContent.Maximize },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Maximize },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode19: {
    label: 'Dropdown Selection',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Dropdown Selection',...buttonContent.DropdownSelection },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.DropdownSelection },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode20: {
    label: 'CheckBox',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'CheckBox',...buttonContent.CheckBox },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.CheckBox },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode21: {
    label: 'Find Elements',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Find Elements',...buttonContent.FindElements },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.FindElements },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode22: {
    label: 'Iframe',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Iframe',...buttonContent.Iframe },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Iframe },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode23: {
    label: 'OpenNewTab',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'OpenNewTab',...buttonContent.OpenNewTab },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.OpenNewTab },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode23: {
    label: 'GetUrl',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'GetUrl',...buttonContent.GetUrl },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.GetUrl },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode24: {
    label: 'Empty Element',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Empty Element',...buttonContent.EmptyElement },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.EmptyElement },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode25: {
    label: 'Select Element',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Select Element',...buttonContent.SelectElement },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.SelectElement },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode26: {
    label: 'Table to DataTable',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Table to DT',...buttonContent.tabletodt },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.tabletodt },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode27: {
    label: 'Table to DataTable V1',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Table to DT V1',...buttonContent.tabletodtv1 },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.tabletodtv1 },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode28: {
    label: 'Keyboard Hot Key',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Keyboard Hot Key',...buttonContent.Keyboardhotkey },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Keyboardhotkey },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode29: {
    label: 'String Case Conversion',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'String Case Conversion',...buttonContent.Stringcaseconversion },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Stringcaseconversion },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode30: {
    label: 'Dropdown',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Dropdown',...buttonContent.Dropdown },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Dropdown },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode31: {
    label: 'Get Attribute',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Get Attribute',...buttonContent.Getattribute },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Getattribute },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode32: {
    label: 'Modify Attribute',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Modify Attribute',...buttonContent.Modifyattribute },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Modifyattribute },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode33: {
    label: 'Href File Download',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Href File Download',...buttonContent.Hreffiledownload },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Hreffiledownload },
      backgroundColor: 'lightblue',
    },
    
  },
  addNode34: {
    label: 'Checkbox Active Inactive',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Checkbox Active Inactive',...buttonContent.Checkboxactiveinactive },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Checkboxactiveinactive },
      backgroundColor: 'lightblue',
    },
  },
  addNode35: {
    label: 'Dropdown Child',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Dropdown Child',...buttonContent.Dropdownchild },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Dropdownchild },
      backgroundColor: 'lightblue',
    },
  },
  addNode36: {
    label: 'Chrome Driver Downloader',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Chrome Driver Downloader',...buttonContent.Chromedriverdownloader },
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Chromedriverdownloader },
      backgroundColor: 'lightblue',
    },
  },
  addNode37: {
    label: 'Dashboard Status',
    nodeProps: {
      type:'bidirectional',
      data: { label: 'Dashboard Status',...buttonContent.Dashboardstatus},
      style: {backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Dashboardstatus },
      backgroundColor: 'lightblue',
    },
  },
  addNode38 : {
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
        type:'arithop',
        data: {variableNodes : ["Path File","File Name"],label: 'Create File',image:"Plus-sign.png",...buttonContent.Createfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Createfile },
        backgroundColor: 'transparent',
      },
    },
    addNode2 : {
      label: 'Text File Read',
      nodeProps: {
        type:'arithop',
        data: {variableNodes : ["File Path"],label: 'Text File Read',image:"Plus-sign.png",...buttonContent.Textfileread},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Textfileread },
        backgroundColor: 'transparent',
      },
    },
    addNode3 : {
      label: 'Open File',
      nodeProps: {
        type:'arithop',
        data: {variableNodes : ["Path"],label: 'Open File',image:"Plus-sign.png",...buttonContent.Openfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Openfile },
        backgroundColor: 'transparent',
      },
    },
    addNode4 : {
      label: 'Msg Box',
      nodeProps: {
        type:'tridirectional',
        data: {image:"Plus-sign.png",label: 'Msg Box',...buttonContent.Msgbox},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Msgbox },
        backgroundColor: 'transparent',
      },
    },
    addNode5 : {
      label: 'Msg Box Timer',
      nodeProps: {
        type:'tridirectional',
        data: {image:"Plus-sign.png",label: 'Msg Box Timer',...buttonContent.Msgboxtimer},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Msgboxtimer},
        backgroundColor: 'transparent',
      },
    },
    addNode6 : {
      label: 'MFA Code',
      nodeProps: {
        type:'tridirectional',
        data: {image:"Plus-sign.png",label: 'MFA Code',...buttonContent.Mfacode},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Mfacode },
        backgroundColor: 'transparent',
      },
    },
    addNode7 : {
      label: 'Copy File',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Copy File',...buttonContent.Copyfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Copyfile },
        backgroundColor: 'transparent',
      },
    },
    addNodes8 : {
      label: 'Move File',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Move File',...buttonContent.Movefile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Movefile },
        backgroundColor: 'transparent',
      },
    }, 
    addNodes9 : {
      label: 'Click Coordinate',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Click Coordinate',...buttonContent.Clickcoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Clickcoordinate },
        backgroundColor: 'transparent',
      },
    }, 
    addNodes10 : {
      label: 'Click Coordinate simulate',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Click Coordinate simulate',...buttonContent.Clickcoordinatesimulate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Clickcoordinatesimulate },
        backgroundColor: 'transparent',
      },
    },
    addNodes11 : {
      label: 'Hover Coordinate',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Hover Coordinate',...buttonContent.Hovercoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Hovercoordinate },
        backgroundColor: 'transparent',
      },
    },
    addNodes12 : {
      label: 'Type Coordinate',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Type Coordinate',...buttonContent.Typecoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Typecoordinate },
        backgroundColor: 'transparent',
      },
    },
    addNodes13 : {
      label: 'Double Click Coordinate',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Double Click Coordinate',...buttonContent.Doubleclickcoordinate},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Doubleclickcoordinate },
        backgroundColor: 'transparent',
      },
    },
    addNodes14 : {
      label: 'File Exist',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'File Exist',...buttonContent.Fileexist},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Fileexist},
        backgroundColor: 'transparent',
      },
    },
    addNodes15 : {
      label: 'Min Active Window',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Min Active Window',...buttonContent.Minactivewindow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Minactivewindow },
        backgroundColor: 'transparent',
      },
    },
    addNodes16 : {
      label: 'Max Active Window',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Max Active Window',...buttonContent.Maxactivewindow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Maxactivewindow },
        backgroundColor: 'transparent',
      },
    },
    addNodes17 : {
      label: 'Move previous Window',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Move previous Window',...buttonContent.Movepreviouswindow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Movepreviouswindow },
        backgroundColor: 'transparent',
      },
    },
    addNodes18 : {
      label: 'Date Time',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Date Time',...buttonContent.Datetime},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Datetime },
        backgroundColor: 'transparent',
      },
    },
    addNodes19 : {
      label: 'Get Latest File',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Get Latest File',...buttonContent.Getlastestfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getlastestfile },
        backgroundColor: 'transparent',
      },
    },
    addNodes20 : {
      label: 'Write Text File',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Write Text File',...buttonContent.writetextfile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.writetextfile },
        backgroundColor: 'transparent',
      },
    },
    addNodes21 : {
      label: 'Keyboard Activity',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Keyboard Activity',...buttonContent.Keyboardactivity},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Keyboardactivity },
        backgroundColor: 'transparent',
      },
    },
    addNodes22 : {
      label: 'Get list of Files',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Get list of Files',...buttonContent.Getlistoffiles},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getlistoffiles },
        backgroundColor: 'transparent',
      },
    },
    addNodes23 : {
      label: 'Rename File',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Rename File',...buttonContent.Renamefile},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Renamefile},
        backgroundColor: 'transparent',
      },
    },
    addNodes24 : {
      label: 'Kill Process',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Kill Process',...buttonContent.Killprocess},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Killprocess },
        backgroundColor: 'transparent',
      },
    },
    addNodes25 : {
      label: 'Excel Configuration',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Configuration',...buttonContent.Excelconfig},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelconfig },
        backgroundColor: 'transparent',
      },
    },
    addNodes26 : {
      label: 'Get File Line',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Get File Line',...buttonContent.Getfileline},
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
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Read Range',...buttonContent.Excelreadrange},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelreadrange},
        backgroundColor: 'transparent',
      },
    },
    addNodes2 : {
      label: 'Excel Write Range',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Write Range',...buttonContent.Excelwriterange},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelwriterange},
        backgroundColor: 'transparent',
      },
    },
    addNodes3 : {
      label: 'Excel Write Cell',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Write Cell',...buttonContent.Excelwriterange},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelappendrange},
        backgroundColor: 'transparent',
      },
    },
    addNodes4 : {
      label: 'Excel Read Sheet',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Read Sheet',...buttonContent.Readexcelsheet},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Readexcelsheet},
        backgroundColor: 'transparent',
      },
    },
    addNodes5 : {
      label: 'Excel Append Row',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Append Row',...buttonContent.Excelappendrow},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelappendrow},
        backgroundColor: 'transparent',
      },
    },  
    addNodes6 : {
      label: 'Add Sheet in Excel',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Add Sheet in Excel',...buttonContent.Addsheetintoexcel},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Addsheetintoexcel},
        backgroundColor: 'transparent',
      },
    },
    addNodes7 : {
      label: 'Excel Unhide Rows',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel unhide rows',...buttonContent.Excelunhiderows},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelunhiderows},
        backgroundColor: 'transparent',
      },
    },
    addNodes8 : {
      label: 'Get Cell Number By Values',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Get Cell Number By Values',...buttonContent.Getcellnumberbyvalue},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getcellnumberbyvalue},
        backgroundColor: 'transparent',
      },
    },
    addNodes9 : {
      label: 'Get Sheet Names',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Get Sheet Names',...buttonContent.Getsheetname},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Getsheetname},
        backgroundColor: 'transparent',
      },
    },
    addNodes10 : {
      label: 'Convert Dt to Json',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'onvert Dt to Json',...buttonContent.Conver_dt_json},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Conver_dt_json},
        backgroundColor: 'transparent',
      },
    },
    addNodes11 : {
      label: 'Excel Row Count',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Row Count',...buttonContent.Excelrowcount},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelrowcount},
        backgroundColor: 'transparent',
      },
    },
    addNodes12 : {
      label: 'Xlx to Xlsx',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Xlx to Xlsx',...buttonContent.Xlstoxlsx},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Xlstoxlsx},
        backgroundColor: 'transparent',
      },
    },
    addNodes13 : {
      label: 'Excel Header modify',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Header modify',...buttonContent.Excelheadermodify},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelheadermodify},
        backgroundColor: 'transparent',
      },
    },
    addNodes14 : {
      label: 'Excel Colour Code Filter',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Colour Code Filter',...buttonContent.Excelcolorcodefilter},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelcolorcodefilter},
        backgroundColor: 'transparent',
      },
    },
    addNodes15 : {
      label: 'Excel Write Cell Depricated',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label: 'Excel Write Cell Depricated',...buttonContent.Excelwritecelldepricated},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelwritecelldepricated},
        backgroundColor: 'transparent',
      },
    },
    addNodes16 : {
      label: 'Excel Read Cell',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label:'Excel Read Cell',...buttonContent.Excelreadcell},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelreadcell},
        backgroundColor: 'transparent',
      },
    }, 
    addNodes17 : {
      label: 'Csv to Excel',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label:'Csv to Excel',...buttonContent.Csvtoexcel},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Csvtoexcel},
        backgroundColor: 'transparent',
      },
    },  
    addNodes18 : {
      label: 'Excel Checkbox Check',
      nodeProps: {
        type:'bidirectional',
        data: {image:"Plus-sign.png",label:'Excel Checkbox Check',...buttonContent.Excelcheckboxcheck},
        style: {backgroundColor: 'white', width: "50px", height: "50px"},
        values:{ ...buttonValue.Excelcheckboxcheck},
        backgroundColor: 'transparent',
      },
    }, 
  }
    };



  export default buttonProperties
