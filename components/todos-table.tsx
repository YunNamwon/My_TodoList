"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Todo } from "@/types";

export default function TodosTable({ todos }: { todos: Todo[] }) {
  const TodoRow = (aTodo: Todo) => {
    return (
      <TableRow key={aTodo.id}>
        <TableCell>{aTodo.id}</TableCell>
        <TableCell>{aTodo.title}</TableCell>
        <TableCell>{aTodo.is_done ? "⭕" : "❌"}</TableCell>
        <TableCell>{`${aTodo.created_at}`}</TableCell>
      </TableRow>
    );
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>아이디</TableColumn>
        <TableColumn>할일내용</TableColumn>
        <TableColumn>완료여부</TableColumn>
        <TableColumn>생성일</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"보여줄 데이터가 없습니다."}>
        {todos && todos.map((aTodo: Todo) => TodoRow(aTodo))}
      </TableBody>
    </Table>
  );
}
