import { Table } from 'flowbite-react';
import Nodata from './Nodata';
interface Column {
    field: string;
    name: string;
    align?: 'left' | 'center' | 'right'; // Optional alignment property
}

interface Data {
    [key: string]: string | number | JSX.Element;
}

interface Props {
    columns: Column[];
    data: Data[];
}

function CustomTable({ columns, data }: Props): JSX.Element {
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    {columns.map((column, index) => (
                        <Table.HeadCell key={index} className={`text-${column.align || 'left'}`}>{column.name}</Table.HeadCell>
                    ))}
                </Table.Head>
                <Table.Body className="divide-y">
                    {data.map((row, rowIndex) => (
                        <Table.Row key={rowIndex} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            {columns.map((column, columnIndex) => (
                                <Table.Cell key={columnIndex} className={`text-${column.align || 'left'}`}>{row[column.field]}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                    {data.length === 0 && (
                        <Table.Row >
                            <Table.Cell colSpan={columns.length}>
                                <div className='h-96'>   <Nodata /></div>
                             
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    );
}

export default CustomTable;
