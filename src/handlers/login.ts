import $ from 'jquery'
import { GM_getValue } from '$'
import { TOTP } from 'totp-generator'
import { observe } from '../observer'
import { writeToken } from '../utils'
import { Handler } from './handler'

export class LoginHandler extends Handler {
    private unsubscribe: (() => void) | null = null

    shouldActivate(): boolean {
        return $('td.login_left_side').length > 0
    }

    load(): void {
        const secret = GM_getValue('totpSecret', null)
        if (secret != null) {
            this.unsubscribe = observe('#tokenValidationModal', () => {
                const { otp } = TOTP.generate(secret)
                writeToken(otp)
            })
        }
    }

    unload(): void {
        if (this.unsubscribe != null) this.unsubscribe()
    }
}
