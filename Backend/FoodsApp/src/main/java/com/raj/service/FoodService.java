package com.raj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.raj.model.Food;
import com.raj.repository.FoodRepository;

@Service
public class FoodService {
	@Autowired
	private FoodRepository frepo;
	public void addData(Food f) {
		frepo.save(f);
	}
	public List<Food> getData(){
		return frepo.findAll();
	}
	public Food getdetails(String fid) {
		return frepo.findById(fid).orElse(null);
	}
	public void getDel(String fid) {
		Food j = frepo.findById(fid).orElse(null);
		if(j != null) {
			frepo.delete(j);
		}
	}
	public Food updata(String pid ,Food ps) {
		Food j = frepo.findById(pid).orElse(null);
		if(j != null) {
			j.setFname(ps.getFname());
			j.setPrice(ps.getPrice());
			frepo.save(j);
		}
		return j;
	}
}
