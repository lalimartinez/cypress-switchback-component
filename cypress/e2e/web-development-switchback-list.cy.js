describe('Web Development Page Switchback List with Image', () => {
  beforeEach(() => {
      cy.visit('https://www.webstacks.com/capabilities/web-development')
  })

  it('checks switchback items', () => {
      //switchback exists
      cy.get('#overview').should('exist')

      //switchback has eyebrow, heading, & subheading
      cy.get('span.dfYHjs').should('exist').contains('Overview')
      cy.get('h2.bkAYhx').should('exist').contains('Finally, a web agency for marketing teams.')
      cy.get('#overview').find('p.iBCfmO').should('exist').and('not.be.empty')

      //list component exists
      cy.get('.gkcTKn').should('exist')

      //each list items contains a check icon and text
      cy.get('.eZRNgX').as('list-item')
      cy.get('@list-item').each(($item) => {
          cy.wrap($item).find('img').should('exist')
          cy.wrap($item).find('span.cGRJpC').should('exist').and('not.be.empty')
      })

      //image exists
      cy.get('#overview').find('.gatsby-image-wrapper').as('image')
      cy.get('@image').each(($item) => {
          cy.wrap($item).find('img').should('exist')
      })
  })

  context('Image data', () => {
      it('image has correct image data', () => {
          cy.get('#overview').find('.gatsby-image-wrapper').each(($item) => {
              cy.wrap($item).find('img').should('have.attr', 'alt').and('not.be.empty')
              cy.wrap($item).find('img').should('have.attr', 'src').and('not.be.empty')
              cy.wrap($item).find('img').should('have.attr', 'title').and('not.be.empty')
          })
      })

      it('checkmark icons have correct image data', () => {
          cy.get('.eZRNgX').each(($item) => {
              cy.wrap($item).find('img').should('have.attr', 'alt').and('not.be.empty')
              cy.wrap($item).find('img').should('have.attr', 'src').and('not.be.empty')
              cy.wrap($item).find('img').should('have.attr', 'title').and('not.be.empty')
          })
      })
  })

  context('Switchback items have correct colors and font families', () => {
      it('background color is correct', () => {
          cy.get('#overview').should('have.css', 'background-color', 'rgb(2, 6, 13)')
      })

      it('eyebrow has correct color and font-family', () => {
          cy.get('.dfYHjs').should('have.css', 'color', 'rgb(9, 105, 221)')
          cy.get('.dfYHjs').should('have.css', 'font-family', '"Soehne mono", sans-serif')
      })

      it('heading has correct color and font-family', () => {
          cy.get('.bkAYhx').should('have.css', 'color', 'rgb(255, 255, 255)')
          cy.get('.bkAYhx').should('have.css', 'font-family', 'Soehne, sans-serif')
      })

      it('subheading has correct color and font-family', () => {
          cy.get('#overview').find('.iBCfmO').should('have.css', 'color', 'rgb(242, 249, 255)')
          cy.get('#overview').find('.iBCfmO').should('have.css', 'font-family', 'Soehne, sans-serif')
      })

      it('list items have correct color and font-family', () => {
          cy.get('.eZRNgX').each(($item) => {
              cy.wrap($item).find('.cGRJpC').should('have.css', 'color', 'rgb(255, 255, 255)')
              cy.wrap($item).find('.cGRJpC').should('have.css', 'font-family', 'Soehne, sans-serif')
          })
      })

      it('checkmark icon background color is correct', () => {
          cy.get('.eZRNgX').each(($item) => {
              cy.wrap($item).find('.dgMgsQ').should('have.css', 'background-color', 'rgba(255, 255, 255, 0.1)')
          })
      })
  })

  context('Checks font size on desktop', () => {
      beforeEach(() => {
          cy.viewport(1440, 1100)
      })

      it('eyebrow has correct font size on a desktop', () => {
          cy.get('.dfYHjs').should('have.css', 'font-size', '14.448px')
      })

      it('heading has correct font size on a desktop', () => {
          cy.get('.bkAYhx').should('have.css', 'font-size', '43.9488px')
      })

      it('subheading has correct font size on a desktop', () => {
          cy.get('#overview').find('.iBCfmO').should('have.css', 'font-size', '22.496px')
      })

      it('list items have correct font size on a desktop', () => {
          cy.get('.eZRNgX').each(($item) => {
              cy.wrap($item).find('.cGRJpC').should('have.css', 'font-size', '18px')
          })
      })
  })

  context('Checks font size on tablet', () => {
      beforeEach(() => {
          cy.viewport(991, 800)
      })

      it('eyebrow has correct font size on a tablet', () => {
          cy.get('.dfYHjs').should('have.css', 'font-size', '14.448px')
      })

      it('heading has correct font size on a tablet', () => {
          cy.get('.bkAYhx').should('have.css', 'font-size', '43.9488px')
      })

      it('subheading has correct font size on a tablet', () => {
          cy.get('#overview').find('.iBCfmO').should('have.css', 'font-size', '22.496px')
      })

      it('list items have correct font size on a tablet', () => {
          cy.get('.eZRNgX').each(($item) => {
              cy.wrap($item).find('.cGRJpC').should('have.css', 'font-size', '18px')
          })
      })
  })

  context('Checks font size on mobile', () => {
      beforeEach(() => {
          cy.viewport(375, 700)
      })

      it('eyebrow has correct font size on a mobile', () => {
          cy.get('.dfYHjs').should('have.css', 'font-size', '14.448px')
      })

      it('heading has correct font size on a mobile', () => {
          cy.get('.bkAYhx').should('have.css', 'font-size', '43.9488px')
      })

      it('subheading has correct font size on a mobile', () => {
          cy.get('#overview').find('.iBCfmO').should('have.css', 'font-size', '18px')
      })

      it('list items have correct font size on a mobile', () => {
          cy.get('.eZRNgX').each(($item) => {
              cy.wrap($item).find('.cGRJpC').should('have.css', 'font-size', '18px')
          })
      })
  })

  context('Checks padding on different viewports', () => {
      it('top and bottom padding on a desktop is correct', () => {
          cy.viewport(1440, 1100)
          cy.get('#overview').should('have.css', 'padding-top', '96px')
          cy.get('#overview').should('have.css', 'padding-bottom', '96px')
      })

      it('top and bottom padding on a tablet is correct', () => {
          cy.viewport(991, 800)
          cy.get('#overview').should('have.css', 'padding-top', '96px')
          cy.get('#overview').should('have.css', 'padding-bottom', '96px')
      })

      it('top and bottom padding on a mobile is correct', () => {
          cy.viewport(375, 700)
          cy.get('#overview').should('have.css', 'padding-top', '40px')
          cy.get('#overview').should('have.css', 'padding-bottom', '40px')
      })
  })
})