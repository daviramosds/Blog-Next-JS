import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
const { Client } = require("@notionhq/client");

import { Context } from "../Store";

import { Banner, Posts } from "../styles/index";

import api from "../services/api";
import Loading from "../components/Loading";

import { Fade, Zoom } from "react-reveal";

export default function Home() {
  const [posts, setPosts] = useState();
  const [searchContent, setSearchContent] = useContext(Context);
  const [load, setLoad] = useState(false);

  useEffect(async () => {
    try {
      const { data } = await api.get();

      setPosts(data);
    } catch (error) {
      console.error(error);
    }

    setLoad(true);
  }, []);

    return (
      <>
      {
        !load && <Loading />
      }
        <Header search={true} />

        <Zoom>
          <Banner>
            {searchContent ? (
              <h1>{searchContent}</h1>
            ) : (
              <h1>
                davirds<strong>.dev</strong>
              </h1>
            )}
          </Banner>
        </Zoom>
        <Posts>
          {searchContent
            ? posts.map((page) => {
                let date = page.properties.Created.created_time;
                if (
                  JSON.stringify(page)
                    .toLowerCase()
                    .includes(searchContent.toLowerCase())
                ) {
                  let tags = page.properties.Tags.multi_select;

                  let tagsObject = [];

                  tags.forEach((tag) => {
                    tagsObject.push(tag.name);
                  });

                  return (
                    <Fade>
                      <Post
                        creator={
                          page.properties.Creator.rich_text[0].plain_text
                        }
                        title={page.properties.Name.title[0].plain_text}
                        tags={tagsObject}
                        date={new Date(date).toDateString()}
                        thumb={
                          page.properties.Thumbnail.rich_text[0].plain_text
                        }
                        id={page.id}
                        key={page.id}
                      />
                    </Fade>
                  );
                }
              })
            : posts === undefined
            ? ""
            : posts.map((page) => {
                let date = page.properties.Created.created_time;

                let tags = page.properties.Tags.multi_select;

                let tagsObject = [];

                tags.forEach((tag) => {
                  tagsObject.push(tag.name);
                });

                return (
                  <Fade>
                    <Post
                      key={page.id}
                      creator={page.properties.Creator.rich_text[0].plain_text}
                      title={page.properties.Name.title[0].plain_text}
                      tags={tagsObject}
                      date={new Date(date).toDateString()}
                      thumb={page.properties.Thumbnail.rich_text[0].plain_text}
                      id={page.id}
                    />
                  </Fade>
                );
              })}
        </Posts>
      </>
    );
}
