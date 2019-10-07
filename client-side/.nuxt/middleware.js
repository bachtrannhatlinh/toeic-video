const middleware = {}

middleware['authentication'] = require('..\\middleware\\authentication.js');
middleware['authentication'] = middleware['authentication'].default || middleware['authentication']

middleware['set-store'] = require('..\\middleware\\set-store.js');
middleware['set-store'] = middleware['set-store'].default || middleware['set-store']

middleware['template'] = require('..\\middleware\\template.js');
middleware['template'] = middleware['template'].default || middleware['template']

export default middleware
