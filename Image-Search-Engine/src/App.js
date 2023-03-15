import React from "react";
import Axios from "axios";
import SearchInput from "./components/SearchInput/SearchInput";
import ImageList from "./components/ImageList/ImageList";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (entry) => {
    const response = await Axios.get(
      `https://pixabay.com/api/?key=22764019-479f64f1b00bc29f41a7534c3&q=${entry}&image_type=photo`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
