import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMembers } from "@/pods/list/hooks/useMembers";
import { MemberEntity } from "@/models/member-model";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { routes } from "@/router";

export function ListContainer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMembers();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [search, setSearch] = useState("lemoncode");
  const { members, getMembers } = useMembers({ search });

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label={search}
            variant="outlined"
            onChange={handleChange}
          />
          <Button variant="contained">Buscar Miembros</Button>
        </form>
      </header>
      <div className="list">
        <TableContainer>
          <Table sx={{ maxWidth: 560 }} aria-label="tabla de organizaciones">
            <TableHead>
              <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member: MemberEntity) => (
                <TableRow
                  key={member.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img
                      src={member.avatarUrl}
                      alt={member.login}
                      height={100}
                    />
                  </TableCell>
                  <TableCell>
                    <Link to={routes.detail(member.login)}>{member.login}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
