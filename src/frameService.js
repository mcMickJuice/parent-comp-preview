import config from './config'

export function focusElement(selector) {
  const message = {
    selector,
    type: 'focus'
  }
  postMessage(message)
}

export function blurElement(selector) {
  const message = {
    selector,
    type: 'blur'
  }
  postMessage(message)
}

export function componentUpdate(componentData) {
  const message = {
    type: 'ce',
    componentData
  }

  postMessage(message)
}

function postMessage(message) {
  window.frames[0].postMessage(JSON.stringify(message), config.childFrameUrl)
}
