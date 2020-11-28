import * as React from "react";


class YoutubeEmbed extends React.Component {
    render() {
      const { attrs } = this.props;
      const videoId = attrs.matches[1];
  
      return (
        <iframe
          className={this.props.isSelected ? "ProseMirror-selectednode" : ""}
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
        />
      );
    }
  }


export default YoutubeEmbed