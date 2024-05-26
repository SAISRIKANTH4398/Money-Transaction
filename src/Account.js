import { useSelector } from "react-redux"

function Account() {

    let data = useSelector((state) => {
        return state
    })

    return (<div className="container">
        <h2 className="text-primary">Account Details</h2>
        <table className="table table-bordered w-50">
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>User Name</th>
                    <th>Mobile No.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.account.balance}</td>
                    <td>{data.account.fullName}</td>
                    <td>{data.account.mobile}</td>
                </tr>
            </tbody>
        </table>
        <h2 className="text-primary">Transaction Details</h2>
        <table className="table table-bordered w-50">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Transaction Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.transaction.map((tr, index) => (
                        <tr key={tr.id}>
                            <td>{tr.id}</td>
                            <td>{tr.amount}</td>
                            <td>{tr.date.toString()}</td>
                            <td>{tr.type}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>)
}

export default Account