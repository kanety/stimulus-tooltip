describe('callbacks', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <span data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>
    `;
  });

  let message;
  beforeEach(() => {
    let element = $('[data-controller="tooltip"]');
    element.addEventListener('tooltip:shown', e => {
      message = "shown: " + e.detail.tip.textContent.trim();
    });
    element.addEventListener('tooltip:hidden', e => {
      message = "hidden: " + e.detail.tip.textContent.trim();
    });
  });

  it('runs callbacks', () => {
    $('[data-controller="tooltip"]').dispatchEvent(new MouseEvent('mouseover'));
    expect(message).toEqual('shown: Tooltip');

    $('[data-controller="tooltip"]').dispatchEvent(new MouseEvent('mouseout'));
    expect(message).toEqual('hidden: Tooltip');
  });
});
