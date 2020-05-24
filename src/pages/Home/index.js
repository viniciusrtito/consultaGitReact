import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisar() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setErro(false);
        history.push("/repositories");
      })
      .catch((err) => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Title>Busca Repositórios</S.Title>
      <S.Content>
        <S.Input
          className="usuarioInput"
          placeholder="Usuário"
          onChange={(e) => setUsuario(e.target.value)}
        />
        <S.Button type="button" onClick={handlePesquisar}>
          Pesquisar
        </S.Button>
      </S.Content>
      {erro ? <S.MessageError>Erro! Tente novamente!</S.MessageError> : ""}
    </S.HomeContainer>
  );
}

export default App;
