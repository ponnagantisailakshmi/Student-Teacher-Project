package net.work.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.work.springboot.model.Student;

@Repository
public interface EmployeeRepository extends JpaRepository<Student, Long>{

}
