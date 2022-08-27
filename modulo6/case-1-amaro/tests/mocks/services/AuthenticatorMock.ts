import { ITokenPayload } from "../../../src/services/Authenticator"

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        switch(payload.id) {
            case "101":
                return "token-astrodev"
            default:
                return "token-mock"
        }
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        switch(token) {
            case "token-mock":
                return {
                    id: "id-mock"
                }
            case "token-astrodev":
                return {
                    id: "101"
                }
            default:
                return null
        }
    }
}