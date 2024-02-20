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
