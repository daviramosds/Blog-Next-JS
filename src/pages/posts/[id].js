import { useState, useEffect } from "react";

import api from "../../services/api";
import axios from "axios";
import Header from "../../components/Header";
import { useRouter } from "next/router";

import { Banner, Content } from "../../styles/posts";
import Loading from "../../components/Loading";
import { Fade, Zoom } from "react-reveal";

export default function PostComplete() {
  const [posts, setPosts] = useState([{}]);
  const [thumb, setThumb] = useState();
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();

  useEffect(async () => {
    const id = router.query.id;

    const { data } = await api.get();

    data.map((page) => {
      if (page.id === id) {
        setThumb(page.properties.Thumbnail.rich_text[0].plain_text);
      }
    });

    try {
      const { data: content } = await axios.get(
        `https://potion-api.now.sh/html?id=${id}`
      );

      setLoaded(true);

      document.getElementById("post").innerHTML = content;
    } catch (error) {}
  }, [router.isReady]);

  if (loaded) {
    return (
      <>
        <Header search={false} />

        <Zoom>
          <Banner banner={thumb} />
        </Zoom>

        <Fade>
          <Content>
            <article id="post"></article>
          </Content>
        </Fade>
      </>
    );
  } else {
    return <Loading />;
  }
}
