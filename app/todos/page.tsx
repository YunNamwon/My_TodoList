import { title } from "@/components/primitives";
import TodosTable from "@/components/todos-table";

async function fetchTodosApiCall(){
	console.log("fetchTodosApiCall Called");
	const res = await fetch(`${process.env.BASE_URL}/api/todos`);
	return res.json(); 
}

export default async function TodosPage() {
	
	const response = await fetchTodosApiCall();
	console.log("API Response:", response);
	return (
		<div className="flex flex-col space-y-10">
			<h1 className={title()}>Todos</h1>
			<TodosTable todos={response.data ?? [] }/>
		</div>
	);
}
