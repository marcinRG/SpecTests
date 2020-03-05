import React from 'react';

export function ItemsPage() {
    return (
        <React.Fragment>
            <section className="table-page">
                <h2 className="form-title">Items <span className="blue">list</span></h2>
                <table className="item-list-table">
                    <thead>
                    <tr>
                        <td className="header-cell">Name</td>
                        <td className="header-cell">Name</td>
                        <td className="header-cell">Name</td>
                        <td className="header-cell">Name</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Name</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    )
}
