const params = new URLSearchParams(window.location.search);

const key = params.get('key');

try {
  if (key !== atob('bmd1eWVudmlldGh1YW4yMDIw')) {
    document.body.setAttribute('style', 'display: none;')
  }
} catch (error) {
  document.body.setAttribute('style', 'display: none;')
}
