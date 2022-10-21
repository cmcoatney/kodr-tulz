import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';
import { buildNameVariations } from '@rapid-prototyping/generators';
import { ServiceGenerator, Config } from '@rapid-prototyping/generators'

const config: Config = {
  name: 'workshop',
  application: 'dashboard',
  scope: 'acme',
};
export interface Schema {
  model: string;
  modelPlural: string;
  props: Prop[];
}

export interface Prop {
  [key: string]: any;
}

// TODO: Quickly generate schema props using snippet 'formly-props'
const authSchema: Schema = {
  model: 'user',
  modelPlural: 'users',
  props: [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter a valid email address',
        required: true,
      },
    }, {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
      },
    },
  ]
}

const albumSchema: Schema = {
  model: 'album',
  modelPlural: 'albums',
  props: [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Album Title',
        placeholder: 'Enter an Album Title',
        required: true,
      },
    }, {
      key: 'description',
      type: 'input',
      templateOptions: {
        label: 'Album Description',
        placeholder: 'Enter an Album Description',
        required: true,
      },
    },
  ]
}

@Component({
  selector: 'rapid-prototyping-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test="this\nis\nit"
  on = false;

  form = new FormGroup({});
  model: any = {};
  schema: Schema = albumSchema;
  options: FormlyFormOptions = {}

  constructor() {
    if (this.on) {
      this.schema = albumSchema;
    } else {
      this.schema = authSchema;
    }
  }

  generate_variations(){
    return buildNameVariations(this.schema)
  }

  generate_service(){
    return ServiceGenerator.generate(this.schema,config).template;
  }

  onSubmit(model: any) {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}
