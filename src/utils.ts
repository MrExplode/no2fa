import $ from 'jquery'

export function isTokenModelOpen(): boolean {
    return $('#tokenValidationModal').css('display') !== 'none'
}

export function writeToken(token: string) {
    const input = $('input[name="token"]')
    input.val(token)
    $('button[sdaValidateToken=submit]')[0].click()
}
