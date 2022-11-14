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

const Localizar: React.FC = () => {
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
    { id: "secao_livro", label: "Seção" },
    { id: "prateleira_livro", label: "Prateleira" },
    { id: "estante_livro", label: "Estante" },
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
        Faça sua busca do livro que deseja localizar
      </Typography>
      <Input
        defaultValue="Localizar livros"
        size="small"
        placeholder="Nome livro"
        color="error"
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
                          {row.secao_livro}
                        </TableCell>
                        <TableCell align={"center"}>
                          {row.prateleira_livro}
                        </TableCell>
                        <TableCell align={"center"}>
                          {row.estante_livro}
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
                          {row.secao_livro}
                        </TableCell>
                        <TableCell align={"center"}>
                          {row.prateleira_livro}
                        </TableCell>
                        <TableCell align={"center"}>
                          {row.estante_livro}
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

export default Localizar;
