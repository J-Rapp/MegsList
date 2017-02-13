class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      name: props.name,
      id: props.id,
      isSelected: props.isSelected,
      handleClick: () => props.select(this)
    }
  }

  // Called when the Welcome Page re-renders and passes props down

  componentWillReceiveProps(props) {
    this.setState({
      isSelected: props.isSelected 
    });
  }

  // JSX
  
  render() {
    return (
      <div className={this.state.isSelected ? "btn selected" : "btn"} onClick={this.state.handleClick}>
        { this.state.name }
      </div>
    )
  }
}