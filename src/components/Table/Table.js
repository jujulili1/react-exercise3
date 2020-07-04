import React from 'react';

import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

class Table extends React.Component {
    render() {
        let rows = this.props.students.map((student, index) => (<TableBody key={index} student={student} />));
        return (
            <div>
                <table>
                    <TableHead />
                    {rows}
                </table>
            </div>
        );
    }
}

export default Table;
