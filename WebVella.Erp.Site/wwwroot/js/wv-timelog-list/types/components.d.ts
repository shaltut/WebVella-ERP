/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';

import '@stencil/redux';


export namespace Components {

  interface WvAddTimelog {}
  interface WvAddTimelogAttributes extends StencilHTMLAttributes {}

  interface WvTimelogList {
    'currentUser': string;
    'isDebug': string;
    'records': string;
    'relatedRecords': string;
    'siteRootUrl': string;
  }
  interface WvTimelogListAttributes extends StencilHTMLAttributes {
    'currentUser'?: string;
    'isDebug'?: string;
    'records'?: string;
    'relatedRecords'?: string;
    'siteRootUrl'?: string;
  }

  interface WvTimelog {
    'post': Object;
  }
  interface WvTimelogAttributes extends StencilHTMLAttributes {
    'post'?: Object;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WvAddTimelog': Components.WvAddTimelog;
    'WvTimelogList': Components.WvTimelogList;
    'WvTimelog': Components.WvTimelog;
  }

  interface StencilIntrinsicElements {
    'wv-add-timelog': Components.WvAddTimelogAttributes;
    'wv-timelog-list': Components.WvTimelogListAttributes;
    'wv-timelog': Components.WvTimelogAttributes;
  }


  interface HTMLWvAddTimelogElement extends Components.WvAddTimelog, HTMLStencilElement {}
  var HTMLWvAddTimelogElement: {
    prototype: HTMLWvAddTimelogElement;
    new (): HTMLWvAddTimelogElement;
  };

  interface HTMLWvTimelogListElement extends Components.WvTimelogList, HTMLStencilElement {}
  var HTMLWvTimelogListElement: {
    prototype: HTMLWvTimelogListElement;
    new (): HTMLWvTimelogListElement;
  };

  interface HTMLWvTimelogElement extends Components.WvTimelog, HTMLStencilElement {}
  var HTMLWvTimelogElement: {
    prototype: HTMLWvTimelogElement;
    new (): HTMLWvTimelogElement;
  };

  interface HTMLElementTagNameMap {
    'wv-add-timelog': HTMLWvAddTimelogElement
    'wv-timelog-list': HTMLWvTimelogListElement
    'wv-timelog': HTMLWvTimelogElement
  }

  interface ElementTagNameMap {
    'wv-add-timelog': HTMLWvAddTimelogElement;
    'wv-timelog-list': HTMLWvTimelogListElement;
    'wv-timelog': HTMLWvTimelogElement;
  }


}
