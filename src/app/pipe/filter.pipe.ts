import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, tags: any): any {
    return tags.length > 0 ? value.filter((project: any) => {
      let projectTags = project.tags || [];
      return tags.some((tag: string) => projectTags.includes(tag));
    }) : value;
  }

}