function StudentRow() {
  return (
    <>
      <tr className="table-success">
        <td>001</td>
        <td>Alice Johnson</td>
        <td className="text-center">
          <button className="btn btn-success btn-sm">
            Present
          </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Add remarks"
          />
        </td>
      </tr>

      <tr className="table-danger">
        <td>002</td>
        <td>Bob Smith</td>
        <td className="text-center">
          <button className="btn btn-danger btn-sm">
            Absent
          </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Sick leave"
          />
        </td>
      </tr>
    </>
  );
}

export default StudentRow;
