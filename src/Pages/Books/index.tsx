import React from "react";
import {
  Form,
  Fildset,
  Title,
  ContainerInformation,
  TitleModal,
} from "./style";
import {
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Container,
  Modal,
  TextField,
  MenuItem,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Input,
  InputAdornment,
  TablePagination,
  ButtonGroup,
  Tooltip,
  Grid,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastfyError, toastfySuccess } from "../../Components/Toast";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";
import baseApi from "../../Services/Api/api";
import { BiSearchAlt } from "react-icons/bi";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import { important } from "polished";

interface Livros {
  id: number;
  titulo_livro: string;
  autor_livro: string;
  ano_livro: number;
  secao_livro: string;
  prateleira_livro: number;
  estante_livro: number;
  emprestado: boolean;
  email_emprestimo: string;
  nome_emprestimo: string;
  ra_emprestimo: string;
}

interface Column {
  id: string;
  label: string;
}

const Livross = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [livros, setLivros] = useState<Livros[]>([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [busca, setBusca] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [id, setId] = useState("");
  const [titulo_livro, setTitulo_livro] = useState("");
  const [autor_livro, setAutor_livro] = useState("");
  const [ano_livro, setAno_livro] = useState(0);
  const [secao_livro, setSecao_livro] = useState("");
  const [prateleira_livro, setPrateleira_livro] = useState(0);
  const [estante_livro, setEstante_livro] = useState(0);
  const [nome_emprestimo, setNome_emprestimo] = useState("");
  const [email_emprestimo, setEmail_emprestimo] = useState("");
  const [ra_emprestimo, setRa_emprestimo] = useState("");
  const [emprestado, setEmprestado] = useState("false");
  const [isLoading, setIsLoading] = useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [dialogDelete, setDialogDelete] = React.useState(false);

  const listLivross = () => {
    baseApi
      .get(`livros`)
      .then((response: { data: React.SetStateAction<Livros[]>; }) => {
        setLivros(response.data);
      })
      .catch((error: any) => {
        toastfyError("Erro ao listar Livros.");
        console.error("There was an error!", error);
      });
  };

  const updateLivross = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      titulo_livro,
      ano_livro,
      autor_livro,
      secao_livro,
      prateleira_livro,
      estante_livro,
      emprestado,
      nome_emprestimo,
      email_emprestimo,
      ra_emprestimo,
    };
    baseApi
      .put(`livros/${id}`, data)
      .then(() => {
        toastfySuccess("Livro editado com sucesso!");
        listLivross();
        setIsLoading(false);
        handleCloseModal();
      })
      .catch((error: any) => {
        toastfyError("Erro ao editar Livro.");
        console.error("There was an error!", error);
        setIsLoading(false);
        handleCloseModal();
      });
  };

  function openModalAndSelectLivros(id: number) {
    setModalEdit(true);
    baseApi.get(`livros/${id}`).then((response: { data: { id: React.SetStateAction<string>; titulo_livro: React.SetStateAction<string>; autor_livro: React.SetStateAction<string>; ano_livro: React.SetStateAction<number>; emprestado: { toString: () => React.SetStateAction<string>; }; ra_emprestimo: React.SetStateAction<string>; email_emprestimo: React.SetStateAction<string>; nome_emprestimo: React.SetStateAction<string>; estante_livro: React.SetStateAction<number>; prateleira_livro: React.SetStateAction<number>; secao_livro: React.SetStateAction<string>; }; }) => {
      setId(response.data.id);
      setTitulo_livro(response.data.titulo_livro);
      setAutor_livro(response.data.autor_livro);
      setAno_livro(response.data.ano_livro);
      setEmprestado(response.data.emprestado.toString());
      setRa_emprestimo(response.data.ra_emprestimo);
      setEmail_emprestimo(response.data.email_emprestimo);
      setNome_emprestimo(response.data.nome_emprestimo);
      setEstante_livro(response.data.estante_livro);
      setPrateleira_livro(response.data.prateleira_livro);
      setSecao_livro(response.data.secao_livro);
    });
  }
  const onDelete = (id: string) => {
    baseApi
      .delete(`livros/${id}`)
      .then(() => {
        listLivross();
        handleCloseDialog();
        toastfySuccess("Livro excluído com sucesso!");
      })
      .catch((error: any) => {
        toastfyError("Erro ao excluir um Livro.");
        console.error("There was an error!", error);
      });
  };
  const openDialogDelete = (id: number) => {
    setDialogDelete(true);
    setId(String(id));
  };
  const handleCloseDialog = () => setDialogDelete(false);

  const handleCloseModal = () => setModalEdit(false);

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
    { id: "estante_livro", label: "Estante" },
    { id: "prateleira_livro", label: "Prateleira" },
    { id: "emprestado", label: "Status" },
    { id: "nome_emprestimo", label: "Nome Responsável" },
    { id: "email_emprestimo", label: "Email Responsável" },
    { id: "ra_emprestimo", label: "RA Responsável" },
    { id: "opcoes", label: "Opções" },
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

  useEffect(() => {
    listLivross();
  }, []);

  return (
    <Container style={{ maxWidth: "100vw " }}>
      <ContainerInformation>
        <div>
          <Title>Listagem de Livros</Title>
        </div>
        <div>
          <Button
            color="warning"
            variant="outlined"
            onClick={() => navigate("/cadastroLivros")}
            endIcon={<BsChevronDoubleRight />}
          >
            Cadastro de Livros
          </Button>
        </div>
      </ContainerInformation>

      <Input
        defaultValue="Emprestar livros"
        size="small"
        placeholder="Nome livro"
        style={{ marginBottom: "10px", width: "95vw" }}
        color="warning"
        startAdornment={
          <InputAdornment position="start">
            <BiSearchAlt />
          </InputAdornment>
        }
        value={busca}
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setBusca(e.target.value)}
        type={"text"}
      />

      <TableContainer sx={{ maxHeight: "60vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className="table_book"
                  key={column.id}
                  align={"center"}
                >
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
                        <TableCell align={"center"} className="listagem_livro">
                          {row.titulo_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.autor_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.ano_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.secao_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.estante_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.prateleira_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.emprestado ? "Emprestado" : "Disponível"}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.nome_emprestimo}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.email_emprestimo}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.ra_emprestimo}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          <ButtonGroup
                            variant="text"
                            aria-label="text button group"
                          >
                            <Tooltip title="Editar Livros">
                              <IconButton
                                color="warning"
                                onClick={() => openModalAndSelectLivros(row.id)}
                              >
                                <MdModeEdit />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Deletar Livros">
                              <IconButton
                                color="error"
                                onClick={() => openDialogDelete(row.id)}
                              >
                                <MdDeleteForever />
                              </IconButton>
                            </Tooltip>
                          </ButtonGroup>
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
                        <TableCell align={"center"} className="listagem_livro">
                          {row.titulo_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.autor_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.ano_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.secao_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.estante_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.prateleira_livro}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.emprestado ? "Emprestado" : "Disponível"}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.nome_emprestimo}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.email_emprestimo}
                        </TableCell>
                        <TableCell align={"center"} className="listagem_livro">
                          {row.ra_emprestimo}
                        </TableCell>
                        <TableCell align="center" className="listagem_livro">
                          <ButtonGroup
                            variant="text"
                            aria-label="text button group"
                          >
                            <Tooltip title="Editar Livros">
                              <IconButton
                                color="warning"
                                onClick={() => openModalAndSelectLivros(row.id)}
                              >
                                <MdModeEdit />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Deletar Livros">
                              <IconButton
                                color="error"
                                onClick={() => openDialogDelete(row.id)}
                              >
                                <MdDeleteForever />
                              </IconButton>
                            </Tooltip>
                          </ButtonGroup>
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
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
        }}
        open={modalEdit}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Form onSubmit={updateLivross}>
          <Fildset>
            <div className="header">
              <TitleModal>Editar Livro</TitleModal>
              {isMobile === true && (
                <IconButton color="warning" onClick={handleCloseModal}>
                  <AiOutlineClose />
                </IconButton>
              )}
            </div>
            <TextField
              id="titulo_livro"
              type={"text"}
              label="Titulo"
              variant="outlined"
              color="warning"
              value={titulo_livro}
              required
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTitulo_livro(e.target.value)}
            />
            <TextField
              id="autor_livro"
              type={"text"}
              label="Autor"
              variant="outlined"
              color="warning"
              value={autor_livro}
              required
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setAutor_livro(e.target.value)}
            />
            <Grid
              container
              style={{ width: "100%", justifyContent: "center" }}
              spacing={0.5}
            >
              <Grid item xs={6}>
                <TextField
                  id="ano_livro"
                  label="Ano"
                  variant="outlined"
                  color="warning"
                  value={ano_livro}
                  required
                  onChange={(e: { target: { value: any; }; }) => setAno_livro(Number(e.target.value))}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="secao_livro"
                  type={"text"}
                  label="Seção"
                  variant="outlined"
                  color="warning"
                  value={secao_livro}
                  required
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSecao_livro(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              style={{ width: "100%", justifyContent: "center" }}
              spacing={0}
            >
              <Grid item xs={6}>
                <TextField
                  id="estante_livro"
                  label="Estante"
                  variant="outlined"
                  color="warning"
                  value={estante_livro}
                  required
                  onChange={(e: { target: { value: any; }; }) => setEstante_livro(Number(e.target.value))}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="prateleira_livro"
                  label="Prateleira"
                  variant="outlined"
                  color="warning"
                  value={prateleira_livro}
                  required
                  onChange={(e: { target: { value: any; }; }) => setPrateleira_livro(Number(e.target.value))}
                />
              </Grid>
            </Grid>

            <TextField
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmprestado(e.target.value)}
              label="Emprestado"
              name="Tipo"
              required
              variant="outlined"
              select
              color="warning"
              value={emprestado}
            >
              <MenuItem key="true" color="warning" value={"true"}>
                Sim
              </MenuItem>
              <MenuItem key="false" color="warning" value={"false"}>
                Não
              </MenuItem>
            </TextField>
            {emprestado === "true" && (
              <>
                <TextField
                  id="nome_emprestimo"
                  type={"text"}
                  label="Nome Responsável"
                  variant="outlined"
                  color="warning"
                  value={nome_emprestimo}
                  required
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNome_emprestimo(e.target.value)}
                />
                <TextField
                  id="email_emprestimo"
                  type={"text"}
                  label="Email Responsável"
                  variant="outlined"
                  color="warning"
                  value={email_emprestimo}
                  required
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail_emprestimo(e.target.value)}
                />
                <TextField
                  id="ra_emprestimo"
                  type={"text"}
                  label="RA Responsável"
                  variant="outlined"
                  color="warning"
                  value={ra_emprestimo}
                  required
                  onChange={(e: { target: { value: any; }; }) => setPrateleira_livro(Number(e.target.value))}
                />
              </>
            )}

            <Button
              type="submit"
              variant="outlined"
              color="warning"
              size="large"
            >
              {isLoading ? <CircularProgress color="secondary" /> : "Editar"}
            </Button>
          </Fildset>
        </Form>
      </Modal>

      <Dialog open={dialogDelete} onClose={handleCloseDialog}>
        <DialogContent style={{ display: "flex", alignItems: "center" }}>
          <DialogContentText>
            Deseja realmente excluir este Livro?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleCloseDialog}
          >
            Não
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => onDelete(id)}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Livross;
