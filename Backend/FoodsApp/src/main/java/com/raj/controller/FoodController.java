package com.raj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.raj.model.Food;
import com.raj.service.FoodService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/food")
@CrossOrigin(origins = "http://localhost:3000/")
public class FoodController {
	@Autowired
	private FoodService fservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Food f){
		String msg = "Data Inserted";
		fservice.addData(f);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Food>> getData(){
		List<Food> flist = fservice.getData();
		return new ResponseEntity<List<Food>>(flist,HttpStatus.OK);
	}
	@GetMapping("/fetch/{fid}")
	public ResponseEntity<Food> getDetails(@PathVariable String fid)
	{
		 Food f=fservice.getdetails(fid);
		 return new ResponseEntity<Food>(f,HttpStatus.OK);
	}
	@DeleteMapping("/del/{fid}")
	public ResponseEntity<String> getDel(@PathVariable String fid){
		String msg="DATA DELETED";
		fservice.getDel(fid);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	@PutMapping("/update/{fid}")
	public ResponseEntity<String> updata(@PathVariable String fid, @RequestBody Food f){
		Food fs = fservice.updata(fid,f);
		String msg="";
		if(fs!=null)
		{
			msg="DATA UPDATED";
			return new ResponseEntity<String>(msg,HttpStatus.OK);
		}
		else
		{
			msg="UPDATION FAILED";
			return new ResponseEntity<String>(msg,HttpStatus.OK);
		}
	}
}
