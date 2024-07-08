import React, { Component } from "react";
import Media from "react-media";
import { Dimensions } from "react-native";
// import { hasWindow } from '../../Lib/hasWindow';

export interface IMedia {
  media: { small: boolean; medium: boolean; large: boolean; xlarge: boolean };
  windowWidth: number;
  windowHeight: number;
}

export function withMedia(WrappedComponent) {
  return class extends Component {
    state = { windowWidth: 0, windowHeight: 0 };

    componentDidMount() {
      // if (hasWindow) {
      Dimensions.addEventListener("change", (bing) =>
        this.dimensionsChanged(bing)
      );

      // window.addEventListener('scroll', this.listenToScroll);
      const dimensions = Dimensions.get("window");
      this.setState({
        windowWidth: dimensions.width,
        windowHeight: dimensions.height,
      });
      // }
    }
    componentWillUnmount() {
      // if (hasWindow) {
      Dimensions.removeEventListener("change", this.dimensionsChanged);
      // }
    }

    dimensionsChanged({ window, screen }) {
      this.setState({
        windowWidth: window.width,
        windowHeight: window.height,
      });
    }

    render() {
      return (
        <Media
          queries={{
            small: "(max-width: 779px)",
            medium: "(min-width: 780px) and (max-width: 1279px)",
            large: "(min-width: 1280px) and (max-width: 1079px)",
            xlarge: "(min-width: 1920px)",
          }}
          defaultMatches={{
            small: true,
            medium: false,
            large: false,
            xlarge: false,
          }}
        >
          {(matches) => (
            <WrappedComponent
              {...this.props}
              media={matches}
              windowWidth={this.state.windowWidth}
              windowHeight={this.state.windowHeight}
            />
          )}
        </Media>
      );
    }
  };
}
