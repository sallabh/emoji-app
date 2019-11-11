import React  from "react";
import Header from './component/header/header.component'
import SearchInput from './component/search/search.component'
import EmojiResults from './component/EmojiResults/emojiresults.component'
import filterEmoji from './Data/filterEmoji'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}