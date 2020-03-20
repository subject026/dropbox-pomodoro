import React from "react";

import styled from "styled-components";

const Form = styled.form`
  padding: 40px;
  background-color: darkslateblue;
  color: #fff;
`;

export default () => {
  return (
    <Form>
      <label htmlFor="githubUsername">Github Username</label>
      <input type="text" />
    </Form>
  );
};
