self.addEventListener("push", e => {
    const message = e.data.text()

    //測試用
    self.registration.showNotification("您有一則新通知!!", { body: message })

    //通知前端畫面
    self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage({type: "new-notification", message})
        });
    })
})