import { Handler } from './handlers/handler'
import { LoginHandler } from './handlers/login'
import { SettingsHandler } from './handlers/settings'

const handlers: Handler[] = [new LoginHandler(), new SettingsHandler()]

handlers.forEach((h) => {
    if (h.shouldActivate()) {
        h.load()
    } else {
        h.unload()
    }
})
