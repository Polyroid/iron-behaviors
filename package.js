Package.describe({
    name: 'polyroid:iron-behaviors',
    version: '1.0.9',
    summary: 'Provides a set of behaviors for the iron elements',
    git: 'https://github.com/Polyroid/iron-behaviors.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0',
        'polyroid:iron-a11y-keys-behavior@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-button-state.html',
        'iron-control-state.html'
    ], 'client');
});
