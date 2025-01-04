"use client";
import styled from "@emotion/styled";

export const PostsGridStyles = styled.div`
  padding: 20px 10px 0 0;
  .MuiPaper-root {
    position: relative;
    padding: 0 20px;
    height: 200px;
    width: 200px;
    * {
      overflow: hidden;
    }
    &:hover {
      .tools {
        display: block;
      }
      .readme {
        p {
          display: block;
        }
      }
    }
    .tools {
      position: absolute;
      top: 0;
      right: 0;
      display: none;
      z-index: 20;
      button {
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        background-color: #f0f0f0;
        color: black;
        border: none;
        cursor: pointer;
        &:hover {
          background-color: #e0e0e0;
        }
      }
    }
    h2 {
      margin: 15px 0 5px 0;
      height: 25px;
    }
    .content {
      margin: 0;
      height: 100px;
    }
    .author {
      margin: 20px 0;
      font-size: 0.8rem;
    }
    .readme {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
      text-align: right;
      p {
        display: none;
        color: gray;
        font-size: 0.8rem;
        position: absolute;
        text-decoration: underline;
        bottom: 0;
        right: 15px;
      }
    }
  }
`;
