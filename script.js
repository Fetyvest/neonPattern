const headerIp = document.getElementById('headerIp');
const infoIp = document.getElementById('infoIp');
const infoVersion = document.getElementById('infoVersion');
const footerIp = document.getElementById('footerIp');
const modal = document.getElementById('modal');

let ip = 'yourServer.ip'
let version = '1.16.5'
let howManyModals = 0

async function copyModal() {
    if(howManyModals != 0){
        modal.style.top = '0'
        await new Promise(resolve => setTimeout(resolve, 100))
    }
    howManyModals += 1
    modal.style.top = '110px'
    await new Promise(resolve => setTimeout(resolve, 1500))
    if(howManyModals == 1){
        modal.style.top = '0'
    }
    howManyModals -= 1
}

headerIp.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
infoIp.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
infoVersion.addEventListener('click', () => {
    navigator.clipboard.writeText(version)
    copyModal()
})
footerIp.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
modal.addEventListener('click', () => {
    modal.style.top = '0'
})