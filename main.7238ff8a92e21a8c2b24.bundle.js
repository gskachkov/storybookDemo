(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(module){module.exports=JSON.parse('{"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":1,"numPassedTests":1,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":1,"openHandles":[],"snapshot":{"added":0,"didUpdate":false,"failure":false,"filesAdded":0,"filesRemoved":0,"filesRemovedList":[],"filesUnmatched":0,"filesUpdated":0,"matched":0,"total":0,"unchecked":0,"uncheckedKeysByFile":[],"unmatched":0,"updated":0},"startTime":1581806631517,"success":true,"testResults":[{"assertionResults":[{"ancestorTitles":[],"failureMessages":[],"fullName":"test simulation","location":null,"status":"passed","title":"test simulation"}],"endTime":1581806632648,"message":"","name":"/home/alexey/story-proj/src/components/Button/Button.test.tsx","startTime":1581806631974,"status":"passed","summary":""}],"wasInterrupted":false}')},289:function(module,exports,__webpack_require__){__webpack_require__(290),__webpack_require__(436),module.exports=__webpack_require__(437)},354:function(module,exports){},437:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64),_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(284),_src_jest_test_results_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(285),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(96),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(286),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(287);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.withActions)("mouseover","click button")),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__.withTests)({results:_src_jest_test_results_json__WEBPACK_IMPORTED_MODULE_2__}));var req=__webpack_require__(641);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(req,module)}.call(this,__webpack_require__(438)(module))},641:function(module,exports,__webpack_require__){var map={"./Button/Button.stories.tsx":645};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=641},644:function(module,exports,__webpack_require__){},645:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(26),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(288),components_Button_Button=(__webpack_require__(644),function Button(_ref){var textValue=_ref.textValue,setClass=_ref.classValue||"default",_React$useState=react_default.a.useState(!1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),active=_React$useState2[0],setActive=_React$useState2[1];return react_default.a.createElement("div",{className:"App"},react_default.a.createElement("button",{className:setClass,onClick:function onClick(){return setActive(!active)}},textValue||"click"),react_default.a.createElement("br",null),active&&react_default.a.createElement("span",null,"hidden text"))}),dist=__webpack_require__(96);__webpack_require__.d(__webpack_exports__,"ButtonStory",(function(){return ButtonStory}));__webpack_require__(283).withSource;var addSourceDecorator=__webpack_require__(283).addSource,radioOptions=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport Button from './Button';\nimport { text, radios } from \"@storybook/addon-knobs\";\n\nexport default {\n    title: \"Button\"\n};\n\nconst radioOptions = {\n    Default: 'default',\n    Red: 'red',\n    Green: 'green',\n};\n\nexport const ButtonStory = () => (\n    <Button classValue={radios('Hover:',radioOptions, 'default' )} textValue={text('Text:', 'click')}/>\n);\n\nButtonStory.story = {\n    parameters: {\n        jest: ['Button.test.tsx']\n    },\n};\n\n\n",locationsMap:{"button--button-story":{startLoc:{col:27,line:15},endLoc:{col:1,line:17},startBody:{col:27,line:15},endBody:{col:1,line:17}}}}},title:"Button"},{Default:"default",Red:"red",Green:"green"}),ButtonStory=addSourceDecorator((function(){return react_default.a.createElement(components_Button_Button,{classValue:Object(dist.radios)("Hover:",radioOptions,"default"),textValue:Object(dist.text)("Text:","click")})}),{__STORY__:"import React from 'react';\nimport Button from './Button';\nimport { text, radios } from \"@storybook/addon-knobs\";\n\nexport default {\n    title: \"Button\"\n};\n\nconst radioOptions = {\n    Default: 'default',\n    Red: 'red',\n    Green: 'green',\n};\n\nexport const ButtonStory = () => (\n    <Button classValue={radios('Hover:',radioOptions, 'default' )} textValue={text('Text:', 'click')}/>\n);\n\nButtonStory.story = {\n    parameters: {\n        jest: ['Button.test.tsx']\n    },\n};\n\n\n",__ADDS_MAP__:{"button--button-story":{startLoc:{col:27,line:15},endLoc:{col:1,line:17},startBody:{col:27,line:15},endBody:{col:1,line:17}}},__MAIN_FILE_LOCATION__:"/Button.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/developer/Projects/storybookDemo/src/components/Button",__IDS_TO_FRAMEWORKS__:{}});ButtonStory.story={parameters:{jest:["Button.test.tsx"]}}}},[[289,1,2]]]);
//# sourceMappingURL=main.7238ff8a92e21a8c2b24.bundle.js.map