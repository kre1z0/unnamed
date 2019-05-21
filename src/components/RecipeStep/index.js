import React, { PureComponent } from "react";

import { Container, Header, Content, ArrowIcon } from "./styled";
import { isReactElement } from "../../utils/dom";
import { HTMLContent } from "../../cms/common/Content";

export class RecipeStep extends PureComponent {
  state = {
    isOpen: true,
    height: 0,
  };

  content = [];

  componentDidMount() {
    this.setState({ height: this.getContentHeight() });
  }

  getContentHeight = () => {
    if (this.content) {
      return this.content.getBoundingClientRect().height;
    } else {
      return 0;
    }
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return this.getContentHeight();
  }

  componentDidUpdate(prevProps, { isOpen: prevIsOpen }, snapshot) {
    const { isOpen } = this.state;
    if (isOpen !== prevIsOpen) {
      if (isOpen) {
        this.setState({ height: snapshot });
      } else {
        this.setState({ height: 0 });
      }
    }
  }

  onRef = ref => {
    if (ref) {
      this.content = ref;
    }
  };

  render() {
    const { isOpen, height } = this.state;
    const { content, title, stepNumber, isPreview } = this.props;
    const StepContent = isReactElement(content) ? Content : HTMLContent;

    return (
      <Container>
        <Header
          isOpen={isOpen}
          aria-label={`Шаг ${stepNumber}`}
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          {title}
          <ArrowIcon isOpen={isOpen} />
        </Header>
        <Content isOpen={isOpen} h={height} isPreview={isPreview}>
          <StepContent ref={this.onRef} content={content} />
        </Content>
      </Container>
    );
  }
}
