
package com.example.demo;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5175")
@RequestMapping("/students")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // Get all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    

	@PostMapping
	public Student addStudent(@RequestBody Student student) {
	    return studentRepository.save(student);
}
	

@PutMapping("/{id}")
public Student updateStudent(
        @PathVariable Integer id,
        @RequestBody Student student) {

    Student existingStudent =
            studentRepository.findById(id).orElseThrow();

    existingStudent.setName(student.getName());
    existingStudent.setCourse(student.getCourse());

    return studentRepository.save(existingStudent);
}


@DeleteMapping("/{id}")
public String deleteStudent(@PathVariable Integer id) {

    studentRepository.deleteById(id);

    return "Student deleted successfully!";
}


}


