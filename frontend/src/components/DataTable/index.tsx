const DataTable = () => {
    return (
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
                <tr>
                    <td>25/04/2021</td>
                    <td>Analise Nakamura</td>
                    <td>50</td>
                    <td>42</td>
                    <td>15658.00</td>
                </tr>
                <tr>
                    <td>22/04/2021</td>
                    <td>Manson sheen </td>
                    <td>20</td>
                    <td>12</td>
                    <td>150.00</td>
                </tr>
                <tr>
                    <td>15/04/2021</td>
                    <td>Bryan Cooper</td>
                    <td>60</td>
                    <td>58</td>
                    <td>1952017.00</td>
                </tr>
                <tr>
                    <td>05/04/2021</td>
                    <td>Thays Allen</td>
                    <td>10</td>
                    <td>5</td>
                    <td>100.00</td>
                </tr>
                <tr>
                    <td>29/04/2021</td>
                    <td>Charlie Harper </td>
                    <td>46</td>
                    <td>48</td>
                    <td>3000.00</td>
                </tr>

                
            </tbody>
        </table>
    </div>
    );
}

export default DataTable;