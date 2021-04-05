import React from "react";
import styled from "styled-components";

const WidgetContainer = styled.div`
    background-color: #18191a;
`;

function Widgets() {
  return (
    <WidgetContainer>
      <iframe
        title="widget"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25EC%2583%259D%25ED%2599%259C%25EC%25BD%2594%25EB%2594%25A9-218158748272233&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=866750737198859"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="encrypted-media"
      ></iframe>
    </WidgetContainer>
  );
}

export default Widgets;
