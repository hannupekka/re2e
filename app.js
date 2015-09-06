/** @jsx React.DOM */
var Wrapper = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            length: 0
        }
    },
    handleChange: function (event) {
        this.setState({text: event.target.value});
    },
    calc: function () {
        this.setState({length: this.state.text.length});
    },
    reset: function () {
        this.setState(this.getInitialState());
    },
    render: function () {
        return (
            <div>
                <div className='form-group'>
                    <label>Text</label>
                    <input type='text' className='form-control' id='text' onChange={this.handleChange} value={this.state.text} />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-default' id='calc' onClick={this.calc}>Submit</button>
                    <button type='reset' className='btn btn-default' id='reset' onClick={this.reset}>Reset</button>
                </div>
                <div className='form-group'>
                    Text is currently <span id='length'>{this.state.length}</span> characters long.
                </div>
            </div>
        );
    }
});

React.render(<Wrapper/>, document.getElementById('container'));
