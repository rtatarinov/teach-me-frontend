# Teach me

## Deploying local sandbox:

* Configure docker environment ```copy .env.dist into .env and configure it```
* ```docker-compose up -d```

### Checking code style

Fix code style by running ESLint:
```bash
docker-compose exec node yarn eslint
```

Prettify code by running prettier:
```bash
docker-compose exec node yarn prettify
```