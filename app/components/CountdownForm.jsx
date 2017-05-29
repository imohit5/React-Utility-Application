var React = require('react');

var CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;
    var intSeconds = parseInt(strSeconds, 10);

    console.log('input count', $('input').length);

    if(strSeconds.length>0 && strSeconds.match(/^[0-9]*$/) && intSeconds>0){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(intSeconds);
    }

  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter Count Down Time in Seconds"></input>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
