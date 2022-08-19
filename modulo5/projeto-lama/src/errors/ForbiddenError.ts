import { BaseError } from "./BaseError";
export class ForbiddenError extends BaseError {
    constructor(
        message: string = "Usuário cadastrado, mas sem permissão"
    ) {
        super(403, message)
    }
}