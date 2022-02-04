import React, { useContext, useState, useEffect } from "react";

import "./styles";
import { Container } from "./styles";

import { useRouter } from "next/router";
import Link from "next/link";

function Post({ creator, title, tags, date, thumb, id }) {

  let tagsArray = []

  tags.forEach(tag => {
    tagsArray.push(tag.toUpperCase())
    tagsArray.push(' ')
  });

  return (
    <Link href={`/posts/${id}`}>
    <Container banner={thumb}>
      <div className="banner"></div>
      <div className="content">
        <label className="author">{creator}</label>
        <h1>{title}</h1>
        <div className="info">
          <label>{tagsArray}</label>
          <label>{date}</label>
        </div>
      </div>
    </Container>
    </Link>
  );
}

export default Post;
