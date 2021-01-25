import React, { Component } from "react";
import Row from "react-bootstrap/Row";

class ArticleItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
        <Row>
          <div class="grid-x grid-margin-x grid-padding-y article-list-item article-list-item--with-image">
            <div class="cell small-12 medium-auto article-list-item__info-container">
              <h2 class="h3 article-list-item__heading">
                {this.props.heading}
              </h2>
              <span class="article-list-item__info-separator">/</span>
              <p class="article-list-item__info1">
                {this.props.itemDescription} &nbsp;
              </p>
              <span class="article-list-item__info-separator">/</span>
              <p class="article-list-item__info2">{this.props.itemTools}</p>
            </div>
            <div class="cell small-12 medium-6 article-list-item__image-container">
              <img src={this.props.image} alt={this.props.heading} />
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default ArticleItem;
