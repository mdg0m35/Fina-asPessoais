package com.finacasPessoaisapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finacasPessoaisapi.model.ReceitasModel;
import com.finacasPessoaisapi.repository.ReceitaRepository;

@RestController
@RequestMapping("/api/receitas")
public class ReceitasController {
	@Autowired
	private ReceitaRepository receitaRepository;
	
	@GetMapping
	public List<ReceitasModel>listar(){
		return receitaRepository.findAll();
	}
	@PostMapping
	public void salvar(@RequestBody ReceitasModel receitaM) {
		receitaRepository.save(receitaM);
	}
	
	@PutMapping
	public void alterar( @RequestBody ReceitasModel receitaM) {
		if(receitaM.getId()>0)
		receitaRepository.save(receitaM);
	}
	@DeleteMapping
	public void excluir(@RequestBody ReceitasModel receitasM) {
		receitaRepository.delete(receitasM);
		
	}

}
