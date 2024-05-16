everestkikinicolas
=================

The Programming Challenge Test from Everest Engineering for Nicolas Y.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/everestkikinicolas.svg)](https://npmjs.org/package/everestkikinicolas)
[![Downloads/week](https://img.shields.io/npm/dw/everestkikinicolas.svg)](https://npmjs.org/package/everestkikinicolas)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g everestkikinicolas
$ everestkikinicolas COMMAND
running command...
$ everestkikinicolas (--version)
everestkikinicolas/0.0.0 linux-x64 node-v20.12.2
$ everestkikinicolas --help [COMMAND]
USAGE
  $ everestkikinicolas COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`everestkikinicolas hello PERSON`](#everestkikinicolas-hello-person)
* [`everestkikinicolas hello world`](#everestkikinicolas-hello-world)
* [`everestkikinicolas help [COMMAND]`](#everestkikinicolas-help-command)
* [`everestkikinicolas plugins`](#everestkikinicolas-plugins)
* [`everestkikinicolas plugins add PLUGIN`](#everestkikinicolas-plugins-add-plugin)
* [`everestkikinicolas plugins:inspect PLUGIN...`](#everestkikinicolas-pluginsinspect-plugin)
* [`everestkikinicolas plugins install PLUGIN`](#everestkikinicolas-plugins-install-plugin)
* [`everestkikinicolas plugins link PATH`](#everestkikinicolas-plugins-link-path)
* [`everestkikinicolas plugins remove [PLUGIN]`](#everestkikinicolas-plugins-remove-plugin)
* [`everestkikinicolas plugins reset`](#everestkikinicolas-plugins-reset)
* [`everestkikinicolas plugins uninstall [PLUGIN]`](#everestkikinicolas-plugins-uninstall-plugin)
* [`everestkikinicolas plugins unlink [PLUGIN]`](#everestkikinicolas-plugins-unlink-plugin)
* [`everestkikinicolas plugins update`](#everestkikinicolas-plugins-update)

## `everestkikinicolas hello PERSON`

Say hello

```
USAGE
  $ everestkikinicolas hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ everestkikinicolas hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/SalocinDotTEN/Everest-Engineering-Test/blob/v0.0.0/src/commands/hello/index.ts)_

## `everestkikinicolas hello world`

Say hello world

```
USAGE
  $ everestkikinicolas hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ everestkikinicolas hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/SalocinDotTEN/Everest-Engineering-Test/blob/v0.0.0/src/commands/hello/world.ts)_

## `everestkikinicolas help [COMMAND]`

Display help for everestkikinicolas.

```
USAGE
  $ everestkikinicolas help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for everestkikinicolas.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## `everestkikinicolas plugins`

List installed plugins.

```
USAGE
  $ everestkikinicolas plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ everestkikinicolas plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/index.ts)_

## `everestkikinicolas plugins add PLUGIN`

Installs a plugin into everestkikinicolas.

```
USAGE
  $ everestkikinicolas plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into everestkikinicolas.

  Uses bundled npm executable to install plugins into /home/salocindotten/.local/share/everestkikinicolas

  Installation of a user-installed plugin will override a core plugin.

  Use the EVERESTKIKINICOLAS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EVERESTKIKINICOLAS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ everestkikinicolas plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ everestkikinicolas plugins add myplugin

  Install a plugin from a github url.

    $ everestkikinicolas plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ everestkikinicolas plugins add someuser/someplugin
```

## `everestkikinicolas plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ everestkikinicolas plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ everestkikinicolas plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/inspect.ts)_

## `everestkikinicolas plugins install PLUGIN`

Installs a plugin into everestkikinicolas.

```
USAGE
  $ everestkikinicolas plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into everestkikinicolas.

  Uses bundled npm executable to install plugins into /home/salocindotten/.local/share/everestkikinicolas

  Installation of a user-installed plugin will override a core plugin.

  Use the EVERESTKIKINICOLAS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EVERESTKIKINICOLAS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ everestkikinicolas plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ everestkikinicolas plugins install myplugin

  Install a plugin from a github url.

    $ everestkikinicolas plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ everestkikinicolas plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/install.ts)_

## `everestkikinicolas plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ everestkikinicolas plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ everestkikinicolas plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/link.ts)_

## `everestkikinicolas plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ everestkikinicolas plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ everestkikinicolas plugins unlink
  $ everestkikinicolas plugins remove

EXAMPLES
  $ everestkikinicolas plugins remove myplugin
```

## `everestkikinicolas plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ everestkikinicolas plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/reset.ts)_

## `everestkikinicolas plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ everestkikinicolas plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ everestkikinicolas plugins unlink
  $ everestkikinicolas plugins remove

EXAMPLES
  $ everestkikinicolas plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/uninstall.ts)_

## `everestkikinicolas plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ everestkikinicolas plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ everestkikinicolas plugins unlink
  $ everestkikinicolas plugins remove

EXAMPLES
  $ everestkikinicolas plugins unlink myplugin
```

## `everestkikinicolas plugins update`

Update installed plugins.

```
USAGE
  $ everestkikinicolas plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/update.ts)_
<!-- commandsstop -->
