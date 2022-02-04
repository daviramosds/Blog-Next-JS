
import { Container } from "./styles";
import Image from 'next/image'
function Loading() {

  return (
    <Container>
        <Image src='/loading.svg' width={45} height={45} />
    </Container>
  );
}

export default Loading;
