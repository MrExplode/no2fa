import { Handler } from './handler'
import { is2faPage } from '../utils'

export class SettingsHandler extends Handler {
    shouldActivate(): boolean {
        return is2faPage()
    }
    load(): void {
        console.log('loading settings')
    }
}
