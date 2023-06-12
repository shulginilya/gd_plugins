const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.put('/plugins/changeEnability', (req, res) => {
    const db = router.db;
    const plugins = db.get('plugins').value();
    const isEnabled = plugins.every(p => p.enabled);
    const enabledNewValue = !isEnabled;
    const newPlugins = plugins.map(p => {
        const newPluginObject = {
            enabled: enabledNewValue
        };
        return { ...p, ...newPluginObject };
    });
    const updateRes = db.get('plugins').assign(newPlugins).write();
    res.jsonp(updateRes);
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});
