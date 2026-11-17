package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class Student
{
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;
	private String name;
	private String course;
		
	public Student() {
    }
	
	public Student(int sid,String name,String course)
	{
		this.sid = sid;
		this.name = name;
		this.course = course;
	}
	
	public int getId()
	{
		return sid;
	}
	public String getName()
	{
		return name;
	}
	public String getCourse()
	{
		return course;
	}
	

    public void setName(String name) {
        this.name = name;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}


	