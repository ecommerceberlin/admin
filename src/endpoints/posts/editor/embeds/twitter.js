import * as React from "react";
import Box from '@mui/material/Box'

const TwitterIcon = ({style}) =>  <img
    src="/Twitter_Social_Icon_Rounded_Square_Color.svg"
    width={24}
    height={24}
    style={style}
/>


class TwitterEmbed extends React.Component {

    render() {
      const { attrs: {matches: { groups: {handle, id}}} } = this.props;

      return (
        <Box border={1} p={2} mt={1} mb={1} className={this.props.isSelected ? "ProseMirror-selectednode" : ""}><TwitterIcon style={{marginRight: 10}}/>{handle}</Box>
      );
    }
  }

 export const twitter = {
    title: "Twitter",
    keywords: "Twitter status",
    icon: TwitterIcon,
    matcher: url => {
      return url.match(
        /(?:https?:\/\/)?(?:www\.)?twitter(?:\.com)?\/(?<handle>[a-zA-Z0-9_]{1,15})\/status\/(?<id>[0-9]+)$/
      );
    },
    component: TwitterEmbed,
}

  

