describe('basic', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <span id="top"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="top">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>
    
      <span id="bottom"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="bottom">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>
    
      <span id="left"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="left">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>
    
      <span id="right"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="right">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>
    `;
  });

  it('toggles top', () => {
    $('#top').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#top').matches('.st-tooltip--visible')).toEqual(true);
    $('#top').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#top').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles bottom', () => {
    $('#bottom').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#bottom').matches('.st-tooltip--visible')).toEqual(true);
    $('#bottom').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#bottom').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles left', () => {
    $('#left').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#left').matches('.st-tooltip--visible')).toEqual(true);
    $('#left').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#left').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles right', () => {
    $('#right').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#right').matches('.st-tooltip--visible')).toEqual(true);
    $('#right').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#right').matches('.st-tooltip--visible')).toEqual(false);
  });
});
