import { expect } from 'chai';
import { JSDOM } from 'jsdom';

describe('dummy test', () => {
  it('determenistic pass', () => {
    //assert
    expect(true).to.equal(true);
  });
});


describe('mocha jsdom tests on index page', () => {
  let h1, dom;
  before((done) => {
    //setup
    JSDOM.fromFile('./src/index.html')
      .then((_dom) => {
        dom = _dom;
        //act
        h1 = dom.window.document.querySelector('h1');
      }).then(done,done);
  });
  describe('should be hello in text', () => {
    it('should be equal to hello', () => {
      //assert
      expect(h1.innerHTML).to.equal('hello');
    })
  });
  after(() => {
    //tear down
    dom.window.close();
  })
});


