import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ToolTips({placement, variant, tipMessage}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tipMessage}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant={variant}>Hover me</Button>
    </OverlayTrigger>
  );
}

export default ToolTips;