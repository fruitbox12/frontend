const Lambda = () => {
  
  return <div><div className="execution">
  <div className="execute-button">
      <i className="fa fa-cogs setting-icon" aria-hidden="true"></i>
      <i className="fa fa-sticky-note-o event-icon" aria-hidden="true"></i>
      <button className="button button3">Execute</button></div>
</div>
<div className="connection-editor">
  <div className="connect-setting"><label>Channel</label><input type="text" /></div>
  <div className="connection-info">
      <pre className="grey-code">Node Operator Test Net</pre>
  </div>
</div>
<div className="execute-output">
  <pre>Waiting for response</pre>
</div></div>;

};

export default Lambda;

