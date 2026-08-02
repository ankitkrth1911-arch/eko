const path = require('path');
const Fastify = require('fastify');

const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 4000;

async function build() {
  const app = Fastify({ logger: true });

  // API routes
  app.get('/api/health', async () => ({ status: 'ok' }));

  app.post('/api/contact', async (req, reply) => {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return reply.code(400).send({ error: 'name, email, and message are required' });
    }
    // Replace with real persistence/email sending as needed.
    app.log.info({ name, email, message }, 'Contact form submission');
    return { received: true };
  });

  if (isProd) {
    await app.register(require('@fastify/static'), {
      root: path.resolve(__dirname, '../dist'),
    });
    app.setNotFoundHandler((req, reply) => {
      reply.sendFile('index.html');
    });
  } else {
    await app.register(require('@fastify/middie'));

    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('../webpack.config.js')({}, { mode: 'development' });

    config.entry = ['webpack-hot-middleware/client', config.entry];
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath || '/' }));
    app.use(webpackHotMiddleware(compiler));
  }

  return app;
}

build().then((app) => {
  app.listen({ port: PORT, host: '0.0.0.0' }, () => {
    console.log(`Server running on http://localhost:${PORT} (${isProd ? 'production' : 'development'})`);
  });
});
