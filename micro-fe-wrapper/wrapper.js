function setupComponents() {

    const name = document.getElementById('yourName').value;

    setupVueContainer(name)
    setupReactContainer(name)
    setupAngularContainer(name)

    logMessage('You', `my name is ${name}`)
}

function setupVueContainer(props) {
    const vueEl = document.createElement('vue-el');
    vueEl.setAttribute(':name', props);
    vueEl.setAttribute('onHelloEvt', 'onHelloEvt');
    vueEl.addEventListener('onHelloEvt', (e) => helloEvent('Vue'));

    const vueContainer = document.getElementById('vue-container');
    if (vueContainer.children.length > 0) {
        vueContainer.removeChild(vueContainer.children[0]);
    }
    vueContainer.appendChild(vueEl);
    console.log(vueContainer);
}

function setupReactContainer(props) {
    const reactEl = document.createElement('react-el');
    reactEl.setAttribute('name', props);
    reactEl.setAttribute('onHelloEvt', 'onHelloEvt');
    reactEl.addEventListener('onHelloEvt', (e) => helloEvent('React'));

    const reactElContainer = document.getElementById('react-container')
    if (reactElContainer.children.length > 0) {
        reactElContainer.removeChild(reactElContainer.children[0]);
    }
    reactElContainer.appendChild(reactEl);
}

function setupAngularContainer(props) {
    const ngEl = document.createElement('ng-el');
    ngEl.setAttribute('name', props);
    ngEl.addEventListener('helloEvt', (e) => helloEvent('Angular'));

    const ngElContainer = document.getElementById('ng-container')
    if (ngElContainer.children.length > 0) {
        ngElContainer.removeChild(ngElContainer.children[0]);
    }
    ngElContainer.appendChild(ngEl);
}


function helloEvent(who) {
    logMessage(who, 'hello');
}

function logMessage(source, msg) {
    const msgContainer = document.getElementById('messages');
    msgContainer.innerHTML += `<p><strong>${source}</strong> said ${msg}`;
}

