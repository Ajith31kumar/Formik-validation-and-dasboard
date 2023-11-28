import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorCollection = ({ author, setAuthor, authedit, setAuthEdit }) => {
  const navigate = useNavigate();

  const handleEdit = (user) => {
    setAuthEdit({ ...user, isEditing: true });
    console.log(user);
    navigate("/Author");
  };
  const handleDelete = (id) => {
    const updatedData = author;
    delete updatedData[id];
    let filteredData = updatedData.filter((data) => data != null);
    setAuthor(filteredData);
  };

  return (
    <div>
      <table class="table mt-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Author-Name</th>
            <th scope="col">Publication Date</th>
            <th scope="col">BioGraphy</th>
            <th className="col-mt3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(author)}
          {author?.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.date}</td>
                <td>{user?.bio}</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorCollection;
