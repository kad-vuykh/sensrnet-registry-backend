# SensrNet Backend Application

<p>
    <a href="https://github.com/kadaster-labs/sensrnet-registry-backend/actions?query=workflow%3A%22Node.js+CI%22" alt="Build status">
        <img src="https://github.com/kadaster-labs/sensrnet-registry-backend/workflows/Node.js%20CI/badge.svg" />
    </a>
    <a href="https://sonarcloud.io/dashboard?id=kadaster-labs_sensrnet-registry-backend" alt="Quality Gate">
        <img src="https://sonarcloud.io/api/project_badges/measure?project=kadaster-labs_sensrnet-registry-backend&metric=alert_status" />
    </a>
</p>

This is the backend for the SensrNet application. It features a NodeJS backend, and makes use of Eventstore and MongoDB.

## Getting Started

The stack can be ran locally, or using docker with docker-compose.

### Prerequisities

In order to run this application standalone, you need npm, Eventstore and MongoDB installed.

In order to run this application containerized, you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

### Architecture

Module and runtime structures:

![Dependency Graph](docs/images/dependency-graph.png)

Modules:

- command > all command side code
- events > event definitions
- query >
  - query processor to update the database projection
  - query controllers and query features

The runtime is defined by four Docker containers / `Dockerfile`s. In case of scaling up or out, the `query processor` should be put in its own container (probably stays as a single container).

### Usage

#### Standalone

Eventstore:
* Windows: EventStore.ClusterNode.exe --db ./db --log ./logs

Backend App:
* npm install
* npm start

#### Containerized

Start entire stack:

```bash
$ ./backend up
```

* [Registry Backend OpenAPI](http://localhost:3000/api/)
* [EventStore UI](http://localhost:2113/web/index.html#/streams)

Stop entire stack:

```bash
$ ./backend down
```


## Find Us

* [GitHub](https://github.com/kadaster-labs/sensrnet-home)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Maintainers <a name="maintainers"></a>

Should you have any questions or concerns, please reach out to one of the project's [Maintainers](./MAINTAINERS.md).

## License

This work is licensed under a [EUPL v1.2 license](./LICENSE.md).
