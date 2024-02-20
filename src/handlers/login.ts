import { GM_getValue } from '$'
import { TOTP } from 'totp-generator'
import { observe } from '../observer'
import { writeToken } from '../utils'
import { Handler } from './handler'

export class LoginHandler implements Handler {
    shouldLoad(): boolean {
        return false
    }

    load(): void {
        const secret = GM_getValue('totpSecret', null)
        if (secret != null) {
            observe('#tokenValidationModal', () => {
                const { otp } = TOTP.generate(secret)
                writeToken(otp)
            })
        }
    }
}
