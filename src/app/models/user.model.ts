import { UtilsService } from "../services/utils.service";
import { Move } from "./move";
const utilService = new UtilsService()

export class User {

    constructor(
        public _id?: string, 
        public name: string = '', 
        public coins: number = 0, 
        public moves?: Move[]
    ) { }

    setId?() {
        this._id = utilService.makeId()
    }
}

