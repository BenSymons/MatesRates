const idLookup = require('./utils');

describe('idLookup tests', () => {
  it('Returns the username for a specific user_id', () => {
    const data = [
      {
        id: '5fad52e16b765b6024a6da5d',
        name: 'Ben',
        username: 'BenS',
        avatarURL:
          'https://ca.slack-edge.com/T1VHRHZE2-U010US5CG8G-638b7f6675d1-512'
      },
      {
        id: '5fa91e3486083c1f16e6ffa5',
        name: 'MatthewC',
        username: 'MattC',
        avatarURL:
          'https://ca.slack-edge.com/T1VHRHZE2-U01864ZHC8K-g345392f29c0-512'
      },
      {
        id: '5fa91e3486083c1f16e6ffa6',
        name: 'Riccardo',
        username: 'Ricc',
        avatarURL:
          'https://ca.slack-edge.com/T1VHRHZE2-U018C958E3B-25947323fde4-512'
      },
      {
        id: '5fa91e3486083c1f16e6ffa7',
        name: 'Hayden',
        username: 'HD',
        avatarURL:
          'https://ca.slack-edge.com/T1VHRHZE2-U017ZL36WQ2-09456c24df78-512'
      },
      {
        id: '5fa91e3486083c1f16e6ffa8',
        name: 'Sam',
        username: 'PopThieves',
        avatarURL:
          'https://ca.slack-edge.com/T1VHRHZE2-U010U3Z6HGU-5879102f0e03-512'
      }
    ];
    expect(idLookup('HD', data)).toBe('5fa91e3486083c1f16e6ffa7');
    expect(idLookup('Ricc', data)).toBe('5fa91e3486083c1f16e6ffa6');
  });
});
