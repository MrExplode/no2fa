import { Handler } from './handlers/handler'
import { LoginHandler } from './handlers/login'

const handlers: Handler[] = [new LoginHandler()]

handlers.forEach((h) => {
    if (h.shouldLoad()) h.load()
})
