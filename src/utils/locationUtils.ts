import fetch from 'node-fetch';

export const fetchAddress = async (cep: string) => {
  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  return res.json(); // { cep, uf, localidade, logradouro }
};