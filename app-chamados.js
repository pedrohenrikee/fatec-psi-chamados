'use strict'

const campoPesquisa = document.getElementById('pesquisa')
const filtroPrioridade = document.getElementById('filtro-prioridade')
const filtroStatus = document.getElementById('filtro-status')
const botaoLimpar = document.getElementById('limpar')

const coresPrioridade = {
  'Crítica': 'crimson',
  'Alta': 'orange',
  'Média': 'gold',
  'Baixa': 'lightgreen'
}

function criarCard(chamado) {
  const card = document.createElement('div')
  card.className = 'card'

  const titulo = document.createElement('h3')
  titulo.textContent = chamado.titulo

  const prioridade = document.createElement('span')
  prioridade.className = 'prioridade'
  prioridade.textContent = chamado.prioridade
  prioridade.style.backgroundColor = coresPrioridade[chamado.prioridade]

  const status = document.createElement('span')
  status.textContent = `Status: ${chamado.status}`

  const usuario = document.createElement('span')
  usuario.textContent = `Usuário: ${chamado.usuario}`

  card.append(titulo, prioridade, status, usuario)

  return card
}

function carregarChamados(listaChamados) {
  const cards = listaChamados.map(criarCard)
  const container = document.getElementById('chamado-container')
  container.replaceChildren(...cards)
}

function filtrarChamados() {
  const texto = campoPesquisa.value.trim().toLowerCase()
  const prioridade = filtroPrioridade.value
  const status = filtroStatus.value

  const chamadosFiltrados = chamados
    .filter(chamado => chamado.usuario.toLowerCase().includes(texto))
    .filter(chamado => prioridade === '' || chamado.prioridade === prioridade)
    .filter(chamado => status === '' || chamado.status === status)

  carregarChamados(chamadosFiltrados)
}

function limparFiltros() {
  document.querySelector('form').reset()
  carregarChamados(chamados)
}

campoPesquisa.oninput = filtrarChamados
filtroPrioridade.onchange = filtrarChamados
filtroStatus.onchange = filtrarChamados
botaoLimpar.onclick = limparFiltros

carregarChamados(chamados)
