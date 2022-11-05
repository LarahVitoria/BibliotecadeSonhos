import {
  InputAdornment,
  Input,
  Typography,
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { BiSearchAlt } from "react-icons/bi";
import baseApi from "../../Services/Api/api";

interface Livros {
  titulo_livro: string;
  autor_livro: string;
  ano_livro: number;
  secao_livro: string;
  prateleira_livro: string;
  estante_livro: string;
  emprestado: boolean;
  nome_emprestimo: string;
  email_emprestimo: string;
  ra_emprestimo: number;
  id: number;
}

interface Column {
  id: string;
  label: string;
}

const Emprestar: React.FC = () => {
  const [livros, setLivros] = useState<Livros[]>([]);
  const [busca, setBusca] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns: Column[] = [
    { id: "titulo_livro", label: "Título" },
    { id: "autor_livro", label: "Autor" },
    { id: "ano_livro", label: "Ano" },
    { id: "emprestado", label: "Disponivel" },
  ];

  useEffect(() => {
    baseApi.get("livros").then((res: any) => {
      setLivros(res.data);
    });
  }, []);

  const filtrarLivros =
    busca.length > 0
      ? livros.filter((resp) => resp.titulo_livro.includes(busca))
      : [];

  return (
    <Container>
      <Typography variant="h1">
        Faça sua busca do livro que deseja emprestar
      </Typography>
      <Input
        defaultValue="Emprestar livros"
        size="small"
        placeholder="Nome livro"
        startAdornment={
          <InputAdornment position="start">
            <BiSearchAlt />
          </InputAdornment>
        }
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        type={"text"}
      />

      <TableContainer sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={"center"}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {busca.length > 0
              ? filtrarLivros
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell align={"center"}>
                          {row.titulo_livro}
                        </TableCell>
                        <TableCell align={"center"}>
                          {row.autor_livro}
                        </TableCell>
                        <TableCell align={"center"}>{row.ano_livro}</TableCell>
                        <TableCell align={"center"}>
                          {row.emprestado ? "Não" : "Sim"}
                        </TableCell>
                      </TableRow>
                    );
                  })
              : livros
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell align={"center"}>
                          {row.titulo_livro}
                        </TableCell>
                        <TableCell align={"center"}>
                          {row.autor_livro}
                        </TableCell>
                        <TableCell align={"center"}>{row.ano_livro}</TableCell>
                        <TableCell align={"center"}>
                          {row.emprestado ? <Button variant="contained" color="error" disabled>Emprestado 	&#x1F62D;</Button>: <Button variant="contained" color="success">Emprestar &#x1F60A;</Button>}
                        </TableCell>
                      </TableRow>
                    );
                  })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={busca.length > 0 ? filtrarLivros.length : livros.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage="Itens"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default Emprestar;
