const data = [
  {
    name: 'Hakuna',
  },
  {
    name: 'Matata',
  },
  {
    name: 'Huba',
  },
  {
    name: 'Muba',
  },
  {
    name: 'Zabu',
  },
  {
    name: 'Mabu',
  },
  {
    name: 'Bubu',
  },
];


const inpt_search = document.querySelector('#search')
const result_ul = document.querySelector('.search-results')



inpt_search.addEventListener('input', () => {
  const inputText = inpt_search.value // inputda yazdigim

  const result = data.filter((item) => {
    return item.name.toLocaleUpperCase().includes(inputText.toLocaleUpperCase())
  })

  result_ul.innerHTML = '';

  if (inputText == '') {
    result_ul.innerHTML = '<li> no result </li>'
  }
  else {


    result.map((item) => {
      const li_tag = document.createElement('li')
      li_tag.innerText = item.name
      result_ul.appendChild(li_tag)
    })
  }
})