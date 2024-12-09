import buttonContent from "./ButtonContent";
import buttonValue from "./ButtonValues";

const buttonProperties = {
  "Web Activities":{
    addNode1: {
      label: 'For',
      nodeProps: {
        data: { label: 'For'},
        type:'bidirectional',
        style: { backgroundColor: 'lightblue' },
        backgroundColor: 'lightblue' ,
      },
      
    },
    addNode2: {
      label: 'If',
      nodeProps: {
        data: { label: 'if' },
        type:'tridirectional',
        style: { backgroundColor: 'lightgreen'},
        backgroundColor: 'lightgreen',
      },
      
    },
    addNode3: {
      label: 'Else',
      nodeProps: {
        data: { label: 'else' },
        type:'bidirectional',
        style: { backgroundColor: 'lightcoral'},
        backgroundColor: 'lightcoral',
      },
      
    },
    addNode4: {
      label: 'While',
      nodeProps: {
        data: { label: 'While' },
        type:'bidirectional',
        style: {backgroundColor: 'lightcoral'},
        values:{value :"while"},
        backgroundColor: 'lightcoral',
      },
      
    }, 
  },
  "Test Activities":{
    addNodea: {
      label: 'Open Browser',
      nodeProps: {
        type:'bidirectional',
        data: { label: 'Open Browser',...buttonContent.OpenBrowser },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.OpenBrowser },
        backgroundColor: 'lightblue',
      },
      
    },
    addNodeb: {
      label: 'Element Wait',
      nodeProps: {
        type:'bidirectional',
        data: { label: 'Element Wait',...buttonContent.ElementWait },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.ElementWait },
        backgroundColor: 'lightblue',
      },
      
    },
  },
    DesktopActivities:{

    addNode5: {
      label: 'Open Browser',
      nodeProps: {
        type:'bidirectional',
        data: { label: 'Open Browser',...buttonContent.OpenBrowser },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.OpenBrowser },
        backgroundColor: 'lightblue',
      },
      
    },
    addNode6: {
      label: 'Element Wait',
      nodeProps: {
        type:'bidirectional',
        data: { label: 'Element Wait',...buttonContent.ElementWait },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.ElementWait },
        backgroundColor: 'lightblue',
      },
      
    },
    addNode8: {
      label: 'Click',
      nodeProps: {
        type:'bidirectional',
        data: { label: 'Click',...buttonContent.Click },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.Click },
        backgroundColor: 'lightblue'
      },
      
    },
    addNode9: {
      label: 'Type Into',
      nodeProps: {
        type:'bidirectional',
        data: { label: 'Type Into',...buttonContent.TypeInto },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.TypeInto },
        backgroundColor: 'lightblue'
      },
      
    },
  },

  };

  export default buttonProperties
