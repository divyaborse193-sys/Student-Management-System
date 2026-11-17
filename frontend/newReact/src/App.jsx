
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [editId, setEditId] = useState(null)

  const fetchStudents = () => {
    fetch('http://localhost:8082/students')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch students')
        return response.json()
      })
      .then(data => {
        setStudents(data)
        setLoading(false)
        setError('')
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const saveStudent = (e) => {
    e.preventDefault()

    const student = { name, course }

    const url = editId
      ? `http://localhost:8082/students/${editId}`
      : 'http://localhost:8082/students'

    const method = editId ? 'PUT' : 'POST'

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to save student')
        return response.json()
      })
      .then(() => {
        alert(editId ? 'Student updated successfully!' : 'Student added successfully!')
        setName('')
        setCourse('')
        setEditId(null)
        fetchStudents()
      })
      .catch(error => alert(error.message))
  }

  const editStudent = (student) => {
    setName(student.name)
    setCourse(student.course)
    setEditId(student.id)
  }

  const deleteStudent = (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) {
      return
    }

    fetch(`http://localhost:8082/students/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to delete student')
        alert('Student deleted successfully!')
        fetchStudents()
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="container">

      <header className="header">
        <div>
          <h1>Student Management System</h1>
          <p>Manage your student records in one place</p>
        </div>
        <div className="header-icon">🎓</div>
      </header>

      <div className="stats-card">
        <div className="stats-icon">👨‍🎓</div>
        <div>
          <p>Total Students</p>
          <h2>{students.length}</h2>
        </div>
      </div>

      <div className="card">
        <h2>{editId ? '✏️ Edit Student' : '➕ Add New Student'}</h2>

        <form onSubmit={saveStudent}>
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter student name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              placeholder="Enter course name"
              value={course}
              onChange={e => setCourse(e.target.value)}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="primary-btn">
              {editId ? 'Update Student' : 'Add Student'}
            </button>

            {editId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setName('')
                  setCourse('')
                  setEditId(null)
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="card">
        <h2>📋 Student Records</h2>

        {loading && <p className="message">Loading students...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="empty">
                      No student records found.
                    </td>
                  </tr>
                ) : (
                  students.map(student => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.course}</td>
                      <td className="actions">
                        <button
                          className="edit-btn"
                          onClick={() => editStudent(student)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => deleteStudent(student.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <footer>
        _________________________________________________
      </footer>

    </div>
  )
}

export default App
