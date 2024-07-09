const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('Token Controller', () => {
  it('should fetch tokens', (done) => {
    chai.request(app)
      .get('/api/recommendedTokens')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
