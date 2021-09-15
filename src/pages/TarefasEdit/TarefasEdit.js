import { useEffect, useState } from "react";
import "./TarefasEdit.scss";

const TarefasEdit = (props) => {
  const [titulo, setTitulo] = useState();
  const [descricao, setDescricao] = useState();
  const [prioridade, setPrioridade] = useState();
  const [status, setStatus] = useState();
  const [prazo, setPrazo] = useState();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dados = { titulo, descricao, prioridade, status, prazo };
    const result = await fetch(
      "http://localhost:4000/tarefa/" + props.match.params.id,
      {
        method: "PUT",
        headers: new Headers({
          "Content-type": "application/json",
        }),
        body: JSON.stringify(dados),
      }
    );
    props.history.push("/");
  };

  useEffect(() => {
    getTarefa();
  }, []);

  const url = "http://localhost:4000/tarefa";

  const getTarefa = async () => {
    const response = await fetch(url + "/" + props.match.params.id);
    const { data } = await response.json();
    console.log(data);
    setTitulo(data.titulo);
    setDescricao(data.descricao);
    setPrioridade(data.prioridade);
    setStatus(data.status);
    setPrazo(data.prazo);
  };

  return (
    <div className="text">
      <h2> Edição da tarefa</h2>
      <img src="" alt="Imagem" />
      <form onSubmit={handleSubmit}>
        <div class="group">
          <label for="nome">Titulo</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={titulo}
            onChange={(id) => setTitulo(id.target.value)}
          />
        </div>
        <div class="group">
          <label for="tipo">Descrição</label>
          <input
            type="text"
            name="tipo"
            id="tipo"
            value={descricao}
            onChange={(id) => setDescricao(id.target.value)}
          />
        </div>
        <div class="group">
          <label for="valor">Prioridade</label>
          <input
            type="text"
            name="valor"
            id="valor"
            value={prioridade}
            onChange={(id) => setPrioridade(id.target.value)}
          />
        </div>
        <div class="group">
          <label for="status">Status</label>
          <p>Fazer:</p>
          <input
            type="radio"
            name="status"
            value="Fazer"
            onChange={(id) => setStatus(id.target.value)}
          />
          <p>Fazendo:</p>
          <input
            type="radio"
            name="status"
            value="Fazendo"
            onChange={(id) => setStatus(id.target.value)}
          />
          <p>Concluido:</p>
          <input
            type="radio"
            name="status"
            value="concluido"
            onChange={(id) => setStatus(id.target.value)}
          />
        </div>
        <div class="group">
          <label for="prazo">Prazo</label>
          <input
            type="date"
            name="data"
            id="imagem"
            value={prazo}
            onChange={(id) => setPrazo(id.target.value)}
          />
        </div>
        <div class="btns">
          <button>Salvar</button>
          <div class="btn-fake">
            <a href="/catalogo">Cancelar</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TarefasEdit;
