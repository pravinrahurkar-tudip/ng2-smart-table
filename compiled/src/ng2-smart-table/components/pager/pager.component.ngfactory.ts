/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../src/ng2-smart-table/components/pager/pager.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './pager.scss.shim.ngstyle';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import12 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '@angular/common/src/directives/ng_class';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import20 from '@angular/common/src/directives/ng_for';
export class Wrapper_PagerComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PagerComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.PagerComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_perPage(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.perPage = currValue;
      this._expr_0 = currValue;
    }
  }
  check_source(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.source = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.changePage.subscribe(_eventHandler.bind(view,'changePage'))); }
  }
}
var renderType_PagerComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PagerComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PagerComponent>;
  _PagerComponent_0_3:Wrapper_PagerComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PagerComponent_Host0,renderType_PagerComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng2-smart-table-pager',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PagerComponent0(this.viewUtils,this,0,this._el_0);
    this._PagerComponent_0_3 = new Wrapper_PagerComponent();
    this.compView_0.create(this._PagerComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PagerComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PagerComponent) && (0 === requestNodeIndex))) { return this._PagerComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PagerComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PagerComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PagerComponentNgFactory:import8.ComponentFactory<import0.PagerComponent> = new import8.ComponentFactory<import0.PagerComponent>('ng2-smart-table-pager',View_PagerComponent_Host0,import0.PagerComponent);
const styles_PagerComponent:any[] = [import9.styles];
class View_PagerComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_PagerComponent3,renderType_PagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'class','ng2-smart-page-link page-link'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'(current)',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit,' ');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_PagerComponent4 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_PagerComponent4,renderType_PagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray4(4,'class','ng2-smart-page-link page-link','href','#'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.parentView.context.paginate(this.parentView.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PagerComponent2 extends import2.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import11.Wrapper_NgClass;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import10.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import12.Wrapper_NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import10.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import12.Wrapper_NgIf;
  _text_5:any;
  _map_13:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_PagerComponent2,renderType_PagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_13 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {active: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'class','ng2-smart-page-item page-item'),(null as any));
    this._NgClass_0_3 = new import11.Wrapper_NgClass(this.parentView.parentView.injectorGet(import13.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import14.KeyValueDiffers,this.parentView.parentIndex),new import15.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import10.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import16.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import12.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_4 = new import10.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import16.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import12.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import17.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import16.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import17.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import18.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'ng2-smart-page-item page-item';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_13((this.parentView.parentView.context.getPage() == this.context.$implicit));
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = (this.parentView.parentView.context.getPage() == this.context.$implicit);
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_4_0_0:any = (this.parentView.parentView.context.getPage() != this.context.$implicit);
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_PagerComponent3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 4)) { return new View_PagerComponent4(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
}
class View_PagerComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _NgClass_4_3:import11.Wrapper_NgClass;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _anchor_16:any;
  /*private*/ _vc_16:import10.ViewContainer;
  _TemplateRef_16_5:any;
  _NgFor_16_6:import19.Wrapper_NgFor;
  _text_17:any;
  _el_18:any;
  _NgClass_18_3:import11.Wrapper_NgClass;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _map_36:any;
  _map_37:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_PagerComponent1,renderType_PagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_36 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._map_37 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'nav',new import3.InlineArray2(2,'class','ng2-smart-pagination-nav'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'ul',new import3.InlineArray2(2,'class','ng2-smart-pagination pagination'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'li',new import3.InlineArray2(2,'class','ng2-smart-page-item page-item'),(null as any));
    this._NgClass_4_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import14.KeyValueDiffers,this.parentIndex),new import15.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_4,'\n          ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'a',new import3.InlineArray8(6,'aria-label','First','class','ng2-smart-page-link page-link','href','#'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'aria-hidden','true'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'«',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'First',(null as any));
    this._text_13 = this.renderer.createText(this._el_6,'\n          ',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_16 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_16 = new import10.ViewContainer(16,2,this,this._anchor_16);
    this._TemplateRef_16_5 = new import16.TemplateRef_(this,16,this._anchor_16);
    this._NgFor_16_6 = new import19.Wrapper_NgFor(this._vc_16.vcRef,this._TemplateRef_16_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_17 = this.renderer.createText(this._el_2,'\n  \n        ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_2,'li',new import3.InlineArray2(2,'class','ng2-smart-page-item page-item'),(null as any));
    this._NgClass_18_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import14.KeyValueDiffers,this.parentIndex),new import15.ElementRef(this._el_18),this.renderer);
    this._text_19 = this.renderer.createText(this._el_18,'\n          ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_18,'a',new import3.InlineArray8(6,'aria-label','Last','class','ng2-smart-page-link page-link','href','#'),(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_20,'span',new import3.InlineArray2(2,'aria-hidden','true'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'»',(null as any));
    this._text_24 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_20,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'Last',(null as any));
    this._text_27 = this.renderer.createText(this._el_20,'\n          ',(null as any));
    this._text_28 = this.renderer.createText(this._el_18,'\n        ',(null as any));
    this._text_29 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._text_30 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_6));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_20,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_20));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._anchor_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._text_30
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgClass) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgClass_4_3.context; }
    if (((token === import16.TemplateRef) && (16 === requestNodeIndex))) { return this._TemplateRef_16_5; }
    if (((token === import20.NgFor) && (16 === requestNodeIndex))) { return this._NgFor_16_6.context; }
    if (((token === import18.NgClass) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._NgClass_18_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = 'ng2-smart-page-item page-item';
    this._NgClass_4_3.check_klass(currVal_4_0_0,throwOnChange,false);
    const currVal_4_0_1:any = this._map_36((this.parentView.context.getPage() == 1));
    this._NgClass_4_3.check_ngClass(currVal_4_0_1,throwOnChange,false);
    this._NgClass_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_16_0_0:any = this.parentView.context.getPages();
    this._NgFor_16_6.check_ngForOf(currVal_16_0_0,throwOnChange,false);
    this._NgFor_16_6.ngDoCheck(this,this._anchor_16,throwOnChange);
    const currVal_18_0_0:any = 'ng2-smart-page-item page-item';
    this._NgClass_18_3.check_klass(currVal_18_0_0,throwOnChange,false);
    const currVal_18_0_1:any = this._map_37((this.parentView.context.getPage() == this.parentView.context.getLast()));
    this._NgClass_18_3.check_ngClass(currVal_18_0_1,throwOnChange,false);
    this._NgClass_18_3.ngDoCheck(this,this._el_18,throwOnChange);
    this._vc_16.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_16.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 16)) { return new View_PagerComponent2(this.viewUtils,this,16,this._anchor_16,this._vc_16); }
    return (null as any);
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>((this.parentView.context.getPage() == 1)? false: this.parentView.context.paginate(1))) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_20(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>((this.parentView.context.getPage() == this.parentView.context.getLast())? false: this.parentView.context.paginate(this.parentView.context.getLast()))) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_PagerComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_PagerComponent,{});
export class View_PagerComponent0 extends import2.AppView<import0.PagerComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import12.Wrapper_NgIf;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PagerComponent0,renderType_PagerComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import10.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import16.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import12.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import17.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.shouldShow();
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_PagerComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}