const config: MutationObserverInit = { attributes: true, childList: true, subtree: true }

/**
 * Creates a mutation observer.
 *
 * @param selector the query selector for target nodes
 * @param mutationCallback the event callback for mutations
 * @returns a callback for unsubscribing from the events
 */
export function observe(
    selector: string,
    mutationCallback: (mutations: MutationRecord[]) => void
): () => void {
    const observer = new MutationObserver(mutationCallback)
    observer.observe(document.querySelector(selector)!, config)
    return () => observer.disconnect()
}
