import { LitElement } from 'lit-element';

describe('transition-component', () => {
  const TRANSITION_COMPONENT = 'transition-component';
  let transitionElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    transitionElement = window.document.createElement(
      TRANSITION_COMPONENT
    ) as LitElement;
    document.body.appendChild(transitionElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(TRANSITION_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(TRANSITION_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('renders the slot elements', async () => {
    transitionElement['componentArray'] = ['slot1'];
    window.document.body.appendChild(transitionElement);
    getShadowRoot(TRANSITION_COMPONENT)
      .querySelector('div')
      .querySelector('div').innerHTML =
      '<h2 slot="slot1" class="slot-test">Test</h2>';
    await transitionElement.updateComplete;
    const elem = getShadowRoot(TRANSITION_COMPONENT)
      .querySelector('div')
      .querySelector('div')
      .querySelector('h2');
    expect(elem.classList.contains('slot-test')).toBe(true);
  });

  it('displays the first slot elements by default', async () => {
    transitionElement['componentArray'] = ['slot1', 'slot2'];
    window.document.body.appendChild(transitionElement);
    await transitionElement.updateComplete;
    const slotComponents = getShadowRoot(TRANSITION_COMPONENT)
      .querySelector('div')
      .querySelectorAll('div')[0];
    expect(slotComponents.style.display).toBe('block');
  });

  it('hides the second slot elements by default', async () => {
    transitionElement['componentArray'] = ['slot1', 'slot2'];
    window.document.body.appendChild(transitionElement);
    await transitionElement.updateComplete;
    const slotComponents = getShadowRoot(TRANSITION_COMPONENT)
      .querySelector('div')
      .querySelectorAll('div')[1];
    expect(slotComponents.style.display).toBe('none');
  });

  it('set the background color for parent div of slot elements', async () => {
    transitionElement['componentArray'] = ['slot1', 'slot2'];
    transitionElement['backgroundColor'] = 'white';
    window.document.body.appendChild(transitionElement);
    await transitionElement.updateComplete;
    const slotComponents = getShadowRoot(TRANSITION_COMPONENT)
      .querySelector('div')
    expect(slotComponents.style.background).toBe('white');
  });

  // it('set the speed in which new component appears', async () => {
  //   transitionElement['componentArray'] = ['mySlot1', 'mySlot2'];
  //   const timeDuration = 3;
  //   transitionElement.setAttribute('animationDuration','3')
  //   console.log(transitionElement.getAttributeNames)
  //   window.document.body.appendChild(transitionElement);
  //   await transitionElement.updateComplete;
  //   const slotComponents = getShadowRoot(TRANSITION_COMPONENT)
  //     .querySelector('div')
  //     .querySelectorAll('div')[0];
  //   expect(slotComponents.style.animationDuration).toBe('3s');
  // });

//   it('set the delay at which new component appears', async () => {
//     transitionElement['componentArray'] = ['mySlot1', 'mySlot2'];
//     transitionElement['animationDelay'] = '3';
//     window.document.body.appendChild(transitionElement);
//     await transitionElement.updateComplete;
//     const slotComponents = getShadowRoot(TRANSITION_COMPONENT)
//       .querySelector('div').querySelectorAll('div')[0];
//     expect(slotComponents.style.animationDelay).toBe('3s');
//   });

});
