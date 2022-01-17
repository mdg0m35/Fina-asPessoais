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

import com.finacasPessoaisapi.model.DespesasModel;
import com.finacasPessoaisapi.model.ReceitasModel;
import com.finacasPessoaisapi.repository.DespesasRepository;
import com.finacasPessoaisapi.repository.ReceitaRepository;
@RestController
@RequestMapping("/api/despesas")
public class DespesasController {
	@Autowired
	private DespesasRepository despesasRepository;
	
	@GetMapping
	public List<DespesasModel> listar(){
		return despesasRepository.findAll();	}
	@PostMapping
	public void salvar(@RequestBody DespesasModel despesasM) {
		despesasRepository.save(despesasM);
	}
	
	@PutMapping
	public void alterar( @RequestBody DespesasModel despesasM) {
		if(despesasM.getId()>0)
		despesasRepository.save(despesasM);
	}
	@DeleteMapping
	public void excluir(@RequestBody DespesasModel receitasM) {
		despesasRepository.delete(receitasM);
		
	}


}
