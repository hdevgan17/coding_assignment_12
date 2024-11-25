"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[103],{"./src/components/Text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoldText:()=>BoldText,CopyRightText:()=>CopyRightText,DefaultText:()=>DefaultText,DisabledText:()=>DisabledText,HeaderText:()=>HeaderText,ItalicText:()=>ItalicText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Text_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomText=styled_components_browser_esm.Ay.span`
    font-family: 'Arial', sans-serif;
    font-size: ${_ref=>{let{types}=_ref;return"header"===types?"1.5rem":"paragraph"===types?"1rem":"0.75rem"}};
    font-weight: ${_ref2=>{let{bold}=_ref2;return bold?"bold":"normal"}};
    font-style: ${_ref3=>{let{italic}=_ref3;return italic?"italic":"normal"}};
    color: ${_ref4=>{let{disabled}=_ref4;return disabled?"#999":"#333"}};
    ${_ref5=>{let{disabled}=_ref5;return disabled&&styled_components_browser_esm.AH`
                background-color: #eee;
                cursor: not-allowed;
                opacity: 0.6;
            `}}
    transition: opacity 0.3s ease-in-out;
`,Text=_ref6=>{let{types="paragraph",bold=!1,italic=!1,disabled=!1,text,...props}=_ref6;return(0,jsx_runtime.jsx)(CustomText,{types,bold,italic,disabled,...props,children:text})},Text_Text=Text;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{text:{required:!1,tsType:{name:"string"},description:""},types:{required:!1,tsType:{name:"union",raw:'"header" | "paragraph" | "copyright"',elements:[{name:"literal",value:'"header"'},{name:"literal",value:'"paragraph"'},{name:"literal",value:'"copyright"'}]},description:"",defaultValue:{value:"'paragraph'",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},italic:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Text_stories={title:"Components Assignment/Text",component:Text_Text,argTypes:{}},DefaultText={args:{types:"paragraph",text:"Paragraph"}},HeaderText={args:{types:"header",text:"Header Text"}},CopyRightText={args:{types:"copyright",text:"Copyright Text"}},BoldText={args:{bold:!0,text:"Bold Text"}},ItalicText={args:{italic:!0,text:"Italic Text"}},DisabledText={args:{text:"Disabled",disabled:!0}},__namedExportsOrder=["DefaultText","HeaderText","CopyRightText","BoldText","ItalicText","DisabledText"];DefaultText.parameters={...DefaultText.parameters,docs:{...DefaultText.parameters?.docs,source:{originalSource:'{\n  args: {\n    types: "paragraph",\n    text: "Paragraph"\n  }\n}',...DefaultText.parameters?.docs?.source}}},HeaderText.parameters={...HeaderText.parameters,docs:{...HeaderText.parameters?.docs,source:{originalSource:'{\n  args: {\n    types: "header",\n    text: "Header Text"\n  }\n}',...HeaderText.parameters?.docs?.source}}},CopyRightText.parameters={...CopyRightText.parameters,docs:{...CopyRightText.parameters?.docs,source:{originalSource:'{\n  args: {\n    types: "copyright",\n    text: "Copyright Text"\n  }\n}',...CopyRightText.parameters?.docs?.source}}},BoldText.parameters={...BoldText.parameters,docs:{...BoldText.parameters?.docs,source:{originalSource:'{\n  args: {\n    bold: true,\n    text: "Bold Text"\n  }\n}',...BoldText.parameters?.docs?.source}}},ItalicText.parameters={...ItalicText.parameters,docs:{...ItalicText.parameters?.docs,source:{originalSource:'{\n  args: {\n    italic: true,\n    text: "Italic Text"\n  }\n}',...ItalicText.parameters?.docs?.source}}},DisabledText.parameters={...DisabledText.parameters,docs:{...DisabledText.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "Disabled",\n    disabled: true\n  }\n}',...DisabledText.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Text-Text-stories.00b04b5a.iframe.bundle.js.map