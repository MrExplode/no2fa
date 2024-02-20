import $ from 'jquery'
import { Handler } from './handler'
import { generateButtons, is2faPage } from '../utils'
import { observe } from '../observer'

export class SettingsHandler extends Handler {
    private unsubscribe: (() => void) | null = null
    private injected: boolean = false

    shouldActivate(): boolean {
        return is2faPage()
    }

    load(): void {
        this.unsubscribe = observe('#form1', this.onMutations)
    }

    unload(): void {
        if (this.unsubscribe != null) this.unsubscribe()
    }

    private onMutations() {
        if (!this.injected) {
            const button = $(
                'input[name="upFunction$c_options$UpdatePanel1$tab$ctl02$ctl01$upmodalTwoFactorSetup$ctl02$twoFactorSetup$ctl00$Setup"]'
            )
            if (button.length == 0) return
            generateButtons(button.parent())
            this.injected = true
        }
    }
}
