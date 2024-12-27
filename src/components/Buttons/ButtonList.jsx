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
      data: {variableNodes : ["Variable1","Variable2","Variable3","Variable4"], label:'Add',image:"Plus-sign.png",...buttonContent.Add},
      style: {backgroundColor: 'white', width: "25px", height: "25px"},
      values:{ ...buttonValue.Add },
      backgroundColor: 'transparent',
    },
  },
  addNode39 : {
    label: 'Test node',
    nodeProps: {
      type:'floatingbutton',
      data: { label:'Test node',image:"Plus-sign.png",...buttonContent.Testnode},
      style: {backgroundColor: 'white'},
      values:{ ...buttonValue.Testnode },
      backgroundColor: 'transparent',
    },
  },
  addNode40: {
    label: 'Variable',
    nodeProps: {
      data: { label: 'Variable',...buttonContent.Variable},
      type:'constantNode',
      style: { backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Variable },
      backgroundColor: 'lightblue' ,
    },
  },
  addNode41: {
    label: 'Constant',
    nodeProps: {
      data: { label: 'Constant',...buttonContent.Constant},
      type:'constantNode',
      style: { backgroundColor: 'lightblue'},
      values:{ ...buttonValue.Constant },
      backgroundColor: 'lightblue' ,
    },
  },
  },
    };



  export default buttonProperties
