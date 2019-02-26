self.addEventListener('install', event =>{
    console.log('Service worker intalling...')
    console.log(event)
})

self.addEventListener('activate', event => {
    console.log('Service Worker Activating...')
    console.log(event)
})

self.skipWaiting()

self.addEventListener('fetch', event => {
    console.log(`Fetching... ${event.request.url}`)
})