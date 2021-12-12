import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlBase } from './form-control-base';
import { TextboxFormControl, SelectFormControl, PasswordFormControl, EmailFormControl } from './clarity-form-control';
import { ViewType } from 'shared-lib';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  constructor() { }

  public toFormGroup(controls: FormControlBase<string>[] ): FormGroup {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                                              : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  public getFormTypes(viewType: ViewType): string[]{
    let viewFormTypes: string[] = [];
    switch (viewType) {
      case ViewType.CONNECTION:
        viewFormTypes.push('vpc');
        viewFormTypes.push('site');
        break;
      case ViewType.CUSTOMER:
        viewFormTypes.push('customer')
      case ViewType.E2C2POD:
        viewFormTypes.push('pod')
      case ViewType.PERFORMANCEHUB:
        viewFormTypes.push('performancehub')
      default:
        console.log("No such viewType exists!");
        break;
    }
    return viewFormTypes;
  }

  public getViewFormControls(viewType: ViewType): Map<string, FormControlBase<string>[]>{
    let viewFormControls: Map<string, FormControlBase<string>[]> = new Map<string, FormControlBase<string>[]>();
    switch (viewType) {
      case ViewType.CONNECTION:
        viewFormControls.set('vpc', this.getVpcFormControls());
        viewFormControls.set('site', this.getSiteFormControls());
        break;
      case ViewType.CUSTOMER:
        viewFormControls.set('customer', this.getCustomerFormControls());
        break;
      case ViewType.E2C2POD:
        viewFormControls.set('pod', this.getE2C2PodFormControls());
        break;
      case ViewType.PERFORMANCEHUB:
        viewFormControls.set('performancehub', this.getPerformanceHubFormControls());
        break;
      default:
        console.log("No such viewType exists!");
        break;
    }
    return viewFormControls;
  }

  private getE2C2PodFormControls(): FormControlBase<string>[] {
    const e2c2Pod: FormControlBase<string>[] = [

      new TextboxFormControl({
        key: 'name',
        label: 'POD Name',
        type: 'text',
        required: true,
        order: 1
      }),

      new TextboxFormControl({
        key: 'location',
        label: 'POD Location',
        type: 'text',
        required: true,
        order: 2
      })
    ];

    e2c2Pod.sort((a, b) => a.order - b.order);
    return e2c2Pod;
  }

  private getVpcFormControls(): FormControlBase<string>[] {

    const vpcConnection: FormControlBase<string>[] = [

      new SelectFormControl({
        key: 'cloudType',
        label: 'Cloud Type',
        required: true,
        options: [
          {key: 'AWS',  value: 'AWS'},
          {key: 'AZURE',  value: 'AZURE'},
          {key: 'GCP',   value: 'GCP'}
        ],
        order: 1
      }),

      new TextboxFormControl({
        key: 'cidrBlocks',
        label: 'Cidr Blocks',
        type: 'text',
        required: true,
        order: 2
      }),

      new TextboxFormControl({
        key: 'peers',
        label: 'Peers',
        type: 'text',
        required: true,
        order: 3
      })
    ];

    vpcConnection.sort((a, b) => a.order - b.order);
    return vpcConnection;
  }

  private getSiteFormControls(): FormControlBase<string>[] {

    const siteConnection: FormControlBase<string>[] = [

      new SelectFormControl({
        key: 'connectionType',
        label: 'Connection Type',
        required: true,
        options: [
          {key: 'IPSec',  value: 'IPSec'},
          {key: 'MPLS',  value: 'MPLS'},
          {key: 'Fiber',   value: 'Fiber'}
        ],
        order: 1
      }),

      new TextboxFormControl({
        key: 'maxBandwidth',
        label: 'MAX Bandwidth',
        type: 'text',
        required: true,
        order: 2
      })
    ];

    siteConnection.sort((a, b) => a.order - b.order);
    return siteConnection;
  }

  private getCustomerFormControls(): FormControlBase<string>[] {

    const customer: FormControlBase<string>[] = [

      new TextboxFormControl({
        key: 'username',
        label: 'User Name',
        type: 'text',
        required: true,
        order: 1
      }),

      new PasswordFormControl({
        key: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        order: 2
      }),

      new TextboxFormControl({
        key: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        order: 3
      }),

      new TextboxFormControl({
        key: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        order: 4
      }),

      new EmailFormControl({
        key: 'emailId',
        label: 'Email',
        type: 'email',
        required: true,
        order: 5
      })

    ];

    customer.sort((a, b) => a.order - b.order);
    return customer;
  }

  private getPerformanceHubFormControls(): FormControlBase<string>[] {
    const performanceHub: FormControlBase<string>[] = [

      new TextboxFormControl({
        key: 'name',
        label: 'Hub Name',
        type: 'text',
        required: true,
        order: 1
      }),

      new TextboxFormControl({
        key: 'location',
        label: 'Hub Location',
        type: 'text',
        required: true,
        order: 2
      })
    ];

    performanceHub.sort((a, b) => a.order - b.order);
    return performanceHub;
  }

}
