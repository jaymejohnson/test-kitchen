jayme's D8 test-kitchen
========================

Setting Up for Local Development
--------------------------------
Before you begin, you must have Docker and Docker Compose installed on your local machine.  For installation instructions, see the [Docker documentation](/docs/tools/docker.md).

1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository.
2. If you haven't created and [set your Pantheon machine token](/docs/recipes/setting-machine-token.md), do that now.
3. [Start](/docs/tools/docker.md#Running) the Docker environment and shell in:
    ```bash
    docker-compose up -d drupal
    docker-compose exec drupal bash
    ```
4. Install [Composer](/docs/tools/composer.md#Running) dependencies:
    ```bash
    composer install
    ```
5. Install [NPM](/docs/tools/npm.md#Running) dependencies:
    ```bash
    yarn install
    ```
6. Run `composer site:import` to pull down and import a copy of the site's database. 
(This step won't work until I can set up an artifact build that pushes to Pantheon. Since multi-dev is now only for agencies
this is not currently possible for me to do.)

See the documentation(/docs) for more information on how to use the tools and how to use this project. For more information on the Docker stack, see the [Docker documenation](/docs/tools/docker.md).
