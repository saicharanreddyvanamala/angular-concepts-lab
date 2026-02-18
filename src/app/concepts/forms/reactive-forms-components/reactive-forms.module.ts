import { NgModule } from "@angular/core";
import { FormControlBasic } from "./form-control-basic/form-control-basic";
import { RouterModule } from "@angular/router";
import { ReactiveFormsDashboard } from "./reactive-forms-dashboard/reactive-forms-dashboard";
import { FormGroupBasic } from "./form-group-basic/form-group-basic";
import { FormArrayBasic } from "./form-array-basic/form-array-basic";
import { FormGroupInFormArray } from "./form-group-in-form-array/form-group-in-form-array";
import { ProgramaticFormApiDemo } from "./programatic-form-api-demo/programatic-form-api-demo";
import { BasicValidatorsDemo } from "./basic-validators-demo/basic-validators-demo";
import { BasicCrossFieldValidation } from "./basic-cross-field-validation/basic-cross-field-validation";
import { AsyncValidatorsDemo } from "./async-validators-demo/async-validators-demo";
import { NestedFormGroups } from "./nested-form-groups/nested-form-groups";
import { DynamicFormRendering } from "./dynamic-form-rendering/dynamic-form-rendering";
import { NestedFormArrays } from "./nested-form-arrays/nested-form-arrays";
import { ParentCva } from "./cva-in-reactive-forms/parent-cva/parent-cva";
import { TypedReactiveFormDemo } from "./typed-reactive-form-demo/typed-reactive-form-demo";
import { RfWithOnpush } from "./rf-with-onpush/rf-with-onpush";
import { ProfileFormComponent } from "./splitted-forms/profile-form/profile-form";
import { InputConsumerWithCva } from "./cva-in-reactive-forms/input-consumer-with-cva/input-consumer-with-cva";
import { InputConsumerWithoutCva } from "./cva-in-reactive-forms/input-consumer-without-cva/input-consumer-without-cva";
import { LoginComponent } from "./custom-components-using-cva/login-component/login-component";
import { ButtonUsageDemo } from "./custom-components-using-cva/button-usage-demo/button-usage-demo";
import { SintelTable } from "./sintel-table/sintel-table";

const ROUTES = [
  {
    path: '', component: ReactiveFormsDashboard
  },
  {
    path:'form-control-basic', component: FormControlBasic
  },
  {
    path: 'form-group-basic', component: FormGroupBasic
  },
  {
    path: 'form-array-basic', component: FormArrayBasic
  },
  {
    path: 'form-group-in-form-array', component: FormGroupInFormArray
  },
  {
    path: 'programatic-form-api', component: ProgramaticFormApiDemo
  },
  {
    path: 'basic-validators', component: BasicValidatorsDemo
  },
  {
    path: 'basic-cross-field', component: BasicCrossFieldValidation
  },
  {
    path: 'async-validators', component: AsyncValidatorsDemo
  },
  {
    path: 'nested-form-groups', component: NestedFormGroups
  },
  {
    path: 'nested-form-array', component: NestedFormArrays
  },
  {
    path: 'dynamic-form-rendering', component: DynamicFormRendering
  },
  {
    path: 'cva-in-reactive-forms', component: ParentCva
  },
  {
    path:'input-with-cva', component: InputConsumerWithCva
  },
  {
    path:'input-without-cva', component: InputConsumerWithoutCva
  },
  {
    path:'login-with-cva', component: LoginComponent
  },
  {
    path: 'custom-button', component: ButtonUsageDemo
  },
  {
    path:'typed-rf-demo', component: TypedReactiveFormDemo
  },
  {
    path: 'rf-with-onpush', component: RfWithOnpush
  },
  {
    path: 'splitted-forms', component: ProfileFormComponent
  },
  {
    path: 'sintel-table', component: SintelTable
  }
]

@NgModule({
imports: [
  RouterModule.forChild(ROUTES)
]
})
export class ReactiveFormsModule {}
