import { BaseError } from "./BaseError";
export class LimitError extends BaseError {
    constructor(
        message: string = "Não pode mais solicitar, ultrapassou o limite."
    ) {
        super(417, message)
    }
}