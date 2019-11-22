var Activator=function(){function t(){}return Object.defineProperty(t,"isLicensed",{get:function(){return!!t.key},enumerable:!0,configurable:!0}),t}(),extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function __extends(t,e){function r(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function __values(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function __read(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,n,o=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(t){n={error:t}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a}var SvgHelper=function(){function t(){}return t.createRect=function(e,r,i){var n=document.createElementNS("http://www.w3.org/2000/svg","rect");return n.setAttribute("width",e.toString()),n.setAttribute("height",r.toString()),i&&t.setAttributes(n,i),n},t.createLine=function(e,r,i,n,o){var a=document.createElementNS("http://www.w3.org/2000/svg","line");return a.setAttribute("x1",e.toString()),a.setAttribute("y1",r.toString()),a.setAttribute("x2",i.toString()),a.setAttribute("y2",n.toString()),o&&t.setAttributes(a,o),a},t.createPolygon=function(e,r){var i=document.createElementNS("http://www.w3.org/2000/svg","polygon");return i.setAttribute("points",e),r&&t.setAttributes(i,r),i},t.createCircle=function(e,r){var i=document.createElementNS("http://www.w3.org/2000/svg","circle");return i.setAttribute("cx",(e/2).toString()),i.setAttribute("cy",(e/2).toString()),i.setAttribute("r",e.toString()),r&&t.setAttributes(i,r),i},t.createGroup=function(e){var r=document.createElementNS("http://www.w3.org/2000/svg","g");return e&&t.setAttributes(r,e),r},t.setAttributes=function(t,e){var r,i;try{for(var n=__values(e),o=n.next();!o.done;o=n.next()){var a=__read(o.value,2),s=a[0],l=a[1];t.setAttribute(s,l)}}catch(t){r={error:t}}finally{try{o&&!o.done&&(i=n.return)&&i.call(n)}finally{if(r)throw r.error}}},t.createTransform=function(){return document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGTransform()},t.createDefs=function(){return document.createElementNS("http://www.w3.org/2000/svg","defs")},t.createMarker=function(e,r,i,n,o,a,s){var l=document.createElementNS("http://www.w3.org/2000/svg","marker");return t.setAttributes(l,[["id",e],["orient",r],["markerWidth",i.toString()],["markerHeight",n.toString()],["refX",o.toString()],["refY",a.toString()]]),l.appendChild(s),l},t.createText=function(e){var r=document.createElementNS("http://www.w3.org/2000/svg","text");return r.setAttribute("x","0"),r.setAttribute("y","0"),e&&t.setAttributes(r,e),r},t.createTSpan=function(e,r){var i=document.createElementNS("http://www.w3.org/2000/svg","tspan");return i.textContent=e,r&&t.setAttributes(i,r),i},t}(),Renderer=function(){function t(){}return t.prototype.rasterize=function(t,e,r){var i=document.createElement("canvas");i.width=e.width.baseVal.value,i.height=e.height.baseVal.value;var n=e.outerHTML,o=i.getContext("2d");o.drawImage(t,0,0,i.width,i.height);var a=window.URL,s=new Image(i.width,i.height);s.setAttribute("crossOrigin","anonymous");var l=new Blob([n],{type:"image/svg+xml"}),c=a.createObjectURL(l);s.onload=function(){o.drawImage(s,0,0),a.revokeObjectURL(c),r(i.toDataURL("image/png"))},s.src=c},t}(),ToolbarButton=function(){return function(t,e){var r=this;this.getElement=function(){var t=document.createElement("div");return"separator"!==r.toolbarItem.name?(t.className="markerjs-toolbar-button",r.clickHandler&&t.addEventListener("click",function(t){r.clickHandler&&r.clickHandler(t,r.toolbarItem)}),r.toolbarItem.icon?(t.title=r.toolbarItem.tooltipText,t.innerHTML=r.toolbarItem.icon):t.innerText=r.toolbarItem.tooltipText):t.className="markerjs-toolbar-separator",t},this.toolbarItem=t,this.clickHandler=e}}(),Toolbar=function(){return function(t,e){var r=this;this.getUI=function(){var t,e;r.toolbarUI=document.createElement("div"),r.toolbarUI.className="markerjs-toolbar";try{for(var i=__values(r.toolbarItems),n=i.next();!n.done;n=i.next()){var o=n.value,a=new ToolbarButton(o,r.clickHandler);r.toolbarUI.appendChild(a.getElement())}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return r.toolbarUI},this.toolbarItems=t,this.clickHandler=e}}(),MarkerBase=function(){function t(){var t=this;this.defs=[],this.width=200,this.height=50,this.isActive=!0,this.isResizing=!1,this.previousMouseX=0,this.previousMouseY=0,this.isDragging=!1,this.manipulate=function(e){var r=t.visual.getScreenCTM().a,i=(e.screenX-t.previousMouseX)/r,n=(e.screenY-t.previousMouseY)/r;t.isDragging&&t.move(i,n),t.isResizing&&t.resize(i,n),t.previousMouseX=e.screenX,t.previousMouseY=e.screenY},this.addToVisual=function(e){t.visual.appendChild(e)},this.addToRenderVisual=function(e){t.renderVisual.appendChild(e)},this.mouseDown=function(e){e.stopPropagation(),t.select(),t.isDragging=!0,t.previousMouseX=e.screenX,t.previousMouseY=e.screenY},this.mouseUp=function(e){e.stopPropagation(),t.endManipulation()},this.mouseMove=function(e){e.stopPropagation(),t.manipulate(e)},this.move=function(e,r){var i=t.visual.transform.baseVal.getItem(0);i.setMatrix(i.matrix.translate(e,r)),t.visual.transform.baseVal.replaceItem(i,0)}}return t.prototype.endManipulation=function(){this.isDragging=!1,this.isResizing=!1},t.prototype.select=function(){this.isActive=!0,this.onSelected&&this.onSelected(this)},t.prototype.deselect=function(){this.isActive=!1,this.endManipulation()},t.prototype.setup=function(){this.visual=SvgHelper.createGroup(),this.visual.transform.baseVal.appendItem(SvgHelper.createTransform()),this.visual.addEventListener("mousedown",this.mouseDown),this.visual.addEventListener("mouseup",this.mouseUp),this.visual.addEventListener("mousemove",this.mouseMove),this.visual.addEventListener("touchstart",this.onTouch,{passive:!1}),this.visual.addEventListener("touchend",this.onTouch,{passive:!1}),this.visual.addEventListener("touchmove",this.onTouch,{passive:!1}),this.renderVisual=SvgHelper.createGroup([["class","render-visual"]]),this.visual.appendChild(this.renderVisual)},t.prototype.resize=function(t,e){},t.prototype.onTouch=function(t){t.preventDefault();var e=document.createEvent("MouseEvents"),r=t.changedTouches[0],i=null;switch(t.type){case"touchstart":i="mousedown";break;case"touchmove":i="mousemove";break;case"touchend":i="mouseup"}e.initMouseEvent(i,!0,!0,window,0,r.screenX,r.screenY,r.clientX,r.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),t.target.dispatchEvent(e)},t.createMarker=function(){var e=new t;return e.setup(),e},t}(),ResizeGrip=function(){return function(){this.GRIP_SIZE=10,this.visual=SvgHelper.createCircle(this.GRIP_SIZE,[["class","markerjs-control-grip"]])}}(),LineMarkerBase=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.MIN_LENGTH=20,e.x1=0,e.y1=0,e.x2=e.width,e.y2=0,e.getLineLength=function(t,e,r,i){var n=Math.abs(t-r),o=Math.abs(e-i);return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))},e.addControlBox=function(){e.controlBox=SvgHelper.createGroup([["class","markerjs-line-control-box"]]),e.addToVisual(e.controlBox),e.addControlGrips()},e.adjustControlBox=function(){e.positionGrips()},e.addControlGrips=function(){e.controlGrip1=e.createGrip(),e.controlGrip2=e.createGrip(),e.positionGrips()},e.createGrip=function(){var t=new ResizeGrip;return t.visual.transform.baseVal.appendItem(SvgHelper.createTransform()),e.controlBox.appendChild(t.visual),t.visual.addEventListener("mousedown",e.gripMouseDown),t.visual.addEventListener("mousemove",e.gripMouseMove),t.visual.addEventListener("mouseup",e.gripMouseUp),t.visual.addEventListener("touchstart",e.onTouch,{passive:!1}),t.visual.addEventListener("touchend",e.onTouch,{passive:!1}),t.visual.addEventListener("touchmove",e.onTouch,{passive:!1}),t},e.positionGrips=function(){var t=e.controlGrip1.GRIP_SIZE,r=e.x1-t/2,i=e.y1-t/2,n=e.x2-t/2,o=e.y2-t/2;e.positionGrip(e.controlGrip1.visual,r,i),e.positionGrip(e.controlGrip2.visual,n,o)},e.positionGrip=function(t,e,r){var i=t.transform.baseVal.getItem(0);i.setTranslate(e,r),t.transform.baseVal.replaceItem(i,0)},e.gripMouseDown=function(t){e.isResizing=!0,e.activeGrip=t.target===e.controlGrip1.visual?e.controlGrip1:e.controlGrip2,e.previousMouseX=t.screenX,e.previousMouseY=t.screenY,t.stopPropagation()},e.gripMouseUp=function(t){e.isResizing=!1,e.activeGrip=null,t.stopPropagation()},e.gripMouseMove=function(t){e.isResizing&&e.resize(t.movementX,t.movementY)},e}return __extends(e,t),e.prototype.endManipulation=function(){t.prototype.endManipulation.call(this),this.isResizing=!1,this.activeGrip=null},e.prototype.select=function(){t.prototype.select.call(this),this.controlBox.style.display=""},e.prototype.deselect=function(){t.prototype.deselect.call(this),this.controlBox.style.display="none"},e.prototype.setup=function(){t.prototype.setup.call(this),this.markerBgLine=SvgHelper.createLine(0,0,this.x2,0,[["stroke","transparent"],["stroke-width","30"]]),this.addToRenderVisual(this.markerBgLine),this.markerLine=SvgHelper.createLine(0,0,this.x2,0),this.addToRenderVisual(this.markerLine),this.addControlBox()},e.prototype.resize=function(t,e){this.activeGrip&&(this.activeGrip===this.controlGrip1&&this.getLineLength(this.x1+t,this.y1+1,this.x2,this.y2)>=this.MIN_LENGTH?(this.x1+=t,this.y1+=e,this.markerBgLine.setAttribute("x1",this.x1.toString()),this.markerBgLine.setAttribute("y1",this.y1.toString()),this.markerLine.setAttribute("x1",this.x1.toString()),this.markerLine.setAttribute("y1",this.y1.toString())):this.activeGrip===this.controlGrip2&&this.getLineLength(this.x1,this.y1,this.x2+t,this.y2+e)>=this.MIN_LENGTH&&(this.x2+=t,this.y2+=e,this.markerBgLine.setAttribute("x2",this.x2.toString()),this.markerBgLine.setAttribute("y2",this.y2.toString()),this.markerLine.setAttribute("x2",this.x2.toString()),this.markerLine.setAttribute("y2",this.y2.toString()))),this.adjustControlBox()},e.createMarker=function(){var t=new e;return t.setup(),t},e}(MarkerBase),ArrowMarker=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ARROW_SIZE=6,e}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),SvgHelper.setAttributes(this.visual,[["class","arrow-marker"]]);var e=SvgHelper.createPolygon("0,0 "+this.ARROW_SIZE+","+this.ARROW_SIZE/2+" 0,"+this.ARROW_SIZE,[["class","arrow-marker-tip"]]);this.defs.push(SvgHelper.createMarker("arrow-marker-head","auto",this.ARROW_SIZE,this.ARROW_SIZE,this.ARROW_SIZE-1,this.ARROW_SIZE/2,e)),this.markerLine.setAttribute("marker-end","url(#arrow-marker-head")},e.createMarker=function(){var t=new e;return t.setup(),t},e}(LineMarkerBase),Icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"/></svg>',ArrowMarkerToolbarItem=function(){return function(){this.name="arrow-marker",this.tooltipText="Arrow",this.icon=Icon,this.markerType=ArrowMarker}}(),RectangularMarkerGrips=function(){return function(){var t=this;this.findGripByVisual=function(e){switch(e){case t.topLeft.visual:return t.topLeft;case t.topCenter.visual:return t.topCenter;case t.topRight.visual:return t.topRight;case t.centerLeft.visual:return t.centerLeft;case t.centerRight.visual:return t.centerRight;case t.bottomLeft.visual:return t.bottomLeft;case t.bottomCenter.visual:return t.bottomCenter;case t.bottomRight.visual:return t.bottomRight}}}}(),RectangularMarkerBase=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.MIN_SIZE=5,e.CB_DISTANCE=10,e.addControlBox=function(){e.controlBox=SvgHelper.createGroup([["class","markerjs-rect-control-box"]]);var t=SvgHelper.createTransform();t.setTranslate(-e.CB_DISTANCE/2,-e.CB_DISTANCE/2),e.controlBox.transform.baseVal.appendItem(t),e.addToVisual(e.controlBox),e.controlRect=SvgHelper.createRect(e.width+e.CB_DISTANCE,e.height+e.CB_DISTANCE,[["class","markerjs-rect-control-rect"]]),e.controlBox.appendChild(e.controlRect),e.controlGrips=new RectangularMarkerGrips,e.addControlGrips()},e.adjustControlBox=function(){e.controlRect.setAttribute("width",(e.width+e.CB_DISTANCE).toString()),e.controlRect.setAttribute("height",(e.height+e.CB_DISTANCE).toString()),e.positionGrips()},e.addControlGrips=function(){e.controlGrips.topLeft=e.createGrip(),e.controlGrips.topCenter=e.createGrip(),e.controlGrips.topRight=e.createGrip(),e.controlGrips.centerLeft=e.createGrip(),e.controlGrips.centerRight=e.createGrip(),e.controlGrips.bottomLeft=e.createGrip(),e.controlGrips.bottomCenter=e.createGrip(),e.controlGrips.bottomRight=e.createGrip(),e.positionGrips()},e.createGrip=function(){var t=new ResizeGrip;return t.visual.transform.baseVal.appendItem(SvgHelper.createTransform()),e.controlBox.appendChild(t.visual),t.visual.addEventListener("mousedown",e.gripMouseDown),t.visual.addEventListener("mousemove",e.gripMouseMove),t.visual.addEventListener("mouseup",e.gripMouseUp),t.visual.addEventListener("touchstart",e.onTouch,{passive:!1}),t.visual.addEventListener("touchend",e.onTouch,{passive:!1}),t.visual.addEventListener("touchmove",e.onTouch,{passive:!1}),t},e.positionGrips=function(){var t=e.controlGrips.topLeft.GRIP_SIZE,r=-t/2,i=r,n=(e.width+e.CB_DISTANCE)/2-t/2,o=(e.height+e.CB_DISTANCE)/2-t/2,a=e.height+e.CB_DISTANCE-t/2,s=e.width+e.CB_DISTANCE-t/2;e.positionGrip(e.controlGrips.topLeft.visual,r,i),e.positionGrip(e.controlGrips.topCenter.visual,n,i),e.positionGrip(e.controlGrips.topRight.visual,s,i),e.positionGrip(e.controlGrips.centerLeft.visual,r,o),e.positionGrip(e.controlGrips.centerRight.visual,s,o),e.positionGrip(e.controlGrips.bottomLeft.visual,r,a),e.positionGrip(e.controlGrips.bottomCenter.visual,n,a),e.positionGrip(e.controlGrips.bottomRight.visual,s,a)},e.positionGrip=function(t,e,r){var i=t.transform.baseVal.getItem(0);i.setTranslate(e,r),t.transform.baseVal.replaceItem(i,0)},e.gripMouseDown=function(t){e.isResizing=!0,e.activeGrip=e.controlGrips.findGripByVisual(t.target),e.previousMouseX=t.screenX,e.previousMouseY=t.screenY,t.stopPropagation()},e.gripMouseUp=function(t){e.isResizing=!1,e.activeGrip=null,t.stopPropagation()},e.gripMouseMove=function(t){e.isResizing&&e.manipulate(t)},e}return __extends(e,t),e.prototype.endManipulation=function(){t.prototype.endManipulation.call(this),this.isResizing=!1,this.activeGrip=null},e.prototype.select=function(){t.prototype.select.call(this),this.controlBox.style.display=""},e.prototype.deselect=function(){t.prototype.deselect.call(this),this.controlBox.style.display="none"},e.prototype.setup=function(){t.prototype.setup.call(this),this.addControlBox()},e.prototype.resize=function(t,e){var r=0,i=0;switch(this.activeGrip){case this.controlGrips.topLeft:this.width-=t,this.height-=e,r+=t,i+=e;break;case this.controlGrips.bottomLeft:this.width-=t,this.height+=e,r+=t;break;case this.controlGrips.topRight:this.width+=t,this.height-=e,i+=e;break;case this.controlGrips.bottomRight:this.width+=t,this.height+=e;break;case this.controlGrips.centerLeft:this.width-=t,r+=t;break;case this.controlGrips.centerRight:this.width+=t;break;case this.controlGrips.topCenter:this.height-=e,i+=e;break;case this.controlGrips.bottomCenter:this.height+=e}if(this.width<this.MIN_SIZE){var n=this.MIN_SIZE-this.width;this.width=this.MIN_SIZE,0!==r&&(r-=n)}if(this.height<this.MIN_SIZE){n=this.MIN_SIZE-this.height;this.height=this.MIN_SIZE,0!==i&&(i-=n)}if(0!==r||0!==i){var o=this.visual.transform.baseVal.getItem(0);o.setMatrix(o.matrix.translate(r,i)),this.visual.transform.baseVal.replaceItem(o,0)}this.adjustControlBox()},e.prototype.onTouch=function(e){t.prototype.onTouch.call(this,e)},e.createMarker=function(){var t=new e;return t.setup(),t},e}(MarkerBase),RectMarkerBase=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),this.markerRect=SvgHelper.createRect(this.width,this.height),this.addToRenderVisual(this.markerRect)},e.prototype.resize=function(e,r){t.prototype.resize.call(this,e,r),this.markerRect.setAttribute("width",this.width.toString()),this.markerRect.setAttribute("height",this.height.toString())},e.createMarker=function(){var t=new e;return t.setup(),t},e}(RectangularMarkerBase),HighlightMarker=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),SvgHelper.setAttributes(this.visual,[["class","highlight-marker"]])},e.createMarker=function(){var t=new e;return t.setup(),t},e}(RectMarkerBase),Icon$1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"/></svg>',HighlightMarkerToolbarItem=function(){return function(){this.name="cover-marker",this.tooltipText="Cover",this.icon=Icon$1,this.markerType=HighlightMarker}}(),LineMarker=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),SvgHelper.setAttributes(this.visual,[["class","line-marker"]])},e.createMarker=function(){var t=new e;return t.setup(),t},e}(LineMarkerBase),Icon$2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M594.53 508.63L6.18 53.9c-6.97-5.42-8.23-15.47-2.81-22.45L23.01 6.18C28.43-.8 38.49-2.06 45.47 3.37L633.82 458.1c6.97 5.42 8.23 15.47 2.81 22.45l-19.64 25.27c-5.42 6.98-15.48 8.23-22.46 2.81z"/></svg>',LineMarkerToolbarItem=function(){return function(){this.name="line-marker",this.tooltipText="Line",this.icon=Icon$2,this.markerType=LineMarker}}(),RectMarker=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),SvgHelper.setAttributes(this.visual,[["class","rect-marker"]])},e.createMarker=function(){var t=new e;return t.setup(),t},e}(RectMarkerBase),Icon$3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"/></svg>',RectMarkerToolbarItem=function(){return function(){this.name="rect-marker",this.tooltipText="Rectangle",this.icon=Icon$3,this.markerType=RectMarker}}(),OkIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>',DeleteIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"/></svg>',CloseIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>',Logo='<svg viewBox="0 0 112 96" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path fill="#e5f20d" fill-opacity=".647" d="M0 40.386h111.96V95.62H0z"/><path d="M93.61 61.452c0 .987-.328 1.831-.987 2.53-.657.7-1.52 1.048-2.591 1.048-1.481 0-2.222-.74-2.222-2.22 0-16.617-.533-29.347-1.604-38.192-1.068-8.842-2.92-13.265-5.552-13.265-4.443 0-10.94 15.509-19.497 46.52v.124c0 .987-.328 1.831-.987 2.53-.657.7-1.52 1.048-2.592 1.048-1.48 0-2.22-.74-2.22-2.22 0-3.29.165-8.392.493-15.302.33-7.732.494-13.82.494-18.262 0-6.17-.186-10.55-.556-13.142-.37-2.591-1.172-3.887-2.406-3.887-2.796 0-6.333 5.12-10.612 15.363C38.494 34.367 34.01 46.44 29.32 60.34l-1.11 3.209a5.714 5.714 0 0 1-1.42 2.097c-.617.578-1.295.864-2.036.864-.987 0-1.644-.081-1.974-.247-.328-.162-.533-.656-.617-1.48-.41-4.03-.74-9.418-.987-16.165-.163-1.728-.329-4.566-.494-8.515-.822-13.901-1.562-23.3-2.221-28.196-.657-4.893-.987-7.628-.987-8.205 0-.657.33-1.44.987-2.345.659-.903 1.276-1.357 1.85-1.357 1.319 0 2.387.947 3.21 2.838.411.906.863 4.526 1.357 10.859.493 6.335.905 14.19 1.233 23.568l.617 18.88c4.527-13.983 9.216-26.673 14.068-38.068C45.65 6.686 50.093.988 54.123.988c2.715 0 4.566 1.974 5.553 5.923.987 3.949 1.481 9.667 1.481 17.152 0 3.949-.081 9.625-.247 17.029l-.123 5.676c3.373-11.762 6.725-21.634 10.057-29.615 3.331-7.979 6.685-11.97 10.056-11.97 8.475 0 12.71 18.757 12.71 56.269z" fill-rule="nonzero"/></svg>',CircleMarker=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),this.markerCircle=SvgHelper.createCircle(this.width/2),this.addToRenderVisual(this.markerCircle),SvgHelper.setAttributes(this.visual,[["class","circle-marker"]])},e.prototype.resize=function(e,r){t.prototype.resize.call(this,e,r),this.markerCircle.setAttribute("rx",(this.width/2).toString()),this.markerCircle.setAttribute("ry",(this.height/2).toString())},e.createMarker=function(){var t=new e;return t.setup(),t},e}(RectangularMarkerBase),Icon$4='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><ellipse stroke="#000" ry="260" rx="260" cy="300" cx="300" stroke-width="60" fill="rgba(0,0,0,0)"/></svg>',CircleMarkerToolbarItem=function(){return function(){this.name="circle-marker",this.tooltipText="Circle",this.icon=Icon$4,this.markerType=CircleMarker}}(),MarkerArea=function(){return function(t){var e=this;this.toolbars=[{icon:DeleteIcon,name:"delete",tooltipText:"Delete"},{name:"separator",tooltipText:""},new CircleMarkerToolbarItem,new RectMarkerToolbarItem,new HighlightMarkerToolbarItem,new LineMarkerToolbarItem,new ArrowMarkerToolbarItem,{name:"separator",tooltipText:""},{icon:OkIcon,name:"ok",tooltipText:"OK"},{icon:CloseIcon,name:"close",tooltipText:"Close"}],this.scale=1,this.show=function(t,r){e.completeCallback=t,e.cancelCallback=r,e.open(),e.showUI()},this.open=function(){e.setTargetRect(),e.initMarkerCanvas(),e.attachEvents(),e.setStyles(),Activator.isLicensed||e.adLogo(),window.addEventListener("resize",e.adjustUI)},this.render=function(t,r){e.completeCallback=t,e.cancelCallback=r,e.selectMarker(null),e.startRender(e.renderFinished)},this.close=function(){e.toolbarUI&&document.body.removeChild(e.toolbarUI),e.markerImage&&document.body.removeChild(e.markerImageHolder),e.logoUI&&document.body.removeChild(e.logoUI)},this.addMarker=function(t){var r,i,n=t.createMarker();if(n.onSelected=e.selectMarker,n.defs&&n.defs.length>0)try{for(var o=__values(n.defs),a=o.next();!a.done;a=o.next()){var s=a.value;s.id&&!e.markerImage.getElementById(s.id)&&e.defs.appendChild(s)}}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}e.markers.push(n),e.selectMarker(n),e.markerImage.appendChild(n.visual);var l=n.visual.getBBox(),c=e.width/2/e.scale-l.width/2,u=e.height/2/e.scale-l.height/2,p=n.visual.transform.baseVal.getItem(0);p.setMatrix(p.matrix.translate(c,u)),n.visual.transform.baseVal.replaceItem(p,0)},this.deleteActiveMarker=function(){e.activeMarker&&e.deleteMarker(e.activeMarker)},this.setTargetRect=function(){var t=e.target.getBoundingClientRect(),r=document.body.parentElement.getBoundingClientRect();e.targetRect={left:t.left-r.left,top:t.top-r.top}},this.startRender=function(t){(new Renderer).rasterize(e.target,e.markerImage,t)},this.attachEvents=function(){e.markerImage.addEventListener("mousedown",e.mouseDown),e.markerImage.addEventListener("mousemove",e.mouseMove),e.markerImage.addEventListener("mouseup",e.mouseUp)},this.mouseDown=function(t){e.activeMarker&&(1&t.buttons)>0&&(e.activeMarker.deselect(),e.activeMarker=null)},this.mouseMove=function(t){e.activeMarker&&(1&t.buttons)>0&&e.activeMarker.manipulate(t)},this.mouseUp=function(t){e.activeMarker&&e.activeMarker.endManipulation()},this.initMarkerCanvas=function(){e.markerImageHolder=document.createElement("div"),e.markerImageHolder.id="markerjs-canvas",e.markerImageHolder.style.setProperty("touch-action","none"),e.markerImageHolder.style.setProperty("-ms-touch-action","none"),e.markerImage=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.markerImage.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.markerImage.setAttribute("width",e.width.toString()),e.markerImage.setAttribute("height",e.height.toString()),e.markerImage.setAttribute("viewBox","0 0 "+e.width.toString()+" "+e.height.toString()),e.markerImageHolder.style.position="absolute",e.markerImageHolder.style.width=e.width+"px",e.markerImageHolder.style.height=e.height+"px",e.markerImageHolder.style.transformOrigin="top left",e.positionMarkerImage(),e.defs=SvgHelper.createDefs(),e.markerImage.appendChild(e.defs),e.markerImageHolder.appendChild(e.markerImage),document.body.appendChild(e.markerImageHolder)},this.adjustUI=function(t){e.adjustSize(),e.positionUI()},this.adjustSize=function(){e.width=e.target.clientWidth,e.height=e.target.clientHeight;var t=e.target.clientWidth/e.markerImageHolder.clientWidth;1!==t&&(e.scale*=t,e.markerImageHolder.style.width=e.width+"px",e.markerImageHolder.style.height=e.height+"px",e.markerImageHolder.style.transform="scale("+e.scale+")")},this.positionUI=function(){e.setTargetRect(),e.positionMarkerImage(),e.positionToolbar(),e.logoUI&&e.positionLogo()},this.positionMarkerImage=function(){e.markerImageHolder.style.top=e.targetRect.top+"px",e.markerImageHolder.style.left=e.targetRect.left+"px"},this.positionToolbar=function(){e.toolbarUI.style.left=e.targetRect.left+e.target.offsetWidth-e.toolbarUI.clientWidth+"px",e.toolbarUI.style.top=e.targetRect.top-e.toolbarUI.clientHeight+"px"},this.showUI=function(){e.toolbar=new Toolbar(e.toolbars,e.toolbarClick),e.toolbarUI=e.toolbar.getUI(),document.body.appendChild(e.toolbarUI),e.toolbarUI.style.position="absolute",e.positionToolbar()},this.setStyles=function(){var t=document.createElementNS("http://www.w3.org/2000/svg","style");t.innerHTML='\n            .rect-marker .render-visual {\n                stroke: #ff0000;\n                stroke-width: 3;\n                fill: transparent;\n            }\n            .cover-marker .render-visual {\n                stroke-width: 0;\n                fill: #000000;\n            }\n            .highlight-marker .render-visual {\n                stroke: transparent;\n                stroke-width: 0;\n                fill: #ffff00;\n                fill-opacity: 0.4;\n            }\n            .line-marker .render-visual {\n                stroke: #ff0000;\n                stroke-width: 3;\n                fill: transparent;\n            }\n            .arrow-marker .render-visual {\n                stroke: #ff0000;\n                stroke-width: 3;\n                fill: transparent;\n            }\n            .arrow-marker-tip {\n                stroke-width: 0;\n                fill: #ff0000;\n            }\n            .text-marker text {\n                fill: #ff0000;\n                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",\n                    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",\n                    "Segoe UI Emoji", "Segoe UI Symbol";\n            }\n            .markerjs-rect-control-box .markerjs-rect-control-rect {\n                stroke: black;\n                stroke-width: 1;\n                stroke-opacity: 0.5;\n                stroke-dasharray: 3, 2;\n                fill: transparent;\n            }\n            .markerjs-control-grip {\n                fill: #cccccc;\n                stroke: #333333;\n                stroke-width: 2;\n            }\n        ',e.markerImage.appendChild(t)},this.toolbarClick=function(t,r){if(r.markerType)e.addMarker(r.markerType);else switch(r.name){case"delete":e.deleteActiveMarker();break;case"pointer":e.activeMarker&&e.selectMarker(null);break;case"close":e.cancel();break;case"ok":e.complete()}},this.selectMarker=function(t){e.activeMarker&&e.activeMarker!==t&&e.activeMarker.deselect(),e.activeMarker=t},this.deleteMarker=function(t){e.markerImage.removeChild(t.visual),e.activeMarker===t&&(e.activeMarker=null),e.markers.splice(e.markers.indexOf(t),1)},this.complete=function(){e.selectMarker(null),e.startRender(e.renderFinishedClose)},this.cancel=function(){e.close(),e.cancelCallback&&e.cancelCallback()},this.renderFinished=function(t){e.completeCallback(t)},this.renderFinishedClose=function(t){e.close(),e.completeCallback(t)},this.positionLogo=function(){e.logoUI&&(e.logoUI.style.left=e.targetRect.left+10+"px",e.logoUI.style.top=e.targetRect.top+e.target.offsetHeight-e.logoUI.clientHeight-10+"px")},this.adLogo=function(){e.logoUI=document.createElement("div"),e.logoUI.className="markerjs-logo";var t=document.createElement("a");t.href="https://markerjs.com/",t.target="_blank",t.innerHTML=Logo,t.title="Powered by marker.js",e.logoUI.appendChild(t),document.body.appendChild(e.logoUI),e.logoUI.style.position="absolute",e.positionLogo()},this.target=t,this.width=t.clientWidth,this.height=t.clientHeight,this.markers=[],this.activeMarker=null}}(),CoverMarker=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),SvgHelper.setAttributes(this.visual,[["class","cover-marker"]])},e.createMarker=function(){var t=new e;return t.setup(),t},e}(RectMarkerBase),OkIcon$1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>',CancelIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>',TextMarker=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.MIN_SIZE=50,e.DEFAULT_TEXT="Double-click to edit text",e.text=e.DEFAULT_TEXT,e.inDoubleTap=!1,e.renderText=function(){for(var t,r;e.textElement.lastChild;)e.textElement.removeChild(e.textElement.lastChild);var i=e.text.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);try{for(var n=__values(i),o=n.next();!o.done;o=n.next()){var a=o.value;""===a.trim()&&(a=" "),e.textElement.appendChild(SvgHelper.createTSpan(a,[["x","0"],["dy","1.2em"]]))}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}setTimeout(e.sizeText,10)},e.sizeText=function(){var t=e.textElement.getBBox(),r=0,i=0,n=1;if(t.width>0&&t.height>0){var o=1*e.width/t.width,a=1*e.height/t.height;n=Math.min(o,a),r=(e.width-t.width*n)/2,i=(e.height-t.height*n)/2}e.textElement.transform.baseVal.getItem(0).setTranslate(r,i),e.textElement.transform.baseVal.getItem(1).setScale(n,n)},e.onDblClick=function(t){e.showEditor()},e.onTap=function(t){e.inDoubleTap?(e.inDoubleTap=!1,e.showEditor()):(e.inDoubleTap=!0,setTimeout(function(){e.inDoubleTap=!1},300))},e.showEditor=function(){e.editor=document.createElement("div"),e.editor.className="markerjs-text-editor",e.editorTextArea=document.createElement("textarea"),e.text!==e.DEFAULT_TEXT&&(e.editorTextArea.value=e.text),e.editorTextArea.addEventListener("keydown",e.onEditorKeyDown),e.editor.appendChild(e.editorTextArea),document.body.appendChild(e.editor);var t=document.createElement("div");t.className="markerjs-text-editor-button-bar",e.editor.appendChild(t);var r=document.createElement("div");r.className="markerjs-text-editor-button",r.innerHTML=OkIcon$1,r.addEventListener("click",e.onEditorOkClick),t.appendChild(r);var i=document.createElement("div");i.className="markerjs-text-editor-button",i.innerHTML=CancelIcon,i.addEventListener("click",e.closeEditor),t.appendChild(i)},e.onEditorOkClick=function(t){e.editorTextArea.value.trim()?e.text=e.editorTextArea.value:e.text=e.DEFAULT_TEXT,e.renderText(),e.closeEditor()},e.closeEditor=function(){document.body.removeChild(e.editor)},e.onEditorKeyDown=function(t){"Enter"===t.key&&t.ctrlKey&&(t.preventDefault(),e.onEditorOkClick(null))},e}return __extends(e,t),e.prototype.setup=function(){t.prototype.setup.call(this),this.textElement=SvgHelper.createText(),this.addToRenderVisual(this.textElement),SvgHelper.setAttributes(this.visual,[["class","text-marker"]]),this.textElement.transform.baseVal.appendItem(SvgHelper.createTransform()),this.textElement.transform.baseVal.appendItem(SvgHelper.createTransform()),this.renderText(),this.visual.addEventListener("dblclick",this.onDblClick),this.visual.addEventListener("touchstart",this.onTap)},e.prototype.resize=function(e,r){t.prototype.resize.call(this,e,r),this.sizeText()},e.createMarker=function(){var t=new e;return t.setup(),t},e}(RectangularMarkerBase);function styleInject(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var css=".markerjs-logo {\n    display: inline-block;\n    margin: 0px;\n    padding: 0px;\n\n    fill: #333333;\n}\n\n.markerjs-logo a {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    padding: 3px;\n    width: 20px;\n    height: 20px;\n}\n\n.markerjs-logo a:hover {\n    fill: #ff8080;\n}\n\n.markerjs-toolbar {\n    background-color: #cccccc;\n    padding: 0px 5px;\n    margin: 0px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n\n    display: grid;\n    grid-template-columns: repeat(20, auto);\n}\n\n\n.markerjs-toolbar-button, .markerjs-toolbar-logo a {\n    display: inline-block;\n    margin: 2px;\n    padding: 3px;\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n    border-radius: 2px;\n    border-bottom: transparent solid 1px;\n    border-right: transparent solid 1px;\n\n\n    fill: #333333;\n\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.markerjs-toolbar-separator {\n    margin: 5px 5px;\n    border: 1px solid #dddddd;\n}\n\n.markerjs-toolbar-button:hover, .markerjs-toolbar-logo a:hover {\n    background-color: #eeeeee;\n    background: radial-gradient(#eeeeee, #cccccc);\n\n    fill: #ff8080;\n}\n\n.markerjs-toolbar-button svg {\n    height: 16px;\n}\n\n.markerjs-text-editor {\n    position: fixed;\n    z-index: 20000;\n    left: 0px;\n    top: 0px;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0,0,0,0.9);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.markerjs-text-editor textarea {\n    width: 50%;\n    min-width: 50px;\n    max-width: 500px;\n    height: 50%;\n    min-height: 50px;\n    max-height: 500px;\n}\n\n.markerjs-text-editor .markerjs-text-editor-button-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 50%;\n    min-width: 50px;\n    max-width: 500px;\n    padding-top: 10px;\n}\n.markerjs-text-editor .markerjs-text-editor-button {\n    display: grid;\n    align-items: center;\n    padding: 0px;\n    margin-left: 15px;\n    width: 20px;\n    height: 20px;\n\n    cursor: pointer;\n\n    fill: #888888;\n}\n.markerjs-text-editor .markerjs-text-editor-button:hover {\n    fill: #ff8080;\n}";styleInject(css);export{Activator,MarkerArea,ArrowMarker,CoverMarker,HighlightMarker,LineMarker,RectMarker,TextMarker};
