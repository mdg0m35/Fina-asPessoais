package com.finacasPessoaisapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finacasPessoaisapi.model.DespesasModel;


public interface DespesasRepository  extends JpaRepository<DespesasModel,Long>  {

}
