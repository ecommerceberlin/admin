import * as React from "react";



class VimeoEmbed extends React.Component {
    render() {
      const { attrs } = this.props;
      const videoId = attrs.matches[1];
  
      return (
        <iframe
          className={this.props.isSelected ? "ProseMirror-selectednode" : ""}
          src={`https://player.vimeo.com/video/${videoId}`}
        />
      );
    }
  }



 export const vimeo = {
    title: "Vimeo",
    keywords: "vimeo video",
    icon: () => (
      <img
        src="https://i.vimeocdn.com/favicon/main-touch_180"
        width={24}
        height={24}
      />
    ),
    matcher: url => {
      return url.match(
        /(?:https?:\/\/)?(?:www\.)?vimeo(?:\.com)?\/([0-9]+)$/i
      );
    },
    component: VimeoEmbed,
}

  

