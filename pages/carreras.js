import Link from "next/link";
import fsPromises from 'fs/promises';
import path from 'path'

export default function Home(props) {
  const posts = props.data
  return (
    <>
      <section>
        <h1>Preguntas Técnicas de Entrevista</h1>
        <div>
          Estas son las preguntas más comúnes si estas aplicando para una
          vacante de:
          {posts.map(({bootcamp}) => (
            <div>
              <ul>
                <li>
                  <Link href={`/carreras/${bootcamp}`}>
                    {bootcamp}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'json/info_data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}