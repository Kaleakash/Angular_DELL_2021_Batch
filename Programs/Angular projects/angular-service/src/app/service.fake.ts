import { Injectable } from "@angular/core";

@Injectable()
export class FakeService {
    display():string {
        return "Welcome to Angular with DI";
    }
}