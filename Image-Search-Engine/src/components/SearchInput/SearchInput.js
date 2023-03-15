import React from "react";
import "./SearchBar.css";
import { SearchOutlined } from "@ant-design/icons";

class SearchInput extends React.Component {
  state = {
    entry: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit} action="">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search images..."
                onChange={(e) => this.setState({ entry: e.target.value })}
                value={this.state.entry}
              />
              <SearchOutlined className="search" onClick={this.onFormSubmit} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
