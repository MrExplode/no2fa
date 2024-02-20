import { Handler } from './handlers/handler'

const handlers: Handler[] = []

handlers.forEach((h) => {
    if (h.shouldLoad()) h.load()
})
