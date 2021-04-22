package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringRestWithAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringRestWithAngularApplication.class, args);
		System.out.println("Server is running");
	}

}
