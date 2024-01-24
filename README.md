# Micro-Blogging Services - README.md

This is the README file for the Micro-Blogging Services setup using Docker. The setup includes a backend service, webserver, and a database. Below are the details on how to get the environment up and running.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Basic understanding of Docker and containerization.

## Services

### Backend

The backend service is built using the configuration specified in the `backend` directory. It includes a PHP environment and is connected to the `micro-blogging` network.

### Webserver

The webserver uses the `nginx:latest` image and is mapped to ports 80 and 443. It depends on the backend service and shares a network with it.

### Database

The database uses the `mysql:8.0` image with a dedicated volume and network configuration.

## Setup Instructions

1. **Clone the Repository**
   - Ensure you have this code repository cloned to your local machine.

2. **LinuxEntryPoint Script (For Linux Users)**
   - Run the `LinuxEntryPoint.sh` script to set proper permissions for mounted volumes:
     ```bash
     ./LinuxEntryPoint.sh
     ```

3. **Building the Containers**
   - Build the Docker containers using:
     ```bash
     docker compose build
     ```

4. **Running the Containers**
   - Start the services in detached mode:
     ```bash
     docker compose up -d
     ```

5. **Composer Setup**
   - After the containers are up, you need to set up the backend using Composer. Run the following commands:
     ```bash
     docker compose exec backend composer install
     docker compose exec backend cp .env.example .env
     docker compose exec backend php artisan key:generate
     ```

## Volumes

- `micro-blogging-db`: Used for persistent storage of database data.

## Networks

- `micro-blogging`: A shared network among the services for internal communication.

## Notes

- The `docker compose` commands need to be run from the directory where your `docker-compose.yml` file is located.
- Adjust the `.env` configuration as needed for your environment.

For further information or issues, refer to the Docker and Docker Compose documentation or raise an issue in this repository.