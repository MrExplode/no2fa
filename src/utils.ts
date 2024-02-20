import $ from 'jquery'

export function isTokenModelOpen(): boolean {
    return $('#tokenValidationModal').css('display') !== 'none'
}
