module.exports = {
    tags: ['demo'],
    'Demo test': function (client) {
        client
            .url('http://localhost:8080')
            .pause(1000);

        // Check that elements exist.
        client.expect.element('body').to.be.present.before(1000);
        client.expect.element('#text').to.be.present.before(1000);
        client.expect.element('#calc').to.be.present.before(1000);
        client.expect.element('#length').to.be.present.before(1000);

        // Check that elements have correct values and types.
        client.expect.element('#text').to.have.value.equal('');
        client.expect.element('#text').to.be.an('input');
        client.expect.element('#calc').to.be.an('button');
        client.expect.element('#length').text.to.equal('0');
        client.expect.element('#length').to.be.an('span');

        // Set text and click button.
        client.setValue('#text', 'foobar').pause(500);
        client.click('#calc').pause(500);

        // Check that length has been calculated correctly
        client.expect.element('#text').to.have.value.equal('foobar');
        client.expect.element('#length').text.to.equal(6);

        // Test that reset works.
        client.click('#reset').pause(500);
        client.expect.element('#text').to.have.value.equal('');
        client.expect.element('#length').text.to.equal(0);

        client.end();
    }
};
