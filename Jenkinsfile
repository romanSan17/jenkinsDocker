pipeline {
    agent any

    environment {
        IMAGE_NAME = 'travel-app'
        CONTAINER_NAME = 'travel-app-container'
        PORT = '3000'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Container') {
            steps {
                echo "Stopping previous container if exists..."
                sh "docker rm -f ${CONTAINER_NAME} || true"
                echo "Running new container..."
                sh "docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}"
            }
        }

        stage('Test Endpoint') {
            steps {
                echo "Waiting for container to start..."
                sleep 5
                echo "Testing /travel endpoint..."
                sh "curl --fail http://localhost:${PORT}/travel"
            }
        }
    }

    post {
        always {
            echo "Cleaning up container..."
            sh "docker rm -f ${CONTAINER_NAME} || true"
        }
    }
}
