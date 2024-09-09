const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

// const bsCollapse = new bootstrap.Collapse('.myCollapse', {
//     toggle: false
//   })

//   const myCollapsible = document.getElementById('myCollapsible')
// myCollapsible.addEventListener('hidden.bs.collapse', event => {
//   // do something...
// })

const myCollapseEl = document.querySelector('.Collapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
  // Action to execute once the collapsible area is expanded
})