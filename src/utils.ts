import $ from 'jquery'

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
