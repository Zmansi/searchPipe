
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'searchPipe' })
export class SearchPipePipe implements PipeTransform {
    transform(tags: any, searchText: any): any {
        if (searchText == null || searchText == '') {
            return tags;
        } else {
            return tags.filter(function (obj) {
                return obj.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1;
            });
        }
    }
}
