import React from 'react';

class NewPost extends React.Component {
  state = {
    model: '',
    mark: '',
    year: '',
    color: '',
    owner: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.model.trim() && this.state.mark.trim() && this.state.year.trim() && this.state.color.trim() && this.state.owner.trim()) {
      console.log(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
        model: '',
        mark: '',
        year: '',
        color: '',
        owner: '',
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Model"
              className="form-control"
              name="model"
              onChange={ this.handleInputChange }
              value={ this.state.model }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Mark"
              className="form-control"
              name="mark"
              onChange={ this.handleInputChange }
              value={ this.state.mark }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Color"
              className="form-control"
              name="color"
              onChange={ this.handleInputChange }
              value={ this.state.color }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Year"
              className="form-control"
              name="year"
              onChange={ this.handleInputChange }
              value={ this.state.year }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Owner"
              className="form-control"
              name="owner"
              onChange={ this.handleInputChange }
              value={ this.state.owner }
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary"> Add Post</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;