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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import { Container } from "./style";
import { BiSearchAlt } from "react-icons/bi";
import baseApi from "../../Services/Api/api";
import { toastfySuccess, toastfyError } from "../../Components/Toast";

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
  const [titulo, setTitulo] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dialogDelete, setDialogDelete] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const nome_emprestimo = localStorage.getItem("@InfoUser:nome");
  const email_emprestimo = localStorage.getItem("@InfoUser:email");
  const ra_emprestimo = localStorage.getItem("@InfoUser:ra");
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
    { id: "emprestado", label: "Status" },
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

  const emprestarLivros = (id: string) => {
    setIsLoading(true);
    const data = {
      emprestado: true,
      nome_emprestimo: nome_emprestimo,
      email_emprestimo: email_emprestimo,
      ra_emprestimo: ra_emprestimo,
    };
    baseApi
      .put(`livros/${id}`, data)
      .then(() => {
        toastfySuccess("Livro editado com sucesso!");
        location.reload();
        setIsLoading(false);
      })
      .catch((error: any) => {
        toastfyError("Erro ao editar Livro.");
        console.error("There was an error!", error);
        setIsLoading(false);
      });
  };
  const openDialogDelete = (id: number, titulo: string) => {
    setDialogDelete(true);
    setTitulo(titulo);
    setId(String(id));
  };
  const handleCloseDialog = () => setDialogDelete(false);

  return (
    <Container>
      <Typography variant="h1">
        Faça sua busca do livro que deseja emprestar
      </Typography>
      <Input
        defaultValue="Emprestar livros"
        size="small"
        color="secondary"
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
                          {row.emprestado ? (
                            <Button variant="contained" color="error" disabled>
                              Emprestado &#x1F62D;
                            </Button>
                          ) : (
                            <Button variant="contained" color="success">
                              Emprestar &#x1F60A;
                            </Button>
                          )}
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
                          {row.emprestado ? (
                            <Button variant="contained" color="error" disabled>
                              Emprestado &#x1F62D;
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              onClick={() =>
                                openDialogDelete(row.id, row.titulo_livro)
                              }
                              color="success"
                            >
                              Emprestar &#x1F60A;
                            </Button>
                          )}
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
      <Dialog open={dialogDelete} onClose={handleCloseDialog}>
        <DialogContent style={{ display: "flex", alignItems: "center" }}>
          <DialogContentText>
            <strong className="strong">{nome_emprestimo}</strong> deseja realmente emprestar o
            livro <strong className="strong">{titulo}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseDialog}
          >
            Não
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => emprestarLivros(id)}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Emprestar;
