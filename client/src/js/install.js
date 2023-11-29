const butInstall = document.getElementById('buttonInstall');
let installPrompt = null;
let result;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.classList.remove("hidden");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installPrompt){
        return;
    }
    result = installPrompt.prompt();
    installPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.classList.add("hidden");
    console.log('👍', 'appinstalled', event)
});
