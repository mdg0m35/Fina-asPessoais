package com.finacasPessoaisapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finacasPessoaisapi.model.ReceitasModel;

public interface ReceitaRepository extends JpaRepository<ReceitasModel,Long> {

}
