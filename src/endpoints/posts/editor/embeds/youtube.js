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



 export const youtube = {
    title: "YouTube",
    keywords: "youtube video tube google",
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
        width={24}
        height={24}
      />
    ),
    matcher: url => {
      return url.match(
        /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i
      );
    },
    component: YoutubeEmbed,
}

  

