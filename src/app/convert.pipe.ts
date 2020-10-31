import {Pipe, PipeTransform} from '@angular/core';

import {Builder} from 'xml2js';
@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform{
    result = '';

    transform(json: object): string {
      for (const jsonItem in json){
        this.result += json[jsonItem] instanceof Array ? '' : '<' + jsonItem + '>';
        if (json[jsonItem] instanceof Array) {
          for (const arr in json[jsonItem]) {
            this.result += '<' + jsonItem + '>';
            // @ts-ignore
            this.result += this.toXml(new Object(json[jsonItem][arr]));
            this.result += '</' + jsonItem + '>';
          }
        }else if (typeof json[jsonItem] === 'object'){
          // @ts-ignore
          this.result += this.toXml(new Object(json[jsonItem]));
        }else{
          this.result += json[jsonItem];
        }
        this.result += json[jsonItem] instanceof Array ? '' : '</' + jsonItem + '>';
      }
      this.result = this.result.replace(/<\/?[0-9]{1,}>/g, '');
      return this.result;
    }
}
