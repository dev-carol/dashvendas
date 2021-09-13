import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'utils/requests';
import { formatLocalDate } from 'utils/format';
import Pagination from 'components/Pagination';
const DataTable = () => {

    const[activePage, setAcitvePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        number: 0,
        totalElements: 0,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
            .then(Response => {
                setPage(response.data);
            });
    }, [activePage]);

    const ChangePage = (index: number) =>{
        setAcitvePage(index);
    }
    return (
        <>
        <Pagination page= {page} onPageChange={ChangePage}/>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.data, "dd/MM/yyyy")</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>}
                ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;