import fsPromises from "fs/promises";
import path from "path";

export default function Faq(props) {
  const posts = props.data;
  return (
    <>
      {posts.map(({ bootcamp, questions }) => (
          <div className="container">
            <h3>{bootcamp}</h3>

            <div>
              {questions.map(({ Pregunta, Respuesta, type }) => (
                <div>
                  <h5>{Pregunta}</h5>
                  <div>{ type == 'Array' ?  Respuesta.map(element => <p>{element}</p>)  : Respuesta }</div>

                </div>
              ))}
            </div>
          </div>
      ))}
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "json/info_data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const objectDataArray = objectData.data;
  const paths = objectDataArray.map((element) => ({
    params: { id: element.bootcamp },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "json/info_data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const objectDataArray = objectData.data;
  const data = objectDataArray.filter(
    (element) => element.bootcamp == params.id
  );
  return {
    props: {
      data,
    },
  };
}
