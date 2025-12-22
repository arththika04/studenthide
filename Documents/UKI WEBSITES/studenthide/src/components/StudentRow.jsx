function StudentRow({ student, onToggle }) {
  return (
    <tr
      className={
        student.status === "Present" ? "table-success" : "table-danger"
      }
    >
      <td>{student.roll}</td>
      <td>{student.name}</td>

      <td className="text-center">
        <button
          className={`btn btn-sm ${
            student.status === "Present" ? "btn-success" : "btn-danger"
          }`}
          onClick={() => onToggle(student.id)}
        >
          {student.status}
        </button>
      </td>

      <td>
        <input
          type="text"
          className="form-control form-control-sm"
          value={student.remarks}
          placeholder="Add remarks"
          readOnly
        />
      </td>
    </tr>
  );
}

export default StudentRow;
