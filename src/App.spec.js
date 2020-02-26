import App from './App.svelte'

describe('name', () => {
  it('should render', () => {
    const target = document.createElement('div')
    new App({ target })

    expect(target.main.h1.textContent).toBe('Hello test')
  })
})
