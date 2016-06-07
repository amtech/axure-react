webpackJsonp([0,2],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(82),r=o(i),a=n(91),c=o(a);ReactDOM.render(React.createElement(r["default"],{codeText:c["default"]}),document.getElementById("test"))},82:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _codeMirrorEditor=__webpack_require__(83),_codeMirrorEditor2=_interopRequireDefault(_codeMirrorEditor),_configDialog=__webpack_require__(84),_configDialog2=_interopRequireDefault(_configDialog),_selfCleaningTimeout=__webpack_require__(87),_selfCleaningTimeout2=_interopRequireDefault(_selfCleaningTimeout),_h=__webpack_require__(88),_h2=_interopRequireDefault(_h),dblPG=__webpack_require__(89),HELLO_COMPONENT=__webpack_require__(90),TEMPLATE_VALUE=HELLO_COMPONENT.match(/#(\S+)#/g);console.dir(HELLO_COMPONENT.match(/(?=#)(\S+)#/g)),TEMPLATE_VALUE.forEach(function(e,t,n){var o=e.substring(2,e.length-2);o.split(":");console.dir(e),console.dir(HELLO_COMPONENT)});var Action=__webpack_require__(85),Store=__webpack_require__(86),waitHa=React.createClass({displayName:"waitHa",render:function(){return React.createElement("p",null,"DBL可视化组件")}}),ReactPlayground=React.createClass({displayName:"ReactPlayground",mixins:[_selfCleaningTimeout2["default"],Reflux.connect(Store,"dblState")],MODES:{JSX:"JSX",JS:"JS"},propTypes:{codeText:React.PropTypes.string.isRequired,transformer:React.PropTypes.func,renderCode:React.PropTypes.bool,showCompiledJSTab:React.PropTypes.bool,showLineNumbers:React.PropTypes.bool,editorTabTitle:React.PropTypes.string},getDefaultProps:function(){return{transformer:function(e){return babel.transform(e).code},editorTabTitle:"Live JSX Editor",showCompiledJSTab:!0,showLineNumbers:!1}},getInitialState:function(){return{mode:this.MODES.JSX,code:this.props.codeText}},handleCodeChange:function(e){this.setState({code:e}),this.executeCode()},handleCodeModeSwitch:function(e){this.setState({mode:e})},compileCode:function(){return this.props.transformer(this.state.code)},handlerClick:function(){console.dir(this.state.code);var e=this.state.code;t=e.replace("waitHa","HelloMessage");var t=_h2["default"]+HELLO_COMPONENT+""+t;this.setState({code:t}),console.dir(this.state.code)},render:function(){var e=this.state.mode===this.MODES.JS,t="";try{t=this.compileCode()}catch(n){}var o=React.createElement(_codeMirrorEditor2["default"],{key:"js",className:"playgroundStage CodeMirror-readonly",onChange:this.handleCodeChange,codeText:t,readOnly:!0,lineNumbers:this.props.showLineNumbers}),i=React.createElement(_codeMirrorEditor2["default"],{key:"jsx",onChange:this.handleCodeChange,className:"playgroundStage",codeText:this.state.code,lineNumbers:this.props.showLineNumbers}),r="playground-tab"+(e?"":" playground-tab-active"),a="playground-tab"+(e?" playground-tab-active":""),c=React.createElement("div",{className:a,onClick:this.handleCodeModeSwitch.bind(this,this.MODES.JS)},"Compiled JS"),s=React.createElement("div",{className:r,onClick:this.handleCodeModeSwitch.bind(this,this.MODES.JSX)},this.props.editorTabTitle);return React.createElement("div",{className:"playground"},React.createElement("div",null,s,this.props.showCompiledJSTab&&c),React.createElement("div",{className:"playgroundCode"},e?o:i),React.createElement("div",{className:"playgroundPreview"},React.createElement("div",{ref:"mount"})),React.createElement(Input,{id:"control-input",placeholder:"Please enter..."}),React.createElement("div",{onClick:this.handlerClick},"点我"),React.createElement(_configDialog2["default"],{dblState:this.state.dblState}))},componentDidMount:function(){this.executeCode()},componentDidUpdate:function(e,t){this.props.transformer===e.transformer&&this.state.code===t.code||this.executeCode()},executeCode:function executeCode(){var mountNode=ReactDOM.findDOMNode(this.refs.mount);try{ReactDOM.unmountComponentAtNode(mountNode)}catch(e){}try{var compiledCode=this.compileCode();this.props.renderCode?ReactDOM.render(React.createElement(_codeMirrorEditor2["default"],{codeText:compiledCode,readOnly:!0}),mountNode):eval(compiledCode)}catch(err){this.setTimeout(function(){ReactDOM.render(React.createElement("div",{className:"playgroundError"},err.toString()),mountNode)},500)}}});module.exports=ReactPlayground},83:function(e,t){"use strict";var n=React.createClass({displayName:"CodeMirrorEditor",propTypes:{lineNumbers:React.PropTypes.bool,onChange:React.PropTypes.func},getDefaultProps:function(){return{lineNumbers:!1}},componentDidMount:function(){this.editor=CodeMirror.fromTextArea(ReactDOM.findDOMNode(this.refs.editor),{mode:"javascript",lineNumbers:this.props.lineNumbers,lineWrapping:!0,smartIndent:!1,matchBrackets:!0,theme:"solarized-light",readOnly:this.props.readOnly}),this.editor.on("change",this.handleChange)},componentDidUpdate:function(){this.props.readOnly&&this.editor.setValue(this.props.codeText)},handleChange:function(){this.props.readOnly||this.props.onChange&&this.props.onChange(this.editor.getValue())},render:function(){var e;return e=React.createElement("textarea",{ref:"editor",defaultValue:this.props.codeText}),React.createElement("div",{style:this.props.style,className:this.props.className},e)}});e.exports=n},84:function(e,t,n){"use strict";var o=n(85),i=(n(86),React.createClass({displayName:"ConfigDialog",render:function(){return console.dir(this.props.dblState),React.createElement("div",null,React.createElement(Modal,{ref:"modal",visible:this.props.dblState.cfgDialogShow,title:"组件配置",onOk:o.configDialogHide,onCancel:o.configDialogHide,footer:[React.createElement(Button,{key:"back",type:"ghost",size:"large",onClick:o.configDialogHide},"返 回"),React.createElement(Button,{key:"submit",type:"primary",size:"large",loading:!1,onClick:o.configDialogHide},"提 交")]},React.createElement("p",null,"对话框的内容"),React.createElement("p",null,"对话框的内容"),React.createElement("p",null,"对话框的内容"),React.createElement("p",null,"对话框的内容"),React.createElement("p",null,"对话框的内容")))}}));e.exports=i},85:function(e,t){"use strict";var n=Reflux.createActions(["configDialogShow","configDialogHide"]);e.exports=n},86:function(e,t,n){"use strict";var o=n(85),i=Reflux.createStore({listenables:[o],updateStatus:function(e){e||(e=this.dblState),this.trigger(e)},configDialogShow:function(e){this.dblState.cfgDialogShow=!0,this.updateStatus()},configDialogHide:function(e){this.dblState.cfgDialogShow=!1,this.updateStatus()},getInitialState:function(){return this.dblState={cfgDialogShow:!1},this.dblState}});e.exports=i},87:function(e,t){"use strict";var n={componentDidUpdate:function(){clearTimeout(this.timeoutID)},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){clearTimeout(this.timeoutID),this.timeoutID=setTimeout.apply(null,arguments)})};e.exports=n},88:function(e,t){"use strict";var n="\n\n var H1 = React.createClass({\n 	mixins: [dblPG],\n	handleClick:function(){\n		\n	},\n 	render: function() {\n 		return <h1>我是测试</h1>\n 	}\n });\n\n//	";e.exports=n},89:function(e,t,n){"use strict";var o=n(85),i=(n(86),{componentDidUpdate:function(){console.dir("更新！")},componentDidMount:function(){console.dir("更新!!！")},handleDoubleClick:function(){console.dir(123);ReactDOM.findDOMNode(this.refs.configDialog);o.configDialogShow()}});e.exports=i},90:function(e,t){"use strict";var n="\n\n var HelloMessage = React.createClass({\n 	mixins: [dblPG],\n	handleClick:function(){\n		alert(#{tipcont:'我是提示内容':'tip-test'}#);\n	},\n 	render: function() {\n 		return <div onDoubleClick={this.handleDoubleClick}>\n 		<span>Hello {this.props.name}</spanx>\n 		<input type=\"button\" value='#{button:'我是按钮文案':'点我'}#' onClick={this.handleClick} />\n 		<Input id=\"control-input\" placeholder=\"Please enter...\" />\n 		</div>;\n 	}\n });\n\n//	";e.exports=n},91:function(e,t){"use strict";var n='\n	var App = React.createClass({\n	 	render: function() {\n	 		return <div>\n	 		<this.props.dblChild />\n	 		</div>;\n	 	}\n	 });\n	 ReactDOM.render(<App name="John" dblChild={waitHa}/>, mountNode);\n';e.exports=n}});