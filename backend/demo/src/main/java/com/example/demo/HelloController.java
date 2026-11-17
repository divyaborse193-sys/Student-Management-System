package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PathVariable;
@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello! My first Spring Boot REST API is working.";
    }
    
    @GetMapping("/student/{name}")
    public String student(@PathVariable String name) {
        return "Welcome to Java Full Stack Development!" + name;
    }
}
