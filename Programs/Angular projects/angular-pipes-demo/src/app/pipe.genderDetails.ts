import { Pipe } from "@angular/core";

@Pipe({
    name:"GenderPipe"
})
export class GenderDetailsPipe implements Transformer{
        transform(data:any[],genderDetails?:any,info?:string):any{
        console.log(data);
        console.log(info)
          if(genderDetails=="male"){
                return "Mr. "+data;
          }else {
                return "Miss. "+data;
          }
        }
}