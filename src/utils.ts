import $ from 'jquery'
import { GM_deleteValue, GM_getValue, GM_setValue } from '$'

/**
 * @returns true when the totp token modal is visible
 */
export function isTokenModelOpen(): boolean {
    return $('#tokenValidationModal').css('display') !== 'none'
}

/**
 * Writes the totp token into the input field and clicks the submit button.
 *
 * @param token the totp result
 */
export function writeToken(token: string) {
    const input = $('input[name="token"]')
    input.val(token)
    $('button[sdaValidateToken=submit]')[0].click()
}

/**
 * @returns true when the current page is the 2fa settings
 */
export function is2faPage(): boolean {
    const tab = $('#c_options_ctl02_tab')
    return tab.length != 0 && tab.hasClass('ajax__tab_active')
}

/**
 * Generates the management buttons.
 *
 * @param parent the parent container to insert buttons
 */
export function addEnableButton(parent: JQuery<HTMLElement>) {
    const enabled = GM_getValue('totpSecret', null) != null
    parent.append(
        `<input id="no2faButton" type="button" class="button" value="${enabled ? 'Update Bypass' : 'Enable Bypass'}"/>`
    )
    $('#no2faButton').on('click', (e) => {
        e.preventDefault()
        GM_setValue('totpSecret', $('#twoFactorSetup_Secret').text())
        alert(enabled ? 'Bypass updated!' : 'Bypass enabled!')
    })
}

export function addDeleteButton(parent: JQuery<HTMLElement>) {
    const enabled = GM_getValue('totpSecret', null) != null
    if (enabled) {
        parent.append(
            `<input id="no2faDelete" type="button" class="button" value="Disable Bypass"/>`
        )
    }
    $('#no2faDelete').on('click', (e) => {
        e.preventDefault()
        GM_deleteValue('totpSecret')
        alert('Bypass disabled!')
    })
}
