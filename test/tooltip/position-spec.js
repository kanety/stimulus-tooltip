describe('position', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <span id="top_start"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="top-start">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>

      <span id="top_end"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="top-end">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>

      <span id="bottom_start"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="bottom-start">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>

      <span id="bottom_end"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="bottom-end">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>

      <span id="left_start"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="left-start">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>

      <span id="left_end"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="left-end">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>

      <span id="right_start"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="right-start">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>

      <span id="right_end"
            data-controller="tooltip"
            data-action="mouseover->tooltip#show mouseout->tooltip#hide"
            data-tooltip-position-value="right-end">
        <span data-tooltip-target="content">
          Content
        </span>
        <span data-tooltip-target="tip">
          Tooltip
        </span>
      </span>
    `;
  });

  it('toggles top start', () => {
    $('#top_start').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#top_start').matches('.st-tooltip--visible')).toEqual(true);
    $('#top_start').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#top_start').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles top end', () => {
    $('#top_end').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#top_end').matches('.st-tooltip--visible')).toEqual(true);
    $('#top_end').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#top_end').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles bottom start', () => {
    $('#bottom_start').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#bottom_start').matches('.st-tooltip--visible')).toEqual(true);
    $('#bottom_start').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#bottom_start').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles bottom end', () => {
    $('#bottom_end').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#bottom_end').matches('.st-tooltip--visible')).toEqual(true);
    $('#bottom_end').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#bottom_end').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles left start', () => {
    $('#left_start').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#left_start').matches('.st-tooltip--visible')).toEqual(true);
    $('#left_start').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#left_start').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles left end', () => {
    $('#left_end').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#left_end').matches('.st-tooltip--visible')).toEqual(true);
    $('#left_end').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#left_end').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles right start', () => {
    $('#right_start').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#right_start').matches('.st-tooltip--visible')).toEqual(true);
    $('#right_start').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#right_start').matches('.st-tooltip--visible')).toEqual(false);
  });

  it('toggles right end', () => {
    $('#right_end').dispatchEvent(new MouseEvent('mouseover'));
    expect($('#right_end').matches('.st-tooltip--visible')).toEqual(true);
    $('#right_end').dispatchEvent(new MouseEvent('mouseout'));
    expect($('#right_end').matches('.st-tooltip--visible')).toEqual(false);
  });
});
