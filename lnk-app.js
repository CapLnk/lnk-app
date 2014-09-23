/*
LNK-APP (lnk-app.js) - Javascript code for this CapLnk component.

Copyright (C) 2014 by Gregory J Lamoree

This file is part of the LNK-APP component which is part of the
CapLnk (Component - Application - Link) suite of components. 

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

          Polymer('lnk-app', {
              theGlobalValues: null,
              windowwidth: 0,
              windowheight: 0,
              theWidth: 0,
              appWidth: 0,
              menuWidth: 0,
              asideWidth: 0,
              mainWidth: 0,
              ready: function() {
                  console.log(this.nodeName + ": ready.");
                  //console.log(this["menu-definition"], this.$.appMenu["items"]);
                  this.$.lnkGlobals.setAttribute("elementisready",true);
                  this.theWidth = this.parentElement.offsetWidth;
                  //console.log(this.theWidth);
              },
              theBlink: function(theEvent) {
                  console.log("Blink:" + theEvent);
              },
              globalsready: function(theEvent) {
                  console.log("Here: " + this.menudefinition, this.$.appMenu.items);
                  this.lnkGlobals = this.$.lnkGlobals;
                  this.bind("windowwidth", new PathObserver(this.$, "lnkGlobals.allValues['LNK-MEDIA'].windowWidth"));

                  if((this.$.appMenu.getAttribute("align")) == "right") {
                      this.$.appMain.style.cssFloat = "right";
                  } else {
                      this.$.appMain.style.cssFloat = "left";
                  }
                  // Stupid way of getting "menuWidthObserved"" triggered AFTER this.menuWidth has a value other than "auto".
                  var theGlobals = this.lnkGlobals;
                  setTimeout(function () {
                      //this.theWidthChanged(0,0);
                  }, 1);
                  
                  //console.log(this);
                  
                  //this.bind('windowwidth',new PathObserver(this.lnkGlobals, 'LNK-MEDIA.windowHeight'));
                  
                  
                  
              },
              menuorientationChanged: function(oldValue, newValue) {
                  this.$.appMenu.setAttribute("orientation", newValue);
              },
              menualignChanged: function(oldValue, newValue) {
                  this.$.appMenu.setAttribute("align", newValue);
              },
              appMainContentChanged: function(oldValue, newValue) {
                  this.$.lnkDataMain.innerHTML = newValue;
              },
              windowwidthChanged: function(oldValue, newValue) {
                  //console.log("windowwidthChanged");
                  //var internalRef = this;
                  
                  
                  this.$.appAside.style.width = window.getComputedStyle(this.$.appAside).width; // Hack for IE... ugh
                  
                  var theMenu = window.getComputedStyle(this.$.appMenu);
                  var theAside = window.getComputedStyle(this.$.appAside);
                  var theMain = window.getComputedStyle(this.$.appMain);
                  var theRealParent = this;
                  var theApp = window.getComputedStyle(theRealParent);

                  var menuWidth = parseInt(theMenu.width) + parseInt(theMenu.marginLeft) + parseInt(theMenu.marginRight) + parseInt(theMenu.paddingLeft) + parseInt(theMenu.paddingRight);
                  var asideWidth = parseInt(theAside.width) + parseInt(theAside.marginLeft) + parseInt(theAside.marginRight) + parseInt(theAside.paddingLeft) + parseInt(theAside.paddingRight);
                  var appWidth = parseInt(theApp.width) - parseInt(theApp.paddingLeft) - parseInt(theApp.paddingRight);
                  var mainWidth = appWidth - menuWidth - asideWidth - parseInt(theMain.marginLeft) - parseInt(theMain.marginRight) - 1;
                  //console.log(appWidth, menuWidth, asideWidth, parseInt(theMain.marginLeft), parseInt(theMain.marginRight), 1);
                  //if(menuWidth >= appWidth) {
                  //    this.$.appMain.style.width = "100%";
                  //    this.$.appAside.style.width = "100%";
                  //    //this.$.appAside.removeAttribute("style");
                  //} else {
                      this.$.appMain.style.width = mainWidth + "px";
                  //}
                  
                  
                  this.$.appAside.removeAttribute("style"); // Remove the Hack for IE
              }
                             
          });

