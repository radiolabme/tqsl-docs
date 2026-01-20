/**********************************************************************
 * iNavigate.js  iNavigate 4.0                              Dec 01 2002
 *
 * Dynamic Tree Menu for MS IE 4.0+ Netscape 6.0+ and Opera 7.0+.
 * 
 * FREE EDITION
 * You may use this code on public or private web sites only if this
 * copyright statement appears intact and you publicly display a link 
 * to http://www.cirkadia.com.
 * 
 * This code is provided "as is" without warranty of any kind.
 * Cirkadia further disclaims all implied warranties including fitness 
 * for any particular purpose. The entire risk arising out of the use 
 * or performace of this code remains with you.
 * 
 * Contact productinfo@cirkadia.com for any other usage.
 * 
 * SERVER, ENTERPRISE & PRODUCT EDITION
 * Your rights to use and deploy iNavigate are in accordance with the type 
 * of license that you purchased and are subject to the complete license statement 
 * which may be found in the accompanying license.txt file, please read this carefully.
 *
 * Copyright © 1998-2002  Cirkadia Ltd.  All rights reserved.
 * 
 * http://www.cirkadia.com
 * 
 **********************************************************************/ 
function Browser(){
this.IE4plus=false;
this.IE51beta=false;
this.Gecko=false;
this.Gecko09plus=false;
this.Gecko09minus=false;
this.Opera=false;
this.Mac=false;
this.Version=0;
var sVersion='';
nStart=navigator.userAgent.indexOf('Opera')
if(nStart!=-1){
this.Opera=true;
sVersion=navigator.userAgent.substring(nStart+6);
if(parseInt(sVersion)>=7){
this.Opera=false;
this.Gecko=true;
this.Gecko09plus=false;
this.Gecko09minus=false;}}else{
nStart=navigator.userAgent.indexOf('Gecko');
if(nStart!=-1){
this.Gecko=true;
var nGeckoDate=parseInt(navigator.userAgent.substring(nStart+6,nStart+14));
this.Gecko09plus=(nGeckoDate>=20010505);
this.Gecko09minus=!this.Gecko09plus;
sVersion=navigator.appVersion;}
else if(document.all){
this.IE4plus=true;
sVersion=navigator.userAgent.substring(navigator.userAgent.indexOf('MSIE ')+5);
sVersion=sVersion.substring(0,4);
if(sVersion=='5.1b') this.IE51beta=true;
sVersion=sVersion.substring(0,3);}}
this.Version=Math.floor(parseFloat(sVersion) * 10) / 10;
this.Mac=navigator.appVersion.indexOf('Macintosh')!=-1 ? true : false;
if(this.IE4plus){
this.DisplayShow='';
this.DisplayHide='none';}else{
this.DisplayShow='block';
this.DisplayHide='none';}}
var oBrowser=new Browser();
function iNavigate(){
this.Frames=false;
this.GroupName='';
this.GroupTitle='';
this.HomePage='index.htm';
this.InitiallyOpen=false;
this.PreserveState=true;
this.RightToLeft=false;
this.ConvertLink=true;
this.AutoClose=false;
this.AutoCloseCurrent=false;
this.ConvertParent=false;
this.MatchQueryString=false;
this.PageSearch=new PageSearch();
this.GeckoPassive=false;
this.NodeBlankName=/Blank/i;
this.NodeMinusName='Minus';
this.NodePlusName='Plus';
this.NodePlusTitle='Open Menu';
this.NodeMinusTitle='Close Menu';
this.OpenOnClick=false;
this.PointerName='pointer';
this.PointerBlankName='blank';
this.PathAsText=false;
this.PathSeparator='';
this.Path='';
this._oCurrentMenuItem;
this._nCurrentMenuNo;
this._FrameWindow;}
iNavigate.prototype.BeforeLoad=iNavigate_BeforeLoad;
iNavigate.prototype.AfterLoad=iNavigate_AfterLoad;
iNavigate.prototype.CloseAll=iNavigate_CloseAll;
iNavigate.prototype.OpenAll=iNavigate_OpenAll;
iNavigate.prototype.Locate=iNavigate_Locate;
iNavigate.prototype.LocateFrame=iNavigate_LocateFrame;
iNavigate.prototype.MoveNext=iNavigate_MoveNext;
iNavigate.prototype.MovePrevious=iNavigate_MovePrevious;
iNavigate.prototype.PrepareFrame=iNavigate_PrepareFrame;
iNavigate.prototype.menuAll='iNavigateAll';
iNavigate.prototype.menuId='iNavigateMenu';
iNavigate.prototype.menuBodyId='iNavigateMenuBody';
iNavigate.prototype.menuItemId='iNavigateItem';
iNavigate.prototype.menuBoxId='iNavigateMenuBox';
iNavigate.prototype.menuNodeId='iNavigateMenuNode';
iNavigate.prototype.pointerId='iNavigatePointer';
iNavigate.prototype.pathId='iNavigatePath';
iNavigate.prototype.cookiePrefix='iNavigate_';
iNavigate.prototype.menuNoAttr='menuNo';
iNavigate.prototype.menuNodePathAttr='nodePath';
iNavigate.prototype.menuNodeQueryAttr='nodeQuery';
iNavigate.prototype.currentMenuAttr='menuCurrent';
iNavigate.prototype.openMenuAttr='menuOpen';
var iNavigate=new iNavigate();
var xMenu;
var xMenuBody;
var xMenuBox;
var xMenuBoxPlusImage;
var xMenuBoxMinusImage;
var xHref;
var bReady=false;
function iNavigate_BeforeLoad(){
if(oBrowser.Gecko&&iNavigate.GeckoPassive==true) oBrowser.Gecko=false;
if(!oBrowser.IE4plus&&!oBrowser.Gecko&&!oBrowser.Opera) return;
var i;
if(iNavigate.AutoClose==true) iNavigate.PreserveState=false;
if(iNavigate.GroupTitle.length==0) iNavigate.GroupTitle=iNavigate.GroupName;
var oAll=GetFirstElement(document,iNavigate.menuAll,'span');
if(!oBrowser.Gecko09minus) oAll.style.display=oBrowser.DisplayHide;
var bFirstTime=GetGroupLoaded();
var bLoadOpen=bFirstTime ? iNavigate.InitiallyOpen : false;
if(bFirstTime) SetGroupLoaded();
if(!iNavigate.Frames) iNavigate.PageSearch.Initialize(window);
xMenu=GetElements(document,iNavigate.menuId,'span');
xMenuBody=new Array(xMenu.length);
for(i=0;i<xMenu.length;i++){
xMenu[i].setAttribute(iNavigate.menuNoAttr,i);
xMenuBody[i]=GetFirstElement(xMenu[i],iNavigate.menuBodyId,'span');
if(xMenuBody[i]){
if(bLoadOpen){
SetMenuCookie(xMenu[i],true);}else{
if(GetMenuCookie(xMenu[i])==false){
xMenuBody[i].style.display=oBrowser.DisplayHide;}}}}
var xItem=GetElements(document,iNavigate.menuItemId,'a');
xHref=new Array(xItem.length);
for(i=0;i<xItem.length;i++){
xHref[i]=xItem[i].href;}
if(!iNavigate.Frames){
for(i=0;i<xItem.length;i++){
oItem=xItem[i];
if(iNavigate.PageSearch.MatchesLink(oItem)==true){
iNavigate._oCurrentMenuItem=oItem;
iNavigate._nCurrentMenuNo=i;
_OpenAncestorNodes(oItem)
_SetItemPointer(iNavigate._oCurrentMenuItem);
break;}}}
xMenuBox=new Array(xMenu.length);
xMenuBoxPlusImage=new Array(xMenu.length);
xMenuBoxMinusImage=new Array(xMenu.length);
for(i=0;i<xMenu.length;i++){
xMenuBox[i]=GetFirstElement(xMenu[i],iNavigate.menuBoxId,'img');
if(xMenuBox[i]){
xMenuBox[i].setAttribute(iNavigate.menuNoAttr,i);
xMenuBoxPlusImage[i]=new Image();
xMenuBoxPlusImage[i].src=xMenuBox[i].src.replace(iNavigate.NodeBlankName,iNavigate.NodePlusName);
xMenuBoxMinusImage[i]=new Image();
xMenuBoxMinusImage[i].src=xMenuBox[i].src.replace(iNavigate.NodeBlankName,iNavigate.NodeMinusName);
_ActivateMenu(i);
if(iNavigate.PreserveState==false) SetMenuCookie(xMenu[i],false,true);}}
oAll.style.display=oBrowser.DisplayShow;
bReady=true;}
function iNavigate_PrepareFrame(oWindow){
iNavigate.PageSearch=new PageSearch();
iNavigate._FrameWindow=oWindow;}
function iNavigate_LocateFrame(){
if(!oBrowser.IE4plus&&!oBrowser.Gecko&&!oBrowser.Opera) return;
if(!bReady) return;
_ClearItemPointer(iNavigate._oCurrentMenuItem);
iNavigate.PageSearch.Initialize(iNavigate._FrameWindow);
var xItem=GetElements(document,iNavigate.menuItemId,'a');
if(iNavigate.AutoClose==true){
for(i=0;i<xMenu.length;i++){
oMenu=xMenu[i];
oMenuBox=xMenuBox[i];
oMenuBody=xMenuBody[i];
if(oMenuBody){
if(oMenuBody.getAttribute(iNavigate.openMenuAttr)!='1'){
oMenuBody.style.display=oBrowser.DisplayHide;
oMenuBox.src=xMenuBoxPlusImage[i].src;
oMenuBox.title=iNavigate.NodePlusTitle;}
oMenuBody.setAttribute(iNavigate.openMenuAttr,'0');}}}
if(oBrowser.Gecko09plus){
var oAll=GetFirstElement(document,iNavigate.menuAll,'span');
oAll.style.display=oBrowser.DisplayHide;}
for(i=0;i<xItem.length;i++){
oItem=xItem[i];
oMenuBox=xMenuBox[i];
oMenuBody=xMenuBody[i];
if(iNavigate.PageSearch.MatchesLink(oItem)==true){
iNavigate._oCurrentMenuItem=oItem;
iNavigate._nCurrentMenuNo=i;
_OpenAncestorNodes(oItem);
_SetItemPointer(iNavigate._oCurrentMenuItem);
break;}}
if(oBrowser.Gecko09plus){
oAll.style.display=oBrowser.DisplayShow;}
for(i=0;i<xMenu.length;i++){
_SetMenuBox(i);}
_SetPath(iNavigate._FrameWindow,false);
_ShowNavigationAid(iNavigate._FrameWindow,'iNavigateOpenAll');
_ShowNavigationAid(iNavigate._FrameWindow,'iNavigateCloseAll');
_ShowNavigationAid(iNavigate._FrameWindow,'iNavigateLocate');
_ShowNavigationAid(iNavigate._FrameWindow,'iNavigateMoveNext');
_ShowNavigationAid(iNavigate._FrameWindow,'iNavigateMovePrevious');}
function _OpenAncestorNodes(oItem){
var i;
for(i=0;i<xMenu.length;i++){
xMenu[i].setAttribute(iNavigate.currentMenuAttr,'0');}
while (oItem){
if(oBrowser.Gecko||oBrowser.Opera) oItem=oItem.parentNode;
if(oBrowser.IE4plus) oItem=oItem.parentElement;
if(oItem){
if(oItem.id==iNavigate.menuId){
break;}
else if(oItem.id==iNavigate.menuBodyId){
oItem.style.display=oBrowser.DisplayShow;
break;}}}
while (oItem){
if(oBrowser.Gecko||oBrowser.Opera) oItem=oItem.parentNode;
if(oBrowser.IE4plus) oItem=oItem.parentElement;
if(oItem){
if(oItem.id==iNavigate.menuId){
SetMenuCookie(oItem,true);
oItem.setAttribute(iNavigate.currentMenuAttr,'1');}
else if(oItem.id==iNavigate.menuBodyId){
oItem.style.display=oBrowser.DisplayShow;}}}}
function _SetItemPointer(oItem){
if(oItem){
if(oBrowser.IE4plus){
oImagePointer=GetFirstElement(oItem.parentElement.parentElement.parentElement,iNavigate.pointerId,'img');}
else if(oBrowser.Gecko||oBrowser.Opera){
oImagePointer=GetFirstElement(oItem.parentNode.parentNode.parentNode,iNavigate.pointerId,'img');}
if(oImagePointer) oImagePointer.src=oImagePointer.src.replace(iNavigate.PointerBlankName,iNavigate.PointerName);}}
function _ClearItemPointer(oItem){
if(oItem){
if(oBrowser.IE4plus){
oImagePointer=GetFirstElement(oItem.parentElement.parentElement.parentElement,iNavigate.pointerId,'img');}
else if(oBrowser.Gecko||oBrowser.Opera){
oImagePointer=GetFirstElement(oItem.parentNode.parentNode.parentNode,iNavigate.pointerId,'img');}
if(oImagePointer) oImagePointer.src=oImagePointer.src.replace(iNavigate.PointerName,iNavigate.PointerBlankName);}}
function _SetMenuBox(nMenu){
if(xMenuBody[nMenu]){
if(GetMenuCookie(xMenu[nMenu])==true){
xMenuBox[nMenu].src=xMenuBoxMinusImage[nMenu].src;
xMenuBox[nMenu].title=iNavigate.NodeMinusTitle;}else{
xMenuBox[nMenu].src=xMenuBoxPlusImage[nMenu].src;
xMenuBox[nMenu].title=iNavigate.NodePlusTitle;}}}
function _ActivateMenu(nMenu){
if(oBrowser.Opera) return;
var oLink;
var oSpan;
var oMenuNode;
oMenu=xMenu[nMenu];
oMenuBox=xMenuBox[nMenu];
oMenuBody=xMenuBody[nMenu];
if(oMenuBody){
oLink=GetFirstElement(oMenu,iNavigate.menuItemId);
if(oLink){
oSpan=oLink;
while (oSpan.tagName!='SPAN'){
if(oBrowser.Gecko||oBrowser.Opera) oSpan=oSpan.parentNode;
if(oBrowser.IE4plus) oSpan=oSpan.parentElement;}
if(oSpan.id==iNavigate.menuNodeId){
if(IsJavaScriptURL(oLink.href)){
oMenu.setAttribute(iNavigate.menuNodePathAttr,oLink.href.toLowerCase());}else{
oMenu.setAttribute(iNavigate.menuNodePathAttr,NormalizePathName(oLink.pathname));}
oMenu.setAttribute(iNavigate.menuNodeQueryAttr,NormalizeQueryString(oLink.search));}}
oMenuNode=GetFirstElement(oMenu,iNavigate.menuNodeId)
if(oBrowser.IE4plus){
oMenuBox.onclick=iNavigate_MenuBoxClick;
oMenuNode.onclick=iNavigate_MenuNodeClick;
oMenuBody.onclick=iNavigate_CancelEventPropagation;}
else if(oBrowser.Gecko){
oMenuBox.addEventListener('click',iNavigate_MenuBoxClick,false);
oMenuNode.addEventListener('click',iNavigate_MenuNodeClick,false);
oMenuBody.addEventListener('click',iNavigate_CancelEventPropagation,false);}
if(oBrowser.IE4plus){
oMenuBox.style.cursor='hand';
oMenuNode.style.cursor='hand';}
else if(oBrowser.Gecko){
oMenuBox.style.cursor='pointer';
oMenuNode.style.cursor='pointer';}
_SetMenuBox(nMenu);}}
function iNavigate_AfterLoad(){
if(!oBrowser.IE4plus&&!oBrowser.Gecko) return;
var bConvert=(iNavigate.Frames||iNavigate.ConvertLink==false||(!iNavigate.PageSearch._bMatchLocation&&iNavigate.ConvertParent==false)) ? false : true;
_SetPath(window,bConvert);
if(bConvert){
if(iNavigate._oCurrentMenuItem ){
if(oBrowser.IE4plus){
if(oBrowser.IE51beta){
return;}
else if(oBrowser.Mac&&oBrowser.Version==5.0){
var oSpan=iNavigate._oCurrentMenuItem;
while (oSpan.tagName!='SPAN'){
oSpan=oSpan.parentElement;}
if(oSpan.id==iNavigate.menuNodeId) return;}
iNavigate._oCurrentMenuItem.outerHTML='<em class=iNavigateCurrentPage>'+iNavigate._oCurrentMenuItem.innerHTML+'</em>';}
else if(oBrowser.Gecko||oBrowser.Opera){
oElement=document.createElement('EM');
oElement.setAttribute('class','iNavigateCurrentPage');
var oNode=iNavigate._oCurrentMenuItem.firstChild;
while (oNode){
oElement.appendChild(oNode.cloneNode(true));
oNode=oNode.nextSibling;}
iNavigate._oCurrentMenuItem.parentNode.replaceChild(oElement,iNavigate._oCurrentMenuItem);}}}
_ShowNavigationAid(window,'iNavigateOpenAll');
_ShowNavigationAid(window,'iNavigateCloseAll');
_ShowNavigationAid(window,'iNavigateLocate');
_ShowNavigationAid(window,'iNavigateMoveNext');
_ShowNavigationAid(window,'iNavigateMovePrevious');}
function _ShowNavigationAid(oWindow,id){
var o=GetFirstElement(oWindow.document,id,'span');
if(o){
var s=UnComment(o.innerHTML)
if(s.length>0){
o.innerHTML=s;}}}
function UnComment(string){
var s=string;
var lStart=s.indexOf('<!--');
var lEnd=s.indexOf('-->');
if(lStart>-1&&lEnd>-1){
s=s.substring(lStart+4,lEnd);
return s;}else{
return '';}}
function _SetPath(oWindow,bConvert){
if(oBrowser.Opera) return;
var oItem=iNavigate._oCurrentMenuItem;
var oNode;
var sPath;
var bSkip=false;
if(iNavigate.PathSeparator.length==0){
iNavigate.PathSeparator=(iNavigate.RightToLeft) ? '&#160;&lt;&#160;' : '&#160;&gt;&#160;';}
if(oItem){
if(oItem.id==iNavigate.menuItemId){
if(bConvert||iNavigate.PathAsText==true){
if(oBrowser.IE4plus) sPath=oItem.innerText;
if(oBrowser.Gecko) sPath=oItem.innerHTML;}else{
if(oBrowser.IE4plus) sPath=oItem.outerHTML;
if(oBrowser.Gecko) sPath=oItem.parentNode.innerHTML;}}}
if(oItem){
if(oBrowser.Gecko) oItem=oItem.parentNode;
if(oBrowser.IE4plus) oItem=oItem.parentElement;}
while (oItem){
if(oItem.tagName=='SPAN'&&oItem.id=='iNavigateMenuNode') bSkip=true;
if(oItem.id==iNavigate.menuId){
oNode=GetFirstElement(oItem,iNavigate.menuNodeId);
if(oNode){
if(bSkip){
bSkip=false;}else{
sPath=_AddPathElement(sPath,_GetPathElement(oNode))}}}
if(oBrowser.Gecko) oItem=oItem.parentNode;
if(oBrowser.IE4plus) oItem=oItem.parentElement;}
if(iNavigate.GroupName.length>0){
sPath=_AddPathElement(sPath,iNavigate.GroupTitle);}
iNavigate.Path=sPath;
var oPath=GetFirstElement(oWindow.document,iNavigate.pathId,'span');
if(oPath){
oPath.innerHTML=sPath;}}
function _GetPathElement(oNode){
var sElement;
if(iNavigate.PathAsText==true){
if(oBrowser.IE4plus){
sElement=oNode.innerText;}
else if(oBrowser.Gecko){
if(oNode.firstChild.tagName=='A'){
sElement=oNode.firstChild.innerHTML;}else{
sElement=oNode.innerHTML;}}}else{
sElement=oNode.innerHTML;}
return sElement;}
function _AddPathElement(sPath,sElement){
if(iNavigate.RightToLeft){
return sPath+iNavigate.PathSeparator+sElement;}else{
return sElement+iNavigate.PathSeparator+sPath;}}
function iNavigate_OpenAll(){
if(oBrowser.Opera) return;
if(oBrowser.Gecko09plus){
var oAll=GetFirstElement(document,iNavigate.menuAll,'span');
oAll.style.display=oBrowser.DisplayHide;}
for(i=0;i<xMenu.length;i++){
oMenu=xMenu[i];
oMenuBox=xMenuBox[i];
oMenuBody=xMenuBody[i];
if(oMenuBody){
SetMenuCookie(oMenu,true);
oMenuBody.style.display=oBrowser.DisplayShow;
oMenuBox.src=xMenuBoxMinusImage[i].src;
oMenuBox.title=iNavigate.NodeMinusTitle;}}
if(oBrowser.Gecko09plus){
oAll.style.display=oBrowser.DisplayShow;}}
function iNavigate_CloseAll(){
if(oBrowser.Opera) return;
if(oBrowser.Gecko09plus){
var oAll=GetFirstElement(document,iNavigate.menuAll,'span');
oAll.style.display=oBrowser.DisplayHide;}
for(i=0;i<xMenu.length;i++){
oMenu=xMenu[i];
oMenuBox=xMenuBox[i];
oMenuBody=xMenuBody[i];
if(oMenuBody){
SetMenuCookie(oMenu,false);
oMenuBody.style.display=oBrowser.DisplayHide;
oMenuBox.src=xMenuBoxPlusImage[i].src;
oMenuBox.title=iNavigate.NodePlusTitle;}}
if(oBrowser.Gecko09plus){
oAll.style.display=oBrowser.DisplayShow;}}
function iNavigate_Locate(){
if(oBrowser.Opera) return;
if(oBrowser.Gecko09plus){
var oAll=GetFirstElement(document,iNavigate.menuAll,'span');
oAll.style.display=oBrowser.DisplayHide;}
for(i=0;i<xMenu.length;i++){
oMenu=xMenu[i];
oMenuBox=xMenuBox[i];
oMenuBody=xMenuBody[i];
if(oMenuBody){
if(oMenu.getAttribute(iNavigate.currentMenuAttr)=='1'){
SetMenuCookie(oMenu,true);
oMenuBody.style.display=oBrowser.DisplayShow;
oMenuBox.src=xMenuBoxMinusImage[i].src;
oMenuBox.title=iNavigate.NodeMinusTitle;}}}
if(oBrowser.Gecko09plus){
oAll.style.display=oBrowser.DisplayShow;}}
function iNavigate_MoveNext(){
var nItem=iNavigate._nCurrentMenuNo;
nItem++;
if(nItem>=xHref.length) nItem=0;
if(iNavigate.Frames){
iNavigate._FrameWindow.document.location=xHref[nItem];}else{
document.location=xHref[nItem];}}
function iNavigate_MovePrevious(){
var nItem=iNavigate._nCurrentMenuNo;
nItem--;
if(nItem<0) nItem=xHref.length - 1;
if(iNavigate.Frames){
iNavigate._FrameWindow.document.location=xHref[nItem];}else{
document.location=xHref[nItem];}}
function PageSearch(){
this._bMatchLocation=false;
this.page=arguments[0];
this.querystring=arguments[1];}
PageSearch.prototype.MatchesLink=PageSearch_MatchesLink;
PageSearch.prototype.MatchesURL=PageSearch_MatchesURL;
PageSearch.prototype.Initialize=PageSearch_Initialize;
function PageSearch_Initialize(oWindow){
if(!this.page){
this._bMatchLocation=true;
this.page=NormalizePathName(oWindow.location.pathname,iNavigate.HomePage);
if(iNavigate.MatchQueryString==true){
this.querystring=NormalizeQueryString(oWindow.location.search);}}}
function PageSearch_MatchesLink(oLink){
if(IsJavaScriptURL(oLink.href)){
var sPathName=oLink.href.toLowerCase();}else{
if(!oLink.pathname) return false;
var sPathName=NormalizePathName(oLink.pathname);}
if(this._bMatchLocation){
if(this.page!=sPathName) return false;
if(this.querystring){
if(oBrowser.Opera){
if(this.querystring!=NormalizeQueryString(oLink.pathname)) return false;}else{
if(this.querystring!=NormalizeQueryString(oLink.search)) return false;}}}else{
if(typeof this.page=='string'){
if(StringEnds(sPathName,this.page.toLowerCase())==false) return false;}else{
if(!this.page.test(sPathName)) return false;}
if(this.querystring){
if(oBrowser.Opera){
var sQueryString=NormalizeQueryString(oLink.pathname);}else{
var sQueryString=NormalizeQueryString(oLink.search);}
if(typeof this.querystring=='string'){
if(this.querystring.toLowerCase()!=sQueryString) return false;}else{
if(!this.querystring.test(sQueryString)) return false;}}}
return true;}
function PageSearch_MatchesURL(sPathName,sQueryString){
if(!this.page) return false;
if(typeof this.page=='string'){
if(this.page.toLowerCase()!=sPathName) return false;}else{
if(!this.page.test(sPathName)) return false;}
if(this.querystring){
if(typeof this.querystring=='string'){
if(this.querystring.toLowerCase()!=sQueryString) return false;}else{
if(!this.querystring.test(sQueryString)) return false;}}
return true;}
function iNavigate_MenuBoxClick(evt){
var oSource;
if(oBrowser.IE4plus) oSource=window.event.srcElement;
if(oBrowser.Gecko) oSource=evt.currentTarget;
nMenu=oSource.getAttribute(iNavigate.menuNoAttr);
_MenuToggle(nMenu,false,false);}
function iNavigate_MenuNodeClick(evt){
var oSource;
var sNodePath;
var sNodeQuery;
var bOpenOnClick;
var bThisPage;
if(oBrowser.IE4plus) oSource=window.event.srcElement;
if(oBrowser.Gecko) oSource=evt.currentTarget;
while (oSource.id!=iNavigate.menuId){
if(oBrowser.Gecko) oSource=oSource.parentNode;
if(oBrowser.IE4plus) oSource=oSource.parentElement;}
if(oSource){
sNodePath=oSource.getAttribute(iNavigate.menuNodePathAttr);
sNodeQuery=oSource.getAttribute(iNavigate.menuNodeQueryAttr);
nMenu=oSource.getAttribute(iNavigate.menuNoAttr);
var bOpenOnClick=(iNavigate.OpenOnClick&&xMenuBody[nMenu].style.display==oBrowser.DisplayHide);
if(sNodePath){
bThisPage=iNavigate.PageSearch.MatchesURL(sNodePath,sNodeQuery);
if(!bOpenOnClick&&!bThisPage){
return;}}
_MenuToggle(nMenu,bOpenOnClick,bThisPage);}}
function _MenuToggle(nMenu,bPreserveOpenOnClick,bThisPage){
var i;
var oMenu=xMenu[nMenu];
var oMenuBox=xMenuBox[nMenu];
var oMenuBody=xMenuBody[nMenu];
if(oMenuBody){
if(oBrowser.Gecko09plus){
var oAll=GetFirstElement(document,iNavigate.menuAll,'span');
oAll.style.display=oBrowser.DisplayHide;}
if(oMenuBody.style.display==oBrowser.DisplayHide){
SetMenuCookie(oMenu,true);
oMenuBody.style.display=oBrowser.DisplayShow;
oMenuBox.src=xMenuBoxMinusImage[nMenu].src;
oMenuBox.title=iNavigate.NodeMinusTitle;
if(iNavigate.AutoClose==true){
SetMenuCookie(oMenu,(bPreserveOpenOnClick&&!bThisPage),true);
for(i=0;i<xMenu.length;i++){
if(xMenuBody[i]){
xMenuBody[i].setAttribute(iNavigate.openMenuAttr,'0');}}
var oItem=oMenuBody
while (oItem){
if(oItem){
if(oItem.id==iNavigate.menuBodyId){
oItem.setAttribute(iNavigate.openMenuAttr,'1');}
if(oBrowser.Gecko) oItem=oItem.parentNode;
if(oBrowser.IE4plus) oItem=oItem.parentElement;}}
for(i=0;i<xMenu.length;i++){
if(xMenuBody[i]){
if(!((xMenuBody[i].getAttribute(iNavigate.openMenuAttr)=='1')||
((iNavigate.AutoCloseCurrent==false)&&(xMenu[i].getAttribute(iNavigate.currentMenuAttr)=='1')))){
xMenuBody[i].style.display=oBrowser.DisplayHide;
xMenuBox[i].src=xMenuBoxPlusImage[i].src;
xMenuBox[i].title=iNavigate.NodePlusTitle;}}}}}else{
SetMenuCookie(oMenu,false);
oMenuBody.style.display=oBrowser.DisplayHide;
oMenuBox.src=xMenuBoxPlusImage[nMenu].src;
oMenuBox.title=iNavigate.NodePlusTitle;}
if(oBrowser.Gecko09plus){
oAll.style.display=oBrowser.DisplayShow;}}}
function iNavigate_CancelEventPropagation(evt){
if(oBrowser.IE4plus){
window.event.cancelBubble=true;}
else if(oBrowser.Gecko){
evt.cancelBubble=true;}}
function SetMenuCookie(oMenu,bValue,bForce){
var sValue=bValue ? '1' : '0';
var sName=iNavigate.cookiePrefix+iNavigate.GroupName;
var nMenu=oMenu.getAttribute(iNavigate.menuNoAttr);
var sCookie=GetCookie(sName);
while (sCookie.length<nMenu+1){
sCookie=sCookie+'0';}
if(iNavigate.PreserveState||bForce){
sCookie=sCookie.substring(0,nMenu)+sValue+sCookie.substring(nMenu+1);
document.cookie=sName+"="+sCookie+';path=/';}
oMenu.setAttribute('menuOpen',sValue);}
function GetMenuCookie(oMenu){
var bValue=false;
var sName=iNavigate.cookiePrefix+iNavigate.GroupName;
var nMenu=oMenu.getAttribute(iNavigate.menuNoAttr);
var sCookie=GetCookie(sName);
if(sCookie.length>nMenu){
if(sCookie.charAt(nMenu)=='1') bValue=true;}
if(!bValue){
if(oMenu.getAttribute('menuOpen')=='1') bValue=true;}
return bValue;}
function SetGroupLoaded(){
var sName=iNavigate.cookiePrefix+iNavigate.GroupName;
var sCookie=GetCookie(sName);
sCookie='1'+sCookie.substring(1);
document.cookie=sName+'='+sCookie+';path=/';}
function GetGroupLoaded(){
var bValue=false;
var sName=iNavigate.cookiePrefix+iNavigate.GroupName;
bValue=document.cookie.indexOf(sName+'=1')==-1;
return bValue;}
function GetCookie(sName){
var sCookie=document.cookie;
var sSignature=sName+'=';
var nStart=sCookie.indexOf(sSignature);
if(nStart==-1){
sCookie='';}else{
sCookie=sCookie.substring(nStart+sSignature.length);
nStart=sCookie.indexOf(';');
if(nStart>-1){
sCookie=sCookie.substring(0,nStart)}}
return sCookie;}
function NormalizePathName(sPathName,sDefault){
var sBuffer;
var nPos;
nPos=sPathName.indexOf('/');
if(nPos==0){
sBuffer=sPathName;}else{
sBuffer='/'+sPathName;}
if(oBrowser.Opera){
nPos=sPathName.lastIndexOf('?');
if(nPos>-1){
sBuffer=sBuffer.substring(0,nPos);}}
if(sBuffer.length==1){
if(sDefault){
sBuffer=sBuffer+sDefault;}}
return unescape(sBuffer.replace(/\\/g,'/').toLowerCase());}
function NormalizeQueryString(sQueryString){
var sBuffer=sQueryString;
if(sBuffer.length>0){
var nPos=sBuffer.indexOf('?');
if(nPos>-1){
sBuffer=sBuffer.substr(nPos+1);}}
return sBuffer.toLowerCase();}
function IsJavaScriptURL(sString){
return StringStarts(sString.toLowerCase(),'javascript:')}
function GetElements(element,id,tagName){
var i;
var elements=new Array();
if(oBrowser.IE4plus){
if(element.all[id]){
elements=element.all[id];
if(!elements.length) elements=[element.all[id]];}}
else if(oBrowser.Opera){
var temp=new Array();
temp=element.getElementsByTagName(tagName);
for(i=0;i<temp.length;i++){
if(temp[i].id==id){
elements.push(temp[i]);}}}
else if(oBrowser.Gecko){
_GetElementsDOM2(elements,element,id);}
return elements;}
function _GetElementsDOM2(elements,element,id){
var i;
if(element.childNodes){
for(i=0;i<element.childNodes.length;i++){
if(element.childNodes[i].id==id){
elements.push(element.childNodes[i]);}
_GetElementsDOM2(elements,element.childNodes[i],id);}}}
function GetFirstElement(element,id,tagName){
var i;
var reply;
var elements;
if(oBrowser.IE4plus){
if(element.all[id]){
elements=element.all[id];
if(!elements.length){
reply=elements;}else{
reply=elements[0];}}}
else if(oBrowser.Opera){
elements=element.getElementsByTagName(tagName);
for(i=0;i<elements.length;i++){
if(elements[i].id==id){
reply=elements[i];
break;}}}
else if(oBrowser.Gecko){
elements=new Array()
_GetFirstElementDOM2(elements,element,id);
reply=elements[0];}
return reply;}
function _GetFirstElementDOM2(elements,element,id){
var i;
if(element.childNodes){
for(i=0;i<element.childNodes.length;i++){
if(element.childNodes[i].id==id){
elements.push(element.childNodes[i]);
break;}
_GetElementsDOM2(elements,element.childNodes[i],id);
if(elements.length>0) break;}}}
function StringStarts(sString,sEnd){
return (sString.indexOf(sEnd)==0);}
function StringEnds(sString,sEnd){
if(sString.length<sEnd.length) return false;
return (sString.lastIndexOf(sEnd)==sString.length - sEnd.length);}