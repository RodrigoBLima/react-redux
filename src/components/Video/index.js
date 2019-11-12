import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Modulo {activeModule.title}</strong>
    <strong>Aula {activeLesson.title}</strong>
  </div>
);

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video);
