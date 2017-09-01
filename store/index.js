export const state = () => ({
  sidebar: false,
  textos: [
    {
      titulo: 'Integro Semper',
      slug: 'integer-semper',
      autor: 'Gangsta 3433434 343434343 43434334',
      fecha: 'January 1, 1970',
      texto: '<p>Integer semper velit fo shizzle purus...</p>'
    },
    {
      titulo: 'Adipiscing Gansta',
      slug: 'adipiscing-gansta',
      autor: 'Gangsta',
      fecha: 'January 1, 1970',
      texto: '<p>Lorizzle ipsum shizznit sit owned, consectetuer adipiscing gangsta...</p>'
    },
    {
      titulo: 'Black Pellentesque',
      slug: 'black-pellentesque',
      autor: 'Gangsta',
      fecha: 'January 1, 1970',
      texto: '<p>Black pellentesque nibh et turpizzle. Stuff get down get down tortizzle...</p>'
    },
    {
      titulo: 'Sed Errizle',
      slug: 'sed-errizle',
      autor: 'Gangsta',
      fecha: 'January 1, 1970',
      texto: '<p><strong>Sed erizzle</strong>. Boofron izzle dolor fo shizzle turpis tempizzle crazy...</p>'
    },
    {
      titulo: 'Crunk Vizzle',
      slug: 'crunk-vizzle',
      autor: 'Gangsta',
      fecha: 'January 1, 1970',
      texto: '<p>Crunk vizzle, check out this. Pellentesque funky fresh tortor...</p>'
    },
    {
      titulo: 'Nullam Things',
      slug: 'nullam-things',
      autor: 'Gangsta',
      fecha: 'January 1, 1970',
      texto: '<p>Nullam things velit, pimpin\' volutpizzle, suscipizzle hizzle...</p>'
    },
    {
      titulo: 'Lorizzle Ipsum',
      slug: 'lorizzle-ipsum',
      autor: 'Gangsta',
      fecha: 'January 1, 1970',
      texto: '<p>Lorizzle ipsum shizznit sit owned, consectetuer adipiscing gangsta...</p>'
    },
    {
      titulo: 'That is the shizzle',
      slug: 'that-s-the-shizzle',
      autor: 'Gangsta',
      fecha: 'January 1, 1970',
      texto: '<p>That\'s the shizzle check it out.</p>'
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
