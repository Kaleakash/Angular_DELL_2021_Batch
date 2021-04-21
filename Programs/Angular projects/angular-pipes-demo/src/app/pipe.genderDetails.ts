import { Pipe } from "@angular/core";

@Pipe({
    name:"GenderPipe"
})
export class GenderDetailsPipe implements Transformer{
        transform(data:any[],genderDetails?:any):any{
        console.log(data);
          if(genderDetails=="male"){
                return "Mr. "+data;
          }else {
                return "Miss. "+data;
          }
        }
}